'use client';
import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import Image from 'next/image';

/* ─── Floating Particle Dot ─── */
function Particle({ delay, duration, x, y, size }: {
  delay: number; duration: number; x: string; y: string; size: number;
}) {
  return (
    <motion.div
      className="absolute rounded-full"
      style={{
        left: x,
        top: y,
        width: size,
        height: size,
        background: 'radial-gradient(circle, #5EEAD4 0%, transparent 70%)',
      }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: [0, 0.8, 0.4, 0.8, 0],
        scale: [0.5, 1.2, 0.9, 1.1, 0.5],
        y: [0, -20, -35, -50, -70],
        x: [0, 5, -3, 8, 2],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  );
}

/* ─── Energy Stream (body → DNA connection) ─── */
function EnergyStream({ index }: { index: number }) {
  const yPos = 25 + index * 12;
  return (
    <motion.div
      className="absolute h-[1px]"
      style={{
        left: '38%',
        top: `${yPos}%`,
        width: '18%',
        background: 'linear-gradient(90deg, transparent, #5EEAD4, #14B8A6, transparent)',
      }}
      initial={{ opacity: 0, scaleX: 0 }}
      animate={{
        opacity: [0, 0.6, 0.3, 0.6, 0],
        scaleX: [0, 1, 0.8, 1, 0],
      }}
      transition={{
        duration: 2.5 + index * 0.3,
        delay: index * 0.7,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  );
}

export function DigitalTwin() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);

  // Mouse parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  const imgX = useTransform(springX, [-0.5, 0.5], [8, -8]);
  const imgY = useTransform(springY, [-0.5, 0.5], [6, -6]);
  const glowX = useTransform(springX, [-0.5, 0.5], [-15, 15]);
  const glowY = useTransform(springY, [-0.5, 0.5], [-10, 10]);

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      mouseX.set(x);
      mouseY.set(y);
    };
    window.addEventListener('mousemove', handleMouse);
    return () => window.removeEventListener('mousemove', handleMouse);
  }, [mouseX, mouseY]);

  // Particles scattered around the image
  const particles = Array.from({ length: 25 }, (_, i) => ({
    x: `${12 + Math.random() * 76}%`,
    y: `${10 + Math.random() * 80}%`,
    size: 3 + Math.random() * 5,
    delay: Math.random() * 5,
    duration: 3 + Math.random() * 4,
  }));

  return (
    <div ref={containerRef} className="relative w-full h-full select-none">
      {/* ── Background glow layers ── */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ x: glowX, y: glowY }}
      >
        {/* Body glow */}
        <div
          className="absolute animate-dt-glow"
          style={{
            left: '10%',
            top: '15%',
            width: '45%',
            height: '70%',
            background: 'radial-gradient(ellipse, rgba(20,184,166,0.2) 0%, transparent 70%)',
            filter: 'blur(30px)',
          }}
        />
        {/* DNA glow */}
        <div
          className="absolute animate-dt-glow-delay"
          style={{
            right: '5%',
            top: '10%',
            width: '40%',
            height: '80%',
            background: 'radial-gradient(ellipse, rgba(94,234,212,0.15) 0%, transparent 70%)',
            filter: 'blur(35px)',
          }}
        />
      </motion.div>

      {/* ── Scan line sweeping down ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
        <div
          className="absolute left-0 right-0 h-[2px] animate-dt-scan"
          style={{
            background: 'linear-gradient(90deg, transparent 5%, #5EEAD4 30%, #14B8A6 50%, #5EEAD4 70%, transparent 95%)',
            boxShadow: '0 0 20px 4px rgba(94,234,212,0.3), 0 0 60px 8px rgba(20,184,166,0.15)',
          }}
        />
      </div>

      {/* ── Main image with parallax ── */}
      <motion.div
        className="relative w-full h-full"
        style={{ x: imgX, y: imgY }}
        initial={{ opacity: 0, scale: 1.05 }}
        animate={loaded ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      >
        <div className="relative w-full h-full">
          <Image
            src="/brand/digital-twin.webp"
            alt="RadioGenomes AI Digital Twin — holographic human body with DNA helix"
            fill
            className="object-contain object-top drop-shadow-[0_0_40px_rgba(20,184,166,0.3)]"
            priority
            onLoad={() => setLoaded(true)}
          />
        </div>
      </motion.div>

      {/* ── Overlay glow pulse on the body region ── */}
      <div className="absolute inset-0 pointer-events-none z-10">
        <div
          className="absolute animate-dt-pulse"
          style={{
            left: '12%',
            top: '20%',
            width: '35%',
            height: '60%',
            background: 'radial-gradient(ellipse, rgba(94,234,212,0.08) 0%, transparent 60%)',
          }}
        />
      </div>

      {/* ── Floating particles ── */}
      <div className="absolute inset-0 pointer-events-none z-10">
        {particles.map((p, i) => (
          <Particle key={i} {...p} />
        ))}
      </div>

      {/* ── Energy streams (body → DNA) ── */}
      <div className="absolute inset-0 pointer-events-none z-10">
        {[0, 1, 2, 3, 4].map((i) => (
          <EnergyStream key={i} index={i} />
        ))}
      </div>

      {/* ── Corner data HUD accents ── */}
      <div className="absolute top-[8%] left-[8%] pointer-events-none z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <div className="w-8 h-[1px] bg-teal-400/40" />
          <div className="w-[1px] h-8 bg-teal-400/40" />
        </motion.div>
      </div>
      <div className="absolute bottom-[8%] right-[8%] pointer-events-none z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ delay: 1.8, duration: 1 }}
          className="flex flex-col items-end"
        >
          <div className="w-8 h-[1px] bg-teal-400/40" />
          <div className="w-[1px] h-8 bg-teal-400/40 ml-auto" />
        </motion.div>
      </div>

      {/* ── Edge vignette for seamless blend ── */}
      <div
        className="absolute inset-0 pointer-events-none z-20"
        style={{
          background: `
            linear-gradient(to right, #020617 0%, transparent 8%, transparent 92%, #020617 100%),
            linear-gradient(to bottom, #020617 0%, transparent 6%, transparent 94%, #020617 100%)
          `,
        }}
      />
    </div>
  );
}
