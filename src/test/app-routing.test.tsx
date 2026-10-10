import { QueryClient } from "@tanstack/react-query";
import { createRouter, rootRouteId } from "@tanstack/react-router";
import { describe, expect, it } from "vitest";

import { routeTree } from "@/routeTree.gen";

// Match routes without running loaders or rendering: loaders may need a server or
// network the test run lacks, and jsdom never loads the stylesheets React waits on.
describe("App routing", () => {
  it("matches a page for / instead of falling back to not found", () => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });

    const matches = router.matchRoutes("/");

    expect(matches.at(-1)?.routeId).not.toBe(rootRouteId);
  });
  it.each([
    ["/collections", "/collections/"],
    ["/collections/essentials", "/collections/$slug"],
    ["/watches", "/watches/"],
    ["/watches/aster-no-1", "/watches/$slug"],
    ["/craft", "/craft"],
    ["/services", "/services"],
    ["/contact", "/contact"],
    ["/journal", "/journal/"],
    ["/journal/everyday-companion", "/journal/$slug"],
  ])("matches %s to its own content page", (path, routeId) => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });
    expect(router.matchRoutes(path).at(-1)?.routeId).toBe(routeId);
  });
});
