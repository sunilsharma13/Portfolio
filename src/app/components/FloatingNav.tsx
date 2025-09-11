"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const sections = [
  { label: "INTRODUCTION", id: "Intro" },
  { label: "PROJECTS", id: "Projects" },
  { label: "ABOUT", id: "About" },
  { label: "CONTACTS", id: "Contact" },
];

export default function FloatingNav() {
  const handleClick = (id: string) => {
    const section = document.getElementById(id);
    const panels = gsap.utils.toArray(".panel");
    const index = panels.indexOf(section as HTMLElement);

    if (index !== -1) {
      const trigger = ScrollTrigger.getAll().find((t) => t.pin);
      if (trigger) {
        const progress = index / (panels.length - 1);
        const scrollY = trigger.start + progress * (trigger.end - trigger.start);

        gsap.to(window, {
          duration: 1,
          scrollTo: scrollY,
          ease: "power2.inOut",
        });
      }
    }
  };

  return (
    <nav className="fixed top-6 right-8 z-50 flex gap-4 bg-black/40 backdrop-blur-md px-4 py-2 rounded-full shadow-lg">
      {sections.map(({ label, id }) => (
        <button
          key={id}
          onClick={() => handleClick(id)}
          className="cursor-pointer text-white font-medium px-4 py-2 rounded-full border border-transparent hover:border-white transition-all duration-300"
        >
          {label}
        </button>
      ))}
    </nav>
  );
}
