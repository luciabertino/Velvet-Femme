import heroImg from "./assets/hero.jpg";
import catLingerie from "./assets/cat-lingerie.jpg";
import catSleepwear from "./assets/cat-sleepwear.jpg";
import catEssentials from "./assets/cat-essentials.jpg";
import catNewIn from "./assets/cat-newin.jpg";
import prodLaceSet from "./assets/prod-lace-set.jpg";
import prodSatinSet from "./assets/prod-satin-set.jpg";
import prodNudeBra from "./assets/prod-nude-bra.jpg";
import prodBlackLace from "./assets/prod-black-lace.jpg";
import laceTexture from "./assets/lace-texture.jpg";
import logo from "./assets/butterfly-logo.png";

/* ───── Icons (inline SVG) ───── */
const SearchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

const UserIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const CartIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <path d="M16 10a4 4 0 01-8 0" />
  </svg>
);

const HeartIcon = ({ size = 14 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
  </svg>
);

const StarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="5" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
  </svg>
);

const TikTokIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

const PinterestIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <line x1="8" y1="14" x2="12" y2="14" />
    <path d="M12 14v8" />
    <path d="M9 11c0-1.66 1.34-3 3-3s3 1.34 3 3-1.34 3-3 3" />
  </svg>
);

/* ───── Data ───── */
const navLinks = ["HOME", "SHOP", "LINGERIE", "SLEEPWEAR", "ESSENTIALS", "NEW IN", "ABOUT", "CONTACT"];

const categories = [
  { name: "LINGERIE", subtitle: "Ver colección", img: catLingerie },
  { name: "SLEEPWEAR", subtitle: "Ver colección", img: catSleepwear },
  { name: "ESSENTIALS", subtitle: "Ver colección", img: catEssentials },
  { name: "NEW IN", subtitle: "Ver colección", img: catNewIn },
];

const bestSellers = [
  { name: "Velvet Lace Set", price: "$34.990", img: prodLaceSet },
  { name: "Soft Satin Set", price: "$29.990", img: prodSatinSet },
  { name: "Nude Essentials Bra", price: "$19.990", img: prodNudeBra },
  { name: "Black Lace Set", price: "$34.990", img: prodBlackLace },
];

const shopLinks = ["Lingerie", "Sleepwear", "Essentials", "New In", "Todos los productos"];
const infoLinks = ["Sobre nosotros", "Envíos y entregas", "Cambios y devoluciones", "Términos y condiciones", "Política de privacidad"];
const helpLinks = ["Preguntas frecuentes", "Guía de tallas", "Contacto"];

/* ───── Components ───── */
function TopBanner() {
  return (
    <div className="bg-[#C49B8B] text-white text-center py-2 px-4 text-xs sm:text-sm font-light tracking-wide">
      Envío gratis en compras sobre $60.000 <HeartIcon size={12} />
    </div>
  );
}

function Header() {
  return (
    <header className="bg-cream/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Main header row */}
        <div className="flex items-center justify-between py-4">
          <button className="text-brown-dark hover:text-rose transition-colors" aria-label="Buscar">
            <SearchIcon />
          </button>

          <div className="flex flex-col items-center">
            <img src={logo} alt="Velvet Femme Logo" className="w-16 h-16 sm:w-20 sm:h-20 object-contain" />
            <h1 className="font-serif text-lg sm:text-xl tracking-[0.3em] text-brown-dark mt-1 font-medium">
              VELVET FEMME
            </h1>
            <p className="text-[9px] sm:text-[10px] tracking-[0.35em] text-brown-light font-light uppercase">
              Boutique & Lingerie
            </p>
          </div>

          <div className="flex items-center gap-4">
            <button className="text-brown-dark hover:text-rose transition-colors" aria-label="Mi cuenta">
              <UserIcon />
            </button>
            <button className="text-brown-dark hover:text-rose transition-colors relative" aria-label="Carrito">
              <CartIcon />
              <span className="absolute -top-2 -right-2 bg-rose text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-medium">
                0
              </span>
            </button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="border-t border-blush/50">
          <ul className="flex justify-center gap-4 sm:gap-6 lg:gap-8 py-3 overflow-x-auto scrollbar-hide">
            {navLinks.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase().replace(" ", "-")}`}
                  className={`text-[11px] sm:text-xs tracking-[0.15em] font-medium whitespace-nowrap transition-colors hover:text-rose-dark ${
                    link === "HOME" ? "text-brown-dark" : "text-brown-light"
                  }`}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

function HeroSection() {
  return (
    <section className="relative h-[70vh] sm:h-[80vh] lg:h-[85vh] overflow-hidden">
      <img
        src={heroImg}
        alt="Elegante lencería femenina"
        className="w-full h-full object-cover object-center"
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/10 to-transparent" />

      {/* Hero content */}
      <div className="absolute inset-0 flex items-center">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 w-full">
          <div className="max-w-lg ml-auto mr-8 sm:mr-16 lg:mr-24">
            <p className="font-cursive text-rose-dusty text-xl sm:text-2xl lg:text-3xl mb-2 drop-shadow-lg">
              ✦ Be your own magic ✦
            </p>
            <h2 className="font-serif text-white text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-medium leading-tight mb-4 drop-shadow-lg tracking-wide">
              ELEGANCE<br />IN EVERY DETAIL
            </h2>
            <p className="text-white/90 text-sm sm:text-base font-light leading-relaxed mb-6 drop-shadow">
              Lencería y ropa diseñada para realzar<br />
              tu feminidad con suavidad y confianza.
            </p>
            <a
              href="#shop"
              className="inline-block bg-rose hover:bg-rose-dark text-white text-xs sm:text-sm tracking-[0.15em] font-medium px-8 py-3 transition-all duration-300 hover:shadow-lg"
            >
              SHOP NOW
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function CategoriesSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {categories.map((cat) => (
            <a
              key={cat.name}
              href={`#${cat.name.toLowerCase().replace(" ", "-")}`}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-t-[120px] sm:rounded-t-[150px] lg:rounded-t-[180px] mb-4 aspect-[3/4]">
                <img
                  src={cat.img}
                  alt={cat.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-500" />
              </div>
              <div className="text-center">
                <h3 className="font-serif text-sm sm:text-base tracking-[0.2em] text-brown-dark font-medium mb-1">
                  {cat.name}
                </h3>
                <p className="text-brown-light text-xs font-light">
                  {cat.subtitle}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function BestSellersSection() {
  return (
    <section id="best-sellers" className="py-12 sm:py-16 lg:py-20 bg-cream-dark">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          {/* Left text */}
          <div className="lg:w-1/4 lg:sticky lg:top-28">
            <p className="font-cursive text-rose text-lg sm:text-xl mb-1">
              ✦ Our favorites ✦
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-brown-dark font-medium mb-4 tracking-wide">
              BEST SELLERS
            </h2>
            <p className="text-brown-light text-sm leading-relaxed mb-6 font-light">
              Las piezas más amadas por nuestra comunidad. Descubre lo que todas están eligiendo.
            </p>
            <a
              href="#shop"
              className="inline-block bg-rose hover:bg-rose-dark text-white text-xs tracking-[0.15em] font-medium px-6 py-3 transition-all duration-300 hover:shadow-lg"
            >
              SHOP BEST SELLERS
            </a>
          </div>

          {/* Products grid */}
          <div className="lg:w-3/4 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {bestSellers.map((product) => (
              <a key={product.name} href="#" className="group bg-white rounded-sm overflow-hidden hover:shadow-md transition-shadow duration-300">
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-3 text-center">
                  <h4 className="text-brown-dark text-xs sm:text-sm font-medium mb-1 tracking-wide">
                    {product.name}
                  </h4>
                  <p className="text-brown-light text-xs font-light">
                    {product.price}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function NewsletterSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="flex flex-col md:flex-row min-h-[350px] sm:min-h-[400px]">
        {/* Left - Lace image */}
        <div className="w-full md:w-1/2 relative min-h-[250px] sm:min-h-[350px]">
          <img
            src={laceTexture}
            alt="Textura de encaje elegante"
            className="w-full h-full object-cover absolute inset-0"
          />
        </div>

        {/* Right - Newsletter */}
        <div className="w-full md:w-1/2 bg-cream flex flex-col justify-center items-center px-8 sm:px-12 py-10 sm:py-16 text-center">
          <p className="font-cursive text-rose text-lg sm:text-xl mb-2">
            ✦ Join the Velvet Circle ✦
          </p>
          <h3 className="font-serif text-brown-dark text-base sm:text-lg tracking-[0.15em] font-medium mb-2">
            SUSCRÍBETE Y RECIBE
          </h3>
          <p className="text-brown-dark text-xs sm:text-sm tracking-[0.1em] font-medium mb-1">
            NOVEDADES, DESCUENTOS
          </p>
          <p className="text-brown-dark text-xs sm:text-sm tracking-[0.1em] font-medium mb-6">
            Y LANZAMIENTOS EXCLUSIVOS.
          </p>

          <div className="w-full max-w-sm flex gap-0">
            <input
              type="email"
              placeholder="Tu correo electrónico"
              className="flex-1 border border-brown-light/30 bg-white px-4 py-3 text-sm text-brown-dark placeholder:text-brown-muted focus:outline-none focus:border-rose transition-colors"
            />
            <button className="bg-rose hover:bg-rose-dark text-white text-xs tracking-[0.1em] font-medium px-6 py-3 transition-colors duration-300 whitespace-nowrap">
              SUSCRIBIRME
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#F0E6DD] pt-12 sm:pt-16 pb-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-10">
          {/* Logo column */}
          <div className="col-span-2 sm:col-span-2 lg:col-span-1">
            <img src={logo} alt="Velvet Femme Logo" className="w-14 h-14 sm:w-16 sm:h-16 object-contain mb-3 mx-auto lg:mx-0" />
            <h3 className="font-serif text-base sm:text-lg tracking-[0.25em] text-brown-dark text-center lg:text-left font-medium">
              VELVET FEMME
            </h3>
            <p className="text-[8px] sm:text-[9px] tracking-[0.3em] text-brown-light text-center lg:text-left font-light uppercase mt-0.5">
              Boutique & Lingerie
            </p>
          </div>

          {/* Shop */}
          <div className="text-center sm:text-left">
            <h4 className="text-xs tracking-[0.2em] text-brown-dark font-semibold mb-4">SHOP</h4>
            <ul className="space-y-2">
              {shopLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-brown-light text-xs font-light hover:text-rose-dark transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Información */}
          <div className="text-center sm:text-left">
            <h4 className="text-xs tracking-[0.2em] text-brown-dark font-semibold mb-4">INFORMACIÓN</h4>
            <ul className="space-y-2">
              {infoLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-brown-light text-xs font-light hover:text-rose-dark transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Ayuda */}
          <div className="text-center sm:text-left">
            <h4 className="text-xs tracking-[0.2em] text-brown-dark font-semibold mb-4">AYUDA</h4>
            <ul className="space-y-2">
              {helpLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-brown-light text-xs font-light hover:text-rose-dark transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Síguenos */}
          <div className="text-center sm:text-left">
            <h4 className="text-xs tracking-[0.2em] text-brown-dark font-semibold mb-4">SÍGUENOS</h4>
            <div className="flex gap-4 justify-center sm:justify-start">
              <a href="#" className="text-brown-light hover:text-rose-dark transition-colors" aria-label="Instagram">
                <InstagramIcon />
              </a>
              <a href="#" className="text-brown-light hover:text-rose-dark transition-colors" aria-label="Facebook">
                <FacebookIcon />
              </a>
              <a href="#" className="text-brown-light hover:text-rose-dark transition-colors" aria-label="TikTok">
                <TikTokIcon />
              </a>
              <a href="#" className="text-brown-light hover:text-rose-dark transition-colors" aria-label="Pinterest">
                <PinterestIcon />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-brown-light/20 pt-6 text-center">
          <p className="text-brown-light text-[10px] sm:text-xs font-light">
            © 2024 Velvet Femme. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ───── Main App ───── */
function App() {
  return (
    <div className="min-h-screen bg-cream">
      <TopBanner />
      <Header />
      <main>
        <HeroSection />
        <CategoriesSection />
        <BestSellersSection />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
