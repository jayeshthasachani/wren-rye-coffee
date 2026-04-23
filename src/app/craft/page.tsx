import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import "./craft.css";

export default function CraftPage() {
  return (
    <main className="craft-page">
      <Navbar />
      
      <section className="craft-hero">
        <Image src="/images/coffee.png" alt="The Ritual" fill className="craft-hero-image" />
        <div className="craft-hero-content">
          <h1 className="display-xl">The Ritual.</h1>
          <p className="body-lg">
            Precision, patience, and a deep reverence for the bean. Our process is an 
            exercise in restraint.
          </p>
        </div>
      </section>

      <section className="craft-stats section">
        <div className="stats-grid">
          <div className="stat-item">
            <span className="stat-number">06</span>
            <span className="data-label">YEARS SOURDOUGH STARTER</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">05</span>
            <span className="data-label">DAILY TEST SHOTS</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">12</span>
            <span className="data-label">HOURS COLD FERMENT</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">01</span>
            <span className="data-label">SINGLE ORIGIN FOCUS</span>
          </div>
        </div>
      </section>

      <section className="craft-process section">
        <div className="process-item">
          <div className="process-number">01</div>
          <div className="process-info">
            <h2 className="headline-lg">Sourcing</h2>
            <p className="body-lg">
              We select beans from high-altitude micro-lots, focusing on farms that practice 
              shade-grown, regenerative agriculture. Every harvest is cupped and evaluated 
              before a single bag reaches our roastery.
            </p>
          </div>
        </div>

        <div className="process-item">
          <div className="process-number">02</div>
          <div className="process-info">
            <h2 className="headline-lg">Roasting</h2>
            <p className="body-lg">
              Our roasting philosophy leans towards light-medium profiles to highlight 
              intrinsic terroir. We utilize conduction and convection balance to develop 
              complex sugars without introducing ash or smokiness.
            </p>
          </div>
        </div>

        <div className="process-item">
          <div className="process-number">03</div>
          <div className="process-info">
            <h2 className="headline-lg">Extraction</h2>
            <p className="body-lg">
              Dialing in is a daily ritual. We track humidity, barometric pressure, and bean 
              age to adjust grind size and yield. Our current target is a 1:2.2 ratio in 
              28 seconds for the house espresso.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
