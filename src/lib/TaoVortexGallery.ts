import * as THREE from "three";
import gsap from "gsap";
import normalizeWheel from "normalize-wheel";

const instancedVertexShader = `
#define PI 3.14159265359

attribute float aAngle;
attribute float aHeight;
attribute float aRadius;
attribute float aAspectRatio;
attribute float aSpeed;
attribute vec4 aTextureCoords;
attribute vec2 aImageRes;

varying vec4 vTextureCoords;
varying vec2 vUv;
varying float vAspectRatio;

uniform float uMaxZ;
uniform float uZrange;
uniform float uScrollY;
uniform float uSpeedY;
uniform float uDirection;

vec4 getQuaternionFromAxisAngle(vec3 axis, float angle) {
  float halfAngle = angle * 0.5;
  return vec4(axis.xyz * sin(halfAngle), cos(halfAngle));
}

void main() {
  vec3 scaledPosition = position;
  scaledPosition.y /= aAspectRatio;

  float zPos = aHeight + uScrollY;
  float zRange = uZrange;
  float minZ = (uMaxZ - uZrange);

  zPos = mod(zPos - minZ, zRange) + minZ;

  float theta = aAngle + uSpeedY * 0.4 * aSpeed;

  vec3 instancePosition = vec3(cos(theta) * aRadius, zPos, sin(theta) * aRadius);

  float angle = atan(instancePosition.x, instancePosition.z);

  vec4 rotation = getQuaternionFromAxisAngle(vec3(0.0, 1.0, 0.0), angle);

  vec3 finalPosition = scaledPosition + 2.0 * cross(rotation.xyz, cross(rotation.xyz, scaledPosition) + rotation.w * scaledPosition);

  vec4 modelPosition = modelMatrix * vec4(instancePosition + finalPosition, 1.0);
  vec4 viewPosition = viewMatrix * modelPosition;
  gl_Position = projectionMatrix * viewPosition;

  vUv = uv;
  vTextureCoords = aTextureCoords;
  vAspectRatio = aAspectRatio;
}
`;

const instancedFragmentShader = `
varying vec4 vTextureCoords;
varying vec2 vUv;

uniform sampler2D uAtlas;

void main() {
  float xStart = vTextureCoords.x;
  float xEnd = vTextureCoords.y;
  float yStart = vTextureCoords.z;
  float yEnd = vTextureCoords.w;

  vec2 atlasUV;
  atlasUV.x = mix(xStart, xEnd, vUv.x);
  atlasUV.y = mix(yStart, yEnd, 1.0 - vUv.y);

  vec4 color = texture2D(uAtlas, atlasUV);
  gl_FragColor = color;
}
`;

const centeredVertexShader = `
varying vec2 vUv;

void main() {
  vec4 modelPosition = modelMatrix * vec4(position, 1.0);
  vec4 viewPosition = viewMatrix * modelPosition;
  gl_Position = projectionMatrix * viewPosition;
  vUv = uv;
}
`;

const centeredFragmentShader = `
varying vec2 vUv;

uniform sampler2D uAtlas;
uniform vec4 uTextureCoords;

void main() {
  float xStart = uTextureCoords.x;
  float xEnd = uTextureCoords.y;
  float yStart = uTextureCoords.z;
  float yEnd = uTextureCoords.w;

  vec2 atlasUV;
  atlasUV.x = mix(xStart, xEnd, vUv.x);
  atlasUV.y = mix(yStart, yEnd, 1.0 - vUv.y);

  vec4 color = texture2D(uAtlas, atlasUV);
  gl_FragColor = color;
}
`;

interface ImageInfo {
  width: number;
  height: number;
  aspectRatio: number;
  uvs: { xStart: number; xEnd: number; yStart: number; yEnd: number };
}

export default class TaoVortexGallery {
  scene: THREE.Scene;
  camera: THREE.PerspectiveCamera;
  renderer: THREE.WebGLRenderer;
  imageInfos: ImageInfo[] = [];
  atlasTexture: THREE.Texture | null = null;
  instancedMaterial!: THREE.ShaderMaterial;
  centerMaterial!: THREE.ShaderMaterial;
  centerMesh: THREE.Mesh | null = null;
  instancedMesh: THREE.InstancedMesh | null = null;
  private resizeObserver: ResizeObserver | null = null;
  private rafId = 0;
  private disposed = false;
  private sectionVisible = true;
  private readonly canvas: HTMLCanvasElement;
  private readonly parent: HTMLElement;
  private readonly onResize = () => this.resize();
  private readonly onWheel = (event: WheelEvent) => this.handleWheel(event);
  private readonly onPointerMove = (event: PointerEvent) => this.handlePointerMove(event);
  private readonly onPointerLeave = () => this.handlePointerLeave();
  private pointer = { x: 0, y: 0, targetX: 0, targetY: 0 };

  scrollY = {
    speedTarget: 0,
    speedCurrent: 0,
    target: 0,
    current: 0,
    direction: 1,
  };
  textureIndex = 0;
  paused = false;

  instanceData: {
    angles: Float32Array;
    heights: Float32Array;
    radiuses: Float32Array;
    speeds: Float32Array;
    aspectRatios: Float32Array;
    imageIndices: Uint16Array;
  } | null = null;
  instanceCount = 0;
  private uMaxZ = 0;
  private uZrange = 0;

  constructor(canvas: HTMLCanvasElement, imagePaths: string[]) {
    this.canvas = canvas;
    this.parent = canvas.parentElement ?? document.body;
    this.scene = new THREE.Scene();
    this.scene.background = null;

    const { width, height } = this.getSize();
    this.camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 200);
    this.camera.position.z = 5;

    this.renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
    });
    this.renderer.setClearColor(0x000000, 0);
    this.renderer.setPixelRatio(Math.min(1.6, window.devicePixelRatio || 1));
    this.renderer.setSize(width, height, false);

    this.setupEvents();
    this.init(imagePaths);
  }

  async init(imagePaths: string[]) {
    await this.loadTextureAtlas(imagePaths);
    if (this.disposed) return;
    this.buildInstancedMesh();
    this.buildCenterMesh();
    this.render();
  }

  private getSize() {
    const width = Math.max(1, this.parent.clientWidth || window.innerWidth);
    const height = Math.max(1, this.parent.clientHeight || window.innerHeight);
    return { width, height };
  }

  private resize() {
    if (this.disposed) return;
    const { width, height } = this.getSize();
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height, false);
  }

  private createFallbackImage(label: string, index: number) {
    const cvs = document.createElement("canvas");
    cvs.width = 768;
    cvs.height = 960;
    const ctx = cvs.getContext("2d")!;
    const palettes = [
      ["#efe5d3", "#7b4a2f", "#c8a870"],
      ["#eef1ea", "#20302a", "#9b7b4f"],
      ["#f4f0e7", "#5f2d24", "#d8b37a"],
      ["#e7e1d2", "#263627", "#a8683b"],
    ];
    const [bg, ink, accent] = palettes[index % palettes.length];
    const gradient = ctx.createLinearGradient(0, 0, cvs.width, cvs.height);
    gradient.addColorStop(0, bg);
    gradient.addColorStop(1, "#d8c7ad");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, cvs.width, cvs.height);
    ctx.fillStyle = "rgba(255,255,255,0.28)";
    ctx.fillRect(48, 48, cvs.width - 96, cvs.height - 96);
    ctx.strokeStyle = accent;
    ctx.lineWidth = 4;
    ctx.strokeRect(72, 72, cvs.width - 144, cvs.height - 144);
    ctx.fillStyle = ink;
    ctx.font = "600 42px serif";
    ctx.textAlign = "center";
    ctx.fillText("缘灵", cvs.width / 2, 190);
    ctx.font = "500 30px serif";
    ctx.fillText("Ritual Craft", cvs.width / 2, 240);
    ctx.strokeStyle = "rgba(60,40,24,0.55)";
    ctx.lineWidth = 16;
    ctx.beginPath();
    ctx.ellipse(cvs.width / 2, 540, 178, 138, 0, 0, Math.PI * 2);
    ctx.stroke();
    for (let i = 0; i < 26; i++) {
      const angle = (i / 26) * Math.PI * 2;
      const x = cvs.width / 2 + Math.cos(angle) * 178;
      const y = 540 + Math.sin(angle) * 138;
      ctx.fillStyle = i % 3 === 0 ? accent : ink;
      ctx.beginPath();
      ctx.arc(x, y, 18, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.fillStyle = "rgba(32,25,18,0.7)";
    ctx.font = "400 26px serif";
    ctx.fillText(label, cvs.width / 2, 790);
    return cvs;
  }

  private loadImage(path: string, index: number): Promise<HTMLImageElement | HTMLCanvasElement> {
    return new Promise((resolve) => {
      const img = new Image();
      img.crossOrigin = "anonymous";
      img.onload = () => resolve(img);
      img.onerror = () => {
        const fileName = path.split("/").pop()?.replace(/\.[^.]+$/, "") ?? "缘灵 Craft";
        resolve(this.createFallbackImage(fileName.replace(/-/g, " "), index));
      };
      img.src = path;
    });
  }

  async loadTextureAtlas(paths: string[]) {
    const images = await Promise.all(paths.map((path, index) => this.loadImage(path, index)));

    const CELL_W = 256;
    const CELL_H = 320;
    const cols = Math.ceil(Math.sqrt(images.length));
    const rows = Math.ceil(images.length / cols);

    const atlasWidth = cols * CELL_W;
    const atlasHeight = rows * CELL_H;

    const cvs = document.createElement("canvas");
    cvs.width = atlasWidth;
    cvs.height = atlasHeight;

    const ctx = cvs.getContext("2d")!;
    ctx.fillStyle = "#f4f0e7";
    ctx.fillRect(0, 0, atlasWidth, atlasHeight);

    this.imageInfos = images.map((img, i) => {
      const col = i % cols;
      const row = Math.floor(i / cols);
      const destX = col * CELL_W;
      const destY = row * CELL_H;
      const imgAspect = img.width / img.height;
      const cellAspect = CELL_W / CELL_H;
      let drawW: number;
      let drawH: number;
      let offsetX: number;
      let offsetY: number;

      if (imgAspect > cellAspect) {
        drawW = CELL_W;
        drawH = CELL_W / imgAspect;
        offsetX = 0;
        offsetY = (CELL_H - drawH) / 2;
      } else {
        drawH = CELL_H;
        drawW = CELL_H * imgAspect;
        offsetX = (CELL_W - drawW) / 2;
        offsetY = 0;
      }

      ctx.drawImage(img, destX + offsetX, destY + offsetY, drawW, drawH);

      const xStart = (destX + offsetX) / atlasWidth;
      const xEnd = (destX + offsetX + drawW) / atlasWidth;
      const yStart = 1 - (destY + offsetY) / atlasHeight;
      const yEnd = 1 - (destY + offsetY + drawH) / atlasHeight;

      return {
        width: img.width,
        height: img.height,
        aspectRatio: imgAspect,
        uvs: { xStart, xEnd, yStart, yEnd },
      };
    });

    this.atlasTexture = new THREE.CanvasTexture(cvs);
    this.atlasTexture.needsUpdate = true;
    this.atlasTexture.generateMipmaps = true;
    this.atlasTexture.minFilter = THREE.LinearMipmapLinearFilter;
    this.atlasTexture.magFilter = THREE.LinearFilter;
    this.atlasTexture.colorSpace = THREE.SRGBColorSpace;
  }

  buildInstancedMesh() {
    const geometry = new THREE.BoxGeometry(1.5, 1.5, 0.075);
    const isMobile = this.getSize().width < 768;
    const radius = isMobile ? 5 : 6;
    const height = 120;
    const count = isMobile ? 260 : 600;
    const circleCount = height / 3;
    const circleHeight = height / circleCount;

    this.uMaxZ = height * 0.5;
    this.uZrange = height;
    this.instanceCount = count;

    this.instancedMaterial = new THREE.ShaderMaterial({
      vertexShader: instancedVertexShader,
      fragmentShader: instancedFragmentShader,
      transparent: true,
      uniforms: {
        uAtlas: { value: this.atlasTexture },
        uScrollY: { value: 0 },
        uZrange: { value: height },
        uMaxZ: { value: height * 0.5 },
        uSpeedY: { value: 0 },
        uDirection: { value: 1 },
      },
    });

    this.instancedMesh = new THREE.InstancedMesh(geometry, this.instancedMaterial, count);

    const aAngles = new Float32Array(count);
    const aHeights = new Float32Array(count);
    const aRadiuses = new Float32Array(count);
    const aAspectRatios = new Float32Array(count);
    const aSpeeds = new Float32Array(count);
    const aTextureCoords = new Float32Array(count * 4);
    const imageIndices = new Uint16Array(count);

    const speeds = new Float32Array(circleCount).map(() => Math.random() * 0.2 + 0.8);

    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2;
      const imgIdx = Math.floor(Math.random() * this.imageInfos.length);
      const { xStart, xEnd, yStart, yEnd } = this.imageInfos[imgIdx].uvs;

      aTextureCoords.set([xStart, xEnd, yStart, yEnd], i * 4);
      aAngles[i] = angle;
      aHeights[i] = (i % circleCount) * circleHeight - height / 2;
      aRadiuses[i] = radius;
      aAspectRatios[i] = this.imageInfos[imgIdx].aspectRatio;
      aSpeeds[i] = speeds[i % circleCount];
      imageIndices[i] = imgIdx;
    }

    this.instanceData = {
      angles: aAngles,
      heights: aHeights,
      radiuses: aRadiuses,
      speeds: aSpeeds,
      aspectRatios: aAspectRatios,
      imageIndices,
    };

    geometry.setAttribute("aAngle", new THREE.InstancedBufferAttribute(aAngles, 1));
    geometry.setAttribute("aHeight", new THREE.InstancedBufferAttribute(aHeights, 1));
    geometry.setAttribute("aRadius", new THREE.InstancedBufferAttribute(aRadiuses, 1));
    geometry.setAttribute("aAspectRatio", new THREE.InstancedBufferAttribute(aAspectRatios, 1));
    geometry.setAttribute("aSpeed", new THREE.InstancedBufferAttribute(aSpeeds, 1));
    geometry.setAttribute("aTextureCoords", new THREE.InstancedBufferAttribute(aTextureCoords, 4));

    this.scene.add(this.instancedMesh);
  }

  buildCenterMesh() {
    const geometry = new THREE.PlaneGeometry(1.7, 2.3);
    this.centerMaterial = new THREE.ShaderMaterial({
      vertexShader: centeredVertexShader,
      fragmentShader: centeredFragmentShader,
      uniforms: {
        uAtlas: { value: this.atlasTexture },
        uTextureCoords: {
          value: new THREE.Vector4(
            this.imageInfos[0].uvs.xStart,
            this.imageInfos[0].uvs.xEnd,
            this.imageInfos[0].uvs.yStart,
            this.imageInfos[0].uvs.yEnd
          ),
        },
      },
      transparent: true,
    });

    this.centerMesh = new THREE.Mesh(geometry, this.centerMaterial);
    this.scene.add(this.centerMesh);
  }

  setupEvents() {
    window.addEventListener("resize", this.onResize);
    this.canvas.addEventListener("wheel", this.onWheel, { passive: true });
    this.canvas.addEventListener("pointermove", this.onPointerMove);
    this.canvas.addEventListener("pointerleave", this.onPointerLeave);
    if ("ResizeObserver" in window) {
      this.resizeObserver = new ResizeObserver(this.onResize);
      this.resizeObserver.observe(this.parent);
    }
  }

  setVisible(visible: boolean) {
    this.sectionVisible = visible;
  }

  private handleWheel(event: WheelEvent) {
    if (this.paused || !this.sectionVisible) return;
    const norm = normalizeWheel(event);
    const { height: canvasHeight } = this.getSize();
    const fov = this.camera.fov * (Math.PI / 180);
    const height = this.camera.position.z * Math.tan(fov / 2) * 2;
    const dir = Math.sign(event.deltaY) || this.scrollY.direction;
    this.scrollY.direction = dir;
    const delta = ((norm.pixelY * height) / canvasHeight) * 0.3;
    this.scrollY.speedTarget += delta;
    this.scrollY.target += delta;
  }

  private handlePointerMove(event: PointerEvent) {
    const rect = this.canvas.getBoundingClientRect();
    this.pointer.targetX = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
    this.pointer.targetY = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
  }

  private handlePointerLeave() {
    this.pointer.targetX = 0;
    this.pointer.targetY = 0;
  }

  addScrollDelta(delta: number) {
    this.scrollY.speedTarget += delta;
    this.scrollY.target += delta;
  }

  render = () => {
    if (this.disposed) return;
    this.rafId = requestAnimationFrame(this.render);

    if (!this.paused) {
      this.scrollY.target += 0.002 * this.scrollY.direction;
      this.scrollY.speedTarget += 0.002 * this.scrollY.direction;
      this.scrollY.current = gsap.utils.interpolate(this.scrollY.current, this.scrollY.target, 0.1);
      this.scrollY.speedCurrent = gsap.utils.interpolate(
        this.scrollY.speedCurrent,
        this.scrollY.speedTarget,
        0.1
      );
    }

    if (this.instancedMaterial) {
      this.instancedMaterial.uniforms.uScrollY.value = this.scrollY.current;
      this.instancedMaterial.uniforms.uSpeedY.value = this.scrollY.speedCurrent;
      this.instancedMaterial.uniforms.uDirection.value = this.scrollY.direction;
    }

    if (this.centerMaterial && this.imageInfos.length > 0) {
      this.textureIndex = Math.abs(Math.floor(this.scrollY.speedTarget % this.imageInfos.length));
      const uvs = this.imageInfos[this.textureIndex].uvs;
      this.centerMaterial.uniforms.uTextureCoords.value.set(
        uvs.xStart,
        uvs.xEnd,
        uvs.yStart,
        uvs.yEnd
      );
    }

    this.pointer.x = gsap.utils.interpolate(this.pointer.x, this.pointer.targetX, 0.075);
    this.pointer.y = gsap.utils.interpolate(this.pointer.y, this.pointer.targetY, 0.075);
    this.scene.rotation.y = this.pointer.x * 0.14;
    this.scene.rotation.x = -this.pointer.y * 0.075;
    if (this.centerMesh) {
      this.centerMesh.position.x = this.pointer.x * 0.18;
      this.centerMesh.position.y = -this.pointer.y * 0.12;
      this.centerMesh.rotation.y = this.pointer.x * -0.08;
      this.centerMesh.rotation.x = this.pointer.y * 0.045;
    }

    this.renderer.render(this.scene, this.camera);
  };

  setPaused(paused: boolean) {
    this.paused = paused;
  }

  pickAtScreen(clientX: number, clientY: number, canvasRect: DOMRect): number | null {
    const ndcX = ((clientX - canvasRect.left) / canvasRect.width) * 2 - 1;
    const ndcY = -(((clientY - canvasRect.top) / canvasRect.height) * 2 - 1);

    if (this.centerMesh) {
      const raycaster = new THREE.Raycaster();
      raycaster.setFromCamera(new THREE.Vector2(ndcX, ndcY), this.camera);
      const hit = raycaster.intersectObject(this.centerMesh);
      if (hit.length > 0) return this.textureIndex;
    }

    if (!this.instanceData) return null;

    const w = canvasRect.width;
    const h = canvasRect.height;
    const clickX = clientX - canvasRect.left;
    const clickY = clientY - canvasRect.top;
    const minZ = this.uMaxZ - this.uZrange;
    const zRange = this.uZrange;
    const scrollY = this.scrollY.current;
    const speedY = this.scrollY.speedCurrent;
    const pixelRadius = 55;
    let bestIdx: number | null = null;
    let bestNdcZ = Infinity;
    const pos = new THREE.Vector3();
    const { angles, heights, radiuses, speeds, imageIndices } = this.instanceData;

    for (let i = 0; i < this.instanceCount; i++) {
      let zPos = heights[i] + scrollY;
      const shifted = zPos - minZ;
      zPos = ((shifted % zRange) + zRange) % zRange + minZ;
      const theta = angles[i] + speedY * 0.4 * speeds[i];

      pos.set(Math.cos(theta) * radiuses[i], zPos, Math.sin(theta) * radiuses[i]);
      pos.project(this.camera);

      if (pos.z < -1 || pos.z > 1) continue;
      if (pos.x < -1.2 || pos.x > 1.2 || pos.y < -1.2 || pos.y > 1.2) continue;

      const sx = (pos.x + 1) * 0.5 * w;
      const sy = (1 - pos.y) * 0.5 * h;
      const dx = sx - clickX;
      const dy = sy - clickY;
      const dist2 = dx * dx + dy * dy;

      if (dist2 < pixelRadius * pixelRadius && pos.z < bestNdcZ) {
        bestNdcZ = pos.z;
        bestIdx = imageIndices[i];
      }
    }

    return bestIdx;
  }

  destroy() {
    this.disposed = true;
    cancelAnimationFrame(this.rafId);
    window.removeEventListener("resize", this.onResize);
    this.canvas.removeEventListener("wheel", this.onWheel);
    this.canvas.removeEventListener("pointermove", this.onPointerMove);
    this.canvas.removeEventListener("pointerleave", this.onPointerLeave);
    this.resizeObserver?.disconnect();

    if (this.instancedMesh) {
      this.scene.remove(this.instancedMesh);
      this.instancedMesh.geometry.dispose();
    }
    if (this.centerMesh) {
      this.scene.remove(this.centerMesh);
      this.centerMesh.geometry.dispose();
    }
    this.atlasTexture?.dispose();
    this.instancedMaterial?.dispose();
    this.centerMaterial?.dispose();
    this.renderer.dispose();
  }
}
