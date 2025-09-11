"use client";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaGoogleDrive } from "react-icons/fa6";
import Image from "next/image";
import AmbientParticles from "./AmbientParticles";

export default function ContactSection() {
  const contacts = [
    {
      label: "WhatsApp",
      link: "https://wa.me/8890199213",
      color: "green",
      icon: <FaWhatsapp className="text-lg" />,
    },
    {
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/sunilsharma13",
      color: "blue",
      icon: <FaLinkedin className="text-lg" />,
    },
    {
      label: "GitHub",
      link: "https://github.com/sunilsharma13",
      color: "blue",
      icon: <FaGithub className="text-lg" />,
    },
    {
      label: "Resume",
      link: "https://drive.google.com/file/d/1YoVPA8XxnrM-QMrcvl2IMcfp07b77HMT/view?usp=drive_link",
      color: "purple",
      icon: <FaGoogleDrive className="text-lg" />,
    },    
    {
      label: "Talesy",
      link: "https://talesy.in/profile",
      color: "sky",
      icon: (
        <span className="flex items-center justify-center w-15 h-15 overflow-hidden">
        <Image
          src="/logo.png"
          alt="Talesy"
          width={20}
          height={20}
          className="object-contain"
          unoptimized
        />
      </span>      
      ),
    },
    {
      label: "X",
      link: "https://twitter.com/Zero_to_Code",
      color: "sky",
      icon: <FaXTwitter className="text-lg" />,
    },
  ];

  return (
    <div className="relative flex flex-col items-center justify-center h-full bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#111827] text-white px-6 py-16 overflow-hidden">
      <AmbientParticles />

      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold mb-6 text-center drop-shadow-[0_0_25px_rgba(0,255,255,0.7)]"
      >
        Contact
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mb-8 text-center max-w-xl text-lg text-gray-300"
      >
        Want to collaborate, share ideas, or build something bold and expressive?  
        I’m always up for turning concepts into unforgettable digital experiences.
      </motion.p>

      <div className="flex flex-wrap justify-center gap-4">
        {contacts.map((c) => (
          <a
            key={c.label}
            href={c.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`group flex items-center gap-2 px-5 py-2.5 rounded-full font-medium transition-all
              text-${c.color}-300 bg-${c.color}-500/20 hover:bg-${c.color}-500/40
              hover:scale-[1.03] hover:shadow-[0_0_20px_rgba(0,255,255,0.3)]`}
          >
            <span className="flex items-center justify-center w-5 h-5">
              {c.icon}
            </span>
            <span className="tracking-wide text-sm">{c.label}</span>
          </a>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, width: "0%" }}
        whileInView={{ opacity: 1, width: "100%" }}
        transition={{ duration: 1.2, delay: 0.5 }}
        className="mt-16 h-[2px] bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 rounded-full"
      />
    </div>
  );
}
