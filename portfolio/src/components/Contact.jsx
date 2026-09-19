function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="section-header">
        <h2>Let's Build Something</h2>
      </div>

      <div className="contact-content">
        <div className="contact-info">
          <div className="contact-item">
            <h3>Email</h3>
            <p>faizusayed256@gmail.com</p>
          </div>
          
          <div className="contact-item">
            <h3>Location</h3>
            <p>Mumbai, India</p>
          </div>
        </div>

        <div className="contact-actions">
          <a
            href="mailto:faizusayed256@gmail.com"
            className="action-btn primary"
          >
            Send an Email
          </a>
          <a
            href="https://www.linkedin.com/in/faizsayyed-tech"
            target="_blank"
            rel="noreferrer"
            className="action-btn"
          >
            Connect on LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;