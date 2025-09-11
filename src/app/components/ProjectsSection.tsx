"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import ProjectModal from "./ProjectModal";

type Project = {
  title: string;
  tech: string;
  description: string;
  link?: string;
  featured?: boolean;
  role?: string;
  features?: string[];
  challenges?: string[];
};

export default function ProjectsSection() {
  const projects: Project[] = [
    {
      title: "Talesy",
      tech: "Next.js · MongoDB · Firebase · Tiptap · OpenAI",
      description:
        "A modern writing & storytelling platform for creators with rich-editor, media uploads, and AI assistance.",
      link: "https://talesy.in",
      featured: true,
      role: "Full-stack developer",
      features: [
        "Rich text editor with Tiptap",
        "AI-assisted writing via OpenAI",
        "Media uploads with Firebase",
        "MongoDB for scalable storage",
        "Responsive UI with Tailwind"
      ],
      challenges: [
        "Integrating AI suggestions in real-time",
        "Handling large media uploads efficiently",
        "Maintaining editor state across sessions"
      ]
    },
    {
      title: "Knowledge Hub",
      tech: "React · Node.js · Socket.io · MongoDB",
      description:
        "Created a knowledge-sharing platform with interactive UI, animations, and real-time features to boost engagement.",
      role: "Frontend & WebSocket integration",
      features: [
        "Live Q&A with Socket.io",
        "Animated UI with Framer Motion",
        "MongoDB-based topic threads"
      ],
      challenges: [
        "Managing real-time sync across clients",
        "Optimizing socket performance"
      ]
    },
    {
      title: "ShopEase",
      tech: "React · Shopify · Liquid · JavaScript",
      description:
        "Built a mini e-commerce store with cart, checkout, and dynamic product management, similar to Shopify.",
      role: "Frontend developer",
      features: [
        "Product grid with dynamic filtering",
        "Cart and checkout flow",
        "Liquid template customization"
      ],
      challenges: [
        "Integrating Shopify APIs",
        "Handling cart state across pages"
      ]
    },
    {
      title: "DevToolkit",
      tech: "React · Vite · TypeScript · Tailwind",
      description:
        "A developer utility suite to automate workflows, clean configs, and speed up project setup.",
      role: "Solo builder",
      features: [
        "Config cleaner for Tailwind & ESLint",
        "Project scaffolding templates",
        "Responsive dashboard UI"
      ],
      challenges: [
        "Making tools modular and reusable",
        "Balancing speed with flexibility"
      ]
    },
  ];

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="flex flex-col items-center justify-center h-full bg-[#0b1220] text-white px-6 py-16">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-12 text-center"
      >
        Projects
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 w-full max-w-5xl">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            onClick={() => setSelectedProject(p)}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -4 }}
            className={`group relative rounded-2xl p-[1px] h-full flex cursor-pointer ${
              p.featured
                ? "bg-gradient-to-br from-[#1e2a3a] via-[#1f3b4d] to-[#234d6a] shadow-[0_0_40px_rgba(0,255,255,0.3)] hover:shadow-[0_0_60px_rgba(0,255,255,0.4)] transition-shadow duration-500"
                : "bg-gradient-to-r from-cyan-500/30 to-blue-600/30"
            }`}
          >
            <div className="rounded-2xl bg-[#0e1726] p-6 transition-all h-full flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-semibold mb-2 text-cyan-400">
                  {p.title}
                </h3>
                <div className="flex flex-wrap gap-2 mb-3">
                  {p.tech.split("·").map((techItem, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-2 py-1 bg-cyan-700/20 rounded-full text-cyan-300"
                    >
                      {techItem.trim()}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-gray-300 mb-4">{p.description}</p>
              </div>
              {p.link && (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-1 text-sm text-cyan-300 transition-all ${
                    p.featured
                      ? "underline decoration-cyan-400 decoration-2 underline-offset-2"
                      : "group-hover:border-b border-cyan-300"
                  }`}
                  onClick={(e) => e.stopPropagation()}
                >
                  Visit <span aria-hidden>↗</span>
                </a>
              )}
              <div className="mt-6 h-[3px] w-full bg-gradient-to-r from-transparent via-cyan-500/15 to-transparent rounded-full" />
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, width: "0%" }}
        whileInView={{ opacity: 1, width: "100%" }}
        transition={{ duration: 1.2, delay: 0.5 }}
        className="mt-16 h-[2px] bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 rounded-full"
      />

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}
