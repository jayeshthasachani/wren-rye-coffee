import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import "./find-us.css";

export default function FindUsPage() {
  return (
    <main className="find-us-page">
      <Navbar />
      
      <header className="find-us-header section">
        <h1 className="display-xl">Find Us</h1>
        <p className="body-lg">Two distinct spaces, one shared commitment to craft.</p>
      </header>

      <section className="locations section">
        <div className="locations-grid">
          {/* Old Town */}
          <div className="location-card">
            <div className="location-image">
               <Image src="/images/hero.png" alt="Old Town" fill className="object-cover" />
               <span className="status-tag">OPEN NOW</span>
            </div>
            <div className="location-info">
              <h2 className="headline-md">Old Town</h2>
              <p className="body-sm">
                Our flagship location set within a restored 18th-century printworks, featuring 
                an expansive bar and intimate dining alcoves.
              </p>
              <div className="location-details">
                <div className="detail-group">
                  <span className="data-label">ADDRESS</span>
                  <p className="body-sm">14 Printers Lane<br />Edinburgh, EH1 1RR</p>
                </div>
                <div className="detail-group">
                  <span className="data-label">HOURS</span>
                  <p className="body-sm">Mon–Thu: 12pm – 11pm<br />Fri–Sat: 12pm – 1am<br />Sun: 12pm – 10pm</p>
                </div>
              </div>
              <a href="#" className="link-tertiary">GET DIRECTIONS</a>
            </div>
          </div>

          {/* Larkhall */}
          <div className="location-card dark">
            <div className="location-image">
               <Image src="/images/hero.png" alt="Larkhall" fill className="object-cover" />
               <span className="status-tag">CLOSES AT 10PM</span>
            </div>
            <div className="location-info">
              <h2 className="headline-md">Larkhall</h2>
              <p className="body-sm">
                A neighborhood outpost focused on seasonal small plates and our curated 
                rye whiskey collection.
              </p>
              <div className="location-details">
                <div className="detail-group">
                  <span className="data-label">ADDRESS</span>
                  <p className="body-sm">82 Larkhall Rise<br />Bath, BA4 6GA</p>
                </div>
                <div className="detail-group">
                  <span className="data-label">HOURS</span>
                  <p className="body-sm">Wed–Fri: 4pm – 11pm<br />Sat: 12pm – 11pm<br />Sun: 12pm – 9pm</p>
                </div>
              </div>
              <a href="#" className="link-tertiary">GET DIRECTIONS</a>
            </div>
          </div>
        </div>
      </section>

      <section className="accessibility section">
        <div className="accessibility-container">
           <h2 className="headline-md">Accessibility</h2>
           <p className="body-lg">
             We are committed to ensuring our spaces are welcoming to all guests. 
             Both locations feature step-free entry and accessible washrooms.
           </p>
           <div className="accessibility-tags">
             <span className="tag">Step-Free Access</span>
             <span className="tag">Braille Menus Available</span>
             <span className="tag">Service Dogs Welcome</span>
           </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
