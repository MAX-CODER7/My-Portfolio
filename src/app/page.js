"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Prism from "./components/Prism";
import TiltedCard from "./components/TiltedCard";
import IconGrid from "./components/IconGrid";
import AnimatedCard from "./components/AnimatedCard";
import CardNav from "./components/CardNav";
import { Linkedin } from "lucide-react";

// LinkedIn URL
const LINKEDIN = "https://www.linkedin.com/in/praneesh-l-n-246141328/";

// Skills & Projects data
const skillsData = [
  { name: "React", level: "Expert" },
  { name: "Java", level: "Expert" },
  { name: "Next.js", level: "Intermediate" },
  { name: "Python", level: "Intermediate" },
  { name: "SQL", level: "Intermediate" },
];

const projectsData = [
  {
    title: "Portfolio Website",
    description: "My personal portfolio built with React, Next.js and CSS.",
    linkLabel: "View on LinkedIn",
    link: LINKEDIN
  },
  {
    title: "ACE APPLY",
    description: "Full-stack web app for resume optimization and personalized job discovery.",
    linkLabel: "View on LinkedIn",
    link: LINKEDIN
  },
];

export default function Page() {
  const [darkMode, setDarkMode] = useState(false);

  const navItems = [
    { label: "About", bgColor: "#0D0716", textColor: "#fff", href: "#about" },
    { label: "Skills", bgColor: "#170D27", textColor: "#fff", href: "#skills" },
    { label: "Projects", bgColor: "#271E37", textColor: "#fff", href: "#projects" },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
    hover: { scale: 1.04, y: -6 },
  };

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"} style={{ position: "relative", overflowX: "hidden" }}>
      <Prism />

      {/* CardNav */}
      <CardNav
        items={navItems.map(item => ({
          label: item.label,
          bgColor: item.bgColor,
          textColor: item.textColor,
          links: [{ label: item.label, href: item.href }]
        }))}
        baseColor={darkMode ? "#111" : "rgba(255,255,255,0.04)"}
        menuColor={darkMode ? "#fff" : "#000"}
        buttonBgColor="#111"
        buttonTextColor="#fff"
      />

      {/* Hero Section */}
      <div style={{ display: "flex", justifyContent: "center", marginTop: "6rem", position: "relative" }}>
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
          showMobileWarning={false}
          showTooltip={false}
          displayOverlayContent={true}
          overlayContent={
            <p style={{
              position: "absolute",
              top: "10px",
              left: "10px",
              color: "#fff",
              fontSize: "1.3rem",
              fontWeight: "700",
              textShadow: "0 0 6px rgba(0,0,0,0.6)",
              pointerEvents: "none",
              zIndex: 5
            }}>
              PRANEESH  
            </p>
          }
        />
        {/* Social icons overlay */}
        <div style={{ position: "absolute", bottom: "-20px", right: "0", display: "flex", gap: "1rem" }}>
          <a href={LINKEDIN} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <Linkedin />
          </a>
        </div>
      </div>

      {/* About Me Section */}
      <div id="about" style={{ padding: "4rem 2rem", maxWidth: "900px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>About Me</h2>
        <div style={{ lineHeight: 1.8, color: "rgba(255,255,255,0.9)", fontSize: "1.1rem" }}>
          <p>Aspiring DevOps Engineer | AI/ML Enthusiast | Full-Stack • AWS/GCP</p>
          <p>
            I’m passionate about building scalable software systems, integrating AI into modern applications,
            and automating infrastructure with DevOps best practices.
          </p>
        </div>
      </div>

      {/* Skills Section */}
      <div id="skills" style={{ padding: "4rem 2rem", maxWidth: "900px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "2rem", marginBottom: "2rem" }}>Tech Skills</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: "1rem" }}>
          {skillsData.map((skill, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true, amount: 0.3 }}
            >
              <AnimatedCard title={skill.name} subtitle={skill.level} cta={<a href={LINKEDIN} target="_blank" rel="noreferrer">LinkedIn</a>} />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Projects Section */}
      <div id="projects" style={{ padding: "4rem 2rem", maxWidth: "1200px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "2rem", marginBottom: "2rem" }}>Projects</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "1rem" }}>
          {projectsData.map((proj, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true, amount: 0.3 }}
            >
              <AnimatedCard
                title={proj.title}
                subtitle={proj.description}
                cta={<a href={proj.link} target="_blank" rel="noreferrer">{proj.linkLabel}</a>}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer style={{ textAlign: "center", marginTop: "4rem", padding: "2rem 0", opacity: 0.7 }}>
        © {new Date().getFullYear()} Praneesh — <a href={LINKEDIN} target="_blank" rel="noreferrer">LinkedIn</a>
      </footer>
    </div>
  );
}
