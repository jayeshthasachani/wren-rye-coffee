import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import "./menu.css";

export default function MenuPage() {
  return (
    <main className="menu-page">
      <Navbar />
      
      <header className="menu-header section">
        <h1 className="display-xl">Our Offerings</h1>
        <p className="body-lg">Provisions rooted in craft, sourced locally, and prepared with intention.</p>
      </header>

      <div className="menu-tabs">
        <button className="active">ALL</button>
        <button>HOT DRINKS</button>
        <button>COLD DRINKS</button>
        <button>BAKED GOODS</button>
        <button>BRUNCH</button>
        <button>LIGHT BITES</button>
      </div>

      <section className="featured-item section">
        <div className="featured-grid">
          <div className="featured-image">
             <Image src="/images/coffee.png" alt="The Wren Latte" fill className="object-cover" />
          </div>
          <div className="featured-info">
            <span className="data-label">SIGNATURE</span>
            <h2 className="headline-lg">The Wren Latte</h2>
            <p className="body-lg">
              Our house signature. A double ristretto of single-origin beans, delicately 
              infused oat milk, and dusted with slow-roasted chicory root and a hint of wild 
              Somerset honey.
            </p>
            <div className="item-meta">
              <span className="price">£6.50</span>
              <span className="tag">DF</span>
              <span className="tag">V</span>
            </div>
          </div>
        </div>
      </section>

      <div className="menu-grid section">
        <div className="menu-column">
          <div className="category-header">
            <h2 className="headline-md">Hot Drinks</h2>
            <span className="data-label">OAT MILK DEFAULT. DAIRY AVAILABLE.</span>
          </div>
          <ul className="item-list">
            <li>
              <div className="item-main">
                <h3>Flat White</h3>
                <span className="price">£3.60</span>
              </div>
              <p className="body-sm">Rich espresso with micro-foamed milk.</p>
            </li>
            <li>
              <div className="item-main">
                <h3>Cortado</h3>
                <span className="price">£3.20</span>
              </div>
              <p className="body-sm">Equal parts espresso and steamed milk.</p>
            </li>
            <li>
              <div className="item-main">
                <h3>Pour Over</h3>
                <span className="price">£4.80</span>
              </div>
              <p className="body-sm">Single origin filter, rotated weekly.</p>
            </li>
          </ul>

          <div className="category-header mt-80">
            <h2 className="headline-md">Baked Goods</h2>
            <span className="data-label">BAKED FRESH DAILY.</span>
          </div>
          <ul className="item-list">
            <li>
              <div className="item-main">
                <h3>Morning Croissant</h3>
                <span className="price">£3.60</span>
              </div>
              <p className="body-sm">Classic French butter pastry.</p>
            </li>
            <li>
              <div className="item-main">
                <h3>Almond Twice Bake</h3>
                <span className="price">£4.50</span>
              </div>
              <p className="body-sm">Day-old croissant baked with frangipane.</p>
            </li>
          </ul>
        </div>

        <div className="menu-column">
          <div className="category-header">
            <h2 className="headline-md">Brunch</h2>
            <span className="data-label">SERVED UNTIL 3PM.</span>
          </div>
          <div className="menu-card">
            <div className="card-image-small">
              <Image src="/images/bread.png" alt="Rye & Butter Toast" fill className="object-cover" />
            </div>
            <div className="card-content">
              <div className="item-main">
                <h3>Rye & Butter Toast</h3>
                <span className="price">£6.50</span>
              </div>
              <p className="body-sm">Thick-cut house sourdough, cultured butter, smoked sea salt.</p>
            </div>
          </div>
          
          <div className="menu-card mt-32">
            <div className="card-content">
              <div className="item-main">
                <h3>Eggs Benedict</h3>
                <span className="price">£12.00</span>
              </div>
              <p className="body-sm">Poached heritage eggs, Wiltshire ham, house hollandaise on toasted muffin.</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
