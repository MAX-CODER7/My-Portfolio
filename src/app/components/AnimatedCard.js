"use client";

import React from "react";
import { motion } from "framer-motion";
import "./AnimatedCard.css";

export default function AnimatedCard({ title, subtitle, cta }) {
  return (
    <motion.div className="ac-card" whileHover={{ translateY: -6, scale: 1.02 }} transition={{ type: "spring", stiffness: 260 }}>
      <div className="ac-card-body">
        <h3 className="ac-title">{title}</h3>
        <p className="ac-sub">{subtitle}</p>
        <div className="ac-footer">
          {cta ? <div className="ac-cta">{cta}</div> : null}
        </div>
      </div>
    </motion.div>
  );
}
