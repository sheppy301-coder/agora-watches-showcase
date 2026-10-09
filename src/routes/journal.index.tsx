import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { articles } from "@/lib/journal";
import { pageHead } from "@/lib/catalog";
import { PageIntro } from "@/components/store/page-parts";
export const Route = createFileRoute("/journal/")({ head: () => pageHead("Agora Journal", "Perspectives on mechanical watches, watchmaking, and the objects we choose to live with."), component: JournalPage });
function JournalPage() { return <main><PageIntro label="Agora Journal" title="Notes on time." copy="Stories of craft, mechanics, and the quiet pleasure of a well-considered object." /><div className="mx-auto grid max-w-[1500px] gap-10 px-6 pb-24 lg:grid-cols-3 lg:px-12">{articles.map(a => <Link key={a.slug} to="/journal/$slug" params={{ slug: a.slug }} className="group"><div className="aspect-[4/3] overflow-hidden"><img src={a.image} alt={a.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]" /></div><p className="mt-6 text-[10px] uppercase text-metal">{a.category} · {a.reading} read</p><h2 className="mt-3 font-display text-4xl">{a.title}</h2><p className="mt-4 text-sm leading-7 text-muted-foreground">{a.intro}</p><span className="mt-6 inline-flex items-center gap-3 text-xs">Read story <ArrowRight className="size-4" /></span></Link>)}</div></main>; }
