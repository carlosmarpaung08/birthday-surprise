import { useState } from "react";

export default function SceneName({ onSubmit }) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    const trimmed = name.trim();
    const ageNum = parseInt(age, 10);

    if (!trimmed && !age) {
      setError("Isi nama & umur kamu dong~ 🥺");
      return;
    }
    if (!trimmed) {
      setError("Jangan kosong dong namanya~ 🥺");
      return;
    }
    if (!age || isNaN(ageNum) || ageNum < 1 || ageNum > 150) {
      setError("Umurnya diisi yang bener ya~ 😜");
      return;
    }
    onSubmit(trimmed, ageNum);
  };

  return (
    <div className="scene">
      <div className="modal-overlay">
        <div className="modal-box">
          <span className="modal-emoji">🌸</span>
          <h2 style={{
            fontFamily: "'Dancing Script', cursive",
            fontSize: "1.8rem",
            color: "white",
            marginBottom: "8px"
          }}>
            Hei! Kenalan dulu yuk~
          </h2>
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.85rem", marginBottom: "4px" }}>
            Biar pesannya jadi lebih spesial buat kamu 💕
          </p>

          {/* Input Nama */}
          <input
            className="cute-input"
            type="text"
            placeholder="Ketik nama kamu..."
            value={name}
            onChange={(e) => { setName(e.target.value); setError(""); }}
            onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
            autoFocus
            maxLength={30}
          />

          {/* Input Umur */}
          <div className="age-input-group">
            <span className="age-input-icon">🎂</span>
            <input
              className="cute-input age-input"
              type="number"
              placeholder="Umur kamu..."
              value={age}
              onChange={(e) => { setAge(e.target.value); setError(""); }}
              onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
              min={1}
              max={150}
            />
            <span className="age-input-suffix">tahun</span>
          </div>

          {error && (
            <p style={{ color: "#ff6eb4", fontSize: "0.8rem", marginBottom: "8px" }}>{error}</p>
          )}
          <button className="btn-primary" onClick={handleSubmit} style={{ textDecoration: "none" }}>
            Mulai! 🎉
          </button>
        </div>
      </div>
    </div>
  );
}
