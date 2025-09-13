import React, { useEffect } from "react";
import "./Index.css";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
  FaWhatsapp,
  FaLinkedinIn,
  FaPinterestP,
} from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { toggleMenu } from "../../store/uiSlice";
import Footer from "../Footer.jsx"; 
import SidebarMenu from "../SidebarMenu"; 
import Navbar from "../Navbar.jsx";
import Contact from "../Contacts.jsx";

import AOS from "aos";
import "aos/dist/aos.css";

// ✅ Manually import all images
import aboutHeroImg from "../../assets/About_hero-1.jpg";
import journeyImg from "../../assets/Joureny-1.jpg";
import sinceImg from "../../assets/Since-1.jpg";
import trophyImg from "../../assets/Trophy-1.jpg";
import giftImg from "../../assets/Gift-1.jpg";
import bicycleImg from "../../assets/Bicycle-1.jpg";

const Index = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.ui.isOpen);

  const handleToggleMenu = () => {
    dispatch(toggleMenu());
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const socialLinks = [
    {
      href: "https://www.facebook.com/share/16EMtPrjmE/?mibextid=wwXIfr",
      icon: <FaFacebookF />,
    },
    {
      href: "https://www.instagram.com/seraphic_event_productions?igsh=dWg1dHVkN2Rwcncw&utm_source=qr",
      icon: <FaInstagram />,
    },
    { href: "https://wa.me/919916388141", icon: <FaWhatsapp /> },
    { href: "tel:+919916388141", icon: <FaPhoneAlt />, text: "+91 9916388141" },
    {
      href: "mailto:Seraphicevents08@gmail.com",
      icon: <FaEnvelope />,
      text: "Seraphicevents08@gmail.com",
    },
  ];

  return (
    <div>
      <Navbar />
      <SidebarMenu isOpen={isOpen} toggleMenu={handleToggleMenu} />

      {/* About Hero */}
      <section className="about-hero" data-aos="fade-up">
        <img
          src={aboutHeroImg}
          alt="About Us"
          className="about-hero-img"
        />
        <div className="about-hero-overlay">
          <h1>About Us</h1>
        </div>
      </section>

      {/* Journey */}
      <section className="journey-section" data-aos="fade-right">
        <div className="journey-container">
          <div className="journey-image">
            <img
              src={journeyImg}
              alt="Journey"
            />
          </div>
          <div className="journey-content">
            <h2>
              A Journey Worth <br /> Memorable With Us
            </h2>
            <div className="underline"></div>
            <p>
              What makes us stand different is our professionalism,
              inventiveness, and excogitation. Most importantly the way we
              approach each of our clients, clearly understanding their needs,
              planning according to that, and creating the best from it
            </p>
            <p>
              Being a well-reputed and highly recommended event planner, we
              always intend upon creating budget-free events with better output
              inculcating your needs and requirements.
            </p>
            <p>
              Although we are based in Thodupuzha, our competence and
              potentiality traveled beyond the states.
            </p>
            <p>
              Our directors Mr Jomet Francis and Mrs. Arina Jomet are the
              standing pillars of Seraphic. Ensuring top quality and reliable
              products to our customers are the first and foremost thing we look
              up to. Delivering quality products on time and within the budget
              makes us the top-notch wedding planners.
            </p>
            <p>
              Our hard works and efforts always helped us in achieving each
              milestone. In 2018 Mr Jomet Francis, our director received Deepika
              magazine’s Best Entrepreneur Award and later in 2022 Mrs. Arina
              Jomet got the Lexus Business Excellence Award. In 2018 Best
              Wedding Planner Award got from ente samrambam.
            </p>
          </div>
        </div>
      </section>

      {/* Since 2009 */}
      <section className="since-section" data-aos="fade-up">
        <img
          src={sinceImg}
          alt="Since 2009"
          className="since-bg"
        />
        <div className="since-overlay">
          <div className="since-content">
            <h2>Since 2009</h2>
            <p>
              In 2009 we started our baby steps in Seraphic. From there to a
              leading wedding company of now, the journey was so terrific. Over
              the past 13 years, we introduced brand-new innovations and
              marketed a wide range of products covering almost all districts in
              Kerala and other states. Thanks to all the customers who stood
              with us trusting us and now our customer base has grown over the
              years through our hard work and achievements. We believe each
              customer is an asset and truly value them all throughout our whole
              journey.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="choose-section" data-aos="fade-up">
        <h2>Why Choose Us</h2>
        <div className="underline"></div>
        <div className="choose-container">
          {[
            {
              img: trophyImg,
              title: "13 Years of Experience",
              text: "A company with 13 years of experience has something to offer. Our stability comes from working with the best and brightest in our industry.",
            },
            {
              img: giftImg,
              title: "Loyalty",
              text: "We place a high priority on relationships and customer service. Dedicated and loyal employees treat our customers as family and friends.",
            },
            {
              img: bicycleImg,
              title: "Quality",
              text: "The testimonials of our customers are a testament to the quality of the products & services that we offer.",
            },
          ].map(({ img, title, text }, i) => (
            <div className="choose-item" key={i}>
              <img
                src={img}
                alt={title}
                className="choose-icon"
              />
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Celebration */}
      <section className="celebration-section" data-aos="fade-up">
        <h2>To The World Of Celebrations</h2>
        <div className="underline"></div>
        <p>
          For a momentous life change and a grand celebration of love and
          partnership, we Seraphic planners are happy to join you. We offer
          one-stop solutions for weddings and other related events in Kerela.
          From invitations to venue selection, caterers, hospitality, transport,
          etc we are together with you. We go through every minute detail to
          make your day a spectacular.
        </p>
      </section>

      {/* Testimonial */}
      <section className="testimonial-section" data-aos="fade-up">
        <div className="testimonial-container">
          <blockquote>
            "A perfect wedding. Everything ran smoothly. There was no need of
            worrying a thing. Everything was well planned and executed. It was a
            very polite and extraordinary effort put in by the young talented
            team members. Great thanks for such good effort put in."
          </blockquote>
          <p className="testimonial-author">Albin Thomas</p>
        </div>
      </section>

      <Contact />
      <Footer />  

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/919605231796"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        data-aos="zoom-in"
      >
        <FaWhatsapp size={30} />
      </a>
    </div>
  );
};

export default Index;
