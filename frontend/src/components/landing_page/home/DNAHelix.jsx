import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

const App = () => {
  const mountRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      35,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 54;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x1e242e, 1);
    mountRef.current.appendChild(renderer.domElement);

    const helixGroup = new THREE.Group();
    helixGroup.rotation.z = Math.PI / 2;
    scene.add(helixGroup);

    const createHighIntensityTexture = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 128;
      canvas.height = 128;
      const ctx = canvas.getContext('2d');
      const grad = ctx.createRadialGradient(64, 64, 0, 64, 64, 64);
      grad.addColorStop(0, 'rgba(255,255,255,1)');
      grad.addColorStop(0.2, 'rgba(59,130,246,0.95)');
      grad.addColorStop(0.5, 'rgba(99,102,241,0.5)');
      grad.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 128, 128);
      return new THREE.CanvasTexture(canvas);
    };

    const texture = createHighIntensityTexture();

    const HELIX_RADIUS = 4.0;
    const HELIX_HEIGHT = 50;
    const HELIX_TURNS = 3.5;
    const PARTICLE_COUNT = 15000;

    const createStrand = (count, offset, colorHex, pSize) => {
      const geometry = new THREE.BufferGeometry();
      const positions = new Float32Array(count * 3);
      const colors = new Float32Array(count * 3);
      const baseColor = new THREE.Color(colorHex);

      for (let i = 0; i < count; i++) {
        const t = i / count;
        const angle = t * Math.PI * 2 * HELIX_TURNS + offset;
        const volume = (Math.random() - 0.5) * 0.7;

        positions[i * 3] = Math.cos(angle) * (HELIX_RADIUS + volume);
        positions[i * 3 + 1] = (t - 0.5) * HELIX_HEIGHT;
        positions[i * 3 + 2] = Math.sin(angle) * (HELIX_RADIUS + volume);

        if (Math.random() > 0.94) {
          colors[i * 3] = 1;
          colors[i * 3 + 1] = 1;
          colors[i * 3 + 2] = 1;
        } else {
          colors[i * 3] = baseColor.r;
          colors[i * 3 + 1] = baseColor.g;
          colors[i * 3 + 2] = baseColor.b;
        }
      }

      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

      const material = new THREE.PointsMaterial({
        size: pSize,
        map: texture,
        transparent: true,
        blending: THREE.AdditiveBlending,
        vertexColors: true,
        depthWrite: false,
      });

      helixGroup.add(new THREE.Points(geometry, material));
    };

    const createBasePairs = (num) => {
      const group = new THREE.Group();

      for (let i = 0; i < num; i++) {
        const t = i / (num - 1);
        const angle = t * Math.PI * 2 * HELIX_TURNS;
        const y = (t - 0.5) * HELIX_HEIGHT;

        const x1 = Math.cos(angle) * HELIX_RADIUS;
        const z1 = Math.sin(angle) * HELIX_RADIUS;
        const x2 = Math.cos(angle + Math.PI) * HELIX_RADIUS;
        const z2 = Math.sin(angle + Math.PI) * HELIX_RADIUS;

        const rungParticles = 30;
        const geo = new THREE.BufferGeometry();
        const posArr = new Float32Array(rungParticles * 3);

        for (let j = 0; j < rungParticles; j++) {
          const lt = j / (rungParticles - 1);
          posArr[j * 3] = x1 + (x2 - x1) * lt;
          posArr[j * 3 + 1] = y;
          posArr[j * 3 + 2] = z1 + (z2 - z1) * lt;
        }

        geo.setAttribute('position', new THREE.BufferAttribute(posArr, 3));

        const mat = new THREE.PointsMaterial({
          size: 0.22,
          map: texture,
          transparent: true,
          opacity: 0.8,
          color: 0x3b82f6,
          blending: THREE.AdditiveBlending,
          depthWrite: false,
        });

        group.add(new THREE.Points(geo, mat));
      }

      helixGroup.add(group);
    };

    createStrand(PARTICLE_COUNT, 0, 0x3b82f6, 0.45);
    createStrand(PARTICLE_COUNT, Math.PI, 0x6366f1, 0.45);
    createBasePairs(32);

    const clock = new THREE.Clock();
    let frameId;

    const animate = () => {
      frameId = requestAnimationFrame(animate);
      const time = clock.getElapsedTime();

      helixGroup.rotation.x = time * 0.18;

      const pulse = Math.sin(time * 0.7) * 0.05;
      helixGroup.scale.set(1 + pulse, 1 + pulse, 1 + pulse);

      camera.position.y = Math.sin(time * 0.2) * 0.6;
      camera.lookAt(0, 0, 0);

      helixGroup.children.forEach((child, idx) => {
        if (child.isPoints && idx < 2) {
          const positions = child.geometry.attributes.position.array;
          for (let i = 0; i < positions.length / 3; i++) {
            positions[i * 3 + 1] += Math.sin(time * 0.4 + i * 0.05) * 0.003;
          }
          child.geometry.attributes.position.needsUpdate = true;
        }

        if (idx === 2) {
          child.children.forEach((rung, rIdx) => {
            rung.material.opacity =
              0.4 + Math.abs(Math.sin(time * 1.2 + rIdx * 0.4)) * 0.5;
          });
        }
      });

      renderer.render(scene, camera);
    };

    animate();
    setIsLoading(false);

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(frameId);
      mountRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-[#1e242e] font-sans text-white select-none">
      {isLoading && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#1e242e]">
          <div className="w-12 h-12 border-2 border-cyan-500/10 border-t-cyan-400 rounded-full animate-spin" />
        </div>
      )}

      <div
        ref={mountRef}
        className="w-full h-full bg-[radial-gradient(circle_at_center,#252d3a_0%,#1a2029_100%)]"
      />
    </div>
  );
};

export default App;
