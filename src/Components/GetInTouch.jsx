import React from "react";
import "./GetInTouch.css"
const GetInTouch = () => {
  return (
    <section className="get-in-touch" data-aos="fade-up">
        <h2>Get In Touch</h2>
        <p>
          We would be happy to meet you and make your event memorable, whether
          you call, write, or knock on our door. Be one of our happy faces by
          choosing Seraphic Wedding Planners for your event.
        </p>
    <form className="contact-form" data-aos="fade-up">
      <input type="text" placeholder="Name" required />
      <input type="email" placeholder="Email" required />
      <input type="text" placeholder="Occasion" required />

      <select required>
        <option value="">Budget</option>
        <option value="25000">₹25000</option>
        <option value="50000">₹50000</option>
        <option value="100000">₹100000</option>
        <option value="more">More than ₹100000</option>
      </select>

      <textarea placeholder="Message" rows="5" required></textarea>

      <div className="form-footer">
        <div className="captcha">
          <span>1 + 6 =</span>
          <input type="text" required />
        </div>
        <button type="submit">SEND REQUEST</button>
      </div>
    </form>
  </section>

  );
};

export default GetInTouch;
