import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  Check,
  ChevronLeft,
  ChevronRight,
  Globe2,
  Heart,
  Menu,
  Minus,
  Pause,
  Play,
  Search,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  X,
} from "lucide-react";
import { toast } from "sonner";

import atelierImage from "@/assets/atelier.jpg";
import heroVideo from "@/assets/agora-hero.mp4.asset.json";
import asterImage from "@/assets/watch-aster.jpg";
import chronosImage from "@/assets/watch-chronos.jpg";
import meridianImage from "@/assets/watch-meridian.jpg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Agora Watches — Contemporary Mechanical Timepieces" },
      {
        name: "description",
        content:
          "Discover Agora Watches: contemporary mechanical timepieces, designed in Copenhagen and assembled by hand in La Chaux-de-Fonds.",
      },
      { property: "og:title", content: "Agora Watches — Contemporary Mechanical Timepieces" },
      {
        property: "og:description",
        content: "Precision without noise. Explore the fictional Agora collection of modern mechanical watches.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const products = [
  {
    name: "Aster No. 1",
    line: "The Essential",
    detail: "38 mm · Hand-wound · Steel",
    price: "19,800 SEK",
    image: asterImage,
    note: "New",
  },
  {
    name: "Meridian 40",
    line: "The Integrated",
    detail: "40 mm · Automatic · Steel",
    price: "28,500 SEK",
    image: meridianImage,
    note: "Bestseller",
  },
  {
    name: "Chronos 41",
    line: "The Chronograph",
    detail: "41 mm · Automatic · Steel",
    price: "34,900 SEK",
    image: chronosImage,
    note: "Limited 250",
  },
];

function Index() {
  const [cart, setCart] = useState<string[]>([]);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [playing, setPlaying] = useState(true);
  const [email, setEmail] = useState("");

  const addToCart = (name: string) => {
    setCart((current) => [...current, name]);
    toast.success(`${name} added to your selection`);
  };

  const toggleFavorite = (name: string) => {
    setFavorites((current) =>
      current.includes(name) ? current.filter((item) => item !== name) : [...current, name],
    );
  };

  return (
    <main className="bg-background text-foreground">
      <section className="relative min-h-[94svh] overflow-hidden bg-ink text-primary-foreground">
        <video
          id="agora-hero-video"
          className="absolute inset-0 h-full w-full object-cover"
          src={heroVideo.url}
          poster={chronosImage}
          autoPlay
          muted
          loop
          playsInline
          aria-label="Cinematic close-up of a mechanical watch"
        />
        <div className="absolute inset-0 bg-video-scrim" />
        <div className="absolute inset-x-0 top-0 z-20 border-b border-primary-foreground/15">
          <div className="mx-auto flex h-20 max-w-[1500px] items-center justify-between px-5 sm:px-8 lg:px-12">
            <Button
              variant="luxury-ghost"
              size="icon"
              className="lg:hidden"
              aria-label="Open menu"
              onClick={() => setMenuOpen(true)}
            >
              <Menu />
            </Button>
            <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary navigation">
              <a href="#collection" className="text-[11px] uppercase tracking-[0.18em] transition-colors hover:text-metal">Watches</a>
              <a href="#atelier" className="text-[11px] uppercase tracking-[0.18em] transition-colors hover:text-metal">Our craft</a>
              <a href="#services" className="text-[11px] uppercase tracking-[0.18em] transition-colors hover:text-metal">Services</a>
            </nav>
            <a href="#top" className="absolute left-1/2 -translate-x-1/2 text-center" aria-label="Agora Watches home">
              <span className="block font-display text-[30px] font-medium leading-none tracking-[0.24em]">AGORA</span>
              <span className="mt-1 block text-[8px] uppercase tracking-[0.38em] text-primary-foreground/60">Watches</span>
            </a>
            <div className="flex items-center gap-1">
              <Button variant="luxury-ghost" size="icon" aria-label="Search" onClick={() => setSearchOpen(true)}>
                <Search />
              </Button>
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="luxury-ghost" size="icon" aria-label={`Shopping bag with ${cart.length} items`} className="relative">
                    <ShoppingBag />
                    {cart.length > 0 && (
                      <span className="absolute right-0 top-0 grid size-4 place-items-center bg-metal text-[9px] text-accent-foreground">{cart.length}</span>
                    )}
                  </Button>
                </SheetTrigger>
                <SheetContent className="border-border bg-background sm:max-w-md">
                  <SheetHeader className="border-b border-border pb-6">
                    <SheetTitle className="font-display text-3xl font-normal">Your selection</SheetTitle>
                    <SheetDescription>{cart.length} {cart.length === 1 ? "timepiece" : "timepieces"} reserved</SheetDescription>
                  </SheetHeader>
                  <div className="py-8">
                    {cart.length === 0 ? (
                      <p className="text-sm text-muted-foreground">Your selection is currently empty.</p>
                    ) : (
                      <div className="space-y-5">
                        {cart.map((item, index) => (
                          <div key={`${item}-${index}`} className="flex items-center justify-between border-b border-border pb-5">
                            <div>
                              <p className="font-display text-xl">{item}</p>
                              <p className="text-xs text-muted-foreground">Complimentary insured delivery</p>
                            </div>
                            <Button variant="luxury-ghost" size="icon" aria-label={`Remove ${item}`} onClick={() => setCart((items) => items.filter((_, i) => i !== index))}>
                              <X />
                            </Button>
                          </div>
                        ))}
                        <Button variant="luxury" size="luxury" className="w-full" onClick={() => toast("Checkout is ready for a future commerce connection.")}>Continue to checkout</Button>
                      </div>
                    )}
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>

        <div id="top" className="relative z-10 mx-auto flex min-h-[94svh] max-w-[1500px] flex-col justify-end px-5 pb-12 pt-36 sm:px-8 sm:pb-16 lg:px-12 lg:pb-20">
          <p className="hero-reveal text-[10px] uppercase tracking-[0.34em] text-primary-foreground/65">The 2026 collection · Ref. AG-01</p>
          <h1 className="hero-reveal mt-5 max-w-4xl font-display text-[clamp(4.2rem,10vw,10.5rem)] font-normal leading-[0.76] tracking-normal" style={{ animationDelay: "100ms" }}>
            Precision<br />without noise.
          </h1>
          <div className="mt-9 flex flex-col gap-7 sm:flex-row sm:items-end sm:justify-between">
            <p className="hero-reveal max-w-md text-sm leading-7 text-primary-foreground/70" style={{ animationDelay: "220ms" }}>
              Contemporary mechanical watches, designed in Copenhagen and assembled by hand in La Chaux-de-Fonds.
            </p>
            <div className="hero-reveal flex items-center gap-3" style={{ animationDelay: "340ms" }}>
              <Button asChild variant="luxury-outline" size="luxury"><a href="#collection">Discover AG-01 <ArrowRight /></a></Button>
              <Button
                variant="luxury-ghost"
                size="icon"
                aria-label={playing ? "Pause film" : "Play film"}
                onClick={() => {
                  const video = document.querySelector<HTMLVideoElement>("#agora-hero-video");
                  if (!video) return;
                  if (playing) video.pause(); else void video.play();
                  setPlaying(!playing);
                }}
              >
                {playing ? <Pause /> : <Play />}
              </Button>
            </div>
          </div>
        </div>
        <a href="#collection" aria-label="Scroll to collection" className="absolute bottom-5 left-1/2 z-20 -translate-x-1/2 slow-pulse"><ArrowDown className="size-5" /></a>
      </section>

      <section id="collection" className="px-5 py-20 sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1500px]">
          <div className="flex items-end justify-between border-b border-border pb-6">
            <div>
              <p className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground">Current collection</p>
              <h2 className="mt-3 font-display text-5xl font-normal sm:text-7xl">Three expressions of time.</h2>
            </div>
            <div className="hidden items-center gap-2 sm:flex">
              <Button variant="luxury-ghost" size="icon" aria-label="Previous watch"><ChevronLeft /></Button>
              <Button variant="luxury-ghost" size="icon" aria-label="Next watch"><ChevronRight /></Button>
            </div>
          </div>

          <div className="grid gap-px bg-border lg:grid-cols-3">
            {products.map((product, index) => (
              <article key={product.name} className="group bg-background pt-10 lg:px-6 lg:pt-14">
                <div className="flex items-center justify-between px-4 pb-5 lg:px-0">
                  <span className="text-[10px] uppercase tracking-[0.24em] text-muted-foreground">0{index + 1} / {product.line}</span>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-metal">{product.note}</span>
                </div>
                <div className="relative aspect-[4/5] overflow-hidden bg-card">
                  <img src={product.image} alt={`${product.name} luxury mechanical watch`} width={1200} height={1504} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]" />
                  <Button
                    variant="luxury-ghost"
                    size="icon"
                    className="absolute right-4 top-4 bg-background/80 backdrop-blur"
                    aria-label={`${favorites.includes(product.name) ? "Remove" : "Add"} ${product.name} ${favorites.includes(product.name) ? "from" : "to"} favorites`}
                    onClick={() => toggleFavorite(product.name)}
                  >
                    <Heart className={favorites.includes(product.name) ? "fill-current text-metal" : ""} />
                  </Button>
                  <div className="absolute inset-x-4 bottom-4 translate-y-20 transition-transform duration-300 group-hover:translate-y-0 focus-within:translate-y-0">
                    <Button variant="luxury" size="luxury" className="w-full" onClick={() => addToCart(product.name)}>Add to selection <ShoppingBag /></Button>
                  </div>
                </div>
                <div className="flex items-start justify-between px-4 py-6 lg:px-0">
                  <div>
                    <h3 className="font-display text-3xl font-normal">{product.name}</h3>
                    <p className="mt-1 text-xs text-muted-foreground">{product.detail}</p>
                  </div>
                  <p className="pt-2 text-xs font-medium">{product.price}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="atelier" className="bg-ink text-primary-foreground">
        <div className="grid min-h-[720px] lg:grid-cols-2">
          <div className="relative min-h-[480px] overflow-hidden">
            <img src={atelierImage} alt="Agora watchmaker assembling a mechanical movement" width={1600} height={1072} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1500ms] hover:scale-[1.02]" />
            <div className="absolute inset-0 bg-video-scrim opacity-30" />
            <p className="absolute bottom-7 left-7 text-[10px] uppercase tracking-[0.24em] text-primary-foreground/65">Atelier 04 · La Chaux-de-Fonds</p>
          </div>
          <div className="flex flex-col justify-center px-6 py-20 sm:px-12 lg:px-[10vw]">
            <p className="text-[10px] uppercase tracking-[0.3em] text-metal">Made slowly</p>
            <h2 className="mt-6 font-display text-5xl font-normal leading-[0.95] sm:text-7xl">A human measure of precision.</h2>
            <p className="mt-8 max-w-lg text-sm leading-7 text-primary-foreground/65">
              Every Agora movement is adjusted in five positions, finished by hand, and tested for 500 hours. Each watch carries the initials of the watchmaker who completed it.
            </p>
            <dl className="mt-12 grid grid-cols-3 gap-6 border-y border-primary-foreground/15 py-8">
              <div><dt className="font-display text-4xl text-metal">72h</dt><dd className="mt-2 text-[9px] uppercase tracking-[0.18em] text-primary-foreground/50">Power reserve</dd></div>
              <div><dt className="font-display text-4xl text-metal">5</dt><dd className="mt-2 text-[9px] uppercase tracking-[0.18em] text-primary-foreground/50">Positions tested</dd></div>
              <div><dt className="font-display text-4xl text-metal">5yr</dt><dd className="mt-2 text-[9px] uppercase tracking-[0.18em] text-primary-foreground/50">Warranty</dd></div>
            </dl>
            <Button variant="luxury-outline" size="luxury" className="mt-10 w-fit" onClick={() => toast("Your private atelier visit request has been noted.")}>Visit the atelier <ArrowRight /></Button>
          </div>
        </div>
      </section>

      <section id="services" className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1500px]">
          <p className="text-center text-[10px] uppercase tracking-[0.3em] text-muted-foreground">The Agora standard</p>
          <div className="mt-12 grid border-y border-border md:grid-cols-3">
            {[
              [ShieldCheck, "Five-year guarantee", "International coverage, parts and labour included."],
              [Globe2, "Complimentary delivery", "Fully insured express delivery throughout the Nordics."],
              [Sparkles, "Lifetime care", "Cleaning, regulation and strap fitting in our atelier."],
            ].map(([Icon, title, copy], index) => {
              const ServiceIcon = Icon as typeof ShieldCheck;
              return (
                <div key={title as string} className={`px-8 py-12 text-center ${index > 0 ? "border-t border-border md:border-l md:border-t-0" : ""}`}>
                  <ServiceIcon className="mx-auto size-5 text-metal" strokeWidth={1.4} />
                  <h3 className="mt-6 font-display text-2xl">{title as string}</h3>
                  <p className="mx-auto mt-3 max-w-xs text-xs leading-6 text-muted-foreground">{copy as string}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-card px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-[1500px] gap-12 lg:grid-cols-2 lg:items-end">
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Agora Letters</p>
            <h2 className="mt-4 max-w-xl font-display text-5xl font-normal leading-none sm:text-7xl">Notes on time, craft and permanence.</h2>
          </div>
          <form
            className="lg:pl-16"
            onSubmit={(event) => {
              event.preventDefault();
              if (!email.includes("@")) { toast.error("Enter a valid email address."); return; }
              toast.success("Welcome to Agora Letters.");
              setEmail("");
            }}
          >
            <label htmlFor="email" className="text-xs text-muted-foreground">A considered letter, no more than twice a month.</label>
            <div className="mt-5 flex border-b border-foreground">
              <Input id="email" type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Email address" className="h-14 rounded-none border-0 px-0 shadow-none focus-visible:ring-0" />
              <Button type="submit" variant="luxury-ghost" size="icon" aria-label="Subscribe"><ArrowRight /></Button>
            </div>
          </form>
        </div>
      </section>

      <footer className="bg-ink px-5 py-16 text-primary-foreground sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1500px]">
          <div className="grid gap-12 border-b border-primary-foreground/15 pb-14 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <p className="font-display text-3xl tracking-[0.2em]">AGORA</p>
              <p className="mt-4 max-w-xs text-xs leading-6 text-primary-foreground/50">Independent watchmaking for people who notice the details.</p>
            </div>
            {[
              ["Collections", ["Aster", "Meridian", "Chronos", "All watches"]],
              ["Client care", ["Delivery & returns", "Warranty", "Book a service", "Contact"]],
              ["Maison", ["Our story", "The atelier", "Materials", "Journal"]],
            ].map(([title, links]) => (
              <div key={title as string}>
                <p className="text-[9px] uppercase tracking-[0.24em] text-primary-foreground/40">{title as string}</p>
                <ul className="mt-5 space-y-3 text-xs">
                  {(links as string[]).map((link) => <li key={link}><button className="cursor-pointer transition-colors hover:text-metal" onClick={() => toast(`${link} is part of this storefront preview.`)}>{link}</button></li>)}
                </ul>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-4 pt-7 text-[9px] uppercase tracking-[0.16em] text-primary-foreground/40 sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 Agora Watches · Fictional demonstration store</p>
            <div className="flex gap-6"><button>Privacy</button><button>Terms</button><button>SE / SEK</button></div>
          </div>
        </div>
      </footer>

      {searchOpen && (
        <div className="fixed inset-0 z-[70] bg-ink/95 p-5 text-primary-foreground backdrop-blur-xl sm:p-10">
          <div className="mx-auto max-w-5xl">
            <div className="flex items-center justify-between border-b border-primary-foreground/20 pb-5">
              <p className="font-display text-3xl tracking-[0.2em]">AGORA</p>
              <Button variant="luxury-ghost" size="icon" aria-label="Close search" onClick={() => setSearchOpen(false)}><X /></Button>
            </div>
            <label htmlFor="site-search" className="mt-20 block text-[10px] uppercase tracking-[0.28em] text-primary-foreground/50">Search the collection</label>
            <div className="mt-5 flex border-b border-primary-foreground/50">
              <Input id="site-search" autoFocus placeholder="Aster, chronograph, 40 mm…" className="h-20 rounded-none border-0 px-0 font-display text-4xl shadow-none placeholder:text-primary-foreground/25 focus-visible:ring-0" />
              <Search className="mt-8 size-5" />
            </div>
            <div className="mt-10 flex flex-wrap gap-3">{["Aster No. 1", "Meridian 40", "Chronos 41", "Watch care"].map((term) => <Button key={term} variant="luxury-outline" onClick={() => toast(`Showing results for ${term}`)}>{term}</Button>)}</div>
          </div>
        </div>
      )}

      {menuOpen && (
        <div className="fixed inset-0 z-[70] bg-ink p-6 text-primary-foreground">
          <div className="flex items-center justify-between"><p className="font-display text-3xl tracking-[0.2em]">AGORA</p><Button variant="luxury-ghost" size="icon" onClick={() => setMenuOpen(false)} aria-label="Close menu"><X /></Button></div>
          <nav className="mt-24 space-y-7 font-display text-6xl">
            <a className="block" href="#collection" onClick={() => setMenuOpen(false)}>Watches</a>
            <a className="block" href="#atelier" onClick={() => setMenuOpen(false)}>Our craft</a>
            <a className="block" href="#services" onClick={() => setMenuOpen(false)}>Services</a>
          </nav>
          <div className="mt-16 flex items-center gap-3 text-xs text-primary-foreground/50"><Minus className="size-4" /> Copenhagen · La Chaux-de-Fonds</div>
        </div>
      )}
    </main>
  );
}