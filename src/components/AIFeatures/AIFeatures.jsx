import "./AIFeatures.css";

function AIFeatures() {
  return (
    <section className="ai-features">

      <h2>AI Features</h2>
      <p className="ai-subtitle">
        Powerful AI tools designed to make visual assistance smarter.
      </p>

      <div className="ai-grid">

        <div className="ai-card">
          <div className="ai-icon">🤖</div>
          <h3>Object Detection</h3>
          <p>Recognize objects instantly during live sessions.</p>
        </div>

        <div className="ai-card">
          <div className="ai-icon">🌍</div>
          <h3>Live Translation</h3>
          <p>Translate conversations in real time.</p>
        </div>

        <div className="ai-card">
          <div className="ai-icon">🎯</div>
          <h3>Smart Guidance</h3>
          <p>AI highlights important areas on the screen.</p>
        </div>

        <div className="ai-card">
          <div className="ai-icon">📝</div>
          <h3>Session Summary</h3>
          <p>Generate an automatic summary after each session.</p>
        </div>

      </div>

    </section>
  );
}

export default AIFeatures;