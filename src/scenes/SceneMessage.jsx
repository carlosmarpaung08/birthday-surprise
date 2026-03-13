import { useState, useEffect } from "react";
import PandaAvatar from "../components/PandaAvatar";

function getAgeMessage(age) {
  if (age <= 15) return `Masih ${age} tahun~ Nikmatin masa kecilmu ya! 🧸`;
  if (age <= 19) return `Ga kerasa udah ${age} tahun aja ya~ Enjoy your youth! 🌈`;
  if (age === 20) return "Ga kerasa udah dua dekade aja ya! Welcome to adulthood~ 🎓";
  if (age <= 24) return `Ga kerasa udah ${age} tahun aja ya~ Makin dewasa nih! 💫`;
  if (age === 25) return "Ga kerasa udah seperempat abad aja ya. Quarter life crisis belum? 😆";
  if (age <= 29) return `Udah ${age} tahun aja nih~ Makin matang dan kece! 🔥`;
  if (age === 30) return "Welcome to the dirty thirty! 3 dekade sudah~ 🥂";
  if (age <= 39) return `Ga kerasa udah ${age} tahun aja ya~ Umur cuma angka kok! ✨`;
  return `Ga kerasa udah ${age} tahun~ Makin bijak dan makin keren! 👑`;
}

export default function SceneMessage({ name, age, onNext }) {
  const ageMsg = getAgeMessage(age);

  const LINES = [
    "Selamat bertambah usia ya~ 🎂",
    "Makin tua aja yaa >< hehe",
    ageMsg,
    "",
    "Gimana rasanya jadi orang dewasa?",
    "Enak ga? wkwkwk",
    "",
    "Semoga panjang umur, sehat selalu,",
    "dan makin bermanfaat untuk banyak orang~ 💕",
    "",
    "Semoga semua impianmu tercapai,",
    "semua doamu dikabulkan,",
    "dan hidupmu selalu penuh kebahagiaan! 🌟",
  ];

  const [visibleLines, setVisibleLines] = useState(0);
  const [showBtn, setShowBtn] = useState(false);

  useEffect(() => {
    if (visibleLines < LINES.length) {
      const t = setTimeout(() => setVisibleLines((v) => v + 1), 600);
      return () => clearTimeout(t);
    } else {
      const t = setTimeout(() => setShowBtn(true), 800);
      return () => clearTimeout(t);
    }
  }, [visibleLines, LINES.length]);

  return (
    <div className="scene">
      <PandaAvatar emoji="🎂" />
      <h1 className="birthday-title">Happy Birthday, {name}! ✨</h1>
      <div className="card-box" style={{ textAlign: "left" }}>
        {LINES.slice(0, visibleLines).map((line, i) =>
          line === "" ? (
            <br key={i} />
          ) : (
            <p key={i} className={line === ageMsg ? "age-msg-highlight" : ""} style={{
              fontSize: line === ageMsg ? "0.95rem" : "0.9rem",
              marginBottom: "4px",
              animation: "sceneFadeIn 0.4s ease",
              color: line === ageMsg ? undefined : "rgba(255,255,255,0.92)",
              fontWeight: line === ageMsg ? "800" : undefined,
            }}>
              {line}
            </p>
          )
        )}

        {showBtn && (
          <div style={{ marginTop: "20px", textAlign: "center", animation: "sceneFadeIn 0.5s ease" }}>
            <button className="btn-primary" onClick={onNext} style={{ textDecoration: "none" }}>
              Lanjut~ 🎁
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
