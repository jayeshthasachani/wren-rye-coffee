"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import "./Navbar.css";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { name: "HOME", href: "/" },
    { name: "MENU", href: "/menu" },
    { name: "STORY", href: "/our-story" },
    { name: "CRAFT", href: "/craft" },
    { name: "EVENTS", href: "/events" },
    { name: "FIND US", href: "/find-us" },
  ];

  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">
          <Link href="/">Wren & Rye</Link>
        </div>
        
        {/* Desktop Links */}
        <div className="navbar-links">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href}>
              {link.name}
            </Link>
          ))}
        </div>
        
        <div className="navbar-actions">
          <Link href="/reservations" className="reserve-btn desktop-only">
            RESERVE A TABLE
          </Link>
          <button className="mobile-menu-btn" onClick={toggleMobileMenu} aria-label="Toggle Menu">
            <Menu size={24} color="var(--color-primary)" />
          </button>
        </div>
      </nav>

      {/* Mobile Full-Screen Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="mobile-fullscreen-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="mobile-menu-header">
              <span className="navbar-logo">Wren & Rye</span>
              <button className="mobile-menu-close" onClick={toggleMobileMenu}>
                <X size={28} color="var(--color-primary)" />
              </button>
            </div>
            
            <div className="mobile-menu-links">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 + 0.1, duration: 0.4 }}
                >
                  <Link href={link.href} onClick={toggleMobileMenu}>
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.05 + 0.1, duration: 0.4 }}
              >
                <Link href="/reservations" className="reserve-btn mobile-reserve" onClick={toggleMobileMenu}>
                  RESERVE A TABLE
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>

  );
}

