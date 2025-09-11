import React from 'react'
import { FaFacebookF, FaInstagram, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { FaLinkedinIn, FaPinterestP } from "react-icons/fa";
import "./FooterSection.css"

const FooterSection = () => {
    return (
        <div>
            <footer id="contact" className="footer">
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
        </div>
    )
}

export default FooterSection
