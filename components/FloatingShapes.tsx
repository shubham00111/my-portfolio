"use client";

import { motion } from "framer-motion";

type ShapeType =
  | "circle"
  | "star"
  | "triangle"
  | "diamond"
  | "pentagon"
  | "bolt"
  | "donut"
  | "squiggle";

interface ShapeConfig {
  id: string;
  type: ShapeType;
  left: string;
  top: string;
  size: number;
  color: string;
  rotation: number;
  duration: number;
  delay: number;
  yRange: number;
}

const SHAPES: ShapeConfig[] = [
  // left column
  { id: "1", type: "circle",   left: "2%",  top: "6%",  size: 70, color: "#ff90e8", rotation: 0,   duration: 4.6, delay: 0,   yRange: 20 },
  { id: "2", type: "star",     left: "8%",  top: "35%", size: 44, color: "#ffde59", rotation: -18, duration: 5.8, delay: 1.2, yRange: 16 },
  { id: "3", type: "triangle", left: "4%",  top: "62%", size: 62, color: "#72ef36", rotation: -10, duration: 4.2, delay: 1.5, yRange: 18 },
  { id: "4", type: "bolt",     left: "1%",  top: "83%", size: 48, color: "#ffc59b", rotation: -6,  duration: 5.4, delay: 0.3, yRange: 22 },
  // right column
  { id: "5", type: "star",     left: "89%", top: "4%",  size: 56, color: "#ffde59", rotation: 20,  duration: 5.1, delay: 0.8, yRange: 17 },
  { id: "6", type: "donut",    left: "91%", top: "28%", size: 50, color: "#99c7fb", rotation: 30,  duration: 4.9, delay: 0.7, yRange: 15 },
  { id: "7", type: "diamond",  left: "87%", top: "52%", size: 52, color: "#c9b1ff", rotation: 22,  duration: 5.6, delay: 0.4, yRange: 14 },
  { id: "8", type: "pentagon", left: "90%", top: "76%", size: 54, color: "#ff90e8", rotation: 10,  duration: 4.4, delay: 1.9, yRange: 19 },
  // small extras near edges
  { id: "9",  type: "circle",  left: "93%", top: "14%", size: 32, color: "#72ef36", rotation: 0,   duration: 3.8, delay: 2.2, yRange: 12 },
  { id: "10", type: "squiggle",left: "6%",  top: "20%", size: 42, color: "#c9b1ff", rotation: 15,  duration: 6.0, delay: 0.6, yRange: 14 },
];

const sw = (size: number) => (100 / size) * 4.5;

function ShapeSVG({ type, color, size }: { type: ShapeType; color: string; size: number }) {
  const s = sw(size);

  const shared = {
    stroke: "#000000",
    strokeWidth: s,
    strokeLinejoin: "round" as const,
  };

  switch (type) {
    case "circle":
      return (
        <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
          <circle cx="50" cy="50" r="44" fill={color} {...shared} />
        </svg>
      );
    case "star":
      return (
        <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
          <polygon
            points="50,5 61,35 95,35 68,57 79,91 50,70 21,91 32,57 5,35 39,35"
            fill={color}
            {...shared}
          />
        </svg>
      );
    case "triangle":
      return (
        <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
          <polygon points="50,6 94,94 6,94" fill={color} {...shared} />
        </svg>
      );
    case "diamond":
      return (
        <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
          <polygon points="50,4 96,50 50,96 4,50" fill={color} {...shared} />
        </svg>
      );
    case "pentagon":
      return (
        <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
          <polygon points="50,7 93,38 77,87 23,87 7,38" fill={color} {...shared} />
        </svg>
      );
    case "bolt":
      return (
        <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
          <path
            d="M58,4 L26,52 L46,52 L40,96 L74,48 L54,48 L66,4 Z"
            fill={color}
            strokeLinecap="round"
            {...shared}
          />
        </svg>
      );
    case "donut":
      return (
        <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
          <circle cx="50" cy="50" r="44" fill={color} {...shared} />
          <circle cx="50" cy="50" r="25" fill="var(--background)" {...shared} />
        </svg>
      );
    case "squiggle":
      return (
        <svg width={size} height={size * 0.6} viewBox="0 0 100 60" fill="none">
          <path
            d="M5,30 C15,5 35,5 50,30 C65,55 85,55 95,30"
            stroke={color}
            strokeWidth={s * 1.5}
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M5,30 C15,5 35,5 50,30 C65,55 85,55 95,30"
            stroke="#000000"
            strokeWidth={s * 1.5}
            strokeLinecap="round"
            fill="none"
            strokeDashoffset="0"
            opacity="1"
            style={{ mixBlendMode: "multiply" }}
          />
        </svg>
      );
    default:
      return null;
  }
}

export default function FloatingShapes() {
  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none select-none"
      aria-hidden="true"
    >
      {SHAPES.map(({ id, type, left, top, size, color, rotation, duration, delay, yRange }) => (
        <motion.div
          key={id}
          className="absolute"
          style={{ left, top }}
          animate={{ y: [0, -yRange, 0] }}
          transition={{ duration, delay, repeat: Infinity, ease: "easeInOut" }}
        >
          <div style={{ transform: `rotate(${rotation}deg)`, opacity: 0.82 }}>
            <ShapeSVG type={type} color={color} size={size} />
          </div>
        </motion.div>
      ))}
    </div>
  );
}
