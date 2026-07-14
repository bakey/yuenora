import { useEffect, useRef, useState } from "react";
import type { Mesh, Object3D } from "three";

type TaoModelThumbnailProps = {
  modelUrl?: string;
  className?: string;
  view?: "default" | "spacer-side";
};

const thumbnailCache = new Map<string, string>();
const pendingCache = new Map<string, Promise<string>>();
const THUMBNAIL_VIEW_VERSION = "v2";
const queue: Array<() => void> = [];
let activeJobs = 0;
const MAX_ACTIVE_JOBS = 1;

function runNextJob() {
  if (activeJobs >= MAX_ACTIVE_JOBS) return;
  const next = queue.shift();
  if (!next) return;
  activeJobs += 1;
  next();
}

function enqueueThumbnailJob<T>(job: () => Promise<T>) {
  return new Promise<T>((resolve, reject) => {
    queue.push(() => {
      job()
        .then(resolve)
        .catch(reject)
        .finally(() => {
          activeJobs -= 1;
          runNextJob();
        });
    });
    runNextJob();
  });
}

function waitForIdle() {
  return new Promise<void>((resolve) => {
    const requestIdle = window.requestIdleCallback ?? ((callback: IdleRequestCallback) => window.setTimeout(() => callback({ didTimeout: false, timeRemaining: () => 0 }), 180));
    requestIdle(() => resolve(), { timeout: 900 });
  });
}

function disposeObject(object: Object3D) {
  object.traverse((child) => {
    const mesh = child as Mesh;
    mesh.geometry?.dispose();
    const material = mesh.material;
    if (Array.isArray(material)) material.forEach((item) => item.dispose());
    else material?.dispose();
  });
}

async function renderModelThumbnail(modelUrl: string, view: TaoModelThumbnailProps["view"] = "default") {
  const cacheKey = `${modelUrl}::${view}::${THUMBNAIL_VIEW_VERSION}`;
  const cached = thumbnailCache.get(cacheKey);
  if (cached) return cached;

  const pending = pendingCache.get(cacheKey);
  if (pending) return pending;

  const promise = enqueueThumbnailJob(async () => {
    await waitForIdle();

    const [threeModule, loaderModule] = await Promise.all([
      import("three"),
      import("three/examples/jsm/loaders/GLTFLoader.js"),
    ]);

    const THREE = threeModule;
    const { GLTFLoader } = loaderModule;
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
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.14;
    renderer.setSize(128, 128, false);

    scene.add(new THREE.AmbientLight(0xfff2d8, 1.7));

    const keyLight = new THREE.DirectionalLight(0xffdfaa, 3.4);
    keyLight.position.set(3, 4, 4);
    scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight(0xb94c32, 1.2);
    rimLight.position.set(-3, 2, -3);
    scene.add(rimLight);

    const gltf = await new GLTFLoader().loadAsync(modelUrl);
    const model = gltf.scene;
    const box = new THREE.Box3().setFromObject(model);
    const center = box.getCenter(new THREE.Vector3());
    const size = box.getSize(new THREE.Vector3());
    model.position.sub(center);
    if (view === "spacer-side") {
      model.rotation.set(-0.08, Math.PI / 2, 0);
    } else {
      model.rotation.set(-0.16, -0.42, 0);
    }

    const maxDim = Math.max(size.x, size.y, size.z) || 1;
    model.scale.setScalar((view === "spacer-side" ? 1.85 : 1.55) / maxDim);
    scene.add(model);
    renderer.render(scene, camera);

    const dataUrl = renderer.domElement.toDataURL("image/webp", 0.88);
    disposeObject(model);
    renderer.dispose();

    thumbnailCache.set(cacheKey, dataUrl);
    pendingCache.delete(cacheKey);
    return dataUrl;
  });

  pendingCache.set(cacheKey, promise);
  return promise;
}

export default function TaoModelThumbnail({ modelUrl, className, view = "default" }: TaoModelThumbnailProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const cacheKey = modelUrl ? `${modelUrl}::${view}::${THUMBNAIL_VIEW_VERSION}` : "";
  const [src, setSrc] = useState(() => (cacheKey ? thumbnailCache.get(cacheKey) ?? "" : ""));
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount || !modelUrl || src) return;

    let disposed = false;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting || disposed) return;
        observer.disconnect();
        renderModelThumbnail(modelUrl, view)
          .then((dataUrl) => {
            if (!disposed) setSrc(dataUrl);
          })
          .catch(() => {
            if (!disposed) setFailed(true);
          });
      },
      { rootMargin: "240px" },
    );

    observer.observe(mount);

    return () => {
      disposed = true;
      observer.disconnect();
    };
  }, [modelUrl, src, view]);

  return (
    <div className={`tao-model-thumb ${className ?? ""}`} ref={mountRef}>
      {src && <img alt="" draggable={false} loading="lazy" src={src} />}
      {!src && !failed && <span>Loading preview</span>}
      {!modelUrl && <span>No model</span>}
      {failed && <span>Preview unavailable</span>}
    </div>
  );
}
