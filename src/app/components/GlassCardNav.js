"use client";

import React from "react";
import PropTypes from "prop-types";
import "./GlassCardNav.css"; // Import CSS

export default function GlassCardNav({ items = [], darkMode = true }) {
  return (
    <nav className={`glass-card-nav ${darkMode ? "dark" : "light"}`}>
      <div className="nav-logo">Praneesh</div>
      <ul className="nav-items">
        {items.map((item, idx) => (
          <li key={idx}>
            <a href={item.href}>{item.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

GlassCardNav.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    })
  ).isRequired,
  darkMode: PropTypes.bool,
};
