"use client";

import React from "react";
import "./IconGrid.css";

export default function IconGrid({ children }) {
  // If children provided, render them; otherwise do nothing
  return (
    <div className="ig-grid">
      {React.Children.map(children, (child, i) => (
        <div className="ig-item" key={i}>
          {child}
        </div>
      ))}
    </div>
  );
}
