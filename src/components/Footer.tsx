import { Facebook, Instagram, MapPin, Phone } from "lucide-react";
import { FACEBOOK_URL, BOOKSY_URL } from "./Navbar";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-14 grid gap-10 md:grid-cols-3">
        <div>
          <div className="font-display text-3xl">
            <span className="text-gold">B</span>arber <span className="text-gold font-bold">21</span>
          </div>
          <p className="mt-4 text-muted-foreground text-sm leading-relaxed max-w-sm">
            Premium barber shop w sercu Myślenic. Styl. Precyzja. Charakter.
          </p>
          <div className="flex gap-3 mt-6">
            <a href={BOOKSY_URL} target="_blank" rel="noopener noreferrer" aria-label="Booksy" className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-gold hover:text-gold transition text-xs font-bold">
              B
            </a>
            <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-gold hover:text-gold transition">
              <Facebook className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="text-sm space-y-3">
          <h4 className="text-gold uppercase tracking-widest text-xs mb-4">Kontakt</h4>
          <a href="tel:+48882390080" className="flex items-center gap-2 hover:text-gold transition">
            <Phone className="w-4 h-4" /> 882 390 080
          </a>
          <p className="flex items-start gap-2 text-muted-foreground">
            <MapPin className="w-4 h-4 mt-0.5 shrink-0" /> Rynek 21/1, 32-400 Myślenice
          </p>
        </div>

        <div className="text-sm">
          <h4 className="text-gold uppercase tracking-widest text-xs mb-4">Godziny</h4>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex justify-between"><span>Pon – Pt</span><span>09:00 – 20:00</span></li>
            <li className="flex justify-between"><span>Sobota</span><span>09:00 – 16:00</span></li>
            <li className="flex justify-between"><span>Niedziela</span><span>Zamknięte</span></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Barber 21 Myślenice. Wszystkie prawa zastrzeżone.
      </div>
    </footer>
  );
}
