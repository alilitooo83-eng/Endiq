function Toolbar({ onEnd, onShare }) {
  return (
    <footer className="session-toolbar">
      <button>📷</button>
      <button>🔄</button>
      <button>🖍️</button>
      <button>⭕</button>
      <button onClick={onShare}>
    🔗
</button>
      <button>🖼️</button>

      <button className="end-btn" onClick={onEnd}>
  End
</button>
    </footer>
  );
}

export default Toolbar;