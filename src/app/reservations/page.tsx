import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import "./reservations.css";

export default function ReservationsPage() {
  return (
    <main className="reservations-page">
      <Navbar />
      
      <div className="reservation-layout section">
        
        {/* Left Column */}
        <div className="reservation-content-left">
          <h1 className="display-xl">Reserve<br/>a Table</h1>
          <p className="body-lg">
            An intimate evening awaits. Secure your<br/>
            place at our table for an artisanal dining<br/>
            experience.
          </p>
          <div className="reservation-image-wrapper">
             <Image src="/images/hero.png" alt="Dining Table Setting" fill className="object-cover" />
             <div className="image-text-overlay">
               Safe<br/>work
             </div>
          </div>
        </div>

        {/* Right Column / Form */}
        <div className="reservation-form-right">
          <div className="form-container">
            <form className="reservation-form">
              
              <div className="form-group full-width">
                <label className="data-label">LOCATION</label>
                <select required className="minimal-select">
                  <option value="">Select a venue</option>
                  <option value="old-town">Old Town</option>
                  <option value="larkhall">Larkhall</option>
                </select>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="data-label">DATE</label>
                  <div className="input-with-icon">
                    <input type="text" placeholder="mm/dd/yyyy" required />
                    <span className="icon-calendar"></span>
                  </div>
                </div>
                <div className="form-group">
                  <label className="data-label">PARTY SIZE</label>
                  <select required className="minimal-select">
                    <option value="2">2 Guests</option>
                    <option value="3">3 Guests</option>
                    <option value="4">4 Guests</option>
                    <option value="5+">5+ Guests</option>
                  </select>
                </div>
              </div>

              <div className="form-group full-width">
                <label className="data-label">AVAILABLE TIMES</label>
                <div className="time-slots-grid">
                  <button type="button" className="time-slot">17:30</button>
                  <button type="button" className="time-slot">18:00</button>
                  <button type="button" className="time-slot active">18:30</button>
                  <button type="button" className="time-slot">19:00</button>
                  <button type="button" className="time-slot disabled" disabled>19:30</button>
                  <button type="button" className="time-slot">20:00</button>
                </div>
              </div>

              <div className="form-divider"></div>

              <div className="form-group full-width">
                <label className="data-label">FULL NAME</label>
                <input type="text" placeholder="e.g. Eleanor Vance" required className="minimal-input" />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="data-label">EMAIL ADDRESS</label>
                  <input type="email" placeholder="name@example.com" required className="minimal-input" />
                </div>
                <div className="form-group">
                  <label className="data-label">PHONE NUMBER</label>
                  <input type="tel" placeholder="+44 7700 900077" required className="minimal-input" />
                </div>
              </div>

              <div className="form-group full-width">
                <label className="data-label">SPECIAL REQUESTS OR DIETARY REQUIREMENTS</label>
                <input type="text" placeholder="Let us know how we can make your evening perfect..." className="minimal-input" />
              </div>

              <button type="submit" className="btn-solid-green full-width">CONFIRM RESERVATION</button>
            </form>
          </div>
        </div>

      </div>

      <Footer />
    </main>
  );
}

