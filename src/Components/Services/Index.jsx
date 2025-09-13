import React, { useEffect } from "react";
import "./Index.css";
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
// ✅ Redux
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../../store/uiSlice";
import GetInTouch from "../GetInTouch.jsx";

// ✅ AOS
import SidebarMenu from "../SidebarMenu"; // Adjust the path as necessary
import Navbar from "../Navbar.jsx";
import "../Navbar.css";
import Contact from "../Contacts.jsx";
import Footer from "../Footer.jsx"; // Adjust the path as necessary

import AOS from "aos";
import "aos/dist/aos.css";

const Index = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.ui.isOpen);

  useEffect(() => {
    AOS.init({ duration: 1200, once: false });
  }, []);
  const handleToggleMenu = () => {
      dispatch(toggleMenu());
    };

  return (
    <div>
      <Navbar />

      <SidebarMenu isOpen={isOpen} toggleMenu={handleToggleMenu} />
      {/* About Hero */}
      <section className="about-hero" data-aos="fade-up">
        <img src={new URL("../../assets/Services-hero-1.jpg", import.meta.url).href} alt="About Us" className="about-hero-img" />
        <div className="about-hero-overlay"><h1 data-aos="zoom-in">Our Services</h1></div>
      </section>

      <section className="specialties-section" data-aos="fade-up">
        <h2>Our Specialties</h2>
        <div className="underline"></div>
        <p>
          Throughout our journey, we came across different wedding stories and traditions.
          Each one marked a special growth in our way. We, St Martin Planners, are a global
          event management company that has managed events across the country, successfully
          since 2009. We truly understand our client’s emotional needs and we are always
          here to offer a helping hand to our dear clients just as if we were family members.
        </p>
      </section>

      {/* Services Sections */}
      <section className="services-grid" data-aos="fade-up">
        <div className="services-card" data-aos="zoom-in">
          <img src={new URL("../../assets/Birthday-Decor-I1.jpg", import.meta.url).href} alt="Decor and Staging" />
          <h3>Customized Birthday Decor</h3>
          <p>
            The aim of our company is to design the most attractive Birthday Decoration with lots of 
            art works combining together so that each work merges and complements 
            the other in a harmonious way.
          </p>
        </div>
        <div className="services-card" data-aos="zoom-in">
          <img src={new URL("../../assets/LuxuryEvents-I1.jpg", import.meta.url).href} alt="Experience" />
          <h3>Luxury Events & Weddings</h3>
          <p>
            Our specialization and management make us distinct and that creates a 
            lasting impression. We ensure that your weddings & events are filled 
            with elegance and grace, leaving unforgettable memories.
          </p>
        </div>
        <div className="services-card" data-aos="zoom-in-up">
          <img src={new URL("../../assets/DestinationWedding-1.jpg", import.meta.url).href} alt="Destination Wedding" />
          <h3>Destination Wedding</h3>
          <p>
            Destination weddings have gained more and more popular in recent years.
            Seraphic Wedding Planners team is one step ahead of the rest in providing you
            with the best destination wedding experience in Bengaluru. 
          </p>
        </div>
        
      </section>

      <section className="services-grid" data-aos="fade-up">
        <div className="services-card" data-aos="fade-right">
          <img src={new URL("../../assets/LightsandSounds-1.jpg", import.meta.url).href} alt="Light & Sound Management" />
          <h3>Light & Sound Management</h3>
          <p>
            Planning a wedding involves creating moodboards and themes, designing the
            event with light and sound equipment, entertainment, and every other
            detail. Our clients have access to light and sound facilities.
          </p>
        </div>
        
        <div className="service-card" data-aos="flip-left">
          <img src={new URL("../../assets/Event-management.jpg", import.meta.url).href} alt="Event Management" />
          <h3>Event Concept Creations</h3>
          <p>
            Our team’s collective expertise of putting the great shows to life has led us to
            achieve success and build strong and lasting relationships with the brands we’ve
            been associated with. Using creativity and perfection, we do both western and
            traditional event management. We took the client’s idea and ran with it…
          </p>
        </div>
        <div className="services-card" data-aos="flip-left">
          <img src={new URL("../../assets/Corparate-Events-I1.jpg", import.meta.url).href} alt="Wedding Planning" />
          <h3>Corporate Events</h3>
          <p>
           What we do is join with our customers to narrate their fairytales in
            consonance with the way they want. Our happiness is making our
            client’s happy and to be a part of our story, you are just a few
            steps away from initiating your Events.
          </p>
        </div>
      </section>


      <section className="services-grid" data-aos="fade-up">
        
        <div className="services-card" data-aos="zoom-in-up">
          <img src={new URL("../../assets/Logistics.jpg", import.meta.url).href} alt="Venue Hunting & Transportation" />
          <h3>Logistics and Hospitality</h3>
          <p>
            Logistics and Hospitality services are vital for a wedding planner to
            provide. It involves finding the perfect venue for the wedding, while transportation
            services help with transporting guests to and from the venue. These services ensure
            a smooth and hitch-free experience for everyone.
          </p>
        </div>
        
      </section>


        <GetInTouch />

        <Footer />  {/* Add the footer here */}

      <a href="https://wa.me/919605231796" target="_blank" rel="noopener noreferrer" className="whatsapp-float" data-aos="zoom-in">
        <FaWhatsapp size={30} color="#fff" />
      </a>
    </div>
  );
};

export default Index;
