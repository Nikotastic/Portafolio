"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function DynamicBackground() {
  const [mounted, setMounted] = useState(false);
  const { scrollYProgress } = useScroll();

  const mouseX = useSpring(0, { stiffness: 50, damping: 20 });
  const mouseY = useSpring(0, { stiffness: 50, damping: 20 });

  useEffect(() => {
    setMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  // Tech fragments to float around
  const techFragments = [
    "0",
    "1",
    "{ }",
    "</>",
    "const",
    "=>",
    "[ ]",
    "px",
    "0x",
  ];

  return (
    <div className="fixed inset-0 -z-50 overflow-hidden bg-slate-950">
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 opacity-50"
      >
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-cyan-400/30 blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[0%] right-[-5%] w-[60%] h-[60%] rounded-full bg-blue-500/25 blur-[160px] animate-float"></div>
        <div className="absolute top-[20%] left-[20%] w-[45%] h-[45%] rounded-full bg-purple-500/20 blur-[110px] animate-float-delay"></div>
      </motion.div>

      <div
        className="absolute inset-0 opacity-[0.25]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(34, 211, 238, 0.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34, 211, 238, 0.2) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      ></div>
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(34, 211, 238, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34, 211, 238, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "20px 20px",
        }}
      ></div>

      <motion.div
        animate={{ y: ["0vh", "100vh"] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute left-0 right-0 h-[1px] bg-white/20 shadow-[0_0_10px_rgba(255,255,255,0.3)] z-10 pointer-events-none"
      />

      {mounted && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-[11px] font-mono text-cyan-300 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)] select-none"
              initial={{
                x: Math.random() * 100 + "%",
                y: Math.random() * 100 + "%",
                opacity: 0,
              }}
              animate={{
                y: [null, "-20vh"],
                opacity: [0, 0.7, 0],
                rotate: [0, 90, 0],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                delay: Math.random() * 15,
                ease: "linear",
              }}
            >
              {techFragments[i % techFragments.length]}
            </motion.div>
          ))}
        </div>
      )}

      <motion.div
        className="absolute inset-0 pointer-events-none z-20"
        style={{
          background: useTransform(
            [mouseX, mouseY],
            ([x, y]) =>
              `radial-gradient(450px circle at ${x}px ${y}px, rgba(34, 211, 238, 0.25), transparent 80%)`
          ),
        }}
      />

      <svg className="absolute inset-0 w-full h-full opacity-[0.05] pointer-events-none">
        <pattern
          id="circuit"
          width="200"
          height="200"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M0 100h40m10 0h20m10 0h40M100 0v40m0 10v20m0 10v40"
            stroke="white"
            fill="none"
          />
          <circle cx="40" cy="100" r="2" fill="white" />
          <circle cx="100" cy="40" r="2" fill="white" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#circuit)" />
      </svg>

      <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <filter id="noiseFilter">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.65"
              numOctaves="3"
              stitchTiles="stitch"
            />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>
      </div>
    </div>
  );
}
