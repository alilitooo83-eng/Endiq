import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-brand">
          <h2>Endiq</h2>
          <p>
            Modern visual assistance powered by WebRTC and AI.
            Secure, fast and privacy-first.
          </p>
        </div>

        <div className="footer-links">
          <h3>Product</h3>

          <a href="#">Features</a>
          <a href="#">How It Works</a>
          <a href="#">Pricing</a>
          <a href="#">FAQ</a>
        </div>

        <div className="footer-links">
          <h3>Legal</h3>

          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Security</a>
        </div>

        <div className="footer-links">
          <h3>Contact</h3>

          <a href="#">GitHub</a>
          <a href="#">LinkedIn</a>
          <a href="#">Email</a>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 Endiq. All rights reserved.
      </div>

    </footer>
  );
}

export default Footer;