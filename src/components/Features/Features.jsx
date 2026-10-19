import "./Features.css";

function Features() {
  return (
    <section className="features">

      <h2>Why Endiq?</h2>

      <div className="features-grid">

        <div className="feature-card">
          <h3>Instant Connection</h3>
          <p>Connect with anyone in seconds using a secure session link.</p>
        </div>

        <div className="feature-card">
          <h3>HD Video</h3>
          <p>Crystal clear real-time video powered by WebRTC.</p>
        </div>

        <div className="feature-card">
          <h3>Screen Annotation</h3>
          <p>Draw, point and guide directly on the live video.</p>
        </div>

      </div>

    </section>
  );
}

export default Features;