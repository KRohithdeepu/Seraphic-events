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
        <div className="service-card" data-aos="zoom-in">
          <img src={new URL("../../assets/stage-1.jpg", import.meta.url).href} alt="Decor and Staging" />
          <h3>Decor and Staging</h3>
          <p>
            The aim of our company is to design the most attractive stage with lots of 
            art works combining together so that each work merges and complements 
            the other in a harmonious way.
          </p>
        </div>
        <div className="service-card" data-aos="zoom-in">
          <img src={new URL("../../assets/Experience-1.jpg", import.meta.url).href} alt="Experience" />
          <h3>Weddings & Events</h3>
          <p>
            Our specialization and management make us distinct and that creates a 
            lasting impression. We ensure that your weddings & events are filled 
            with elegance and grace, leaving unforgettable memories.
          </p>
        </div>
        <div className="service-card" data-aos="zoom-in">
          <img src={new URL("../../assets/weddings&events-1.jpg", import.meta.url).href} alt="Weddings and Events" />
          <h3>Experience</h3>
          <p>
            To provide you with a dazzling start on the day that you were eagerly 
            looking forward to and to experience the highest happiness on earth, 
            we are with you to create some lovely memories that last for a life 
            beside you.
          </p>
        </div>
      </section>

      <section className="services-grid" data-aos="fade-up">
        <div className="service-card" data-aos="flip-left">
          <img src={new URL("../../assets/WeddingPlanning-1.jpg", import.meta.url).href} alt="Wedding Planning" />
          <h3>Wedding Planning</h3>
          <p>
            The St.Martin Wedding Planners’ plan includes organizing and coordinating
            the wedding, creating moodboards and themes, designing the wedding in 3D, etc.
            When it comes to wedding ideas, we completely let you open up and tell us what
            you need. For the same reasons, we are called the top wedding planners in Kerala.
            The St.Martin Wedding Planners have organized weddings for many cultures and
            traditions, like North-Indian weddings, South Indian weddings, Christian weddings,
            Hindu weddings, and Muslim weddings.
          </p>
        </div>
        <div className="service-card" data-aos="flip-left">
          <img src={new URL("../../assets/Event-management.jpg", import.meta.url).href} alt="Event Management" />
          <h3>Event Management</h3>
          <p>
            Our team’s collective expertise of putting the great shows to life has led us to
            achieve success and build strong and lasting relationships with the brands we’ve
            been associated with. Using creativity and perfection, we do both western and
            traditional event management. We took the client’s idea and ran with it…
          </p>
        </div>
        <div className="service-card" data-aos="flip-left">
          <img src={new URL("../../assets/Decoration-1.jpg", import.meta.url).href} alt="Decoration" />
          <h3>Decoration</h3>
          <p>
            We design attractive stages that combine many art pieces so that they blend and
            complement one another. Our dedicated personnel offer a comprehensive range of
            Decor and Design services, proving our creative concepts to a wide range of
            satisfied customers throughout Kerala. We facilitate the entire event and decor
            planning, layout, and creation process as part of our specialist services.
            Innovative concepts, coupled with creativity and elegance, encapsulates our full
            range of services.
          </p>
        </div>
      </section>

      <section className="services-grid" data-aos="fade-up">
        <div className="services-card" data-aos="fade-right">
          <img src={new URL("../../assets/GrandEntries-1.jpg", import.meta.url).href} alt="Grand Entries" />
          <h3>Grand Entries</h3>
          <p>
            Our speciality is reliable service at an affordable price. We want you to
            sit back and enjoy your day. Vehicle Rental Services has been providing
            independent rental operators with an extensive range of vehicles for over
            a decade at competitive prices.
          </p>
        </div>
        <div className="service-card" data-aos="fade-right">
          <img src={new URL("../../assets/BridalBouquet-1.jpg", import.meta.url).href} alt="Bridal Bouquet" />
          <h3>Bridal Bouquet</h3>
          <p>
            We offer a large range of different designs for wedding bouquets and
            bouquets for bridesmaids and flower girls, all handcrafted to your
            specifications and with the colour scheme of your choice. We offer a
            bespoke, handmade-to-order service. We also offer a range of different
            colours for your selection.
          </p>
        </div>
        <div className="service-card" data-aos="fade-right">
          <img src={new URL("../../assets/LightsandSounds-1.jpg", import.meta.url).href} alt="Light & Sound Management" />
          <h3>Light & Sound Management</h3>
          <p>
            Planning a wedding involves creating moodboards and themes, designing the
            event with light and sound equipment, entertainment, and every other
            detail. Our clients have access to light and sound facilities.
          </p>
        </div>
      </section>

      <section className="services-grid" data-aos="fade-up">
        <div className="service-card" data-aos="zoom-in-up">
          <img src={new URL("../../assets/DestinationWedding-1.jpg", import.meta.url).href} alt="Destination Wedding" />
          <h3>Destination Wedding</h3>
          <p>
            Destination weddings have gained more and more popular in recent years.
            St.Martin Wedding Planners team is one step ahead of the rest in providing you
            with the best destination wedding experience in Kerala. The world is your oyster
            if you want to have your dream destination wedding.
          </p>
        </div>
        <div className="service-card" data-aos="zoom-in-up">
          <img src={new URL("../../assets/Venue.jpg", import.meta.url).href} alt="Venue Hunting & Transportation" />
          <h3>Venue Hunting & Transportation</h3>
          <p>
            Venue hunting and transportation services are vital for a wedding planner to
            provide. It involves finding the perfect venue for the wedding, while transportation
            services help with transporting guests to and from the venue. These services ensure
            a smooth and hitch-free experience for everyone.
          </p>
        </div>
        <div className="service-card" data-aos="zoom-in-up">
          <img src={new URL("../../assets/CarDecoration-1.jpg", import.meta.url).href} alt="Car Decoration" />
          <h3>Car Decoration</h3>
          <p>
            We’ve got some stunning wedding car flower decoration ideas, from a simple
            bouquet to elaborate decors that perfectly suit your wedding theme and make
            every entrance memorable.
          </p>
        </div>
      </section>

      <section className="services-grid" data-aos="fade-up">
        <div className="service-card" data-aos="flip-up">
          <img src={new URL("../../assets/VenueDesign.jpg", import.meta.url).href} alt="Venue Design & Decorations" />
          <h3>Venue Design & Decorations</h3>
          <p>
            Venue design is the visual appearance of a place, including the color scheme, lighting, and overall ambiance. It can help set the tone for a ceremony or reception, making it more memorable for guests. Whether it’s a small ceremony or a huge party, having the right venue design and decorations can make all the difference. So why not give us a call today?
          </p>
        </div>
        <div className="service-card" data-aos="flip-up">
          <img src={new URL("../../assets/Enterntainment.jpg", import.meta.url).href} alt="Entertainment" />
          <h3>Entertainment</h3>
          <p>
            Wedding celebrations are a great way to entertain friends and family, as well as to show your appreciation for the couple’s hard work and dedication. From barbeques to dance parties, there are many ways to have fun and enjoy the occasion. Our team of professionals is available to assist with any aspect of your event, large or small, from planning to execution. So why not give us a call today?
          </p>
        </div>
        <div className="service-card" data-aos="flip-up">
          <img src={new URL("../../assets/WeddingAnnouncement.jpg", import.meta.url).href} alt="Wedding Announcement" />
          <h3>Wedding Announcement</h3>
          <p>
            Are you still searching for the perfect announcement service for your wedding? Look no further! Our experienced writers can help you craft meaningful messages that will resonate with your loved ones. With our professional services, you can be sure that your message will be delivered with grace and style. So don’t hesitate to contact us today.
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
