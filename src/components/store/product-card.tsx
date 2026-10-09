import { Link } from "@tanstack/react-router";
import { Heart, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { type Product } from "@/lib/catalog";
import { useStore } from "./store-context";
export function ProductCard({ product }: { product: Product }) {
 const { favorite, favorites } = useStore();
 return <article className="group min-w-0">
  <div className="relative aspect-[4/5] overflow-hidden bg-card">
   <Link to="/watches/$slug" params={{ slug: product.slug }} aria-label={`View ${product.name}`}><img src={product.image} alt={`${product.name} watch — illustrative photography`} width={1200} height={1500} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.035]" /></Link>
   <span className="absolute bottom-4 left-4 bg-background/90 px-3 py-2 text-[10px] uppercase">{product.note}</span>
   <Button variant="luxury-ghost" size="icon" className="absolute right-3 top-3 bg-background/90" aria-label={`${favorites.includes(product.slug) ? "Remove" : "Save"} ${product.name}`} onClick={() => favorite(product.slug)}><Heart className={favorites.includes(product.slug) ? "fill-current text-metal" : ""} /></Button>
  </div>
  <Link to="/watches/$slug" params={{ slug: product.slug }} className="flex items-start justify-between gap-2 py-5"><div><h3 className="font-display text-3xl">{product.name}</h3><p className="mt-1 text-xs text-muted-foreground">{product.detail}</p><p className="mt-3 text-xs">{product.price}</p></div><ArrowUpRight className="mt-2 size-4 shrink-0" /></Link>
 </article>;
}
