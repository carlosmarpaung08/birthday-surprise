import { useMemo } from "react";

export default function FloatingHearts() {
  const items = useMemo(() =>
    Array.from({ length: 18 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: 10 + Math.random() * 18,
      duration: 8 + Math.random() * 10,
      delay: Math.random() * 8,
      emoji: ["💕", "✨", "🌸", "⭐", "💫", "🌟"][Math.floor(Math.random() * 6)],
    })), []);

  return (
    <div style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0, overflow: "hidden" }}>
      {items.map((item) => (
        <span
          key={item.id}
          style={{
            position: "absolute",
            bottom: "-40px",
            left: `${item.left}%`,
            fontSize: `${item.size}px`,
            opacity: 0.25,
            animation: `floatUp ${item.duration}s ${item.delay}s ease-in infinite`,
          }}
        >
          {item.emoji}
        </span>
      ))}
      <style>{`
        @keyframes floatUp {
          0% { bottom: -40px; opacity: 0; transform: translateX(0) rotate(0deg); }
          20% { opacity: 0.3; }
          80% { opacity: 0.15; }
          100% { bottom: 110vh; opacity: 0; transform: translateX(${(Math.random()-0.5)*60}px) rotate(${Math.random()*40-20}deg); }
        }
      `}</style>
    </div>
  );
}
