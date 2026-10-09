import { createContext, useContext, useState, type ReactNode } from "react";
import { toast } from "sonner";

type StoreState = { cart: string[]; favorites: string[]; add: (slug: string, name: string) => void; remove: (index: number) => void; favorite: (slug: string) => void };
const StoreContext = createContext<StoreState | undefined>(undefined);
export function StoreProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<string[]>([]);
  const [favorites, setFavorites] = useState<string[]>([]);
  return <StoreContext.Provider value={{ cart, favorites, add: (slug, name) => { setCart(items => [...items, slug]); toast.success(`${name} added to your selection`); }, remove: index => setCart(items => items.filter((_, i) => i !== index)), favorite: slug => setFavorites(items => items.includes(slug) ? items.filter(item => item !== slug) : [...items, slug]) }}>{children}</StoreContext.Provider>;
}
export function useStore() { const store = useContext(StoreContext); if (!store) throw new Error("StoreProvider is required"); return store; }
