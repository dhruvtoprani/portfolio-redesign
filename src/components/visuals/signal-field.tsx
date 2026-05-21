"use client";

import { motion } from "framer-motion";

const nodes = [
  { id: "n1", x: 8, y: 26, delay: 0.2 },
  { id: "n2", x: 26, y: 14, delay: 0.5 },
  { id: "n3", x: 42, y: 34, delay: 0.1 },
  { id: "n4", x: 59, y: 18, delay: 0.6 },
  { id: "n5", x: 74, y: 36, delay: 0.35 },
  { id: "n6", x: 90, y: 20, delay: 0.75 },
  { id: "n7", x: 48, y: 62, delay: 0.5 },
];

export function SignalField() {
  return (
    <div className="signal-grid relative h-56 overflow-hidden rounded-2xl border border-beaver/30 bg-black/35 md:h-72">
      {nodes.map((node) => (
        <motion.div
          key={node.id}
          className="absolute h-2.5 w-2.5 rounded-full bg-mist shadow-[0_0_16px_rgba(184,255,249,0.55)]"
          style={{ left: `${node.x}%`, top: `${node.y}%` }}
          initial={{ opacity: 0.2, scale: 0.85 }}
          animate={{ opacity: [0.2, 0.95, 0.3], scale: [0.85, 1.1, 0.9] }}
          transition={{ duration: 4.2, delay: node.delay, repeat: Infinity }}
        />
      ))}
      <motion.div
        className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-mist/50 to-transparent"
        animate={{ opacity: [0.2, 0.8, 0.2], x: ["-8%", "8%", "-8%"] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute bottom-3 left-4 text-[10px] tracking-[0.16em] text-beaver/85">
        SYSTEMS · AI · ROBOTICS · PRODUCT
      </div>
    </div>
  );
}
