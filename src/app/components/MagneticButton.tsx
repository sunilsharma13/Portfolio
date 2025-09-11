"use client";
import { useRef } from "react";

export default function MagneticButton() {
  const btnRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const btn = btnRef.current;
    if (!btn) return;
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    btn.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
  };

  const reset = () => {
    const btn = btnRef.current;
    if (btn) btn.style.transform = "translate(0, 0)";
  };

  return (
    <div
      ref={btnRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      className="inline-block transition-transform duration-300 ease-out mt-12"
    >
      <a
        href="mailto:sunilbagra108@gmail.com?subject=Let's%20Build%20Something&body=Hey%20Sunil%2C%0A%0A"
        className="relative bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold py-3 px-8 rounded-full 
                   shadow-[0_0_20px_rgba(0,255,255,0.5)] hover:shadow-[0_0_35px_rgba(0,255,255,0.9)]
                   hover:scale-105 transition-all duration-500 ease-in-out overflow-hidden"
      >
        Email Me
      </a>
    </div>
  );
}
