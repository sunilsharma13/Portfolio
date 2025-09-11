"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function AmbientParticles() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const particles: { x: number; y: number; r: number; alpha: number }[] = [];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Create particles
    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 2 + 1,
        alpha: Math.random() * 0.5 + 0.2,
      });
    }

    // Animate particles
    particles.forEach((p) => {
      gsap.to(p, {
        x: "+=" + (Math.random() * 20 - 10),
        y: "+=" + (Math.random() * 20 - 10),
        duration: Math.random() * 6 + 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 255, 255, ${p.alpha})`;
        ctx.fill();
      });
      requestAnimationFrame(render);
    };
    render();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full z-0 pointer-events-none"
    />
  );
}
