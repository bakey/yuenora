import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

type TaoBeadPreview3DProps = {
  modelUrl: string;
  materialId?: string;
  className?: string;
};

function disposeObject(object: THREE.Object3D) {
  object.traverse((child) => {
    const mesh = child as THREE.Mesh;
    if (mesh.geometry) mesh.geometry.dispose();
    const material = mesh.material;
    if (Array.isArray(material)) material.forEach((item) => item.dispose());
    else if (material) material.dispose();
  });
}

function getPreviewScale(modelUrl: string) {
  if (modelUrl.includes("peachwood-03.glb")) return 2.05;
  return 1;
}

export default function TaoBeadPreview3D({ modelUrl, materialId = "cinnabar", className }: TaoBeadPreview3DProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    if (!("IntersectionObserver" in window)) {
      setShouldLoad(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        window.setTimeout(() => setShouldLoad(true), 120);
        observer.disconnect();
      },
      { rootMargin: "120px" },
    );
    observer.observe(mount);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount || !shouldLoad) return;

    let model: THREE.Object3D | null = null;
    let disposed = false;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 100);
    camera.position.set(0, 0, 4.8);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, preserveDrawingBuffer: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.08;
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    scene.add(new THREE.AmbientLight(0xfff0d8, 1.8));

    const key = new THREE.DirectionalLight(0xffdfae, 3);
    key.position.set(3, 4, 5);
    scene.add(key);

    const rim = new THREE.DirectionalLight(0xb84b32, 1.2);
    rim.position.set(-3, 2, -2);
    scene.add(rim);

    const resize = () => {
      const rect = mount.getBoundingClientRect();
      const width = Math.max(1, rect.width);
      const height = Math.max(1, rect.height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height, false);
      renderer.render(scene, camera);
    };

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(mount);
    resize();

    new GLTFLoader().load(
      modelUrl,
      (gltf) => {
        if (disposed) return;
        model = gltf.scene;
        const box = new THREE.Box3().setFromObject(model);
        const center = box.getCenter(new THREE.Vector3());
        const size = box.getSize(new THREE.Vector3());
        model.position.sub(center);
        model.scale.setScalar((1.55 * getPreviewScale(modelUrl)) / (Math.max(size.x, size.y, size.z) || 1));
        model.rotation.set(0.1, -0.35, 0);
        scene.add(model);
        setLoaded(true);
        renderer.render(scene, camera);
      },
      undefined,
      () => setLoaded(true),
    );

    return () => {
      disposed = true;
      resizeObserver.disconnect();
      if (model) disposeObject(model);
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, [modelUrl, shouldLoad]);

  return (
    <div className={`${className ?? ""} tao-preview-material-${materialId}`} ref={mountRef}>
      {!loaded && (
        <span className="tao-preview-bead-fallback" aria-hidden="true">
          <i />
        </span>
      )}
      {!loaded && <span className="tao-preview-loading">{shouldLoad ? "Loading" : "3D"}</span>}
    </div>
  );
}
