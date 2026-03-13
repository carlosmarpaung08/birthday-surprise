import { useState } from "react";
import PandaAvatar from "../components/PandaAvatar";

const YES_RESPONSES = [
  {
    emoji: "😂",
    msg: `Udah gede, ga usah kado-kadoan~ Doaku aja udah cukup kok! wkwk 💕`
  },
];

const NO_RESPONSES = [
  {
    emoji: "😤",
    msg: "Nah gitu dong! Dewasa banget~ tapi tetep dikasih kok hehe 🎀"
  }
];

export default function SceneGift({ name, onNext }) {
  const [response, setResponse] = useState(null);

  const handleYes = () => setResponse(YES_RESPONSES[0]);
  const handleNo = () => setResponse(NO_RESPONSES[0]);

  return (
    <div className="scene">
      <PandaAvatar emoji="🎁" />
      <h1 className="birthday-title">Pssstt, {name}...</h1>
      <div className="card-box">
        {!response ? (
          <>
            <p style={{ fontSize: "1.05rem", marginBottom: "8px" }}>
              Mau kado ga? 🎁
            </p>
            <p style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.5)", marginBottom: "4px" }}>
              Jujur aja, ga ada yang ngejudge kok hehe
            </p>
            <div className="gift-buttons">
              <button className="btn-yes" onClick={handleYes}>Mauuu!! 🙋</button>
              <button className="btn-no" onClick={handleNo}>Ga usah deh~</button>
            </div>
          </>
        ) : (
          <>
            <div className="response-box">
              <span style={{ fontSize: "2.5rem", display: "block", marginBottom: "10px" }}>
                {response.emoji}
              </span>
              <p style={{ fontSize: "0.95rem" }}>{response.msg}</p>
            </div>
            <button
              className="btn-primary"
              onClick={onNext}
              style={{ textDecoration: "none", marginTop: "20px" }}
            >
              Selanjutnya~ 💌
            </button>
          </>
        )}
      </div>
    </div>
  );
}
