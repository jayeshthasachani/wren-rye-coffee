"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import "./home.css";
import PageTransition from "@/components/PageTransition";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const container = useRef(null);

  useGSAP(() => {
    // Hero Text Animation
    gsap.from(".hero-text > *", {
      y: 100,
      opacity: 0,
      duration: 1.2,
      stagger: 0.2,
      ease: "power4.out",
    });

    // Hero Image Animation
    gsap.from(".hero-image-container", {
      xPercent: 100,
      duration: 1.5,
      ease: "power4.inOut",
    });

    // Section Reveals
    const sections = gsap.utils.toArray(".section");
    sections.forEach((section: any) => {
      gsap.from(section, {
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
        },
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });
    });

    // Detail Strip Animation
    gsap.from(".strip-item", {
      scrollTrigger: {
        trigger: ".detail-strip",
        start: "top 90%",
      },
      y: 20,
      opacity: 0,
      stagger: 0.1,
      duration: 0.8,
    });
  }, { scope: container });

  return (
    <PageTransition>
      <main className="home-page" ref={container}>
        <Navbar />
        
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-content">
            <div className="hero-text">
              <span className="data-label">EST. 2019</span>
              <h1 className="display-xl">Rooted in craft.</h1>
              <p className="body-lg">
                An epicurean sanctuary where heritage techniques meet modern British minimalism. 
                Hand-forged flavors, meticulously served.
              </p>
              <div className="hero-cta">
                <a href="/menu" className="btn-primary">DISCOVER THE MENU</a>
              </div>
            </div>
            <div className="hero-image-container">
              <Image 
                src="/images/hero.png" 
                alt="Wren & Rye Luxury Interior" 
                fill
                priority
                className="hero-image"
              />
            </div>
          </div>
        </section>

        {/* Marquee / Detail Strip */}
        <div className="detail-strip">
          <div className="strip-item">
            <span className="data-label">SOURDOUGH BAKED DAILY</span>
          </div>
          <div className="strip-item">
            <span className="data-label">SINGLE ORIGIN ROASTS</span>
          </div>
          <div className="strip-item">
            <span className="data-label">BRITISH BOTANICALS</span>
          </div>
          <div className="strip-item">
            <span className="data-label">BESPOKE PATISSERIE</span>
          </div>
        </div>

        {/* Philosophy Section */}
        <section className="philosophy section">
          <div className="philosophy-grid">
            <div className="philosophy-image">
              <Image 
                src="/images/bread.png" 
                alt="Handcrafted Sourdough" 
                fill 
                className="object-cover"
              />
            </div>
            <div className="philosophy-content">
              <span className="data-label">THE PHILOSOPHY</span>
              <h2 className="headline-lg">Patience is our primary ingredient.</h2>
              <p className="body-lg">
                In an era of immediacy, we choose the slow path. Every loaf rests for 48 hours. 
                Every extraction is timed to the second. We source heritage grains from 
                independent British millers and forage seasonal botanicals to craft a menu 
                that speaks of its terroir.
              </p>
              <p className="accent-italic">"To rush is to ruin." — The Master Baker</p>
              <a href="/our-story" className="link-tertiary">READ OUR STORY</a>
            </div>
          </div>
        </section>

        {/* Signature Curations */}
        <section className="curations section">
          <div className="section-header">
            <h2 className="headline-md">Signature Curations</h2>
            <div className="divider"></div>
          </div>
          <div className="curations-grid">
            <div className="curation-card">
              <div className="card-image">
                <Image src="/images/tart.png" alt="Wild Rye Tart" width={600} height={400} />
              </div>
              <div className="card-info">
                <div className="card-header">
                  <h3>Wild Rye Tart</h3>
                  <span className="data-label">£8</span>
                </div>
                <p className="body-sm">Foraged blackberries, burnt honey custard, toasted rye crust.</p>
              </div>
            </div>
            
            <div className="curation-card dark">
              <div className="card-image">
                <Image src="/images/coffee.png" alt="Reserve Pour" width={600} height={400} />
              </div>
              <div className="card-info">
                <div className="card-header">
                  <h3>Reserve Pour</h3>
                  <span className="data-label">£6</span>
                </div>
                <p className="body-sm">Ethiopian Yirgacheffe, jasmine notes, precise 92°C extraction.</p>
              </div>
            </div>

            <div className="curation-card">
              <div className="card-image">
                <Image src="/images/bread.png" alt="Heritage Boule" width={600} height={400} />
              </div>
              <div className="card-info">
                <div className="card-header">
                  <h3>Heritage Boule</h3>
                  <span className="data-label">£9</span>
                </div>
                <p className="body-sm">Stoneground einkorn wheat, 72-hour fermentation, dark crust.</p>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </PageTransition>
  );
}
