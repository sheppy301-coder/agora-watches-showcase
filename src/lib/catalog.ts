import watch01 from "@/assets/watch-01.webp.asset.json";
import watch02 from "@/assets/watch-02.webp.asset.json";
import watch03 from "@/assets/watch-03.webp.asset.json";
import watch04 from "@/assets/watch-04.webp.asset.json";
import watch05 from "@/assets/watch-05.webp.asset.json";
import watch06 from "@/assets/watch-06.webp.asset.json";
import watch07 from "@/assets/watch-07.webp.asset.json";
import watch08 from "@/assets/watch-08.webp.asset.json";
import watch09 from "@/assets/watch-09.webp.asset.json";
import classic from "@/assets/collection-classic.webp.asset.json";
import coast from "@/assets/collection-coast.webp.asset.json";


const originalProducts = [
  {
    name: "Aster No. 1",
    line: "The Essential",
    detail: "38 mm · Hand-wound · Calibre AG-01",
    price: "19,800 SEK",
    image: watch01.url,
    note: "New",
  },
  {
    name: "Meridian 40",
    line: "The Integrated",
    detail: "40 mm · Automatic · 72h reserve",
    price: "28,500 SEK",
    image: watch02.url,
    note: "Bestseller",
  },
  {
    name: "Chronos 41",
    line: "The Chronograph",
    detail: "41 mm · Automatic chronograph · 10 ATM",
    price: "34,900 SEK",
    image: watch03.url,
    note: "Limited 250",
  },
  {
    name: "Atelier Squelette",
    line: "The Openworked",
    detail: "39 mm · Hand-wound · Sapphire back",
    price: "31,500 SEK",
    image: watch04.url,
    note: "Atelier edition",
  },
  {
    name: "Luna Perpetual",
    line: "The Calendar",
    detail: "40 mm · Automatic · Moon phase",
    price: "42,000 SEK",
    image: watch05.url,
    note: "New",
  },
  {
    name: "Nocturne C.2",
    line: "The Sport Classic",
    detail: "42 mm · Automatic · Ceramic bezel",
    price: "36,800 SEK",
    image: watch06.url,
    note: "Online exclusive",
  },
  {
    name: "Équinoxe 39",
    line: "The Traveller",
    detail: "39 mm · Automatic GMT · Steel",
    price: "29,900 SEK",
    image: watch07.url,
    note: "Boutique edition",
  },
  {
    name: "Horizon Bleu",
    line: "The Minimalist",
    detail: "38 mm · Automatic · Sunray dial",
    price: "23,700 SEK",
    image: watch08.url,
    note: "Available now",
  },
  {
    name: "Regatta 42",
    line: "The Diver",
    detail: "42 mm · Automatic · 30 ATM",
    price: "38,500 SEK",
    image: watch09.url,
    note: "Limited 150",
  },
];

export const collections = [
  { slug: "essentials", name: "The Essentials", subtitle: "Less, considered.", description: "Quiet dials, balanced proportions, and the pleasure of a mechanical watch worn every day.", image: classic.url },
  { slug: "sport", name: "Sport & Steel", subtitle: "Built to move.", description: "Integrated bracelets, purposeful cases, and a presence that carries from the city to the coast.", image: watch02.url },
  { slug: "complications", name: "Complications", subtitle: "Beyond the hour.", description: "Chronographs, calendars, and a second time zone. Mechanical ingenuity made beautifully legible.", image: watch05.url },
  { slug: "atelier", name: "Atelier Editions", subtitle: "A closer look.", description: "Openworked movements and small-series expressions for those who appreciate what lies beneath the dial.", image: watch04.url },
  { slug: "ocean", name: "Ocean & Adventure", subtitle: "An open horizon.", description: "Confident silhouettes, rotating bezels, and watches inspired by life beyond the shoreline.", image: coast.url },
  { slug: "dress", name: "Evening & Dress", subtitle: "Quiet elegance.", description: "Slim cases, refined dials, and leather straps made for the moments that matter most.", image: watch01.url },
  { slug: "travel", name: "Travel & GMT", subtitle: "Two places at once.", description: "Second time zones and legible dials for those who live between cities.", image: watch07.url },
  { slug: "night", name: "Nocturne", subtitle: "After dark.", description: "Deep black dials, ceramic details, and luminous hands that glow long after sunset.", image: watch06.url },
  { slug: "blue", name: "Bleu Edition", subtitle: "The colour of depth.", description: "Sunray and lacquered blue dials, from the soft hue of morning to the deep ink of the sea.", image: watch08.url },
  { slug: "racing", name: "Racing Heritage", subtitle: "Measured in tenths.", description: "Chronographs and tachymeter scales inspired by the golden age of motorsport.", image: watch03.url },
];
const memberships = ["dress", "sport", "racing", "atelier", "complications", "night", "travel", "blue", "ocean"];
const slugs = ["aster-no-1", "meridian-40", "chronos-41", "atelier-squelette", "luna-perpetual", "nocturne-c2", "equinoxe-39", "horizon-bleu", "regatta-42"];
export const products = originalProducts.map((product, index) => ({ ...product, slug: slugs[index] ?? `timepiece-${index + 1}`, collection: memberships[index] ?? "essentials", priceValue: Number(product.price.replace(/[^0-9]/g, "")), reference: `AG-${String(index + 1).padStart(2, "0")}` }));
export type Product = (typeof products)[number];
export const formatPrice = (value: number) => `${value.toLocaleString("en-US")} SEK`;
export const pageHead = (title: string, description: string) => ({ meta: [{ title: `${title} — Agora Watches` }, { name: "description", content: description }, { property: "og:title", content: `${title} — Agora Watches` }, { property: "og:description", content: description }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] });
