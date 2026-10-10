<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep Agora Watches as a frontend-only fictional storefront; use local static catalog data so the experience remains realistic without a backend.
- Keep catalog and editorial data in browser-safe shared modules so all pages use consistent local content.
- Keep selection and favourites in a shared in-memory provider around the root navigation and Outlet so client navigation preserves browsing state without a backend.
- Use index leaves for collection, watch, and journal listings and sibling dynamic routes for details so each page renders independently.
