import "./HowItWorks.css";

function HowItWorks() {
  return (
    <section className="how-it-works">

      <h2>How It Works</h2>

      <div className="steps">

        <div className="step-card">
          <div className="step-number">1</div>
          <h3>Create Session</h3>
          <p>Start a secure visual assistance session instantly.</p>
        </div>

        <div className="step-card">
          <div className="step-number">2</div>
          <h3>Share the Link</h3>
          <p>Send the session link to anyone with one click.</p>
        </div>

        <div className="step-card">
          <div className="step-number">3</div>
          <h3>Get Visual Help</h3>
          <p>Receive real-time guidance through live video.</p>
        </div>

      </div>

    </section>
  );
}

export default HowItWorks;