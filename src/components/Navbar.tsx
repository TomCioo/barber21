import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";

const links = [
  { href: "#home", label: "Start" },
  { href: "#about", label: "O nas" },
  { href: "#services", label: "Usługi" },
  { href: "#team", label: "Zespół" },
  { href: "#gallery", label: "Galeria" },
  { href: "#reviews", label: "Opinie" },
  { href: "#contact", label: "Kontakt" },
];

export const BOOKSY_URL = "https://booksy.com/pl-pl/200112_barber-21-myslenice_barber-shop_10081_myslenice";
export const FACEBOOK_URL = "https://www.facebook.com/profile.php?id=100094613634858";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-border shadow-elegant"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 font-display text-2xl tracking-wide">
          <span className="text-gold">B</span>
          <span>arber</span>
          <span className="text-gold font-bold">21</span>
        </a>

        <ul className="hidden lg:flex items-center gap-9 text-sm font-medium uppercase tracking-widest">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-foreground/80 hover:text-gold transition-colors relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-gold after:transition-all hover:after:w-full"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href="tel:+48882390080"
            className="flex items-center gap-2 text-sm text-foreground/80 hover:text-gold transition"
          >
            <Phone className="w-4 h-4" /> 882 390 080
          </a>
          <a
            href={BOOKSY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-gold text-primary-foreground font-semibold px-5 py-2.5 rounded-md shadow-gold hover:scale-105 transition-transform"
          >
            Umów wizytę
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-foreground"
          aria-label="Menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden bg-background/95 backdrop-blur-xl border-t border-border animate-fade-in-slow">
          <ul className="flex flex-col p-6 gap-5 text-base uppercase tracking-widest">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-foreground/85 hover:text-gold"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={BOOKSY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center bg-gradient-gold text-primary-foreground font-semibold px-5 py-3 rounded-md mt-2"
              >
                Umów wizytę
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
