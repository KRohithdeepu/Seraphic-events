import React, { useState} from "react";
import logo from "../assets/logo.jpg"
import { FaFacebookF, FaInstagram, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import "./NavBar.css"

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);


    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div>
            <nav className="navbar">
                <div className="navbar-logo">
                    <img src={logo} alt="St. Martin Logo" />
                    <a href="#hero"><span>Seraphic Events</span></a>
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
                    <a href="tel:+919916388141">
                        <FaPhoneAlt /> +91 9916388141
                    </a>

                    <a href="mailto:Seraphicevents08@gmail.com">
                        <FaEnvelope /> Seraphicevents08@gmail.com
                    </a>
                </div>

                <ul>
                    <li><a href="#hero" onClick={toggleMenu}>Home</a></li>
                    <li><a href="#events" onClick={toggleMenu}>Our Services</a></li>
                    <li><a href="#about" onClick={toggleMenu}>About Us</a></li>
                    <li><a href="#portfolio" onClick={toggleMenu}>Portfolio</a></li>
                    <li><a href="#contact" onClick={toggleMenu}>Contact Us</a></li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar
