"use client";

import React from "react";
import GlassSurface from "./GlassSurface";
import "./GlassSurface.css"; // Ensure styles are loaded

export default function CardNav({ items = [] }) {
  return (
    <div
      style={{
        position: "fixed",
        top: "0",
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 999,
        width: "80%",
        display: "flex",
        justifyContent: "center",
        backdropFilter: "blur(12px)",
        borderRadius: "24px",
        overflow: "hidden",
      }}
    >
      <GlassSurface
        width="100%"
        height={80}
        borderRadius={20}
        displace={0}
        distortionScale={-180}
        blur={11}
        backgroundOpacity={0}
        saturation={1}
        redOffset={0}
        greenOffset={10}
        blueOffset={20}
        brightness={50}
        opacity={0.93}
        xChannel="R"
        yChannel="G"
        mixBlendMode="difference"
        className="glass-cardnav"
      >
        <nav
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            gap: "2rem",
          }}
        >
          {items.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              style={{
                color: "#fff",
                fontSize: "1rem",
                textDecoration: "none",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => (e.target.style.color = "#00c6ff")}
              onMouseLeave={(e) => (e.target.style.color = "#fff")}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </GlassSurface>
    </div>
  );
}
