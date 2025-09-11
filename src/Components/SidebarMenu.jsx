import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import "./Navbar.css";

const SidebarMenu = ({ isOpen, toggleMenu }) => {
  return (
    <div className={`sidebar ${isOpen ? "active" : ""}`}>
      <button className="close-btn" onClick={toggleMenu}>
        ×
      </button>
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
        >
          <FaInstagram />
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
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link to="/services">Our Services</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
      </ul>
    </div>
  );
};

export default SidebarMenu;
