import "./Security.css";

function Security() {
  return (
    <section className="security">

      <h2>Security & Privacy</h2>

      <p className="security-subtitle">
        Your sessions stay private, secure and under your control.
      </p>

      <div className="security-grid">

        <div className="security-card">
          <div className="security-icon">🔒</div>
          <h3>End-to-End Encryption</h3>
          <p>Every session is encrypted from start to finish.</p>
        </div>

        <div className="security-card">
          <div className="security-icon">🛡️</div>
          <h3>Secure WebRTC</h3>
          <p>Direct peer-to-peer communication without unnecessary intermediaries.</p>
        </div>

        <div className="security-card">
          <div className="security-icon">💾</div>
          <h3>Local Recording</h3>
          <p>Recordings remain on your own device. Endiq does not upload them by default.</p>
        </div>

        <div className="security-card">
          <div className="security-icon">🌍</div>
          <h3>Privacy First</h3>
          <p>Your data belongs to you. Privacy is part of the product, not an extra feature.</p>
        </div>

      </div>

    </section>
  );
}

export default Security;