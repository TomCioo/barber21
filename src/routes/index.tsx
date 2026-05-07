import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Phone,
  MapPin,
  Clock,
  Star,
  Scissors,
  Sparkles,
  Mail,
  Award,
  Users,
  Calendar,
  ChevronRight,
} from "lucide-react";
import Navbar, { BOOKSY_URL } from "@/components/Navbar";
import Footer from "@/components/Footer";
import Lightbox from "@/components/Lightbox";
import hero from "@/assets/h.png";
import g1 from "@/assets/g1.jpeg";
import g2 from "@/assets/g2.jpeg";
import g3 from "@/assets/g3.jpg";
import g4 from "@/assets/g4.jpeg";
import g5 from "@/assets/g5.jpeg";
import g6 from "@/assets/g6.jpeg";
import g7 from "@/assets/g7.jpeg";
import g8 from "@/assets/g8.jpeg";
import g9 from "@/assets/g9.jpeg";
import g10 from "@/assets/g10.jpg";
import g11 from "@/assets/qw.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Barber 21 Myślenice — Premium Barber Shop | Strzyżenie & Broda" },
      {
        name: "description",
        content:
          "Barber 21 — premium barber shop w Myślenicach. Strzyżenie męskie, trymowanie brody, fade. Rynek 21/1. Ocena 5,0/5 (536 opinii). Umów wizytę online.",
      },
      { property: "og:title", content: "Barber 21 Myślenice — Premium Barber Shop" },
      { property: "og:description", content: "Styl. Precyzja. Charakter. Umów wizytę w Barber 21." },
      { property: "og:type", content: "website" },
    ],
    links: [
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap",
      },
    ],
  }),
  component: Home,
});

const services = [
  { icon: Scissors, title: "Strzyżenie włosów", desc: "Konsultacja, strzyżenie, mycie głowy i tonik wykończeniowy.", price: "70 zł", time: "45–50 min" },
  { icon: Award, title: "Combo (Włosy + Broda)", desc: "Strzyżenie włosów i brody, gorący ręcznik, brzytwa na życzenie.", price: "110 zł", time: "60–80 min" },
  { icon: Sparkles, title: "Strzyżenie brody", desc: "Konsultacja, modelowanie, gorący ręcznik i wykończenie brzytwą.", price: "50 zł", time: "30 min" },
  { icon: Scissors, title: "Buzzcut", desc: "Strzyżenie włosów wyłącznie maszynką — czysto i konkretnie.", price: "60 zł", time: "40 min" },
  { icon: Users, title: "Łysy z brodą", desc: "Golenie głowy na zero golarką + strzyżenie i pielęgnacja brody.", price: "70 zł", time: "45 min" },
  { icon: Calendar, title: "Strzyżenie dziecka", desc: "Cierpliwie i z uśmiechem — dla chłopców w wieku 5–12 lat.", price: "50 zł", time: "40 min" },
  { icon: Sparkles, title: "Combo + Odsiwianie", desc: "Pełen rytuał + zabieg odsiwiający dla efektu „salt & pepper”.", price: "130 zł", time: "80–105 min" },
  { icon: Award, title: "Tata + Syn", desc: "Strzyżenie dorosłego oraz dziecka (5–12 lat) w jednej wizycie.", price: "110 zł", time: "90 min" },
  { icon: Sparkles, title: "Regulacja brwi / Depilacja", desc: "Regulacja brwi pęsetą i woskiem, depilacja nosa i uszu.", price: "od 20 zł", time: "5–30 min" },
];

const team = [
  { name: "Dawid", role: "Master Barber" },
  { name: "Tomek", role: "Senior Barber" },
  { name: "Ania", role: "Barber Stylist" },
  { name: "Klaudia", role: "Barber Stylist" },
];

const reviews = [
  { name: "Michał K.", text: "Najlepszy barber w Myślenicach. Profesjonalizm w każdym detalu — combo z gorącym ręcznikiem to rytuał.", rating: 5 },
  { name: "Tomasz W.", text: "Klimat miejsca robi robotę. Broda zawsze idealna, obsługa na poziomie. Polecam każdemu!", rating: 5 },
  { name: "Adrian P.", text: "Mistrzostwo świata. Już nigdzie indziej nie idę — Dawid wie co robi.", rating: 5 },
  { name: "Krzysztof B.", text: "Premium w każdym calu. Warto każdej wydanej złotówki, atmosfera i jakość najwyższa.", rating: 5 },
];

const gallery = [g1, g2, g3, g4, g5, g6,g7,g8,g9];

function Home() {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <div className="bg-background text-foreground overflow-x-hidden">
      <Navbar />

      {/* HERO */}
      <section id="home" className="relative min-h-screen flex items-center">
        <div className="absolute inset-0">
          <img
            src={hero}
            alt="Barber 21 — premium barber shop w Myślenicach"
            width={1920}
            height={1080}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-32 w-full">
          <div className="max-w-2xl animate-fade-up">
            <div className="flex items-center gap-2 mb-6">
              <div className="h-px w-12 bg-gold" />
              <span className="text-gold uppercase tracking-[0.3em] text-xs">Myślenice · Rynek 21/1</span>
            </div>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[1.05] mb-6">
              Profesjonalny <span className="text-gradient-gold italic">Barber Shop</span> w&nbsp;Myślenicach
            </h1>
            <p className="text-xl md:text-2xl font-display italic text-foreground/80 mb-10">
              Styl. Precyzja. Charakter.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={BOOKSY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gradient-gold text-primary-foreground font-semibold px-8 py-4 rounded-md shadow-gold hover:scale-105 transition-transform inline-flex items-center justify-center gap-2"
              >
                Umów wizytę
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="tel:+48882390080"
                className="border border-gold/50 text-foreground font-semibold px-8 py-4 rounded-md hover:bg-gold hover:text-primary-foreground transition inline-flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" /> Zadzwoń
              </a>
            </div>

            <div className="mt-12 flex items-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                  ))}
                </div>
                <span className="text-foreground/80"><b className="text-gold">5,0</b> · 536 opinii</span>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-foreground/50 animate-fade-in-slow">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-gold to-transparent" />
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-28 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img
              src={g10}
              alt="Wnętrze Barber 21"
              width={1024}
              height={1280}
              loading="lazy"
              className="rounded-lg shadow-elegant w-full"
            />
            <div className="absolute -bottom-6 -right-6 bg-gradient-gold text-primary-foreground p-6 rounded-lg shadow-gold hidden md:block">
              <div className="font-display text-4xl font-bold">10+</div>
              <div className="text-xs uppercase tracking-widest">lat doświadczenia</div>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-px w-12 bg-gold" />
              <span className="text-gold uppercase tracking-[0.3em] text-xs">O nas</span>
            </div>
            <h2 className="text-4xl md:text-5xl mb-6">Miejsce stworzone dla <span className="text-gradient-gold italic">mężczyzn z charakterem</span></h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Barber 21 to miejsce stworzone dla mężczyzn, którzy cenią styl, precyzję i profesjonalną obsługę. Tworzymy fryzury i brody dopasowane do charakteru każdego klienta.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Łączymy klasyczne barberskie rzemiosło z nowoczesnymi technikami. Każda wizyta to rytuał — gorący ręcznik, brzytwa, aromat tradycyjnych kosmetyków i atmosfera, w której naprawdę można się zrelaksować.
            </p>
            <div className="grid grid-cols-3 gap-6">
              {[
                { v: "5,0", l: "Ocena Google" },
                { v: "536+", l: "Opinii" },
                { v: "100%", l: "Pasji" },
              ].map((s) => (
                <div key={s.l} className="border-l-2 border-gold pl-4">
                  <div className="font-display text-3xl text-gold">{s.v}</div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section id="team" className="py-28 bg-card/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="h-px w-8 bg-gold" />
              <span className="text-gold uppercase tracking-[0.3em] text-xs">Zespół</span>
              <div className="h-px w-8 bg-gold" />
            </div>
            <h2 className="text-4xl md:text-5xl mb-4">Nasi <span className="text-gradient-gold italic">barberzy</span></h2>
            <p className="text-muted-foreground">Doświadczony zespół, który dba o każdy detal Twojej fryzury i brody.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {team.map((m) => (
              <div key={m.name} className="group text-center bg-card border border-border rounded-lg p-8 hover:border-gold/50 hover:shadow-gold transition">
                <div className="w-20 h-20 mx-auto rounded-full bg-gradient-gold flex items-center justify-center text-primary-foreground font-display text-3xl mb-4 group-hover:scale-110 transition-transform">
                  {m.name[0]}
                </div>
                <div className="font-display text-2xl">{m.name}</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{m.role}</div>
                <a href={BOOKSY_URL} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex text-xs uppercase tracking-widest text-gold hover:underline">Rezerwuj</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-28 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="h-px w-8 bg-gold" />
              <span className="text-gold uppercase tracking-[0.3em] text-xs">Usługi</span>
              <div className="h-px w-8 bg-gold" />
            </div>
            <h2 className="text-4xl md:text-5xl mb-4">Nasza <span className="text-gradient-gold italic">oferta</span></h2>
            <p className="text-muted-foreground">Każda usługa wykonywana z najwyższą starannością i dbałością o detal.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.title}
                  className="group relative bg-card border border-border rounded-lg p-8 hover:border-gold transition-all duration-500 hover:-translate-y-2 hover:shadow-gold"
                >
                  <div className="w-14 h-14 rounded-lg bg-gold/10 border border-gold/30 flex items-center justify-center mb-6 group-hover:bg-gradient-gold group-hover:border-transparent transition">
                    <Icon className="w-6 h-6 text-gold group-hover:text-primary-foreground transition" />
                  </div>
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h3 className="text-2xl">{s.title}</h3>
                    <span className="text-[10px] uppercase tracking-widest text-muted-foreground border border-border rounded-full px-2 py-1 shrink-0 mt-1">{s.time}</span>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">{s.desc}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <span className="text-gold font-display text-2xl">{s.price}</span>
                    <a
                      href={BOOKSY_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs uppercase tracking-widest text-foreground/70 hover:text-gold inline-flex items-center gap-1"
                    >
                      Rezerwuj <ChevronRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="h-px w-8 bg-gold" />
              <span className="text-gold uppercase tracking-[0.3em] text-xs">Galeria</span>
              <div className="h-px w-8 bg-gold" />
            </div>
            <h2 className="text-4xl md:text-5xl mb-4">Nasze <span className="text-gradient-gold italic">realizacje</span></h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
  {gallery.map((src, i) => (
    <button
      key={i}
      onClick={() => setLightbox(src)}
      className="group relative overflow-hidden rounded-lg aspect-[4/5]"
    >
      <img
        src={src}
        alt={`Realizacja Barber 21 ${i + 1}`}
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" />

      <div className="absolute bottom-4 left-4 right-4 text-left translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition duration-500">
        <span className="text-gold text-xs uppercase tracking-widest">
          Zobacz większe
        </span>
      </div>
    </button>
  ))}
</div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="py-28 bg-card/30 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="h-px w-8 bg-gold" />
              <span className="text-gold uppercase tracking-[0.3em] text-xs">Opinie</span>
              <div className="h-px w-8 bg-gold" />
            </div>
            <h2 className="text-4xl md:text-5xl mb-6">Co mówią nasi <span className="text-gradient-gold italic">klienci</span></h2>
            <div className="inline-flex items-center gap-3 bg-card border border-gold/30 rounded-full px-6 py-3">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                ))}
              </div>
              <span className="font-display text-2xl text-gold">5,0</span>
              <span className="text-muted-foreground text-sm">· 536 opinii Google</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {reviews.map((r) => (
              <div key={r.name} className="bg-card border border-border rounded-lg p-8 hover:border-gold/50 transition">
                <div className="flex mb-4">
                  {[...Array(r.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                  ))}
                </div>
                <p className="text-foreground/90 leading-relaxed mb-6 italic font-display text-lg">„{r.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-gold flex items-center justify-center text-primary-foreground font-bold">
                    {r.name[0]}
                  </div>
                  <div>
                    <div className="font-semibold">{r.name}</div>
                    <div className="text-xs text-muted-foreground">Klient Barber 21</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={hero} alt="" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background" />
        </div>
        <div className="relative max-w-4xl mx-auto px-6 lg:px-10 text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="h-px w-12 bg-gold" />
            <Sparkles className="w-4 h-4 text-gold" />
            <div className="h-px w-12 bg-gold" />
          </div>
          <h2 className="text-5xl md:text-7xl mb-6 leading-[1.05]">
            Zadbaj o swój <span className="text-gradient-gold italic">styl</span> już dziś
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
            Zarezerwuj wizytę online w kilka sekund. Twój nowy look czeka.
          </p>
          <a
            href={BOOKSY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 bg-gradient-gold text-primary-foreground font-semibold px-10 py-5 rounded-md shadow-gold glow-gold hover:scale-105 transition-transform text-lg"
          >
            Umów wizytę przez Booksy
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition" />
          </a>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="h-px w-8 bg-gold" />
              <span className="text-gold uppercase tracking-[0.3em] text-xs">Kontakt</span>
              <div className="h-px w-8 bg-gold" />
            </div>
            <h2 className="text-4xl md:text-5xl">Odwiedź <span className="text-gradient-gold italic">nas</span></h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            <div className="space-y-6">
              <div className="bg-card border border-border rounded-lg p-6 flex gap-4 hover:border-gold/50 transition">
                <div className="w-12 h-12 rounded-lg bg-gold/10 border border-gold/30 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Adres</div>
                  <div className="font-medium">Rynek 21/1, 32-400 Myślenice</div>
                </div>
              </div>
              <a href="tel:+48882390080" className="block bg-card border border-border rounded-lg p-6 flex gap-4 hover:border-gold/50 transition">
                <div className="w-12 h-12 rounded-lg bg-gold/10 border border-gold/30 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Telefon</div>
                  <div className="font-medium">882 390 080</div>
                </div>
              </a>
              <div className="bg-card border border-border rounded-lg p-6 flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-gold/10 border border-gold/30 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-gold" />
                </div>
                <div className="flex-1">
                  <div className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Godziny otwarcia</div>
                  <ul className="text-sm space-y-1">
                    <li className="flex justify-between"><span>Pon – Pt</span><span className="text-muted-foreground">09:00 – 20:00</span></li>
                    <li className="flex justify-between"><span>Sobota</span><span className="text-muted-foreground">09:00 – 16:00</span></li>
                    <li className="flex justify-between"><span>Niedziela</span><span className="text-muted-foreground">Zamknięte</span></li>
                  </ul>
                </div>
              </div>

              <ContactForm />
            </div>

            <div className="rounded-lg overflow-hidden border border-border min-h-[500px] shadow-elegant">
              <iframe
                title="Barber 21 — mapa"
                src="https://www.google.com/maps?q=Rynek+21,+32-400+My%C5%9Blenice&output=embed"
                className="w-full h-full min-h-[500px] grayscale contrast-125"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <Lightbox src={lightbox} onClose={() => setLightbox(null)} />
    </div>
  );
}

function ContactForm() {
  const [sent, setSent] = useState(false);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="bg-card border border-border rounded-lg p-6 space-y-4"
    >
      <div className="flex items-center gap-2 mb-2">
        <Mail className="w-4 h-4 text-gold" />
        <span className="text-xs uppercase tracking-widest text-muted-foreground">Napisz do nas</span>
      </div>
      <input
        required
        placeholder="Imię"
        className="w-full bg-background border border-border rounded-md px-4 py-3 text-sm focus:border-gold outline-none transition"
      />
      <input
        required
        type="email"
        placeholder="Email"
        className="w-full bg-background border border-border rounded-md px-4 py-3 text-sm focus:border-gold outline-none transition"
      />
      <textarea
        required
        placeholder="Wiadomość"
        rows={4}
        className="w-full bg-background border border-border rounded-md px-4 py-3 text-sm focus:border-gold outline-none transition resize-none"
      />
      <button
        type="submit"
        className="w-full bg-gradient-gold text-primary-foreground font-semibold py-3 rounded-md hover:scale-[1.02] transition shadow-gold"
      >
        {sent ? "Dziękujemy — wkrótce się odezwiemy" : "Wyślij wiadomość"}
      </button>
    </form>
  );
}
