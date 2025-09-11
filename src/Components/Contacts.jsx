import React from "react";

const Contact = () => {
  return (
    <section className="contact-section" data-aos="fade-up">
      {/* Left */}
      <div className="contact-left" data-aos="fade-right">
        <h2>Reach Us</h2>

        <h3>Address</h3>
        <p>
          Nadakkal river mount building, byepass,
          <br />
          Vengalloor - Kolani Bypass Rd,
          <br />
          Thodupuzha, Kerala 685608
        </p>

        <h3>Contact</h3>
        <p>
          +91 9916388141
          <br />
          Seraphicevents08@gmail.com
        </p>

        <h3>Visit</h3>
        <p>Mon-Sun: 09am – 5pm</p>
      </div>

      {/* Right */}
      <div className="contact-right" data-aos="fade-left">
        <h2>Get In Touch</h2>
        <form className="contact-form">
          <div className="form-row">
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email Address" />
          </div>
          <textarea placeholder="Message"></textarea>
          <div className="form-bottom">
            <div className="captcha">
              <span>13 + 6 =</span>
              <input type="text" />
            </div>
            <button type="submit">SEND REQUEST</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
