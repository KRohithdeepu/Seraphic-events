import React, { useEffect } from "react";
import "./Index.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { nextImage, prevImage, toggleMenu } from "../../store/heroSlice";
import Footer from "../Footer.jsx"; // Adjust the path as necessary
import SidebarMenu from "../SidebarMenu"; // Adjust the path as necessary
import Navbar from "../Navbar.jsx";
import "../Navbar.css";
import Contact from "../Contacts.jsx";

// Icons
import {
  FaFacebookF,
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
  FaWhatsapp,
  FaLinkedinIn,
  FaPinterestP,
} from "react-icons/fa";

// Import AOS
import AOS from 'aos';
import 'aos/dist/aos.css';

const Index = () => {
  const dispatch = useDispatch();
  const { currentImage, isOpen } = useSelector((state) => state.hero);
const handleToggleMenu = () => {
    dispatch(toggleMenu());
  };

  const images = [
    new URL("../../assets/Hero_Section_Image-6.jpg", import.meta.url).href,
    new URL("../../assets/Hero_Section_Image-7.jpg", import.meta.url).href,
    new URL("../../assets/Hero_Section_Image-8.jpg", import.meta.url).href,
    new URL("../../assets/Hero_Section_Image-1.jpg", import.meta.url).href,
    new URL("../../assets/Hero_Section_Image-10.jpg", import.meta.url).href,
  ];

  // Auto slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(nextImage(images.length));
    }, 4000);
    return () => clearInterval(interval);
  }, [dispatch]);

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="home-container">
     
      <Navbar />

      <SidebarMenu isOpen={isOpen} toggleMenu={handleToggleMenu} />

      {/* Hero Section */}
      <header
        className="hero-section"
        style={{ backgroundImage: `url(${images[currentImage]})` }}
        data-aos="fade-in"
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
      <button
        className="arrow arrow-left"
        onClick={() => dispatch(prevImage(images.length))}
        data-aos="fade-right"
      >
        ❮
      </button>
      <button
        className="arrow arrow-right"
        onClick={() => dispatch(nextImage(images.length))}
        data-aos="fade-left"
      >
        ❯
      </button>

      {/* Blue Section */}
      <div className="blue-text-section" data-aos="fade-up">
        <p>We Are Getting A Heaven Ready For Your Wonderful Day</p>
      </div>

      {/* About */}
      <section className="about-section" data-aos="fade-up">
        <h2>Designing Exceptional Weddings</h2>
        <div className="underline"></div>
        <p>
          We, Seraphic Wedding Planners are honored each time when you pick us.
          Experience an alluring wedding and a beautifully carved love story of
          yours with us. 2009 paved a way for us to kickstart our journey and by
          2018 Best Entrepreneur Award came in search of us. Soon after that,
          another recognition for business excellence was an award from Lexus in
          2022. Choosing us is equal to witnessing a splendid and well-oriented
          event with an exquisite touch.
        </p>
      </section>

      {/* Events Section */}
      <section className="events-section" data-aos="fade-up">
        {[
          {
            img: new URL(
              "../../assets/Events_Section_Images-1.jpg",
              import.meta.url
            ).href,
            title: "Corporate Galas",
            desc: "From award nights to product launches, we specialize in creating sophisticated and memorable corporate galas that leave a lasting impression on your guests and business partners.",
          },
          {
            img: new URL(
              "../../assets/Events_Section_Images-2.jpg",
              import.meta.url
            ).href,
            title: "Bespoke Weddings",
            desc: "Our bespoke weddings are tailored to reflect your unique love story,ensuring every detail is crafted to perfection. From intimate gatherings to grand celebrations, we bring your dream wedding to life.",
          },
          {
            img: new URL(
              "../../assets/Events_Section_Images-3.jpg",
              import.meta.url
            ).href,
            title: "Luxury Events",
            desc: "Step into a world of grandeur with our luxury events, curated with exquisite decor, elite services, and unmatched attention to detail —turning every occasion into an unforgettable experience.",
          },
        ].map((event, i) => (
          <div className="event-card" key={i} data-aos="zoom-in">
            <img src={event.img} alt={event.title} loading="lazy" />
            <h3>{event.title}</h3>
            <p>{event.desc}</p>
          </div>
        ))}
      </section>

      {/* Floral Section */}
      <section
        className="floral-section"
        style={{
          backgroundImage: `url(${new URL(
            "../../assets/Floral_Image-1.jpg",
            import.meta.url
          ).href})`,
        }}
        data-aos="fade-up"
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

      {/* Featured Products */}
      <section className="featured-products" data-aos="fade-up">
        <h2>Featured Products</h2>
        <div className="underline"></div>
        <p>
          The wedding day is the most rousing and awaited day in most of our
          lives. Each wedding has a distinct story to share and we Seraphic are
          happy to present your story in the most quirky way. We undergo the
          best professional services and have a handful of an experienced team
          with us for smooth functioning.
        </p>
      </section>

      {/* Services */}
      <section className="featured-services" data-aos="fade-up">
        <div className="service-box" data-aos="fade-right">
          <h2>Decoration</h2>
          <p>
            Proper decoration can make an event to the next level. It gives
            extra pleasure and happiness. We assure you the best decoration
            services to make it more dainty.
          </p>
          <button className="btn-learn">LEARN MORE</button>
          {[
            new URL("../../assets/Decoration_Image-1.jpg", import.meta.url).href,
            new URL("../../assets/Decoration_Image-2.jpg", import.meta.url).href,
          ].map((img, i) => (
            <img key={i} src={img} alt="Decoration" loading="lazy" />
          ))}
        </div>
        <div className="service-image" data-aos="fade-left">
          <img
            src={new URL("../../assets/Bridal_Image-1.jpg", import.meta.url).href}
            alt="Bridal"
            loading="lazy"
          />
          <div className="bridal-text">
            <h2>Bridal Bouquet</h2>
            <p>
              Your wedding day is partial without a bridal bouquet. It makes you
              bloom like a real flower inside. Flowers bring that special essence
              and make your day more colorful.
            </p>
            <button className="btn-learn">LEARN MORE</button>
          </div>
        </div>
        <div className="service-box" data-aos="fade-right">
          <h2>Custom Events</h2>
          <p>
            What we do is join with our customers to narrate their fairytales in
            consonance with the way they want. Our happiness is making our
            client’s happy and to be a part of our story, you are just a few
            steps away from initiating your wedding pages.
          </p>
          <button className="btn-learn">DETAILS</button>
          {[
            new URL("../../assets/Events_Images-1.jpg", import.meta.url).href,
            new URL("../../assets/Events_Images-2.jpg", import.meta.url).href,
          ].map((img, i) => (
            <img key={i} src={img} alt="Custom Events" loading="lazy" />
          ))}
        </div>
      </section>
      <Contact />
      <Footer />  {/* Add the footer here */}

    </div>
  );
};

export default Index;
