import React, { useRef, useEffect, useState } from 'react';

type ThreeModule = typeof import('three');

const LatticeBackground: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);
  const [THREE, setTHREE] = useState<ThreeModule | null>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted) {
      import('three').then(module => {
        setTHREE(module);
      });
    }
  }, [isMounted]);

  useEffect(() => {
    if (!isMounted || !mountRef.current || !THREE) return;

    const currentMount = mountRef.current;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, currentMount.clientWidth / currentMount.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    currentMount.appendChild(renderer.domElement);

    const pointsMaterial = new THREE.PointsMaterial({
      color: 0xffa500,
      size: 0.08,
      sizeAttenuation: true,
      opacity: 0.6,
      transparent: true,
    });

    const pointsGeometry = new THREE.BufferGeometry();
    const pointsVertices = [];
    const size = 5;
    const divisions = 5;

    for (let i = -size; i <= size; i += size / divisions) {
      for (let j = -size; j <= size; j += size / divisions) {
        for (let k = -size; k <= size; k += size / divisions) {
          pointsVertices.push(i, j, k);
        }
      }
    }

    pointsGeometry.setAttribute('position', new THREE.Float32BufferAttribute(pointsVertices, 3));
    const points = new THREE.Points(pointsGeometry, pointsMaterial);
    scene.add(points);

    camera.position.z = 10;

    let animationFrameId: number;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      points.rotation.x += 0.0004;
      points.rotation.y += 0.0008;
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      if (!currentMount) return;
      camera.aspect = currentMount.clientWidth / currentMount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (currentMount && renderer.domElement && currentMount.contains(renderer.domElement)) {
        currentMount.removeChild(renderer.domElement);
      }
      pointsGeometry.dispose();
      pointsMaterial.dispose();
      renderer.dispose();
    };
  }, [isMounted, THREE]);

  return <div ref={mountRef} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1, overflow: 'hidden' }} />;
};

export default LatticeBackground;
