import "./FAQ.css";

function FAQ() {
  return (
    <section className="faq">

      <h2>Frequently Asked Questions</h2>

      <p className="faq-subtitle">
        Everything you need to know about Endiq.
      </p>

      <div className="faq-container">

        <div className="faq-item">
          <h3>Is Endiq free?</h3>
          <p>
            Yes. You can use the Free plan with all essential visual assistance
            features.
          </p>
        </div>

        <div className="faq-item">
          <h3>Do I need to install anything?</h3>
          <p>
            No. Endiq runs directly in your browser with no installation
            required.
          </p>
        </div>

        <div className="faq-item">
          <h3>Are my sessions secure?</h3>
          <p>
            Yes. Endiq uses secure WebRTC connections and encrypted sessions.
          </p>
        </div>

        <div className="faq-item">
          <h3>Where are recordings stored?</h3>
          <p>
            Recordings stay on your own device. Endiq does not upload them by
            default.
          </p>
        </div>

      </div>

    </section>
  );
}

export default FAQ;