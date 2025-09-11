"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { skillsData } from "../data/skillsData";
import AmbientParticles from "./AmbientParticles"; // 👈 Add this import

export default function AboutSection() {
  return (
    <div className="relative flex flex-col items-center justify-center h-full bg-gradient-to-br from-[#111827] via-[#1e293b] to-[#0f172a] text-white px-6 py-16 overflow-hidden">
      
      <AmbientParticles /> {/* 👈 Injected particle layer */}

      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold mb-6 text-center drop-shadow-[0_0_25px_rgba(0,255,255,0.7)]"
      >
        About Me
      </motion.h2>

      <div className="flex flex-col md:flex-row items-center md:items-start gap-10 max-w-5xl w-full">
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex-shrink-0 w-40 md:w-48 aspect-square relative rounded-full overflow-hidden border-2 border-cyan-500"
        >
          <Image
            src="/profile.jpeg"
            alt="Sunil Sharma"
            fill
            className="object-cover"
          />
        </motion.div>

        {/* Text & Info */}
        <div className="flex-1 flex flex-col gap-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-gray-300"
          >
            I'm <span className="text-cyan-400 font-semibold">Sunil Sharma</span> — a full-stack
            developer focused on building scalable, performant, and visually engaging web applications.  
            From crafting seamless user interfaces to integrating AI/ML features, CI/CD pipelines, and cloud deployments,  
            I turn complex problems into elegant solutions while keeping code maintainable and robust.
          </motion.p>

          {/* Categorized Skills */}
          <div className="flex flex-col gap-6">
            {Object.entries(skillsData).map(([category, skills]) => (
              <div key={category}>
                <h4 className="text-sm font-semibold text-cyan-400 mb-2 capitalize">
                  {category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs px-3 py-1 bg-cyan-500/20 rounded-full text-cyan-300 font-medium hover:bg-cyan-500/40 transition"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section Divider */}
      <motion.div
        initial={{ opacity: 0, width: "0%" }}
        whileInView={{ opacity: 1, width: "100%" }}
        transition={{ duration: 1.2, delay: 0.5 }}
        className="mt-16 h-[2px] bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 rounded-full"
      />
    </div>
  );
}
