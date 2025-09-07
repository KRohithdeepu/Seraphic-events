import React from "react";
import "./Index.css";
import logo from "../../assets/logo.jpg"; // converted logo file
import { Link } from "react-router-dom";
// Import icons
import { FaFacebookF, FaInstagram, FaPhoneAlt, FaEnvelope,FaWhatsapp } from "react-icons/fa";
import { useState, useEffect } from "react";
import aboutHero from "../../assets/About_hero-1.jpg"; // ✅ manual import
import Joureny from "../../assets/Joureny-1.jpg"
import Since from "../../assets/Since-1.jpg"
import Trophy from "../../assets/Trophy-1.jpg"
import Gift from "../../assets/Gift-1.jpg"
import Bicycle from "../../assets/Bicycle-1.jpg"



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
          >  <FaInstagram />
          </a>
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
      {/* ✅ About Hero Section */}
      <section className="about-hero">
        <img src={aboutHero} alt="About Us" className="about-hero-img" />
        <div className="about-hero-overlay">
          <h1>About Us</h1>
        </div>
      </section>
      {/* ✅ Journey Section */}
<section className="journey-section">
  <div className="journey-container">
    {/* Left Image */}
    <div className="journey-image">
      <img src={Joureny} alt="Journey" />
    </div>

    {/* Right Content */}
    <div className="journey-content">
      <h2>
        A Journey Worth <br /> Memorable With Us
      </h2>
      <div className="underline"></div>
      <p>
        What makes us stand different is our professionalism, inventiveness,
        and excogitation. Most importantly the way we approach each of our
        clients, clearly understanding their needs, planning according to that,
        and creating the best from it
      </p>
      <p>
        Being a well-reputed and highly recommended event planner, we always
        intend upon creating budget-free events with better output inculcating
        your needs and requirements.
      </p>
      <p>
        Although we are based in Thodupuzha, our competence and potentiality
        traveled beyond the states.
      </p>
      <p>
        Our directors Mr Jomet Francis and Mrs. Arina Jomet are the standing
        pillars of St Martin. Ensuring top quality and reliable products to our
        customers are the first and foremost thing we look up to. Delivering
        quality products on time and within the budget makes us the top-notch
        wedding planners.
      </p>
      <p>
        Our hard works and efforts always helped us in achieving each milestone.
        In 2018 Mr Jomet Francis, our director received Deepika magazine’s Best
        Entrepreneur Award and later in 2022 Mrs. Arina Jomet got the Lexus
        Business Excellence Award. In 2018 Best Wedding Planner Award got from
        ente samrambam.
      </p>
    </div>
  </div>
</section>
{/* ✅ Since 2009 Section */}
<section className="since-section">
  <img src={Since} alt="Since 2009" className="since-bg" />
  <div className="since-overlay">
    <div className="since-content">
      <h2>Since 2009</h2>
      <p>
        In 2009 we started our baby steps in st martin. From there to a leading
        wedding company of now, the journey was so terrific. Over the past 13
        years, we introduced brand-new innovations and marketed a wide range of
        products covering almost all districts in Kerala and other states.
        Thanks to all the customers who stood with us trusting us and now our
        customer base has grown over the years through our hard work and
        achievements. We believe each customer is an asset and truly value them
        all throughout our whole journey.
      </p>
    </div>
  </div>
</section>
{/* ✅ Why Choose Us Section */}
<section className="choose-section">
  <h2>Why Choose Us</h2>
  <div className="underline"></div>

  <div className="choose-container">
    {/* 1. Experience */}
    <div className="choose-item">
      <img src={Trophy} alt="Experience" className="choose-icon" />
      <h3>13 Years of Experience</h3>
      <p>
        A company with 13 years of experience has something to offer. Our stability
        comes from working with the best and brightest in our industry.
      </p>
    </div>

    {/* 2. Loyalty */}
    <div className="choose-item">
      <img src={Gift} alt="Loyalty" className="choose-icon" />
      <h3>Loyalty</h3>
      <p>
        We place a high priority on relationships and customer service. Dedicated and loyal
        employees treat our customers as family and friends.
      </p>
    </div>

    {/* 3. Quality */}
    <div className="choose-item">
      <img src={Bicycle} alt="Quality" className="choose-icon" />
      <h3>Quality</h3>
      <p>
        The testimonials of our customers are a testament to the quality of the
        products & services that we offer.
      </p>
    </div>
  </div>
</section>

{/* ✅ To The World Of Celebrations Section */}
<section className="celebration-section">
  <h2>To The World Of Celebrations</h2>
  <div className="underline"></div>
  <p>
    For a momentous life change and a grand celebration of love and partnership, 
    we st martin planners are happy to join you. We offer one-stop solutions for 
    weddings and other related events in Kerela. From invitations to venue selection, 
    caterers, hospitality, transport, etc we are together with you. 
    We go through every minute detail to make your day a spectacular.
  </p>
</section>
{/* ✅ Testimonial Section */}
<section className="testimonial-section">
  <div className="testimonial-container">
    <blockquote>
      "A perfect wedding. Everything ran smoothly. There was no need of worrying a thing. Everything was well planned and executed. It was a very polite and extraordinary effort put in by the young talented team members. Great thanks for such good effort put in."
    </blockquote>
    <p className="testimonial-author">Albin Thomas</p>
  </div>
</section>
{/* Contact Section */}
<section className="contact-section">
  {/* Left Side - Reach Us */}
  <div className="contact-left">
    <h2>Reach Us</h2>

    <h3>Address</h3>
    <p>
      Nadakkal river mount building, byepass,<br />
      Vengalloor - Kolani Bypass Rd,<br />
      Thodupuzha, Kerala 685608
    </p>

    <h3>Contact</h3>
    <p>
      +91 96052 31796<br />
      info@stmartinweddingplanners.com
    </p>

    <h3>Visit</h3>
    <p>Mon-Sun: 09am – 5pm</p>
  </div>

  {/* Right Side - Get In Touch Form */}
  <div className="contact-right">
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
  <FaWhatsapp size={30} />
</a>

        
    </div>
  );
};

export default Index;
