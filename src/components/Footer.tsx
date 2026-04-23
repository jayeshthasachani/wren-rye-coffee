import Link from "next/link";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <h2 className="footer-logo">Wren & Rye</h2>
          <p className="copyright">© 2024 Wren & Rye. Handcrafted in Britain.</p>
        </div>

        <div className="footer-links-grid">
          <div className="footer-column">
            <h3 className="data-label">EXPLORE</h3>
            <Link href="/">HOME</Link>
            <Link href="/menu">MENU</Link>
            <Link href="/our-story">STORY</Link>
            <Link href="/craft">CRAFT</Link>
          </div>

          <div className="footer-column">
            <h3 className="data-label">LEGAL</h3>
            <Link href="/find-us">FIND US</Link>
            <Link href="/privacy">PRIVACY</Link>
            <Link href="/terms">TERMS</Link>
          </div>

          <div className="footer-column newsletter">
            <h3 className="data-label">CONNECT</h3>
            <p className="body-sm">Join our mailing list for seasonal menu updates and tasting events.</p>
            <div className="newsletter-input">
              <input type="email" placeholder="Your email address" />
              <button type="submit">→</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
