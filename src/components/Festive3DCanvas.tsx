import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Sparkles, RotateCw, Volume2, Shield } from 'lucide-react';
import { playTempleChime } from '../utils/audio';
import { triggerGoldShower } from '../utils/confetti';

interface Festive3DCanvasProps {
  soundEnabled: boolean;
}

export const Festive3DCanvas: React.FC<Festive3DCanvasProps> = ({ soundEnabled }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [flameLit, setFlameLit] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 1. Scene, Camera, Renderer
    const width = container.clientWidth;
    const height = container.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 1.8, 4.8);
    camera.lookAt(0, 0.2, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    // 2. Lighting Setup
    const ambientLight = new THREE.AmbientLight(0x2d1808, 1.2);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xfff5ea, 1.5);
    dirLight.position.set(4, 6, 4);
    scene.add(dirLight);

    // Warm Point Light at the flame position
    const flameLight = new THREE.PointLight(0xf59e0b, 3.8, 12, 1.2);
    flameLight.position.set(0, 0.65, 0.15);
    scene.add(flameLight);

    // Cyan Cyber Accent Light
    const cyberLight = new THREE.PointLight(0x10b981, 1.5, 8);
    cyberLight.position.set(-2, 1.5, -1);
    scene.add(cyberLight);

    // 3. Geometries & Materials Group
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // --- 3D Traditional Diya Mesh ---
    // Diya Bowl (lathe or sliced sphere/cylinder)
    const bowlGeo = new THREE.CylinderGeometry(1.2, 0.45, 0.55, 32, 1, false);
    const bowlMat = new THREE.MeshStandardMaterial({
      color: 0xc27803, // Antique Brass Gold
      roughness: 0.28,
      metalness: 0.88,
      bumpScale: 0.05,
    });
    const diyaBowl = new THREE.Mesh(bowlGeo, bowlMat);
    diyaBowl.position.y = 0;
    mainGroup.add(diyaBowl);

    // Diya Rim Lip
    const rimGeo = new THREE.TorusGeometry(1.22, 0.08, 16, 48);
    rimGeo.rotateX(Math.PI / 2);
    const rimMat = new THREE.MeshStandardMaterial({
      color: 0xffd700,
      metalness: 0.95,
      roughness: 0.2,
    });
    const diyaRim = new THREE.Mesh(rimGeo, rimMat);
    diyaRim.position.y = 0.27;
    mainGroup.add(diyaRim);

    // Diya Wick Base & Tip
    const wickGeo = new THREE.CylinderGeometry(0.04, 0.05, 0.35, 12);
    wickGeo.rotateZ(0.25);
    const wickMat = new THREE.MeshStandardMaterial({ color: 0x1a0f05, roughness: 0.9 });
    const wick = new THREE.Mesh(wickGeo, wickMat);
    wick.position.set(0.2, 0.38, 0.1);
    mainGroup.add(wick);

    // --- 3D Flame Hierarchy ---
    const flameGroup = new THREE.Group();
    flameGroup.position.set(0.18, 0.6, 0.1);
    mainGroup.add(flameGroup);

    // Inner Flame (Hot Yellow Core)
    const innerFlameGeo = new THREE.ConeGeometry(0.16, 0.5, 16);
    const innerFlameMat = new THREE.MeshBasicMaterial({
      color: 0xfffbeb,
      transparent: true,
      opacity: 0.95,
    });
    const innerFlame = new THREE.Mesh(innerFlameGeo, innerFlameMat);
    innerFlame.position.y = 0.25;
    flameGroup.add(innerFlame);

    // Middle Flame (Radiant Gold)
    const midFlameGeo = new THREE.ConeGeometry(0.26, 0.65, 16);
    const midFlameMat = new THREE.MeshBasicMaterial({
      color: 0xf59e0b,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending,
    });
    const midFlame = new THREE.Mesh(midFlameGeo, midFlameMat);
    midFlame.position.y = 0.3;
    flameGroup.add(midFlame);

    // Outer Flame Halo (Vermilion Aura)
    const outerFlameGeo = new THREE.ConeGeometry(0.36, 0.8, 16);
    const outerFlameMat = new THREE.MeshBasicMaterial({
      color: 0xe11d48,
      transparent: true,
      opacity: 0.3,
      blending: THREE.AdditiveBlending,
    });
    const outerFlame = new THREE.Mesh(outerFlameGeo, outerFlameMat);
    outerFlame.position.y = 0.35;
    flameGroup.add(outerFlame);

    // --- 3D Floating Dhanteras Gold Coins ---
    const coinCount = 6;
    const coins: THREE.Mesh[] = [];
    const coinGeo = new THREE.CylinderGeometry(0.26, 0.26, 0.04, 24);
    coinGeo.rotateX(Math.PI / 2);

    const coinMat = new THREE.MeshStandardMaterial({
      color: 0xf59e0b,
      metalness: 0.92,
      roughness: 0.18,
    });

    for (let i = 0; i < coinCount; i++) {
      const coin = new THREE.Mesh(coinGeo, coinMat);
      const angle = (i / coinCount) * Math.PI * 2;
      const radius = 2.0 + (i % 2) * 0.4;
      coin.position.set(
        Math.cos(angle) * radius,
        0.3 + (i % 3) * 0.4,
        Math.sin(angle) * radius * 0.8
      );
      coin.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, 0);
      mainGroup.add(coin);
      coins.push(coin);
    }

    // --- 3D Cyber Shield Holographic Orbit ---
    const shieldOrbitGeo = new THREE.IcosahedronGeometry(2.3, 1);
    const shieldOrbitMat = new THREE.MeshBasicMaterial({
      color: 0x10b981,
      wireframe: true,
      transparent: true,
      opacity: 0.22,
    });
    const cyberShieldOrbit = new THREE.Mesh(shieldOrbitGeo, shieldOrbitMat);
    cyberShieldOrbit.position.y = 0.5;
    mainGroup.add(cyberShieldOrbit);

    // Additional Cyber Rings
    const ringGeo = new THREE.TorusGeometry(2.1, 0.015, 12, 64);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x06b6d4,
      transparent: true,
      opacity: 0.4,
    });
    const cyberRing = new THREE.Mesh(ringGeo, ringMat);
    cyberRing.rotation.x = Math.PI / 3;
    cyberRing.position.y = 0.5;
    mainGroup.add(cyberRing);

    // --- Rising Embers Particle Field ---
    const emberCount = 50;
    const emberGeo = new THREE.BufferGeometry();
    const emberPositions = new Float32Array(emberCount * 3);
    const emberVelocities: { x: number; y: number; z: number }[] = [];

    for (let i = 0; i < emberCount; i++) {
      emberPositions[i * 3] = (Math.random() - 0.5) * 1.5;
      emberPositions[i * 3 + 1] = 0.5 + Math.random() * 2;
      emberPositions[i * 3 + 2] = (Math.random() - 0.5) * 1.5;
      emberVelocities.push({
        x: (Math.random() - 0.5) * 0.005,
        y: 0.008 + Math.random() * 0.012,
        z: (Math.random() - 0.5) * 0.005,
      });
    }

    emberGeo.setAttribute('position', new THREE.BufferAttribute(emberPositions, 3));
    const emberMat = new THREE.PointsMaterial({
      color: 0xfdba74,
      size: 0.045,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    });
    const embers = new THREE.Points(emberGeo, emberMat);
    mainGroup.add(embers);

    // 4. Mouse / Touch Parallax Interaction
    let targetRotationX = 0.2;
    let targetRotationY = 0;
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      mouseX = x;
      mouseY = y;
      targetRotationY = x * 0.6;
      targetRotationX = 0.2 - y * 0.35;
    };

    container.addEventListener('mousemove', handleMouseMove);

    // 5. Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth camera / scene tilt lerp
      mainGroup.rotation.y += (targetRotationY - mainGroup.rotation.y) * 0.05;
      mainGroup.rotation.x += (targetRotationX - mainGroup.rotation.x) * 0.05;

      // Gentle continuous rotation
      mainGroup.rotation.y += 0.003;

      // Flame flickering physics
      const flicker = Math.sin(elapsedTime * 12) * 0.08 + Math.cos(elapsedTime * 19) * 0.04;
      flameGroup.scale.set(1 + flicker, 1 + flicker * 1.5, 1 + flicker);
      flameLight.intensity = 3.8 + Math.sin(elapsedTime * 15) * 0.6;

      // Coins orbit & spinning
      coins.forEach((coin, idx) => {
        coin.rotation.y += 0.02 + idx * 0.004;
        coin.rotation.x += 0.01;
        coin.position.y += Math.sin(elapsedTime * 2 + idx) * 0.003;
      });

      // Cyber Shield Rotation
      cyberShieldOrbit.rotation.y -= 0.005;
      cyberShieldOrbit.rotation.x += 0.002;
      cyberRing.rotation.z += 0.008;

      // Embers floating upward
      const positions = emberGeo.attributes.position.array as Float32Array;
      for (let i = 0; i < emberCount; i++) {
        positions[i * 3 + 1] += emberVelocities[i].y;
        positions[i * 3] += Math.sin(elapsedTime + i) * 0.003;

        // Reset if reached top
        if (positions[i * 3 + 1] > 3.0) {
          positions[i * 3 + 1] = 0.6;
          positions[i * 3] = (Math.random() - 0.5) * 0.6;
          positions[i * 3 + 2] = (Math.random() - 0.5) * 0.6;
        }
      }
      emberGeo.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    // 6. Resize Observer
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    // 7. Cleanup on Unmount (Memory safe rule)
    return () => {
      window.removeEventListener('resize', handleResize);
      container.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);

      // Dispose Geometries and Materials
      bowlGeo.dispose();
      bowlMat.dispose();
      rimGeo.dispose();
      rimMat.dispose();
      wickGeo.dispose();
      wickMat.dispose();
      innerFlameGeo.dispose();
      innerFlameMat.dispose();
      midFlameGeo.dispose();
      midFlameMat.dispose();
      outerFlameGeo.dispose();
      outerFlameMat.dispose();
      coinGeo.dispose();
      coinMat.dispose();
      shieldOrbitGeo.dispose();
      shieldOrbitMat.dispose();
      ringGeo.dispose();
      ringMat.dispose();
      emberGeo.dispose();
      emberMat.dispose();

      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  const handleCanvasClick = () => {
    triggerGoldShower();
    if (soundEnabled) playTempleChime();
  };

  return (
    <div 
      className="relative w-full h-[360px] sm:h-[440px] rounded-3xl overflow-hidden bg-gradient-to-b from-[#0e162a]/60 via-[#070b14]/80 to-[#070a12] border border-amber-500/30 shadow-2xl flex items-center justify-center cursor-grab active:cursor-grabbing select-none group"
      onClick={handleCanvasClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 3D WebGL Canvas Injection */}
      <div ref={containerRef} className="absolute inset-0 w-full h-full" />

      {/* Top Overlay Badge */}
      <div className="absolute top-4 left-4 z-10 flex items-center gap-2 pointer-events-none">
        <span className="px-3 py-1 rounded-full bg-slate-900/90 border border-amber-400/40 text-amber-300 text-xs font-bold flex items-center gap-1.5 shadow-md">
          <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-spin" />
          <span>Interactive 3D WebGL Diya & Cyber Shield</span>
        </span>
        <span className="hidden sm:inline-flex px-2.5 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-emerald-300 text-[11px] font-semibold items-center gap-1">
          <Shield className="w-3 h-3 text-emerald-400" /> 3D Defense Perimeter
        </span>
      </div>

      {/* Bottom Controls / Prompt */}
      <div className="absolute bottom-4 inset-x-0 mx-auto text-center pointer-events-none z-10">
        <span className="px-4 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-amber-500/30 text-[11px] sm:text-xs text-amber-200/90 font-medium tracking-wide shadow-lg inline-flex items-center gap-2">
          <span>👆 Move mouse / drag to inspect in 3D • Click to bless with golden coins</span>
        </span>
      </div>
    </div>
  );
};
