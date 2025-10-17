"use client";

import React, { useRef, useState, useLayoutEffect } from "react";
import { FiMenu, FiX, FiLinkedin, FiGithub, FiMail } from "react-icons/fi";
import "./CardNav.css";

export default function CardNav({ items = [], onToggleTheme, github, linkedin, email }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="rb-cardnav-root" role="navigation" aria-label="Main navigation">
      <div className={`rb-cardnav ${open ? "open" : ""}`}>
        <div className="rb-cardnav-top">
          <button className="rb-hamburger" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"}>
            {open ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>

          <div className="rb-actions">
            <a href={linkedin} target="_blank" rel="noreferrer" className="rb-icon-btn" aria-label="LinkedIn"><FiLinkedin size={18} /></a>
            <a href={github} target="_blank" rel="noreferrer" className="rb-icon-btn" aria-label="GitHub"><FiGithub size={18} /></a>
            <a href={email} className="rb-icon-btn" aria-label="Email"><FiMail size={18} /></a>
            <button className="rb-theme-btn" onClick={() => onToggleTheme && onToggleTheme()} aria-label="Toggle theme">Theme</button>
          </div>
        </div>

        <div className="rb-cardnav-content">
          {items.map((it, idx) => (
            <div key={idx} className="rb-nav-card">
              <a href={it.href || `#${it.label?.toLowerCase()}`} className="rb-nav-card-label">{it.label}</a>
              {it.links && (
                <div className="rb-nav-card-links">
                  {it.links.map((lnk, i) => (
                    <a key={i} href={lnk.href} className="rb-nav-link-item">{lnk.label}</a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
