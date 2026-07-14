import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

declare global {
  interface Window {
    __thumbRendererReady?: boolean;
    renderGlbThumbnail?: (modelUrl: string, options?: ThumbnailOptions) => Promise<string>;
  }
}

type ThumbnailOptions = {
  size?: number;
  quality?: number;
  exposure?: number;
  fit?: number;
  rx?: number;
  ry?: number;
  rz?: number;
};

const status = document.getElementById("status");
const loader = new GLTFLoader();

function disposeObject(object: THREE.Object3D) {
  object.traverse((child) => {
    const mesh = child as THREE.Mesh;
    mesh.geometry?.dispose();
    const material = mesh.material;
    if (Array.isArray(material)) material.forEach((item) => item.dispose());
    else material?.dispose();
  });
}

window.renderGlbThumbnail = async function renderGlbThumbnail(modelUrl: string, options: ThumbnailOptions = {}) {
  const size = options.size || 512;
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(28, 1, 0.1, 100);
  camera.position.set(0, 0, 4.8);

  const renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true,
    powerPreference: "low-power",
    preserveDrawingBuffer: true,
  });
  renderer.setPixelRatio(1);
  renderer.setSize(size, size, false);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = options.exposure || 1.14;
  document.body.appendChild(renderer.domElement);

  scene.add(new THREE.AmbientLight(0xfff2d8, 1.8));

  const keyLight = new THREE.DirectionalLight(0xffdfaa, 3.8);
  keyLight.position.set(3, 4, 4);
  scene.add(keyLight);

  const rimLight = new THREE.DirectionalLight(0xb94c32, 1.35);
  rimLight.position.set(-3, 2, -3);
  scene.add(rimLight);

  if (status) status.textContent = `loading ${modelUrl}`;
  const gltf = await loader.loadAsync(modelUrl);
  const model = gltf.scene;
  const box = new THREE.Box3().setFromObject(model);
  const center = box.getCenter(new THREE.Vector3());
  const modelSize = box.getSize(new THREE.Vector3());
  model.position.sub(center);
  model.rotation.set(options.rx ?? -0.16, options.ry ?? -0.42, options.rz ?? 0);
  const maxDim = Math.max(modelSize.x, modelSize.y, modelSize.z) || 1;
  model.scale.setScalar((options.fit || 1.55) / maxDim);
  scene.add(model);

  renderer.render(scene, camera);
  const dataUrl = renderer.domElement.toDataURL("image/webp", options.quality || 0.9);

  disposeObject(model);
  renderer.dispose();
  renderer.domElement.remove();
  if (status) status.textContent = "ready";
  return dataUrl;
};

window.__thumbRendererReady = true;
if (status) status.textContent = "ready";

document.addEventListener("render-thumb", async () => {
  const modelUrl = document.body.dataset.modelUrl ?? "";
  const requestId = document.body.dataset.nextRequestId ?? "";
  document.body.dataset.requestId = requestId;
  document.body.dataset.state = "rendering";
  document.body.dataset.result = "";
  document.body.dataset.error = "";
  try {
    const result = await window.renderGlbThumbnail?.(modelUrl, { size: 512, quality: 0.9 });
    document.body.dataset.state = "done";
    document.body.dataset.result = result ?? "";
  } catch (error) {
    document.body.dataset.state = "error";
    document.body.dataset.error = error instanceof Error ? error.message : String(error);
  }
});

const params = new URLSearchParams(window.location.search);
const autoModel = params.get("model");
if (autoModel) {
  const optionFromParam = (key: keyof ThumbnailOptions) => {
    const value = params.get(key);
    if (value == null || value.trim() === "") return undefined;
    const parsed = Number(value);
    return Number.isFinite(parsed) ? parsed : undefined;
  };
  const autoOptions: ThumbnailOptions = {
    size: optionFromParam("size") || 512,
    quality: optionFromParam("quality") || 0.9,
    exposure: optionFromParam("exposure"),
    fit: optionFromParam("fit"),
    rx: optionFromParam("rx"),
    ry: optionFromParam("ry"),
    rz: optionFromParam("rz"),
  };

  document.body.dataset.state = "rendering";
  document.body.dataset.result = "";
  document.body.dataset.error = "";
  window.renderGlbThumbnail(autoModel, autoOptions)
    .then((result) => {
      document.body.dataset.state = "done";
      document.body.dataset.result = result;
    })
    .catch((error) => {
      document.body.dataset.state = "error";
      document.body.dataset.error = error instanceof Error ? error.message : String(error);
    });
}
