import React from 'react'
import "./EventSection.css"
import Events_Section_Images_1 from "../assets/Events_Section_Images-1.jpg";
import Events_Section_Images_2 from "../assets/Events_Section_Images-2.jpg";
import Events_Section_Images_3 from "../assets/Events_Section_Images-3.jpg";

const EventSection = () => {
    return (
        <div>
            <h2>Our Services</h2>
            <div className="underline"></div>
            <section id="events" className="events-section">
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
        </div>
    )
}

export default EventSection
