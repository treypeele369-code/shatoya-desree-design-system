# UI kit — shatoyadesree.me (one-page site + service pages)

Two surfaces, both built entirely from this design system's components.

| File | What it is |
| --- | --- |
| `index.html` | The single-page site. Hero → About → Services & Pricing → Gallery → Testimonials → Policies & FAQ → Visit → Footer, with a fixed header, a sticky mobile booking bar and a gallery lightbox. |
| `service.html` | The SEO landing page, one per service category. Switch categories with the header links (`#loc-maintenance`, `#starter-locs`, `#loc-styling`, `#barbering`); title, meta description and `Service` JSON-LD update per category. |
| `data.js` | All real business content — address, phone, hours, the full Square service menu with prices and durations, reviews, policies. One place to edit. |
| `sections.page.jsx` + `sections-2.page.jsx` | The one-pager's sections plus `Reveal` (the scroll fade-and-rise) and the lightbox. |
| `app.page.jsx` | Composes the one-pager. |
| `service-page.page.jsx` | The service landing page, including its per-category copy. |

## Conversion rules baked in
- "Book Appointment" appears **seven** times on the one-pager: hero, about, services, gallery, policies, visit, footer — plus the header (after scroll) and the sticky mobile bar.
- Every service row is a link to the Square booking URL.
- Phone is `tel:`, address opens Google Maps, every image has real alt text, gallery images are `loading="lazy"`.
- `HairSalon` + `BarberShop` JSON-LD on the home page with hours, geo, address and price range; `Service` JSON-LD per category page.
- Responsive to 360px. Below 900px the header links hide and the sticky bar carries booking.

## Not yet real
Every photograph is a labelled `ImagePlaceholder` or empty `GalleryTile` stating the shot it needs, at the correct aspect ratio. The map is a marked box awaiting the Google Maps iframe. Swap these and the site is shippable.

> **Mounting note:** the compiler evaluates **every** `.jsx` in the project as a bundle module,
> regardless of filename — so no page script may call `ReactDOM.createRoot` at module top level,
> or that call runs on every design-system card and in every consuming project. Page scripts here
> only define components and assign them to `window`; the `createRoot` call lives in an inline
> `<script type="text/babel">` at the end of each HTML file. The `*.page.jsx` naming is a
> readability convention only, not the mechanism.
