import { useState, useEffect, useCallback } from "react";
import PandaAvatar from "../components/PandaAvatar";

function getAgeMessage(age) {
  if (age <= 15) return `Masih ${age} tahun~ Nikmatin masa kecilmu ya! 🧸`;
  if (age <= 19) return `Ga kerasa udah ${age} tahun aja ya~ Enjoy your youth! 🌈`;
  if (age === 20) return "Ga kerasa udah dua dekade aja ya! Welcome to adulthood~ 🎓";
  if (age <= 24) return `Ga kerasa udah ${age} tahun aja ya~ Makin dewasa nih! 💫`;
  if (age === 25) return "Ga kerasa udah seperempat abad aja ya..";
  if (age <= 29) return `Udah ${age} tahun aja nih~ Makin matang dan kece! 🔥`;
  if (age === 30) return "Welcome to the dirty thirty! 3 dekade sudah~ 🥂";
  if (age <= 39) return `Ga kerasa udah ${age} tahun aja ya~ Umur cuma angka kok! ✨`;
  return `Ga kerasa udah ${age} tahun~ Makin bijak dan makin keren! 👑`;
}

export default function SceneMessage({ name, age, onNext }) {
  const ageMsg = getAgeMessage(age);

  // Phase 0: "Tunggu" fade in → fade out
  // Phase 1: "Baca baik-baik yaa" fade in → fade out
  // Phase 2: All main lines appear together
  // Phase 3: Show "Lanjut" button
  // Phase 4: "Dikurangin lagi ya ngambeknya.." fade in → fade out
  // Phase 5: "Doa terbaik buat kamu pokoknyaaa" → fade out
  // Phase 6: "Happy Level Up Day!" final
  const [phase, setPhase] = useState(0);
  const [fadeClass, setFadeClass] = useState("fade-text-enter");

  const MAIN_LINES = [
    `Selamat bertambah usia, ${name} 🎂`,
    ageMsg,
    "Gimana rasanya jadi orang dewasa?",
    "Enak ga? wkwkwk",
    "Semoga panjang umur, sehat selalu, dan lebih bermanfaat untuk banyak orang 💕",
  ];

  const doFadeTransition = useCallback((nextPhase, showDuration = 1800, fadeDuration = 800) => {
    // Stay visible for showDuration, then fade out, then go to next phase
    setTimeout(() => {
      setFadeClass("fade-text-exit");
      setTimeout(() => {
        setPhase(nextPhase);
        setFadeClass("fade-text-enter");
      }, fadeDuration);
    }, showDuration);
  }, []);

  useEffect(() => {
    if (phase === 0) {
      doFadeTransition(1, 1500);
    } else if (phase === 1) {
      doFadeTransition(2, 1800);
    }
    // Phase 2 & 3: wait for user interaction (click "Lanjut")
  }, [phase, doFadeTransition]);

  const handleLanjut = () => {
    setPhase(4);
    setFadeClass("fade-text-enter");
  };

  useEffect(() => {
    if (phase === 4) {
      // "Dikurangin lagi ya ngambeknya.." → show then fade
      doFadeTransition(5, 2200);
    } else if (phase === 5) {
      // "Doa terbaik buat kamu pokoknyaaa" → show then fade → final
      doFadeTransition(6, 2500);
    }
  }, [phase, doFadeTransition]);

  // Phase 0: "Tunggu"
  if (phase === 0) {
    return (
      <div className="scene">
        <PandaAvatar emoji="🎂" />
        <div className="card-box">
          <p className={fadeClass} style={{
            fontSize: "1.4rem",
            fontWeight: "800",
            color: "rgba(255,255,255,0.9)",
            padding: "30px 0"
          }}>
            Tunggu... ✋
          </p>
        </div>
      </div>
    );
  }

  // Phase 1: "Baca baik-baik yaa"
  if (phase === 1) {
    return (
      <div className="scene">
        <PandaAvatar emoji="🎂" />
        <div className="card-box">
          <p className={fadeClass} style={{
            fontSize: "1.2rem",
            fontWeight: "800",
            color: "rgba(255,255,255,0.9)",
            padding: "30px 0"
          }}>
            Baca baik-baik yaa~ 👀
          </p>
        </div>
      </div>
    );
  }

  // Phase 2 & 3: Main lines (all appear together)
  if (phase === 2 || phase === 3) {
    return (
      <div className="scene">
        <PandaAvatar emoji="🎂" />
        <h1 className="birthday-title">Happy Birthday, {name}! ✨</h1>
        <div className="card-box" style={{ textAlign: "left" }}>
          {MAIN_LINES.map((line, i) => (
            <p key={i} className={i === 1 ? "age-msg-highlight" : ""} style={{
              fontSize: i === 1 ? "0.95rem" : "0.9rem",
              marginBottom: i === MAIN_LINES.length - 1 ? "0" : "8px",
              animation: `sceneFadeIn ${0.4 + i * 0.15}s ease`,
              color: i === 1 ? undefined : "rgba(255,255,255,0.92)",
              fontWeight: (i === 0 || i === 1) ? "700" : undefined,
            }}>
              {line}
            </p>
          ))}

          <div style={{
            marginTop: "20px",
            textAlign: "center",
            animation: `sceneFadeIn ${0.4 + MAIN_LINES.length * 0.15}s ease`
          }}>
            <button className="btn-primary" onClick={handleLanjut}>
              Lanjut~ 🎁
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Phase 4: "Dikurangin lagi ya ngambeknya.."
  if (phase === 4) {
    return (
      <div className="scene">
        <PandaAvatar emoji="🎂" />
        <h1 className="birthday-title">Selamat bertambah usia, {name} 🎂</h1>
        <div className="card-box">
          <p className={fadeClass} style={{
            fontSize: "1.05rem",
            fontWeight: "700",
            color: "rgba(255,255,255,0.9)",
            padding: "20px 0"
          }}>
            Dikurangin lagi ya ngambeknya.. 😤
          </p>
        </div>
      </div>
    );
  }

  // Phase 5: "Doa terbaik buat kamu pokoknyaaa"
  if (phase === 5) {
    return (
      <div className="scene">
        <PandaAvatar emoji="🎂" />
        <h1 className="birthday-title">Selamat bertambah usia, {name} 🎂</h1>
        <div className="card-box">
          <p className={fadeClass} style={{
            fontSize: "1.05rem",
            fontWeight: "700",
            color: "rgba(255,255,255,0.9)",
            padding: "20px 0"
          }}>
            Doa terbaik buat kamu pokoknyaaa 💕
          </p>
        </div>
      </div>
    );
  }

  // Phase 6: "Happy Level Up Day!" (final)
  if (phase === 6) {
    return (
      <div className="scene">
        <PandaAvatar emoji="🥳" />
        <div className="card-box" style={{ padding: "40px 28px" }}>
          <h2 className="level-up-title">
            Happy Level Up Day! 🎮✨
          </h2>
          <p style={{
            fontSize: "0.85rem",
            color: "rgba(255,255,255,0.5)",
            marginTop: "16px",
          }}>
            You just unlocked a new year~ 🔓
          </p>
          <button className="btn-primary" onClick={onNext}>
            Selanjutnya~ 🎁
          </button>
        </div>
      </div>
    );
  }

  return null;
}
