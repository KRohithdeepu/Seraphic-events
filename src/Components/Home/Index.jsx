import React, { useEffect,useRef } from "react";
import "./Index.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { nextImage, prevImage, toggleMenu } from "../../store/heroSlice";
import Footer from "../Footer.jsx"; // Adjust the path as necessary
import SidebarMenu from "../SidebarMenu"; // Adjust the path as necessary
import Navbar from "../Navbar.jsx";
import "../Navbar.css";
import Contact from "../Contacts.jsx";
import video1 from "../../assets/Video1.mp4";
import video2 from "../../assets/Video2.mp4";
import video3 from "../../assets/Video3.mp4";
import video4 from "../../assets/Video4.mp4";
// Import video preview images
import videoImg1 from "../../assets/Video-I1.jpg";
import videoImg2 from "../../assets/Video-I2.jpg";
import videoImg3 from "../../assets/Video-I3.jpg";
import videoImg4 from "../../assets/Video-I4.jpg";


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
  const videoRefs = useRef([]);
const videoData = [
  {
    src: "/videos/video1.mp4",
    img: "/images/thumb1.jpg",
  },
  {
    src: "/videos/video2.mp4",
    img: "/images/thumb2.jpg",
  },
  {
    src: "/videos/video3.mp4",
    img: "/images/thumb3.jpg",
  },
  {
    src: "/videos/video4.mp4",
    img: "/images/thumb4.jpg",
  },
];

useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const video = entry.target;
        if (entry.isIntersecting) {
          video.play();
        } else {
          video.pause();
        }
      });
    },
    { threshold: 0.5 } // play when at least 50% visible
  );

  videoRefs.current.forEach((video) => {
    if (video) observer.observe(video);
  });

  return () => observer.disconnect();
}, []);
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




      <h2 className="video">Our Event Highlights</h2>
<div className="underline"></div>

<div
  className="videos-section"
  style={{
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
    justifyContent: "center"
  }}
>
  {[
    { src: video1, img: videoImg1 },
    { src: video2, img: videoImg2 },
    { src: video3, img: videoImg3 },
    { src: video4, img: videoImg4 },
  ].map((video, index) => (
    <div
      key={index}
      className="video-card"
      style={{ width: "35%", height: "250px" }}
    >
      <video
        ref={(el) => (videoRefs.current[index] = el)}
        autoPlay
        loop
        muted
        playsInline
        poster={video.img}
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      >
        <source src={video.src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  ))}
</div>


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
          <h2>Customized Birthday Decor</h2>
          <p>
            Proper decoration can make an event to the next level. It gives
            extra pleasure and happiness. We assure you the best decoration
            services to make it more dainty.
          </p>
          <button className="btn-learn">LEARN MORE</button>
          {[
            new URL("../../assets/Birthday-I1.jpg", import.meta.url).href,
            new URL("../../assets/Birthday-I2.jpg", import.meta.url).href,
          ].map((img, i) => (
            <img key={i} src={img} alt="Decoration" loading="lazy" />
          ))}
        </div>
        <div className="service-image" data-aos="fade-left">
          <img
            src={new URL("../../assets/Destination-wedding-I1.jpg", import.meta.url).href}
            alt="Bridal"
            loading="lazy"
          />
          <div className="bridal-text">
            <h2>Destination Wedding</h2>
            <p>
              Your wedding day is partial without a Destination Wedding. It makes you
              bloom like a real flower inside. Flowers bring that special essence
              and make your day more colorful.
            </p>
            <button className="btn-learn">LEARN MORE</button>
          </div>
        </div>
        <div className="service-box" data-aos="fade-right">
          <h2>Corporate Events</h2>
          <p>
            What we do is join with our customers to narrate their fairytales in
            consonance with the way they want. Our happiness is making our
            client’s happy and to be a part of our story, you are just a few
            steps away from initiating your Events.
          </p>
          <button className="btn-learn">DETAILS</button>
          {[
            new URL("../../assets/Events_Images-1.jpg", import.meta.url).href,
            new URL("../../assets/Corparate-Events-I1.jpg", import.meta.url).href,
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
