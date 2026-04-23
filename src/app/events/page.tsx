import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import "./events.css";

export default function EventsPage() {
  const events = [
    {
      date: "MAY 14",
      title: "The Baker's Table",
      time: "19:00 — 22:00",
      description: "An intimate evening of sourdough mastery. Learn the secrets of our 72-hour ferment while enjoying a 5-course tasting menu paired with heritage grains.",
      price: "£85"
    },
    {
      date: "JUN 02",
      title: "Rye & Oak: A Tasting",
      time: "20:00 — 23:00",
      description: "Explore the relationship between cereal and wood. A curated journey through rare British rye whiskeys and their artisanal bread counterparts.",
      price: "£65"
    },
    {
      date: "JUL 19",
      title: "Summer Solstice Feast",
      time: "18:00 — LATE",
      description: "Celebrating the longest day with a feast of foraged botanicals, botanical cocktails, and open-fire roasting in our Larkhall courtyard.",
      price: "£110"
    }
  ];

  return (
    <main className="events-page">
      <Navbar />
      
      <header className="events-header section">
        <h1 className="display-xl">Upcoming Gatherings</h1>
        <p className="body-lg">Curated experiences designed to deepen your connection to craft.</p>
      </header>

      <section className="events-list section">
        <div className="events-container">
          {events.map((event, index) => (
            <div className="event-item" key={index}>
              <div className="event-date">
                <span className="data-label">{event.date}</span>
              </div>
              <div className="event-main">
                <h2 className="headline-lg">{event.title}</h2>
                <span className="data-label event-time">{event.time}</span>
                <p className="body-lg">{event.description}</p>
                <div className="event-footer">
                  <span className="price">{event.price} PP</span>
                  <a href="/reservations" className="link-tertiary">BOOK YOUR SEAT</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="private-hire section">
        <div className="private-hire-card">
          <div className="card-content">
            <h2 className="headline-md">Private Gatherings</h2>
            <p className="body-lg">
              Our spaces are available for private hire, from intimate dinners to artisanal 
              workshops.
            </p>
            <a href="mailto:events@wrenandrye.co.uk" className="btn-primary">ENQUIRE NOW</a>
          </div>
          <div className="card-image-half">
             <Image src="/images/hero.png" alt="Private Hire" fill className="object-cover" />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
