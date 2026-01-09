import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

const App = () => {
  const mountRef = useRef(null);
  const [displayText, setDisplayText] = useState('');
  const [missionIndex, setMissionIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  const mainTitle = "MYEASY PHARMA";
  const missionPoints = [
    "AI-NATIVE DNA ARCHITECTURE",
    "REAL-WORLD CLINICAL INSIGHTS",
    "SIMPLIFICATION AS A SERVICE",
    "OUTCOME-DRIVEN DIABETIC CARE",
    "SHARED HEALTH INTELLIGENCE"
  ];

  // --- Typewriter Logic ---
  useEffect(() => {
    if (isLoading) return;

    const timer = setTimeout(() => {
      if (!isDeleting && charIndex < mainTitle.length) {
        setDisplayText(mainTitle.substring(0, charIndex + 1));
        setCharIndex(prev => prev + 1);
      } else if (isDeleting && charIndex > 0) {
        setDisplayText(mainTitle.substring(0, charIndex - 1));
        setCharIndex(prev => prev - 1);
      } else if (!isDeleting && charIndex === mainTitle.length) {
        setTimeout(() => setIsDeleting(true), 3000);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setTimeout(() => {}, 1000);
      }
    }, isDeleting ? 100 : 150);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, isLoading]);

  // --- Mission Points Logic ---
  useEffect(() => {
    if (isLoading) return;
    const interval = setInterval(() => {
      setMissionIndex((prev) => (prev + 1) % missionPoints.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isLoading]);

  // --- Three.js Logic ---
  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 54;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x1e242e, 1);
    mountRef.current.appendChild(renderer.domElement);

    const helixGroup = new THREE.Group();
    // Rotate the group horizontally
    helixGroup.rotation.z = Math.PI / 2;
    scene.add(helixGroup);

    const createHighIntensityTexture = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 128;
      canvas.height = 128;
      const ctx = canvas.getContext('2d');
      const grad = ctx.createRadialGradient(64, 64, 0, 64, 64, 64);
      grad.addColorStop(0, 'rgba(255, 255, 255, 1)');
      grad.addColorStop(0.2, 'rgba(59, 130, 246, 0.95)'); // Blue-500
      grad.addColorStop(0.5, 'rgba(99, 102, 241, 0.5)'); // Indigo-500
      grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 128, 128);
      return new THREE.CanvasTexture(canvas);
    };

    const texture = createHighIntensityTexture();
    const HELIX_RADIUS = 4.0;
    const HELIX_HEIGHT = 50; // Increased height for horizontal span
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
          colors[i * 3] = 1; colors[i * 3 + 1] = 1; colors[i * 3 + 2] = 1;
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

      const points = new THREE.Points(geometry, material);
      helixGroup.add(points);
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
          color: 0x3b82f6, // Blue-500
          blending: THREE.AdditiveBlending,
          depthWrite: false
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
      // Spin around the new horizontal axis (X)
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
            rung.material.opacity = 0.4 + Math.abs(Math.sin(time * 1.2 + rIdx * 0.4)) * 0.5;
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
      {/* Loading Screen */}
      {isLoading && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#1e242e]">
          <div className="w-12 h-12 border-2 border-cyan-500/10 border-t-cyan-400 rounded-full animate-spin" />
        </div>
      )}

      {/* Top Left UI */}
      <div className="absolute top-[50px] left-[50px] z-10 pointer-events-none">
        <div className="flex items-center text-[28px] font-black tracking-[3px] text-cyan-400 border-l-[5px] border-cyan-400 pl-5 uppercase drop-shadow-[0_0_20px_rgba(0,229,255,0.5)] min-h-[40px]">
          {displayText}
          <span className="w-[3px] h-6 bg-cyan-400 ml-1 animate-pulse" />
        </div>
        <div className="text-[11px] tracking-[4px] text-slate-400 uppercase pl-6 mt-1 opacity-0 animate-fadeIn fill-mode-forwards">
          AI-Native Pharma 4.0 Architecture
        </div>
        <div className="text-[12px] tracking-[2px] text-cyan-400/80 font-mono pl-6 mt-4 opacity-0 animate-fadeIn delay-500 fill-mode-forwards">
          LEARN • INTEGRATE • COLLABORATE • TRANSFORM
        </div>
      </div>

      {/* Bottom Left Info */}
      <div className="absolute bottom-[60px] left-[50px] z-10 pointer-events-none">
        <span className="block mb-2 text-[11px] font-bold tracking-[2px] text-cyan-400/80 uppercase">
          Mission Focus:
        </span>
        <div 
          key={missionIndex}
          className="text-[18px] font-light tracking-[1.5px] border-l-2 border-white/20 pl-[15px] uppercase transition-all duration-500 animate-slideUp"
        >
          {missionPoints[missionIndex]}
        </div>
      </div>

      {/* Bottom Right Tagline */}
      <div className="absolute bottom-[60px] right-[50px] text-right z-10 pointer-events-none">
        <div className="text-[10px] tracking-[2px] text-slate-500 uppercase leading-relaxed">
          SHAPING INDIA'S HEALTHCARE FUTURE
          <br />
          <span className="text-[8px] opacity-60">GOVT. INCUBATED @ GIMS NOIDA</span>
        </div>
      </div>

      {/* 3D Canvas Container */}
      <div 
        ref={mountRef} 
        className="w-full h-full bg-[radial-gradient(circle_at_center,#252d3a_0%,#1a2029_100%)]"
      />

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 2s ease-out forwards;
        }
        .animate-slideUp {
          animation: slideUp 0.5s ease-out forwards;
        }
        .fill-mode-forwards {
          animation-fill-mode: forwards;
        }
      `}</style>
    </div>
  );
};

export default App;
