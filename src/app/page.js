"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";

// Dynamic imports to fix SSR issues
const Prism = dynamic(() => import("./components/Prism"), { ssr: false });
const TiltedCard = dynamic(() => import("./components/TiltedCard"), { ssr: false });
const AnimatedCard = dynamic(() => import("./components/AnimatedCard"), { ssr: false });
const CardNav = dynamic(() => import("./components/CardNav"), { ssr: false });

// LinkedIn URL
const LINKEDIN = "https://www.linkedin.com/in/praneesh-l-n-246141328/";

// Skills & Projects data
const skillsData = [
  { name: "Python", level: "Expert" },
  { name: "C Programming", level: "Expert" },
  { name: "Java", level: "Intermediate" },
  { name: "React", level: "Intermediate" },
  { name: "Next.js", level: "Beginner" },
  { name: "SQL", level: "Expert" },
  { name: "Cloud Integration", level: "Beginner" },
  { name: "AI Automation", level: "Intermediate" },
];

const projectsData = [
  {
    title: "Portfolio Website",
    description: "My personal portfolio built with React, Next.js and CSS.",
    linkLabel: "LinkedIn",
    link: LINKEDIN,
  },
  {
    title: "ACE APPLY",
    description:
      "Full-stack web app for resume optimization and personalized job discovery.",
    linkLabel: "LinkedIn",
    link: LINKEDIN,
  },
  {
    title: "AI HEALTHCARE RECEPTIONIST",
    description:
      "Intelligent virtual assistant for automated patient scheduling and medical triage.",
    linkLabel: "LinkedIn",
    link: LINKEDIN,
  },
];

export default function Page() {
  const [darkMode] = useState(false);

  const navItems = [
    { label: "About", bgColor: "#0D0716", textColor: "#fff", href: "#about" },
    { label: "Skills", bgColor: "#170D27", textColor: "#fff", href: "#skills" },
    { label: "Projects", bgColor: "#271E37", textColor: "#fff", href: "#projects" },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  return (
    <div
      className={darkMode ? "dark-mode" : "light-mode"}
      style={{ position: "relative", overflowX: "hidden", minHeight: "100vh" }}
    >
      <Prism />

      {/* Navigation */}
      <CardNav items={navItems} />

      {/* Hero Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "6rem",
          position: "relative",
        }}
      >
        <TiltedCard
          imageSrc="/profile.jpg"
          altText="PRANEESH"
          captionText="Hi, I'm Praneesh"
          containerHeight="320px"
          containerWidth="320px"
          imageHeight="320px"
          imageWidth="320px"
          rotateAmplitude={12}
          scaleOnHover={1.12}
          showMobileWarning={true}
          showTooltip={true}
          displayOverlayContent={true}
          overlayContent={
            <p
              style={{
                position: "absolute",
                top: "10px",
                left: "10px",
                color: "#fff",
                fontSize: "1.3rem",
                fontWeight: "700",
                textShadow: "0 0 6px rgba(0,0,0,0.6)",
                pointerEvents: "none",
                zIndex: 5,
              }}
            >
              PRANEESH
            </p>
          }
        />
        <div
          style={{
            position: "absolute",
            bottom: "-20px",
            right: "0",
            display: "flex",
            gap: "1rem",
          }}
        >
          <a href={LINKEDIN} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <Linkedin />
          </a>
        </div>
      </motion.div>

      {/* About Section */}
      <motion.div
        id="about"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        style={{
          padding: "4rem 2rem",
          maxWidth: "900px",
          margin: "4rem auto",
          lineHeight: 1.8,
          fontSize: "1.1rem",
          color: "rgba(255,255,255,0.9)",
        }}
      >
        <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>About Me</h2>
        <p>Aspiring DevOps Engineer | AI/ML Enthusiast | Full-Stack • AWS/GCP</p>
        <p>
          I’m passionate about building scalable software systems, integrating AI into modern
          applications, and automating infrastructure with DevOps best practices.
        </p>
      </motion.div>

      {/* Skills Section */}
      <motion.div
        id="skills"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        style={{
          padding: "4rem 2rem",
          maxWidth: "900px",
          margin: "4rem auto",
        }}
      >
        <h2 style={{ fontSize: "2rem", marginBottom: "2rem" }}>Tech Skills</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "1rem",
          }}
        >
          {skillsData.map((skill, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              whileHover={{ scale: 1.05 }}
              variants={fadeUp}
              viewport={{ once: true, amount: 0.3 }}
            >
              <AnimatedCard
                title={skill.name}
                subtitle={skill.level}
                cta={
                  <a href={LINKEDIN} target="_blank" rel="noreferrer">
                    LinkedIn
                  </a>
                }
              />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Projects Section */}
      <motion.div
        id="projects"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        style={{
          padding: "4rem 2rem",
          maxWidth: "1200px",
          margin: "4rem auto",
        }}
      >
        <h2 style={{ fontSize: "2rem", marginBottom: "2rem" }}>Projects</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1rem",
          }}
        >
          {projectsData.map((proj, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              whileHover={{ scale: 1.05 }}
              variants={fadeUp}
              viewport={{ once: true, amount: 0.3 }}
            >
              <AnimatedCard
                title={proj.title}
                subtitle={proj.description}
                cta={
                  <a href={proj.link} target="_blank" rel="noreferrer">
                    {proj.linkLabel}
                  </a>
                }
              />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Footer */}
      <footer
        style={{
          textAlign: "center",
          marginTop: "4rem",
          padding: "2rem 0",
          opacity: 0.7,
        }}
      >
        © {new Date().getFullYear()} Praneesh —{" "}
        <a href={LINKEDIN} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
      </footer>
    </div>
  );
}
