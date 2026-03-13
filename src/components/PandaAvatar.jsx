export default function PandaAvatar({ emoji = "🐼" }) {
  return (
    <div className="panda-wrap">
      <div className="panda-avatar">{emoji}</div>
      <div className="sparkle-ring" />
    </div>
  );
}
