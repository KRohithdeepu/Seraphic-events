import React from "react";
import "./Index.css";
import logo from "../../assets/logo.jpg"; // converted logo file
import { Link } from "react-router-dom";
// Import icons
import { FaFacebookF, FaInstagram, FaPhoneAlt, FaEnvelope,FaYoutube ,FaWhatsapp } from "react-icons/fa";
import { useState, useEffect } from "react";
import Instagram  from "../../assets/Instagram-1.jpg";
import contact from "../../assets/ContactUs-1.jpg"
import {FaLinkedinIn, FaPinterestP } from "react-icons/fa";
const Index = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  
  };

  return (
    <div >
        <nav className="navbar">
        <div className="navbar-logo">
          <img src={logo} alt="St. Martin Logo" />
          <span></span>
        </div>

        {/* Hamburger Icon */}
        <div className={`hamburger ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>

      {/* Sidebar Menu */}
      <div className={`sidebar ${isOpen ? "active" : ""}`}>
        <button className="close-btn" onClick={toggleMenu}>×</button>

        {/* Social Icons + Phone */}
        <div className="sidebar-top">
          <a
            href="https://www.facebook.com/share/16EMtPrjmE/?mibextid=wwXIfr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.instagram.com/seraphic_event_productions?igsh=dWg1dHVkN2Rwcncw&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
          >  <FaInstagram /></a>
               <a 
            href="https://wa.me/919916388141" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <FaWhatsapp /> 
          </a>


          <a href="tel:+919916388141">
            <FaPhoneAlt /> +91 9916388141
          </a>

          <a href="mailto:Seraphicevents08@gmail.com">
    <FaEnvelope /> Seraphicevents08@gmail.com
  </a>
        </div>

        <ul>
          <li><Link to="/">Home</Link></li>
  <li><Link to="/portfolio">Portfolio</Link></li>
  <li><Link to="/services">Our Services</Link></li>
  <li><Link to="/about">About Us</Link></li>
  <li><Link to="/contact">Contact Us</Link></li>
        </ul>
      </div>
      

<section className="contact-section contact-image-overlay">
  <div className="overlay-content">
    <div className="contact-header">
      <h2>Contact Us</h2>
      <p>
        Change your thoughts and we will change your world. </p>
       
    </div>

    <div className="contact-info">
      <div className="contact-item">
        <h3>Address</h3>
        <p>
          Nadakkal river mount building, bypass, Vengalloor<br />
          Kolani Bypass Rd, Thodupuzha, Kerala 685608
        </p>
      </div>

      <div className="contact-item">
        <h3>Phone</h3>
        <p>+91 9605231796</p>
      </div>
    </div>

    {/* Social Icons */}
    <div className="social-icons">
      <a
        href="https://www.facebook.com/seraphicwedding"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaFacebookF size={30} />
      </a>
      <a
        href="https://www.instagram.com/seraphic_event_productions"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram size={30} />
      </a>
      <a
        href="https://www.youtube.com/channel/seraphic"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaYoutube size={30} />
      </a>
      <a
        href="https://www.linkedin.com/company/seraphicwedding"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedinIn size={30} />
      </a>
    </div>
  </div>

  {/* New Instagram Image Section */}
  <div className="trusted-followers">
    <img src={Instagram} alt="Instagram" />
    <h3>Trusted By 7k Followers</h3>
  </div>
</section>

<section className="get-in-touch">
  <h2>Get In Touch</h2>
  <p>
    We would be happy to meet you and make your event memorable, whether you call,
    write, or knock on our door. Be one of our happy faces by choosing St. Martin
    Wedding Planners for your event.
  </p>  
</section>

<form className="contact-form">
  <input type="text" placeholder="Name" required />
  <input type="email" placeholder="Email" required />

  <input type="text" placeholder="Occasion" required />
  <select required>
    <option value="">Budget</option>
    <option value="25000">₹25000</option>
    <option value="50000">₹50000</option>
    <option value="100000">₹100000</option>
    <option value="more">more than ₹100000</option>
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



{/* Footer Section */}
<footer className="footer">
  <div className="footer-container">

    {/* Left - Contact Info */}
    <div className="footer-column">
      <h3>Seraphic</h3>
      <p>1B, 139, Block B, New Industrial TWP 1</p>
      <p>New Industrial Town Faridabad, Haryana 121001</p>
      <p>+91 9916388141</p>
      <p>Seraphicevents08@gmail.com</p>
    </div>

    {/* Middle - About & Social */}
    <div className="footer-column">
      <p>
        Seraphic Events is a premier wedding and event planning company offering
        exceptional services since 2009. We specialize in weddings, corporate
        events, and luxury celebrations — crafting unforgettable experiences.
      </p>
      <div className="footer-socials">
        <div className="footer-socials">
  <a href="https://www.instagram.com/seraphic_event_productions?igsh=dWg1dHVkN2Rwcncw&utm_source=qr" target="blank"><FaInstagram /></a>
  <a href="https://www.facebook.com/share/16EMtPrjmE/?mibextid=wwXIfr" target="blank"><FaFacebookF /></a>
  <a href="#"><FaLinkedinIn /></a>
  <a href="#"><FaPinterestP /></a>
</div>

      </div>
    </div>

    {/* Right - Google Map */}
    <div className="footer-column">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.1516!2d77.317!3d28.4089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cdb123456!2sFaridabad!5e0!3m2!1sen!2sin!4v1633456000000"
        width="100%"
        height="200"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </div>

  {/* Copyright */}
  <div className="footer-bottom">
    <p>© 2025 Seraphic Events. All Rights Reserved.</p>
  </div>
</footer>

{/* WhatsApp Floating Button */}
<a 
  href="https://wa.me/919605231796" 
  target="_blank" 
  rel="noopener noreferrer"
  className="whatsapp-float"
>
  <FaWhatsapp size={30} color="#fff" />   {/* ✅ Force white icon */}
</a>

        
    </div>
  );
};

export default Index;
