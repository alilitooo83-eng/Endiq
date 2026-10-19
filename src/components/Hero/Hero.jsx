import "./Hero.css";
import heroImage from "../../assets/hero.png";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-content">

        <span className="hero-badge">
          Modern Visual Assistance
        </span>

        <h1>
          Visual Assistance
          <br />
          Without Limits
        </h1>

        <p>
          Connect instantly with anyone through secure,
          real-time video assistance powered by Endiq.
        </p>

        <div className="hero-buttons">
          <button className="btn-primary">
            Start Session
          </button>

          <button className="btn-outline">
            Join Session
          </button>
        </div>

      </div>

      <div className="hero-image">
        <img src={heroImage} alt="Endiq Hero" />
      </div>

    </section>
  );
}

export default Hero;