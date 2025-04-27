import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const LatticeBackground: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const currentMount = mountRef.current;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, currentMount.clientWidth / currentMount.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true }); // alpha: true for transparent background
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    currentMount.appendChild(renderer.domElement);

    // Create lattice points
    const pointsMaterial = new THREE.PointsMaterial({
      color: 0xffa500, // Orange color
      size: 0.1,
      sizeAttenuation: true,
    });

    const pointsGeometry = new THREE.BufferGeometry();
    const pointsVertices = [];
    const size = 5; // Size of the lattice cube
    const divisions = 5; // Number of points along each axis

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

    // Animation loop
    let animationFrameId: number;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      points.rotation.x += 0.001;
      points.rotation.y += 0.002;
      renderer.render(scene, camera);
    };
    animate();

    // Handle resize
    const handleResize = () => {
      if (!currentMount) return;
      camera.aspect = currentMount.clientWidth / currentMount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (currentMount && renderer.domElement) {
         // Check if renderer.domElement is still a child before removing
         if (currentMount.contains(renderer.domElement)) {
            currentMount.removeChild(renderer.domElement);
         }
      }
      // Dispose Three.js objects
      pointsGeometry.dispose();
      pointsMaterial.dispose();
      renderer.dispose();
    };
  }, []); // Empty dependency array ensures this runs only once on mount

  return <div ref={mountRef} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1, overflow: 'hidden' }} />;
};

export default LatticeBackground;
