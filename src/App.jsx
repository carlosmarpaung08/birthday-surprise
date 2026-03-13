import { useState } from "react";
import SceneEnvelope from "./scenes/SceneEnvelope";
import SceneName from "./scenes/SceneName";
import SceneGreeting from "./scenes/SceneGreeting";
import SceneStars from "./scenes/SceneStars";
import SceneMessage from "./scenes/SceneMessage";
import SceneGift from "./scenes/SceneGift";
import SceneEnding from "./scenes/SceneEnding";
import Confetti from "./components/Confetti";
import FloatingHearts from "./components/FloatingHearts";
import "./App.css";

export default function App() {
  const [scene, setScene] = useState("envelope");
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);

  const triggerConfetti = () => {
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 4000);
  };

  const goTo = (next) => {
    if (next === "greeting") triggerConfetti();
    setScene(next);
  };

  return (
    <div className="app-wrapper">
      <FloatingHearts />
      {showConfetti && <Confetti />}

      {scene === "envelope" && <SceneEnvelope onOpen={() => goTo("name")} />}
      {scene === "name" && <SceneName onSubmit={(n, a) => { setName(n); setAge(a); goTo("greeting"); }} />}
      {scene === "greeting" && <SceneGreeting name={name} age={age} onNext={() => goTo("stars")} />}
      {scene === "stars" && <SceneStars name={name} onNext={() => goTo("message")} />}
      {scene === "message" && <SceneMessage name={name} age={age} onNext={() => goTo("gift")} />}
      {scene === "gift" && <SceneGift name={name} onNext={() => goTo("ending")} />}
      {scene === "ending" && <SceneEnding name={name} age={age} />}
    </div>
  );
}
