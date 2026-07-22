import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { GLTFLoader, type GLTF } from "three/examples/jsm/loaders/GLTFLoader.js";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";
import { modelAssetUrl } from "../lib/assets";
import type { TaoBeadModel } from "../data/taoDiyItems";

type TaoStrand3DBuilderProps = {
  beads: TaoBeadModel[];
  className?: string;
  cordTheme?: "red" | "black" | "gold";
  onBeadClick?: (bead: TaoBeadModel) => void;
};

const beadModelCache = new Map<string, Promise<THREE.Object3D>>();
const gltfModelCache = new Map<string, Promise<GLTF>>();
const RED_CORD_MODEL_URL = modelAssetUrl("/assets/tao-diy/models/crimson-circle-cord.glb");

function disposeObject(object: THREE.Object3D) {
  object.traverse((child) => {
    if (child.userData.skipDispose) return;
    const mesh = child as THREE.Mesh;
    if (mesh.geometry) mesh.geometry.dispose();
    const material = mesh.material;
    if (Array.isArray(material)) material.forEach((item) => item.dispose());
    else if (material) material.dispose();
  });
}

function markCachedClone(object: THREE.Object3D) {
  object.traverse((child) => {
    child.userData.skipDispose = true;
  });
}

function loadCachedModel(loader: GLTFLoader, modelUrl: string) {
  let promise = beadModelCache.get(modelUrl);
  if (!promise) {
    promise = new Promise((resolve, reject) => {
      loader.load(modelUrl, (gltf) => resolve(gltf.scene), undefined, reject);
    });
    beadModelCache.set(modelUrl, promise);
  }
  return promise.then((source) => {
    const model = source.clone(true);
    markCachedClone(model);
    return model;
  });
}

function loadCachedGltf(loader: GLTFLoader, modelUrl: string) {
  let promise = gltfModelCache.get(modelUrl);
  if (!promise) {
    promise = new Promise((resolve, reject) => {
      loader.load(modelUrl, resolve, undefined, reject);
    });
    gltfModelCache.set(modelUrl, promise);
  }
  return promise;
}

function getBeadScale(modelUrl: string) {
  if (modelUrl.includes("peachwood-03.glb")) return 1.9;
  return 1;
}

function isPendantBead(bead: TaoBeadModel) {
  return bead.materialId === "pendant" || bead.sourceFile.startsWith("accessory-") || bead.nameCn.includes("吊坠");
}

function createCordCurve(width: number) {
  const half = width / 2;
  const radiusX = half * 0.92;
  const radiusZ = half * 0.9;
  return new THREE.CatmullRomCurve3(
    [
      new THREE.Vector3(0, 0.01, -radiusZ),
      new THREE.Vector3(radiusX * 0.72, -0.015, -radiusZ * 0.72),
      new THREE.Vector3(radiusX, 0.01, 0),
      new THREE.Vector3(radiusX * 0.72, -0.015, radiusZ * 0.72),
      new THREE.Vector3(0, 0.01, radiusZ),
      new THREE.Vector3(-radiusX * 0.72, -0.015, radiusZ * 0.72),
      new THREE.Vector3(-radiusX, 0.01, 0),
      new THREE.Vector3(-radiusX * 0.72, -0.015, -radiusZ * 0.72),
    ],
    true,
  );
}

function getDynamicCordWidth(beadCount: number) {
  if (beadCount <= 0) return 4.2;
  const beadDiameter = 0.48;
  const gap = 0.08;
  const circumference = beadCount * (beadDiameter + gap);
  const radius = circumference / (Math.PI * 2);
  const minRadius = 1.18;
  const maxRadius = 3.25;
  return THREE.MathUtils.clamp(radius, minRadius, maxRadius) * 2;
}

function getBraceletPoint(index: number, length: number, width: number) {
  if (length <= 0) return new THREE.Vector3();
  const angle = -Math.PI / 2 + (Math.PI * 2 * index) / length;
  const radiusX = (width / 2) * 0.92;
  const radiusZ = (width / 2) * 0.9;
  return new THREE.Vector3(Math.cos(angle) * radiusX, 0.01, Math.sin(angle) * radiusZ);
}

function getPendantAnchor(index: number, length: number, width: number) {
  const centerOffset = (index - (length - 1) / 2) * 0.46;
  const cordPoint = new THREE.Vector3(centerOffset, 0.06, -(width / 2) * 0.9);
  const pendantPoint = new THREE.Vector3(centerOffset, -0.48, cordPoint.z - 0.08);
  return { cordPoint, pendantPoint };
}

function createBraidedCordCurve(width: number, phase: number) {
  const points: THREE.Vector3[] = [];
  for (let index = 0; index <= 48; index += 1) {
    const t = index / 48;
    const base = createCordCurve(width).getPoint(t);
    const wave = Math.sin(t * Math.PI * 18 + phase);
    const counterWave = Math.cos(t * Math.PI * 18 + phase);
    points.push(new THREE.Vector3(base.x, base.y + counterWave * 0.012, base.z + wave * 0.018));
  }
  return new THREE.CatmullRomCurve3(points);
}

function getCordPalette(theme: "red" | "black" | "gold") {
  if (theme === "black") {
    return {
      main: [0x101010, 0x28221d, 0x050505],
      shadow: 0x050403,
      knot: 0x16110e,
      tassel: 0x24201d,
      accent: 0x8a6a3e,
    };
  }

  if (theme === "gold") {
    return {
      main: [0x9b6a2d, 0xc08b3a, 0x5f3a16],
      shadow: 0x2f1d0b,
      knot: 0x8f5d22,
      tassel: 0xb67a2e,
      accent: 0xe0b86c,
    };
  }

  return {
    main: [0x7d2118, 0xb13324, 0x4b0f0b],
    shadow: 0x2b0c08,
    knot: 0x7d2118,
    tassel: 0xa33122,
    accent: 0xd9a456,
  };
}

function addCordEnd(strand: THREE.Group, position: THREE.Vector3, side: "left" | "right", palette: ReturnType<typeof getCordPalette>) {
  const knotMaterial = new THREE.MeshStandardMaterial({ color: palette.knot, roughness: 0.62, metalness: 0.08 });
  const knot = new THREE.Mesh(new THREE.SphereGeometry(0.115, 32, 22), knotMaterial);
  knot.position.copy(position);
  knot.scale.set(1.55, 0.82, 0.82);
  strand.add(knot);

  const goldMaterial = new THREE.MeshStandardMaterial({ color: palette.accent, roughness: 0.36, metalness: 0.72 });
  [-0.24, -0.18, 0.18, 0.24].forEach((offset) => {
    const ring = new THREE.Mesh(new THREE.TorusGeometry(0.055, 0.011, 10, 24), goldMaterial);
    ring.position.copy(position);
    ring.position.x += offset;
    ring.rotation.y = Math.PI / 2;
    ring.rotation.x = side === "left" ? -0.12 : 0.12;
    strand.add(ring);
  });

  const wrapMaterial = new THREE.MeshStandardMaterial({ color: palette.tassel, roughness: 0.7, metalness: 0.04 });
  [-0.32, 0.32].forEach((offset) => {
    const wrap = new THREE.Mesh(new THREE.CylinderGeometry(0.042, 0.042, 0.22, 16), wrapMaterial);
    wrap.position.copy(position);
    wrap.position.x += offset;
    wrap.rotation.z = Math.PI / 2;
    strand.add(wrap);
  });
}

function addPendantConnector(strand: THREE.Group, cordPoint: THREE.Vector3, pendantPoint: THREE.Vector3, palette: ReturnType<typeof getCordPalette>) {
  const goldMaterial = new THREE.MeshStandardMaterial({ color: palette.accent, roughness: 0.32, metalness: 0.78 });
  const dropStart = cordPoint.clone().add(new THREE.Vector3(0, -0.1, -0.018));
  const dropEnd = pendantPoint.clone().add(new THREE.Vector3(0, 0.18, 0));
  const linkMid = dropStart.clone().lerp(dropEnd, 0.5);
  const direction = dropEnd.clone().sub(dropStart).normalize();
  const drop = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.012, dropStart.distanceTo(dropEnd), 12), goldMaterial);
  drop.position.copy(linkMid);
  drop.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), direction);
  strand.add(drop);

  const ring = new THREE.Mesh(new THREE.TorusGeometry(0.1, 0.012, 12, 30), goldMaterial);
  ring.position.copy(cordPoint);
  ring.position.y -= 0.08;
  strand.add(ring);
}

export default function TaoStrand3DBuilder({ beads, className, cordTheme = "red", onBeadClick }: TaoStrand3DBuilderProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const onBeadClickRef = useRef(onBeadClick);
  const [loadedCount, setLoadedCount] = useState(0);

  useEffect(() => {
    onBeadClickRef.current = onBeadClick;
  }, [onBeadClick]);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    let frameId = 0;
    let disposed = false;
    const interactive: Array<{ object: THREE.Object3D; bead: TaoBeadModel }> = [];
    const mixers: THREE.AnimationMixer[] = [];
    const clock = new THREE.Clock();

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 100);
    camera.up.set(0, 0, -1);
    camera.position.set(0, 7.4, 0);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.15));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.08;
    renderer.setClearColor(0x000000, 0);
    renderer.domElement.style.cursor = "grab";
    renderer.domElement.style.touchAction = "none";
    mount.appendChild(renderer.domElement);

    let isDragging = false;
    let didDrag = false;
    let lastPointerX = 0;
    let targetRotationY = 0;
    let targetScale = 0.56;

    const stopWheel = (event: WheelEvent) => {
      event.preventDefault();
      event.stopPropagation();
      const zoomFactor = Math.exp(-event.deltaY * 0.0012);
      targetScale = THREE.MathUtils.clamp(targetScale * zoomFactor, 0.28, 2.4);
    };
    renderer.domElement.addEventListener("wheel", stopWheel, { passive: false });

    scene.add(new THREE.AmbientLight(0xfff0d8, 1.55));

    const key = new THREE.DirectionalLight(0xffdfae, 3.2);
    key.position.set(4, 5, 6);
    scene.add(key);

    const rim = new THREE.DirectionalLight(0x9f3c24, 1.5);
    rim.position.set(-4, 2, -3);
    scene.add(rim);

    const strand = new THREE.Group();
    strand.scale.setScalar(0.56);
    strand.rotation.x = -Math.PI / 2.35;
    scene.add(strand);

    const threadedBeads = beads.filter((bead) => !isPendantBead(bead));
    const pendantBeads = beads.filter(isPendantBead);
    const cordWidth = getDynamicCordWidth(Math.max(threadedBeads.length, 1));
    const cordCurve = createCordCurve(cordWidth);
    const palette = getCordPalette(cordTheme);

    const loader = new GLTFLoader();
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath("/draco/");
    loader.setDRACOLoader(dracoLoader);
    setLoadedCount(0);

    const useDecorativeCordModel = false;

    if (useDecorativeCordModel && cordTheme === "red" && beads.length >= 8 && beads.length <= 10) {
      loadCachedGltf(loader, RED_CORD_MODEL_URL)
        .then((gltf) => {
          if (disposed) return;
          const model = gltf.scene.clone(true);
          markCachedClone(model);
          const box = new THREE.Box3().setFromObject(model);
          const center = box.getCenter(new THREE.Vector3());
          const size = box.getSize(new THREE.Vector3());
          model.position.sub(center);
          const maxDim = Math.max(size.x, size.y, size.z) || 1;
          model.scale.setScalar(cordWidth / maxDim);
          model.rotation.set(0, 0, 0);
          model.position.y = 0;
          strand.add(model);

          if (gltf.animations.length) {
            const mixer = new THREE.AnimationMixer(model);
            gltf.animations.forEach((clip) => {
              const action = mixer.clipAction(clip);
              action.play();
            });
            mixers.push(mixer);
          }
        })
        .catch(() => {
          const fallback = new THREE.Mesh(
            new THREE.TubeGeometry(cordCurve, 260, 0.013, 12, true),
            new THREE.MeshStandardMaterial({ color: palette.main[1], roughness: 0.62, metalness: 0.04 }),
          );
          strand.add(fallback);
        });
    } else {
      const cordMaterial = new THREE.MeshStandardMaterial({
        color: palette.main[1],
        roughness: 0.62,
        metalness: 0.04,
      });
      const cord = new THREE.Mesh(new THREE.TubeGeometry(cordCurve, 260, 0.013, 12, true), cordMaterial);
      strand.add(cord);

      const highlight = new THREE.Mesh(
        new THREE.TubeGeometry(createBraidedCordCurve(cordWidth, Math.PI / 3), 220, 0.0028, 6, true),
        new THREE.MeshStandardMaterial({ color: palette.main[0], roughness: 0.48, metalness: 0.02 }),
      );
      highlight.position.y += 0.03;
      strand.add(highlight);

      const cordShadow = new THREE.Mesh(
        new THREE.TubeGeometry(createCordCurve(cordWidth * 0.996), 180, 0.004, 8, true),
        new THREE.MeshStandardMaterial({ color: palette.shadow, roughness: 0.8, metalness: 0.02 }),
      );
      cordShadow.position.y = -0.045;
      strand.add(cordShadow);

    }

    if (!(useDecorativeCordModel && cordTheme === "red" && beads.length >= 8 && beads.length <= 10)) {
      addCordEnd(strand, cordCurve.getPoint(0), "left", palette);
      addCordEnd(strand, cordCurve.getPoint(0.5), "right", palette);
    }

    if (beads.length > 0) {
      let threadedCursor = 0;
      let pendantCursor = 0;
      const layoutSlots = beads.map((bead) => {
        if (isPendantBead(bead)) {
          const slot = { type: "pendant" as const, index: pendantCursor };
          pendantCursor += 1;
          return slot;
        }
        const slot = { type: "threaded" as const, index: threadedCursor };
        threadedCursor += 1;
        return slot;
      });

      beads.forEach((bead, index) => {
        loadCachedModel(loader, bead.modelUrl)
          .then((model) => {
            if (disposed) return;
            const box = new THREE.Box3().setFromObject(model);
            const center = box.getCenter(new THREE.Vector3());
            const size = box.getSize(new THREE.Vector3());
            model.position.sub(center);
            const maxDim = Math.max(size.x, size.y, size.z) || 1;
            const layout = layoutSlots[index];
            if (layout.type === "pendant") {
              const { cordPoint, pendantPoint } = getPendantAnchor(layout.index, pendantBeads.length, cordWidth);
              model.scale.setScalar((0.54 * getBeadScale(bead.modelUrl)) / maxDim);
              model.position.copy(pendantPoint);
              model.rotation.set(0.08, 0, 0);
              addPendantConnector(strand, cordPoint, pendantPoint, palette);
            } else {
              model.scale.setScalar((0.42 * getBeadScale(bead.modelUrl)) / maxDim);
              const point = getBraceletPoint(layout.index, threadedBeads.length || 1, cordWidth);
              model.position.copy(point);
              model.position.y += 0.055;
              const angle = -Math.PI / 2 + (Math.PI * 2 * layout.index) / (threadedBeads.length || 1);
              model.rotation.set(0, -angle + Math.PI / 2, 0);
            }
            model.userData.beadIndex = index;
            strand.add(model);
            interactive.push({ object: model, bead });
            setLoadedCount((value) => value + 1);
          })
          .catch(() => setLoadedCount((value) => value + 1));
      });
    }

    const raycaster = new THREE.Raycaster();
    const pointer = new THREE.Vector2();
    const handlePointerDown = (event: PointerEvent) => {
      isDragging = true;
      didDrag = false;
      lastPointerX = event.clientX;
      renderer.domElement.style.cursor = "grabbing";
      renderer.domElement.setPointerCapture(event.pointerId);
    };
    const handlePointerMove = (event: PointerEvent) => {
      if (!isDragging) return;
      const deltaX = event.clientX - lastPointerX;
      lastPointerX = event.clientX;
      if (Math.abs(deltaX) > 1) didDrag = true;
      targetRotationY += deltaX * 0.0055;
    };
    const handlePointerUp = (event: PointerEvent) => {
      isDragging = false;
      renderer.domElement.style.cursor = "grab";
      if (renderer.domElement.hasPointerCapture(event.pointerId)) {
        renderer.domElement.releasePointerCapture(event.pointerId);
      }
    };
    const handleClick = (event: MouseEvent) => {
      if (didDrag) return;
      if (!interactive.length || !onBeadClickRef.current) return;
      const rect = renderer.domElement.getBoundingClientRect();
      pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
      raycaster.setFromCamera(pointer, camera);
      const hits = raycaster.intersectObjects(interactive.map((item) => item.object), true);
      const root = hits[0]?.object;
      if (!root) return;
      const hit = interactive.find((item) => {
        let current: THREE.Object3D | null = root;
        while (current) {
          if (current === item.object) return true;
          current = current.parent;
        }
        return false;
      });
      if (hit) onBeadClickRef.current(hit.bead);
    };
    renderer.domElement.addEventListener("pointerdown", handlePointerDown);
    renderer.domElement.addEventListener("pointermove", handlePointerMove);
    renderer.domElement.addEventListener("pointerup", handlePointerUp);
    renderer.domElement.addEventListener("pointercancel", handlePointerUp);
    renderer.domElement.addEventListener("click", handleClick);

    const resize = () => {
      const rect = mount.getBoundingClientRect();
      const width = Math.max(1, rect.width);
      const height = Math.max(1, rect.height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height, false);
    };

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(mount);
    resize();

    const render = () => {
      frameId = window.requestAnimationFrame(render);
      const delta = clock.getDelta();
      mixers.forEach((mixer) => mixer.update(delta));
      strand.rotation.y += (targetRotationY - strand.rotation.y) * 0.16;
      const nextScale = THREE.MathUtils.lerp(strand.scale.x, targetScale, 0.18);
      strand.scale.setScalar(nextScale);
      renderer.render(scene, camera);
    };
    render();

    return () => {
      disposed = true;
      window.cancelAnimationFrame(frameId);
      resizeObserver.disconnect();
      renderer.domElement.removeEventListener("wheel", stopWheel);
      renderer.domElement.removeEventListener("pointerdown", handlePointerDown);
      renderer.domElement.removeEventListener("pointermove", handlePointerMove);
      renderer.domElement.removeEventListener("pointerup", handlePointerUp);
      renderer.domElement.removeEventListener("pointercancel", handlePointerUp);
      renderer.domElement.removeEventListener("click", handleClick);
      disposeObject(strand);
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, [beads, cordTheme]);

  return (
    <div className={className} ref={mountRef}>
      {beads.length > 0 && loadedCount < beads.length && (
        <span className="tao-strand-loading">Loading {loadedCount}/{beads.length}</span>
      )}
      {beads.length === 0 && <span className="tao-strand-loading">Click beads to build</span>}
    </div>
  );
}
