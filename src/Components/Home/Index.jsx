import React, { useState, useEffect } from "react";
import "./Index.css";
import logo from "../../assets/logo.jpg"; // converted logo file
import { Link } from "react-router-dom";

// Import hero images
import hero1 from "../../assets/Hero_Section_Image-1.jpg";
import hero2 from "../../assets/Hero_Section_Image-2.jpg";
import hero3 from "../../assets/Hero_Section_Image-3.jpg";
import hero4 from "../../assets/Hero_Section_Image-4.jpg";
import hero5 from "../../assets/Hero_Section_Image-5.jpg";
import hero6 from "../../assets/Hero_Section_Image-6.jpg";
import hero7 from "../../assets/Hero_Section_Image-7.jpg";
import hero8 from "../../assets/Hero_Section_Image-8.jpg";
import hero9 from "../../assets/Hero_Section_Image-9.jpg";
import hero10 from "../../assets/Hero_Section_Image-10.jpg";


// Import images manually
import DecorationImage1 from "../../assets/Decoration_Image-1.jpg";
import DecorationImage2 from "../../assets/Decoration_Image-2.jpg";
import DecorationImage3 from "../../assets/Decoration_Image-3.jpg";
import DecorationImage4 from "../../assets/Decoration_Image-4.jpg";

import BridalImage1 from "../../assets/Bridal_Image-1.jpg";

import EventsImage1 from "../../assets/Events_Images-1.jpg";
import EventsImage2 from "../../assets/Events_Images-2.jpg";

// Import event section images
import Events_Section_Images_1 from "../../assets/Events_Section_Images-1.jpg";
import Events_Section_Images_2 from "../../assets/Events_Section_Images-2.jpg";
import Events_Section_Images_3 from "../../assets/Events_Section_Images-3.jpg";
import FloralImage1 from "../../assets/Floral_Image-1.jpg";
import FloralImage2 from "../../assets/Floral_Image-2.jpg";


// Import icons
import { FaFacebookF, FaInstagram, FaPhoneAlt, FaEnvelope ,FaWhatsapp } from "react-icons/fa";

import {FaLinkedinIn, FaPinterestP } from "react-icons/fa";

const Index = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const images = [hero6,hero7,hero8,hero1,hero10];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Auto slideshow effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="home-container">
      {/* Navbar */}
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

      {/* Hero Section with Slideshow */}
      <header
        className="hero-section"
        style={{ backgroundImage: `url(${images[currentImage]})` }}
      >
        <div className="overlay"></div>
        <div className="hero-content">
          <h1>Get Married In Style</h1>
          <p>
            To a new epoch of your life and to a delicate beginning, we Seraphic
            event planners are here with you to make it more exceptional.
          </p>
        </div>
      </header>
      {/* Left Arrow */}
  <button
    className="arrow arrow-left"
    onClick={() =>
      setCurrentImage((prev) =>
        prev === 0 ? images.length - 1 : prev - 1
      )
    }
  >
    &#10094;
  </button>

  {/* Right Arrow */}
  <button
    className="arrow arrow-right"
    onClick={() =>
      setCurrentImage((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      )
    }
  >
    &#10095;
  </button>
        {/* Blue Section Text */}
      <div className="blue-text-section">
        <p>We Are Getting A Heaven Ready For Your Wonderful Day</p>
        </div>
{/* About Section */}
<section className="about-section">
  <h2>Designing Exceptional Weddings</h2>
  <div className="underline"></div>
  <p>
    We, Seraphic Wedding Planners are honored each time when you pick us. 
    Experience an alluring wedding and a beautifully carved love story of yours with us. 
    2009 paved a way for us to kickstart our journey and by 2018 Best Entrepreneur Award 
    came in search of us. Soon after that, another recognition for business excellence was 
    an award from Lexus in 2022. Choosing us is equal to witnessing a splendid and 
    well-oriented event with an exquisite touch.
  </p>
</section>
{/* Events Section */}
<section className="events-section">
  <div className="event-card">
    <img src={Events_Section_Images_1} alt="Bespoke Weddings" />
        <h3>Corporate Galas</h3>
    <p>
      From award nights to product launches, we specialize in creating 
      sophisticated and memorable corporate galas that leave a lasting 
      impression on your guests and business partners.
    </p>
  </div>

  <div className="event-card">
    <img src={Events_Section_Images_2} alt="Corporate Galas" />
        <h3>Bespoke Weddings</h3>

    <p>
      Our bespoke weddings are tailored to reflect your unique love story, 
      ensuring every detail is crafted to perfection. From intimate gatherings 
      to grand celebrations, we bring your dream wedding to life.
    </p>
  </div>

  <div className="event-card">
    <img src={Events_Section_Images_3} alt="Luxury Events" />
    <h3>Luxury Events</h3>
    <p>
      Step into a world of grandeur with our luxury events, curated with 
      exquisite decor, elite services, and unmatched attention to detail — 
      turning every occasion into an unforgettable experience.
    </p>
  </div>
</section>

<section 
  className="floral-section" 
  style={{ backgroundImage: `url(${FloralImage1})` }}
>
  <div className="floral-overlay"></div>
  <div className="floral-content">
    <p className="floral-subtitle">Floral destination</p>
    <h2>Azalea</h2>
    <p className="floral-quote">
      “spreading love to your loved ones by sending them a lovely gift which they admire the most.”
    </p>
    <p className="floral-desc">
      Giving a glorious and heavenly ambience on your amazing day with original imported floral accessories.
    </p>
    <button className="floral-btn">MORE INFO</button>
  </div>
</section>
<section className="featured-products">
  <h2>Featured Products</h2>
  <div className="underline"></div>
  <p>
    The wedding day is the most rousing and awaited day in most of our lives. 
    Each wedding has a distinct story to share and we St Martin are happy to present your story 
    in the most quirky way. We undergo the best professional services and have a handful 
    of an experienced team with us for smooth functioning.
  </p>
</section>

<section className="featured-services">
      {/* Left Column - Decoration */}
      <div className="service-box">
        <h2>Decoration</h2>
        <p>
          Proper decoration can make an event to the next level. It gives extra pleasure 
          and happiness. We assure you the best decoration services to make it more dainty.
        </p>
        <button className="btn-learn">LEARN MORE</button>
        <img src={DecorationImage1} alt="Decoration" />
                <img src={DecorationImage2} alt="Decoration" />

        
      </div>

      {/* Middle Column - Bridal Image */}
      <div className="service-image">
        <img src={BridalImage1} alt="Bridal" />
        <div className="bridal-text">
    <h2>Bridal Bouquet</h2>
    <p>
      Your wedding day is partial without a bridal bouquet. It makes you bloom 
      like a real flower inside. Flowers bring that special essence and make 
      your day more colorful.
    </p>
    <button className="btn-learn">LEARN MORE</button>
  </div>
      </div>

      {/* Right Column - Custom Events */}
      <div className="service-box">
        <h2>Custom Events</h2>
        <p>
          What we do is join with our customers to narrate their fairytales in 
          consonance with the way they want. Our happiness is making our client’s 
          happy and to be a part of our story, you are just a few steps away 
          from initiating your wedding pages.
        </p>
        <button className="btn-learn">DETAILS</button>
        <img src={EventsImage1} alt="Custom Events" />
                <img src={EventsImage2} alt="Custom Events" />

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
