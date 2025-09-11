"use client";
import { motion } from "framer-motion";
import AmbientParticles from "./AmbientParticles"; // 👈 Add this import

export default function HeroSection() {
  return (
    <div className="relative flex flex-col items-center justify-center h-full bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155] text-white px-6 text-center overflow-hidden">
      
      <AmbientParticles /> {/* 👈 Injected particle layer */}

      {/* Animated Headline */}
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-extrabold drop-shadow-[0_0_25px_rgba(0,255,255,0.7)] leading-tight"
      >
        {Array.from("I Build Cinematic Web Experiences").map((char, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.03 }}
            className="inline-block"
          >
            {char}
          </motion.span>
        ))}
      </motion.h1>

      {/* Animated Tagline */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="text-base sm:text-lg md:text-xl mt-6 max-w-xs sm:max-w-lg md:max-w-3xl text-gray-300"
      >
        I'm <span className="text-cyan-400 font-semibold">Sunil Sharma</span> — a full-stack
        developer turning pixels into motion, configs into clarity, and ideas into immersive digital experiences.
        Passionate about React, Next.js, Tailwind, AI/ML, and building smarter interactive web products.
      </motion.p>

      {/* Animated underline */}
      <motion.div
        initial={{ opacity: 0, width: "0%" }}
        animate={{ opacity: 1, width: "100%" }}
        transition={{ duration: 1.2, delay: 1.5 }}
        className="mt-16 h-[2px] bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 rounded-full"
      />

      {/* Background subtle gradient animation */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-tr from-[#0f172a] via-[#1e293b] to-[#334155] -z-20"
        animate={{ backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
}
