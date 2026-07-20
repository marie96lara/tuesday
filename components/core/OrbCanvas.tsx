'use client';

import { useEffect, useRef } from 'react';

export default function OrbCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js';
    script.async = true;
    script.onload = () => initScene(container);
    document.head.appendChild(script);

    let animId: number;

    function initScene(el: HTMLDivElement) {
      const THREE = (window as any).THREE;
      if (!THREE) return;

      const scene = new THREE.Scene();
      const w = el.clientWidth;
      const h = el.clientHeight;
      const camera = new THREE.PerspectiveCamera(75, w / h, 0.1, 1000);
      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setSize(w, h);
      renderer.setPixelRatio(window.devicePixelRatio);
      el.appendChild(renderer.domElement);

      const ambientLight = new THREE.AmbientLight(0x00a3ff, 0.5);
      scene.add(ambientLight);
      const pointLight = new THREE.PointLight(0x00a3ff, 2, 50);
      pointLight.position.set(5, 5, 5);
      scene.add(pointLight);

      const orbGroup = new THREE.Group();
      scene.add(orbGroup);

      const coreGeo = new THREE.SphereGeometry(1.5, 32, 32);
      const coreMat = new THREE.MeshPhongMaterial({
        color: 0x00a3ff,
        emissive: 0x00a3ff,
        emissiveIntensity: 2,
        transparent: true,
        opacity: 0.8,
      });
      const core = new THREE.Mesh(coreGeo, coreMat);
      orbGroup.add(core);

      const wireGeo = new THREE.SphereGeometry(2.5, 32, 32);
      const wireMat = new THREE.MeshBasicMaterial({
        color: 0x00a3ff,
        wireframe: true,
        transparent: true,
        opacity: 0.3,
      });
      const wire = new THREE.Mesh(wireGeo, wireMat);
      orbGroup.add(wire);

      const ptGeo = new THREE.BufferGeometry();
      const count = 1000;
      const positions = new Float32Array(count * 30);
      for (let i = 0; i < count; i++) {
        const r = 2.5 + Math.random() * 0.5;
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);
        positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
        positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
        positions[i * 3 + 2] = r * Math.cos(phi);
      }
      ptGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      const ptMat = new THREE.PointsMaterial({ color: 0x00ffff, size: 0.05, transparent: true, opacity: 0.8 });
      const points = new THREE.Points(ptGeo, ptMat);
      orbGroup.add(points);

      camera.position.z = 8;

      let mouseX = 0;
      let mouseY = 0;
      const onMouseMove = (e: MouseEvent) => {
        mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
        mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
      };
      window.addEventListener('mousemove', onMouseMove);

      const animate = () => {
        animId = requestAnimationFrame(animate);
        orbGroup.rotation.y += 0.005;
        wire.rotation.x += 0.002;
        points.rotation.y -= 0.001;
        const t = Date.now() * 0.001;
        core.scale.setScalar(1 + Math.sin(t * 2) * 0.05);
        coreMat.emissiveIntensity = 1.5 + Math.sin(t * 3) * 0.5;
        orbGroup.rotation.x += (mouseY * 0.2 - orbGroup.rotation.x) * 0.05;
        orbGroup.rotation.y += (mouseX * 0.2 - orbGroup.rotation.y) * 0.05;
        renderer.render(scene, camera);
      };
      animate();

      const onResize = () => {
        const nw = el.clientWidth;
        const nh = el.clientHeight;
        camera.aspect = nw / nh;
        camera.updateProjectionMatrix();
        renderer.setSize(nw, nh);
      };
      window.addEventListener('resize', onResize);

      return () => {
        window.removeEventListener('mousemove', onMouseMove);
        window.removeEventListener('resize', onResize);
        cancelAnimationFrame(animId);
        renderer.dispose();
        el.removeChild(renderer.domElement);
      };
    }

    return () => {
      cancelAnimationFrame(animId);
      script.remove();
    };
  }, []);

  return <div ref={containerRef} className="w-[420px] h-[20px]" />;
}
