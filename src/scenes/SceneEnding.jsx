import PandaAvatar from "../components/PandaAvatar";

export default function SceneEnding({ name, age }) {
  return (
    <div className="scene">
      <PandaAvatar emoji="🥳" />
      <h1 className="birthday-title" style={{ fontSize: "2rem" }}>
        You're amazing, {name}!
      </h1>

      <div className="card-box" style={{ textAlign: "center" }}>
        <div className="ending-emoji-row">
          <span>🎂</span>
          <span>🎉</span>
          <span>💕</span>
          <span>✨</span>
          <span>🌸</span>
        </div>

        <p style={{ fontSize: "1rem", marginBottom: "12px" }}>
          Terima kasih sudah jadi dirimu sendiri. Kamu spesial banget, dan dunia jadi lebih indah karena ada kamu~ 🌟
        </p>

        <p className="age-msg-highlight" style={{ fontSize: "0.95rem", marginBottom: "12px", fontWeight: "700" }}>
          Di usia {age} tahun ini, semoga jadi versi terbaik dari dirimu~ ✨
        </p>

        <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.6)", marginBottom: "16px" }}>
          Selamat ulang tahun sekali lagi, <strong style={{ color: "#ff6eb4" }}>{name}</strong>! Semoga hari-harimu selalu seindah dunia ini~ Love you 💞
        </p>

        <div style={{
          marginTop: "8px",
          padding: "10px",
          background: "rgba(255,110,180,0.1)",
          borderRadius: "12px",
          border: "1px solid rgba(255,110,180,0.2)",
        }}>
          <p style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.5)" }}>
            dibuat dengan 💕 khusus buat kamu
          </p>
        </div>
      </div>

      <button
        className="btn-primary"
        style={{ marginTop: "24px", textDecoration: "none" }}
        onClick={() => window.location.reload()}
      >
        Dari Awal Lagi~ 🔄
      </button>
    </div>
  );
}
