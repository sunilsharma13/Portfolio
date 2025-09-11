"use client";
import { motion } from "framer-motion";
import { IoClose } from "react-icons/io5";

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

type Props = {
  project: Project;
  onClose: () => void;
};

export default function ProjectModal({ project, onClose }: Props) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 30 }}
        transition={{ duration: 0.4 }}
        className="bg-[#0e1726] rounded-2xl p-6 max-w-xl w-full text-white relative shadow-xl overflow-y-auto max-h-[90vh]"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-cyan-400 hover:text-white transition"
        >
          <IoClose size={24} />
        </button>

        <h3 className="text-2xl font-semibold mb-2 text-cyan-400">
          {project.title}
        </h3>

        <div className="flex flex-wrap gap-2 mb-3">
          {project.tech.split("·").map((techItem, idx) => (
            <span
              key={idx}
              className="text-xs px-2 py-1 bg-cyan-700/20 rounded-full text-cyan-300"
            >
              {techItem.trim()}
            </span>
          ))}
        </div>

        <p className="text-sm text-gray-300 mb-4">{project.description}</p>

        {project.role && (
          <p className="text-sm text-gray-400 mb-4">
            <span className="text-cyan-300 font-semibold">Role:</span> {project.role}
          </p>
        )}

        {project.features && (
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-cyan-400 mb-2">What I Built</h4>
            <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
              {project.features.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
          </div>
        )}

        {project.challenges && (
          <div className="mb-2">
            <h4 className="text-sm font-semibold text-cyan-400 mb-2">Challenges Faced</h4>
            <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
              {project.challenges.map((c, i) => (
                <li key={i}>{c}</li>
              ))}
            </ul>
          </div>
        )}

        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm text-cyan-300 underline decoration-cyan-400 decoration-2 underline-offset-2 mt-4"
          >
            Visit <span aria-hidden>↗</span>
          </a>
        )}
      </motion.div>
    </div>
  );
}
