import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

type TaoBead3DViewerProps = {
  modelUrl: string;
  className?: string;
  onLoaded?: () => void;
};

function disposeObject(object: THREE.Object3D) {
  object.traverse((child) => {
    const mesh = child as THREE.Mesh;
    if (mesh.geometry) mesh.geometry.dispose();
    const material = mesh.material;
    if (Array.isArray(material)) {
      material.forEach((item) => item.dispose());
    } else if (material) {
      material.dispose();
    }
  });
}

export default function TaoBead3DViewer({ modelUrl, className, onLoaded }: TaoBead3DViewerProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const onLoadedRef = useRef(onLoaded);
  const loadingRef = useRef(true);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    onLoadedRef.current = onLoaded;
  }, [onLoaded]);

  useEffect(() => {
    loadingRef.current = loading;
  }, [loading]);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    let frameId = 0;
    let beadModel: THREE.Object3D | null = null;
    let beadGroup: THREE.Group | null = null;
    let disposed = false;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(30, 1, 0.1, 100);
    camera.position.set(0, 0, 5.4);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.07;
    controls.enablePan = false;
    controls.enableRotate = true;
    controls.enableZoom = false;
    controls.minDistance = 3.9;
    controls.maxDistance = 8.5;
    controls.autoRotate = false;
    controls.target.set(0, 1.38, 0);

    const stopWheelFromScrollingPage = (event: WheelEvent) => {
      event.stopPropagation();
    };
    renderer.domElement.addEventListener("wheel", stopWheelFromScrollingPage, { passive: false });

    scene.add(new THREE.AmbientLight(0xfff3dc, 1.6));

    const keyLight = new THREE.DirectionalLight(0xffdfae, 3.2);
    keyLight.position.set(4, 5, 5);
    scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight(0xb84b32, 1.7);
    rimLight.position.set(-4, 2, -3);
    scene.add(rimLight);

    const softTop = new THREE.PointLight(0xffffff, 1.6, 10);
    softTop.position.set(0, 3, 2.5);
    scene.add(softTop);

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

    const loader = new GLTFLoader();
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath("/draco/");
    loader.setDRACOLoader(dracoLoader);

    loader.load(
      modelUrl,
      (gltf) => {
        if (disposed) return;
        beadModel = gltf.scene;
        beadGroup = new THREE.Group();

        const box = new THREE.Box3().setFromObject(beadModel);
        const center = box.getCenter(new THREE.Vector3());
        const size = box.getSize(new THREE.Vector3());
        beadModel.position.sub(center);

        const maxDim = Math.max(size.x, size.y, size.z) || 1;
        beadModel.scale.setScalar(1.36 / maxDim);
        beadModel.rotation.set(0, -0.36, 0);
        beadGroup.position.set(0, 1.38, 0);
        beadGroup.add(beadModel);

        scene.add(beadGroup);
        setError(false);
        setLoading(false);
        onLoadedRef.current?.();
      },
      undefined,
      (error) => {
        console.error("TaoBead3DViewer load error:", error);
        setError(true);
        setLoading(false);
      },
    );

    const render = () => {
      frameId = window.requestAnimationFrame(render);
      if (beadGroup && !loadingRef.current) beadGroup.rotation.y += 0.006;
      controls.update();
      renderer.render(scene, camera);
    };
    render();

    return () => {
      disposed = true;
      window.cancelAnimationFrame(frameId);
      resizeObserver.disconnect();
      controls.dispose();
      renderer.domElement.removeEventListener("wheel", stopWheelFromScrollingPage);
      if (beadModel) disposeObject(beadModel);
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, [modelUrl]);

  return (
    <div className={className} ref={mountRef}>
      {loading && !error && <div className="tao-3d-loading">Loading 3D model...</div>}
      {error && <div className="tao-3d-error">3D model failed to load.</div>}
    </div>
  );
}
