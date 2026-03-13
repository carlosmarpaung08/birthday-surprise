import { useEffect, useState } from "react";

const COLORS = ["#ff6eb4", "#c084fc", "#fbbf24", "#34d399", "#60a5fa", "#f9a8d4"];
const SHAPES = ["●", "★", "♥", "✿", "◆"];

export default function Confetti() {
  const [pieces, setPieces] = useState([]);

  useEffect(() => {
    const arr = Array.from({ length: 60 }, (_, i) => ({
      id: i,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      shape: SHAPES[Math.floor(Math.random() * SHAPES.length)],
      left: Math.random() * 100,
      delay: Math.random() * 2,
      duration: 2 + Math.random() * 2,
      size: 10 + Math.random() * 16,
      rotation: Math.random() * 360,
    }));
    setPieces(arr);
  }, []);

  return (
    <div style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 999, overflow: "hidden" }}>
      {pieces.map((p) => (
        <span
          key={p.id}
          style={{
            position: "absolute",
            top: "-20px",
            left: `${p.left}%`,
            color: p.color,
            fontSize: `${p.size}px`,
            animation: `confettiFall ${p.duration}s ${p.delay}s ease-in forwards`,
            transform: `rotate(${p.rotation}deg)`,
          }}
        >
          {p.shape}
          <style>{`
            @keyframes confettiFall {
              0% { top: -20px; opacity: 1; transform: rotate(${p.rotation}deg) translateX(0); }
              100% { top: 110vh; opacity: 0; transform: rotate(${p.rotation + 360}deg) translateX(${(Math.random() - 0.5) * 100}px); }
            }
          `}</style>
        </span>
      ))}
    </div>
  );
}
