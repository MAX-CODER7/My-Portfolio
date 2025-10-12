"use client";

import React from "react";
import Prism from "./components/Prism";             // Prism background
import TiltedCard from "./components/TiltedCard";   // Tilted card hero section
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

export default function Page() {
  return (
    <div className="page-container" style={{ position: "relative", overflowX: "hidden" }}>
      
      {/* Prism background */}
      <Prism />

      {/* Hero TiltedCard */}
      <div style={{ display: "flex", justifyContent: "center", marginTop: "6rem" }}>
        <TiltedCard
          imageSrc="/profile.jpg"
          altText="PRANEESH"
          captionText="Hi, I'm Praneesh"
          containerHeight="300px"
          containerWidth="300px"
          imageHeight="300px"
          imageWidth="300px"
          rotateAmplitude={12}
          scaleOnHover={1.2}
          showMobileWarning={false}
          showTooltip={true}
          displayOverlayContent={true}
          overlayContent={
            <p
              style={{
                position: "absolute",
                top: "10px",
                left: "10px",
                color: "#fff",
                fontSize: "1.2rem",
                fontWeight: "bold",
                textShadow: "0 0 5px rgba(0,0,0,0.5)",
                pointerEvents: "none",
                zIndex: 5
              }}
            >
              PRANEESH
            </p>
          }
        />
      </div>

      {/* Other sections */}
      <About />
      <Skills />
      <Projects />
    </div>
  );
}
