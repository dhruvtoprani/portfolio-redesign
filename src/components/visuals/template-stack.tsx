"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const cards = [
  {
    id: "card-1",
    title: "Welcome to my digital space",
    subtitle: "Product, systems, and execution",
    rotation: -14,
    offsetX: 78,
    offsetY: -34,
    opacity: 0.54,
  },
  {
    id: "card-2",
    title: "Signal-rich project snapshots",
    subtitle: "AI, robotics, and operating systems",
    rotation: -10,
    offsetX: 30,
    offsetY: 28,
    opacity: 0.76,
  },
  {
    id: "card-3",
    title: "Dhruv Toprani",
    subtitle: "I build intelligent systems with edge.",
    rotation: -5,
    offsetX: -10,
    offsetY: 90,
    opacity: 1,
  },
];

export function TemplateStack() {
  return (
    <div className="relative min-h-[330px] rounded-3xl p-4 md:min-h-[390px] md:p-6">
      <div className="hero-orb hero-orb--primary" />
      <div className="hero-orb hero-orb--secondary" />

      <div className="absolute left-6 top-5 rounded-full border border-mist/30 bg-black/35 px-4 py-1.5 text-xs tracking-[0.12em] text-mist/95">
        40+ Components
      </div>

      {cards.map((card) => (
        <motion.article
          key={card.id}
          className="glass-panel absolute w-[88%] overflow-hidden p-4 md:w-[84%] md:p-5"
          style={{
            left: `${card.offsetX}px`,
            top: `${card.offsetY}px`,
            transform: `rotate(${card.rotation}deg)`,
            opacity: card.opacity,
          }}
          initial={{ y: 16, opacity: 0 }}
          animate={{ y: 0, opacity: card.opacity }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="text-[11px] tracking-[0.14em] text-mist/80">PORTFOLIO</p>
          <h3 className="mt-2 text-lg font-semibold leading-tight text-smoke md:text-xl">
            {card.title}
          </h3>
          <p className="mt-2 text-sm text-smoke/70">{card.subtitle}</p>

          {card.id === "card-3" ? (
            <div className="mt-4 flex items-center gap-3 rounded-xl border border-mist/25 bg-black/35 p-2.5">
              <Image
                src="/headshot-toprani-bw.png"
                alt="Dhruv Toprani profile"
                width={44}
                height={44}
                className="size-11 rounded-lg object-cover"
              />
              <div>
                <p className="text-sm font-medium text-smoke">Dhruv Toprani</p>
                <p className="text-xs tracking-[0.1em] text-mist/85">
                  SYSTEMS · PRODUCT · AI
                </p>
              </div>
            </div>
          ) : null}
        </motion.article>
      ))}
    </div>
  );
}
