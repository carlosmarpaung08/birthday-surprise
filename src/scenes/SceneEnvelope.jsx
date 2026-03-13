export default function SceneEnvelope({ onOpen }) {
  return (
    <div className="scene">
      <div
        className="envelope-container"
        onClick={onOpen}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === "Enter" && onOpen()}
        aria-label="Buka amplop"
      >
        {/* Animated envelope SVG */}
        <div className="envelope">
          <div className="envelope-body">
            <div className="envelope-flap" />
            <div className="envelope-heart">💌</div>
          </div>
        </div>

        <div className="envelope-label">Bukaa Pesannyaaa!! 💕</div>

        <p className="envelope-hint">✨ klik amplop di atas ✨</p>
      </div>
    </div>
  );
}
