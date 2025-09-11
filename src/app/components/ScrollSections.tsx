"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

import HeroSection from "./HeroSection";
import ProjectsSection from "./ProjectsSection";
import AboutSection from "./AboutSection";
import ContactSection from "./ContactSection";
import FloatingNav from "./FloatingNav";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const sectionLabels = ["INTRODUCTION", "PROJECTS", "ABOUT", "CONTACT"];

export default function ScrollSections() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("INTRO");

  useEffect(() => {
    const container = containerRef.current;
    const wrapper = wrapperRef.current;
    if (!container || !wrapper) return;

    const sections = gsap.utils.toArray<HTMLElement>(".panel");
    const total = sections.length;
    if (total === 0) return;

    gsap.to(wrapper, {
      y: () => -window.innerHeight * (total - 1),
      ease: "none",
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: () => "+=" + window.innerHeight * (total - 1),
        scrub: true,
        pin: true,
        onUpdate: (self) => {
          setProgress(self.progress);
          const index = Math.round(self.progress * (total - 1));
          setActiveSection(sectionLabels[index] || "INTRO");
        },
      },
    });

    sections.forEach((section) => {
      gsap.fromTo(
        section,
        { opacity: 0, scale: 0.9, y: 100 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1.1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: section,
            start: "top center",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    const onResize = () => ScrollTrigger.refresh();
    window.addEventListener("resize", onResize);

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div id="scroll-container" ref={containerRef} className="h-screen overflow-hidden relative">
      {/* 🔥 Scroll Indicator UI */}
      <div className="fixed top-0 left-0 w-full z-50 flex flex-col items-center pointer-events-none">
        {/* Full-width progress line */}
        <div className="w-full h-[4px] bg-white/10 relative">
          <div
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 rounded-full transition-all"
            style={{ width: `${progress * 100}%` }}
          />
        </div>

        {/* Floating section name below the line */}
        <div className="mt-2 text-xs sm:text-sm font-semibold text-cyan-300 tracking-wide bg-black/30 backdrop-blur-md px-4 py-1 rounded-full">
          {activeSection}
        </div>
      </div>

      <FloatingNav />
      <div ref={wrapperRef}>
        <section id="Intro" className="panel h-screen">
          <HeroSection />
        </section>
        <section id="Projects" className="panel h-screen">
          <ProjectsSection />
        </section>
        <section id="About" className="panel h-screen">
          <AboutSection />
        </section>
        <section id="Contact" className="panel h-screen">
          <ContactSection />
        </section>
      </div>
    </div>
  );
}
