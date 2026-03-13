import { useState } from "react";
import PandaAvatar from "../components/PandaAvatar";

const STAR_MESSAGES = [
  "Satu bintang buat kebaikan hatimu 💛",
  "Dua bintang buat senyummu yang bikin hari cerah ✨",
  "Tiga bintang buat semangat kamu yang gak pernah padam 🌟",
  "Empat bintang buat kamu, yang paling bersinar di antara semuanya ⭐",
];

export default function SceneStars({ name, onNext }) {
  const [clicked, setClicked] = useState([false, false, false, false]);
  const [lastMsg, setLastMsg] = useState("");

  const handleStar = (i) => {
    if (clicked[i]) return;
    const next = [...clicked];
    next[i] = true;
    setClicked(next);
    setLastMsg(STAR_MESSAGES[i]);

    if (next.every(Boolean)) {
      setTimeout(onNext, 1800);
    }
  };

  const allDone = clicked.every(Boolean);

  return (
    <div className="scene">
      <PandaAvatar emoji="🐼" />
      <h1 className="birthday-title">Happy Birthday, {name}! ✨</h1>
      <div className="card-box">
        <p style={{ marginBottom: "4px", fontSize: "1rem" }}>
          {allDone ? "Makasih sudah mengklik semuanya~ 🥰" : "Klik ke-4 bintang di bawah ini!"}
        </p>
        <p style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.5)", marginBottom: "12px" }}>
          {allDone ? "Sebentar lagi ya..." : "Ada kejutan di tiap bintangnya ✨"}
        </p>

        <div className="stars-row">
          {clicked.map((active, i) => (
            <button
              key={i}
              className={`star-btn ${active ? "active" : ""}`}
              onClick={() => handleStar(i)}
              aria-label={`Bintang ${i + 1}`}
            >
              ⭐
            </button>
          ))}
        </div>

        {lastMsg && (
          <div style={{
            marginTop: "12px",
            padding: "10px 14px",
            background: "rgba(255,110,180,0.1)",
            borderRadius: "12px",
            border: "1px solid rgba(255,110,180,0.2)",
            fontSize: "0.85rem",
            color: "rgba(255,255,255,0.9)",
            animation: "sceneFadeIn 0.4s ease"
          }}>
            {lastMsg}
          </div>
        )}
      </div>
    </div>
  );
}
