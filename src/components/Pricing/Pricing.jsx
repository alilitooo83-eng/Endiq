import "./Pricing.css";

function Pricing() {
  return (
    <section className="pricing">

      <h2>Simple Pricing</h2>

      <p className="pricing-subtitle">
        Choose the plan that fits your needs.
      </p>

      <div className="pricing-grid">

        <div className="pricing-card">

          <h3>Free</h3>

          <div className="price">$0</div>

          <ul>
            <li>✔ Unlimited Sessions</li>
            <li>✔ HD Video</li>
            <li>✔ Secure WebRTC</li>
            <li>✔ Local Recording</li>
            <li>✔ Screen Drawing</li>
          </ul>

          <button>Get Started</button>

        </div>

        <div className="pricing-card premium">

          <h3>Premium</h3>

          <div className="price">$9<span>/month</span></div>

          <ul>
            <li>✔ Everything in Free</li>
            <li>✔ AI Object Detection</li>
            <li>✔ Live Translation</li>
            <li>✔ AI Session Summary</li>
            <li>✔ Advanced Annotation</li>
            <li>✔ Priority Support</li>
          </ul>

          <button>Go Premium</button>

        </div>

      </div>

    </section>
  );
}

export default Pricing;