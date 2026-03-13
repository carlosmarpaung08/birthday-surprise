import PandaAvatar from "../components/PandaAvatar";

export default function SceneGreeting({ name, age, onNext }) {
  return (
    <div className="scene">
      <PandaAvatar emoji="🐼" />
      <h1 className="birthday-title">Happy Birthday, {name}! ✨</h1>
      <div className="age-badge">
        🎂 {age} tahun! 🎂
      </div>
      <div className="card-box">
        <p style={{ fontSize: "1rem", marginBottom: "16px" }}>
          Aku ada pesan spesial buat kamu nih~ 🎀
        </p>
        <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.6)", marginBottom: "4px" }}>
          Siap dibaca?
        </p>
        <button className="btn-link" onClick={onNext}>
          Klik untuk lanjut →
        </button>
      </div>
    </div>
  );
}
