import React, { useEffect } from "react";
import "./Index.css";
import logo from "../../assets/logo.jpg"; // converted logo file
import { Link } from "react-router-dom";
// Import icons
import {
  FaFacebookF,
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
  FaYoutube,
  FaWhatsapp,
  FaLinkedinIn,
  FaPinterestP,
} from "react-icons/fa";
import Instagram from "../../assets/Instagram-1.jpg";
import Instagram2 from "../../assets/Instagram-2.jpg";
import contact from "../../assets/ContactUs-1.jpg";
import Footer from "../Footer.jsx"; // Adjust the path as necessary
import SidebarMenu from "../SidebarMenu"; // Adjust the path as necessary
import Navbar from "../Navbar.jsx";
import GetInTouch from "../GetInTouch.jsx";

// ✅ AOS
import AOS from 'aos';
import 'aos/dist/aos.css';

// ✅ Redux
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../../store/uiSlice";

const Index = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.ui.isOpen); // Sidebar state from Redux

  // ✅ Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  const handleToggleMenu = () => {
      dispatch(toggleMenu());
    };

  return (
    <div>
      <Navbar />
      <SidebarMenu isOpen={isOpen} toggleMenu={handleToggleMenu} />


      {/* Contact Section */}
      <section className="contact-section contact-image-overlay" data-aos="fade-up">
        <div className="overlay-content">
          <div className="contact-header">
            <h2>Contact Us</h2>
            <p>Change your thoughts and we will change your world. </p>
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
              <p>+91 9916388141</p>
            </div>
          </div>
          <div className="social-icons">
            <a href="https://www.facebook.com/seraphicwedding" target="_blank" rel="noopener noreferrer">
              <FaFacebookF size={30} />
            </a>
            <a href="https://www.instagram.com/seraphic_event_productions" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={30} />
            </a>
            <a href="https://www.youtube.com/channel/seraphic" target="_blank" rel="noopener noreferrer">
              <FaYoutube size={30} />
            </a>
            <a href="https://www.linkedin.com/company/seraphicwedding" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn size={30} />
            </a>
          </div>
        </div>
        <div className="trusted-followers">
          <img src={Instagram2} alt="Instagram" />
          <h3>Trusted By 7k Followers</h3>
        </div>
      </section>

        <GetInTouch />
        <Footer />  {/* Add the footer here */}
      
    </div>
  );
};

export default Index;
