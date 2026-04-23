import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import "./story.css";

export default function StoryPage() {
  return (
    <main className="story-page">
      <Navbar />
      
      <section className="story-hero">
        <Image 
          src="/images/hero.png" 
          alt="The Roots" 
          fill 
          className="story-hero-image"
        />
        <div className="story-hero-overlay">
          <span className="data-label">THE ROOTS</span>
          <h1 className="display-xl">A Dedication to the Craft.</h1>
        </div>
      </section>

      <section className="story-section section">
        <div className="story-grid">
          <div className="story-content">
            <h2 className="headline-lg">Forged in 2019</h2>
            <div className="divider-small"></div>
            <p className="body-lg">
              What began as a singular vision in a cramped London studio has evolved into a 
              sanctuary for the discerning palate. We rejected the mass-produced in favor 
              of the meticulous.
            </p>
            <p className="body-sm mt-24">
              Every bean is a narrative. Every pour, a deliberate act of hospitality.
            </p>
          </div>
          <div className="story-image">
            <Image src="/images/coffee.png" alt="Forged in 2019" width={600} height={800} className="object-cover" />
          </div>
        </div>
      </section>

      <section className="story-section section bg-white">
        <div className="story-grid reverse">
          <div className="story-content">
            <h2 className="headline-lg">The Sourcing</h2>
            <div className="divider-small"></div>
            <p className="body-lg">
              We traverse the globe seeking terroir that speaks. Relationships with farmers 
              are paramount, built on transparency and a shared reverence for the earth.
            </p>
          </div>
          <div className="story-image">
             <Image src="/images/bread.png" alt="Sourcing" width={600} height={600} className="object-cover" />
          </div>
        </div>
      </section>

      <section className="quote-section section">
        <div className="quote-container">
          <div className="quote-icon"></div>
          <blockquote className="display-xl">
            "To brew is to pause. To serve is to connect. We exist in the space between the 
            pour and the sip."
          </blockquote>
          <cite className="data-label">— THE FOUNDERS</cite>
        </div>
      </section>

      <Footer />
    </main>
  );
}
