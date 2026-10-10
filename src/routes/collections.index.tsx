import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/lib/catalog";
import { PageIntro, CollectionTiles } from "@/components/store/page-parts";
export const Route = createFileRoute("/collections/")({ head: () => pageHead("The Collections", "Explore ten Agora collections, from quiet everyday essentials to mechanical complications and ocean-inspired watches."), component: CollectionsPage });
function CollectionsPage() { return <main><PageIntro label="The Agora collection" title="Ten perspectives on time." copy="Different expressions. A shared point of view. Explore the collection that feels most like you." /><div className="mx-auto max-w-[1500px] px-5 pb-24 sm:px-8 lg:px-12"><CollectionTiles /></div></main>; }
