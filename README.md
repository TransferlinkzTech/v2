<div align="center">

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="docs/brand/logo-on-dark.svg">
  <img src="docs/brand/logo-on-light.svg" alt="TransferLinkz" width="240">
</picture>

<br />

**The marketing site for TransferLinkz**<br />
One connected operation behind every guest journey.

</div>

---

## About

This is the public landing page for **TransferLinkz**, an airport transfer coordination platform for tour operators, transfer suppliers, drivers and guests. It is a single-page Next.js site that presents the product, answers common questions, shows pricing and collects waitlist interest.

The page is built section by section from the design files, top to bottom:

| #   | Section                                                    | Folder                           |
| --- | ---------------------------------------------------------- | -------------------------------- |
| –   | Announcement bar and header                                | `components/header`              |
| 1   | Hero: headline, calls to action, dashboard                 | `features/home/hero`             |
| 3   | "Wave goodbye to…" word ticker                             | `features/home/section3`         |
| 4   | "Flexible for the many ways guest journeys begin" cards    | `features/home/section4`         |
| 5   | "One operation. The right view for every role." role tabs  | `features/home/section5`         |
| 6   | FAQ accordion (shared with the About page)                 | `components/faq-section`         |
| 7   | Pricing                                                    | `features/home/section7`         |
| 8   | Closing call to action with illustration (shared)          | `components/cta-section`         |
| –   | Footer                                                     | `components/footer`              |

### Other pages

| Route    | Feature          | Status                                           |
| -------- | ---------------- | ------------------------------------------------ |
| `/`      | `features/home`  | Complete                                         |
| `/solutions` | `features/solutions` | Complete (copy in `docs/solutions-page-content.md`) |
| `/waitlist` | `features/waitlist` | Complete (saves signups to Postgres, needs `DATABASE_URL`) |
| `/about` | `features/about` | Complete                                         |
| `/contact` | `features/contact` | Complete (the form opens an email draft)       |
| `/privacy` | `features/privacy` | Complete (content has placeholders to fill in) |
| `/terms` | `features/terms` | Complete (content has placeholders to fill in)   |

## Tech stack

- [Next.js](https://nextjs.org) 16 (App Router, Turbopack) and [React](https://react.dev) 19
- TypeScript 5
- [Tailwind CSS](https://tailwindcss.com) 4
- ESLint 9 with `eslint-config-next`
- [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans) through `next/font`

The only runtime dependencies are Next.js, React and [`pg`](https://node-postgres.com) (the Postgres driver, used by the waitlist). The motion is plain CSS and a few lines of `IntersectionObserver` and `requestAnimationFrame`.

## Getting started

You need **Node.js 20 or newer** (developed on Node 22) and npm.

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000). If that port is taken, Next.js prints the port it picked.

| Command         | What it does                                  |
| --------------- | --------------------------------------------- |
| `npm run dev`   | Start the development server                  |
| `npm run build` | Create a production build                     |
| `npm start`     | Serve the production build                    |
| `npm run lint`  | Run ESLint                                    |
| `npm run db:migrate` | Create or update the database tables (needs `DATABASE_URL`) |

> **Tip:** don't run `npm run build` while `npm run dev` is running. They share the `.next` folder, and the dev server can end up serving stale styles. If styles ever look out of date after you edit `app/globals.css`, stop the dev server, delete `.next`, and start it again.

## Project structure

The project uses a **feature-based structure**. Each page is a feature that composes its own sections, and the matching `app` route simply renders it.

```
app/
  layout.tsx            Root layout: font, header, footer
  page.tsx              Renders <Home />
  solutions/page.tsx    Renders <Solutions />
  waitlist/page.tsx     Renders <Waitlist />
  not-found.tsx         Branded 404 page (renders <NotFoundPage />)
  template.tsx          Wraps every page in a view transition (the page fade)
  about/page.tsx        Renders <About />
  contact/page.tsx      Renders <Contact />
  privacy/page.tsx      Renders <Privacy />
  terms/page.tsx        Renders <Terms />
  globals.css           Design tokens, scroll-reveal and dot-flicker CSS
  icon.svg              Favicon
  opengraph-image.tsx   Default share card (1200×630), generated at build time
  robots.ts, sitemap.ts, manifest.ts

components/             Shared by more than one page
  header/               Announcement bar, nav
  footer/
  faq-section/         FAQ accordion (home, About and Solutions)
  cta-section/         Closing call to action (home, About, Contact, Solutions and legal pages)
  legal-document/       Shared layout for the legal pages: hero, contents list, sections
  json-ld/              Structured data script (Organization, FAQ)
  guest-mockup/         The guest trip-link phone mockup (home role tabs and Solutions)
  card-glow/            Tracks the cursor for the glowing card edges (one listener)
  form-field/           Label, error message and input styles shared by the forms
  logo/
  reveal/               Scroll-reveal wrapper
  hero-background/      Flickering dot field and cursor glow (both heroes)
  join-waitlist-button/
  see-features-button/
  check-badge-icon/

features/
  home/
    index.tsx           Composes every section of the home page
    hero/
    section3/ … section7/
  about/
    index.tsx           Composes the sections of the About page
    hero/
  not-found/
    index.tsx           The 404 page: unknown addresses, with the header and footer
  waitlist/
    index.tsx           The waitlist page
    actions.ts          Server action that validates and saves a signup
    validate.ts         Server-side checks for the form
    hero/               Hero and the form (waitlist-form/)
  solutions/
    index.tsx           Composes the Solutions page
    roles.ts            Copy and product visuals for the four role sections
    role-nav/           Sticky pills that follow the section on screen
    role-section/       One template, filled from roles.ts
    how-it-works/, works-alongside/
  contact/
    index.tsx           Composes the sections of the Contact page
    hero/               Hero and the message form (contact-form/)
  privacy/, terms/
    content.ts          The document as plain data (sections, paragraphs, lists)
    index.tsx           Renders <LegalDocument> and the closing call to action

lib/
  site.ts               Site identity: name, URL, titles, descriptions, keywords
  metadata.ts           pageMetadata(): canonical, Open Graph and Twitter for a page
  contact.ts            Support email, the waitlist path and the enterprise mailto link
  db.ts                 Postgres connection pool (server only)
  og/                   Font and logo loaders for the share card

public/images/          Optimised images and generated SVG textures
docs/brand/             Logo files used by this README
```

### Conventions

- **One component per file.** Every component lives in its own `index.tsx`.
- **Nested components get their own folder** inside their parent's folder, for example `section5/role-tabs/role-tab/index.tsx`.
- **Sections are named after the design files** (`section3`, `section4`, …) and composed in `features/home/index.tsx`.
- **Shared pieces** (header, footer, buttons, logo) live in `components/`, not inside a feature.
- Use the `@/` import alias for anything outside the current folder.
- Static data (plans, FAQs, role copy) sits next to the section that uses it, in a plain `.ts` file, so content changes don't touch layout code.

## Styling

- **Design tokens** (brand blue, dark surfaces, line colours, navy text) are defined once in the `@theme` block in `app/globals.css` and used as Tailwind classes such as `bg-brand`, `text-navy` and `border-line-light`.
- The design frame is **1240px wide**, centred, with 1px frame lines down both sides. Section backgrounds run full width.
- **Breakpoints:** most sections switch from a stacked layout to the design's layout at `1180px`, the width at which the 1240px frame still fits. The word ticker switches at `1100px`, and the cards and FAQ use Tailwind's `lg` (`1024px`).
- When combining a named breakpoint (`sm:`) with a custom one (`min-[1180px]:`) on the same property, prefer custom ones for both. Tailwind sorts them differently, and the named one can win at wide widths.

## Motion

| Effect                           | Where                                | How                                                                                         |
| -------------------------------- | ------------------------------------ | ------------------------------------------------------------------------------------------- |
| Scroll reveal                    | Every section and the footer         | `<Reveal>` fades and lifts content in once, with optional `delay` for staggering            |
| Hero intro                       | Hero                                 | `<Reveal immediate>` plays from CSS on load, with no JavaScript needed                      |
| Flickering dot grid              | Hero background                      | Six interleaved groups of dots (`hero-dots-0…5.svg`), each twinkling on its own rhythm      |
| Cursor glow                      | Hero background                      | A small glow of the same dots that follows the pointer (`cursor-spotlight`)                 |
| Word ticker                      | Section 3                            | Steps through the pain points every 2.4s, only while on screen                              |
| Role tabs                        | Section 5                            | Switches background, copy and product art per role                                          |
| Page transitions                 | Every navigation                     | `app/template.tsx` wraps the page in React's `<ViewTransition>`: a 140ms fade out, then a 260ms fade in. The header and footer stay put |
| Card lift and glow               | About, home and Solutions cards      | `.card-interactive` lifts 4px and gets a glowing edge that follows the cursor (`components/card-glow`) |
| Button lift                      | Every button                         | `.btn-lift` lifts 2px on hover and settles on press; "See features" nudges its arrow |
| Route arcs                       | Closing illustration                 | The routes between the pins draw themselves in, then dashes flow along them and the pins pulse. Paused off screen |

Everything respects `prefers-reduced-motion`, and `<noscript>` shows scroll-reveal content normally.

- **Page transitions** use the browser's View Transitions API through React's `<ViewTransition>`. A browser without it (older Firefox and Safari) just navigates instantly, and the site works exactly the same.
- **Hover effects** only apply on devices that can hover, so they never trigger on touch screens. With reduced motion on, cards and buttons keep their colour changes but don't move.
- **Route arcs** are an SVG overlay (`components/cta-section/cta-illustration/route-arcs`) drawn over `cta-illustration-scene.webp`, which is the artwork with its old baked-in dashed routes erased. Without JavaScript, or with reduced motion, the routes are simply there, fully drawn. If the artwork is ever replaced, re-trace the paths in `route-arcs/routes.ts`.

## Waitlist and database

The waitlist form (`/waitlist`) saves each signup (name, email and an optional company) to a Postgres table, `waitlist_signups`. The "Join Waitlist" and "Request early access" buttons all go to this page.

**Set it up**

1. Create a `.env.local` file (it is git-ignored) with the connection string:

   ```bash
   DATABASE_URL=postgres://user:password@host:5432/dbname
   ```

   Add `?sslmode=require` to the end if the host needs SSL. The same variable has to be set on the host where the site is deployed.
2. Create the table:

   ```bash
   npm run db:migrate
   ```

   It applies `db/schema.sql`, and is safe to run again.

**How it behaves**

- The form posts to a [server action](https://nextjs.org/docs/app/guides/forms) (`features/waitlist/actions.ts`), so it also works before the page's JavaScript has loaded. Every check is repeated on the server.
- Emails are stored lower-cased and are unique. Signing up again with the same address looks like a success but changes nothing, so the form never reveals who is on the list and nobody can overwrite another person's details.
- A hidden "website" field catches simple bots: a submission that fills it in gets a success message and is not stored.
- If the database is unreachable, the person sees a friendly error with the support email, their details stay in the form, and the real error is logged on the server.
- Not included yet: rate limiting, a confirmation email, and a way to export or delete a signup (do it in SQL for now, for example when someone asks under the privacy policy).

**See the signups**

```sql
select name, email, company, created_at from waitlist_signups order by created_at desc;
```

## SEO and metadata

- **`lib/site.ts`** holds the site's name, URL, default title and description, keywords and theme colour. Change copy there, not in the pages.
- **Each page** sets its metadata with `pageMetadata({ title, description, path })` from `lib/metadata.ts`, which adds the canonical URL, Open Graph and Twitter tags and the share image. Add a route to `ROUTES` in `app/sitemap.ts` when you add a page.
- **Why the helper:** a page's `openGraph` replaces the layout's instead of merging, so without it the share image would silently disappear from every page except the home page.
- **Share image:** `app/opengraph-image.tsx` draws the default card. It needs the font file in `lib/og/` (Plus Jakarta Sans, SIL OFL licence) because the renderer can't read the woff2 that `next/font` serves.
- **404 page:** `app/not-found.tsx` returns a real 404 status and Next adds `noindex` to it automatically. The root layout deliberately doesn't set `robots: index, follow`, so the two never contradict each other.
- **Structured data:** Organization and WebSite in the root layout, FAQPage in the shared FAQ section.
- **Site URL:** set `NEXT_PUBLIC_SITE_URL` on the host (see `.env.example`). Until then everything points at `https://transferlinkz.com`.

## Assets

- **Product images** (`hero-dashboard.webp`, `role-operator.webp`, `role-driver.webp`, `cta-illustration-scene.webp`) were extracted from the design's SVG wrappers and converted to WebP, which is far smaller than the originals.
- **Generated textures:** `rays.svg` (section 5 rays) and `hero-dots-*.svg` (hero dots) were generated with a small script rather than drawn.
- **Logo:** `public/images/logo.svg` is the white-text version used on dark backgrounds. `docs/brand/` holds the light and dark variants used by this README.
- The original design files and brand assets live outside this repository, in the sibling folders `ui-web-designs/` (one folder per page: `1-home`, `2-about`, `3-contact`, `4-legal`) and `assets/`.

## Before launch

These are known placeholders:

- **Waitlist database:** set `DATABASE_URL` on the host and run `npm run db:migrate` against it (see "Waitlist and database").
- **"Talk to Us"** (the enterprise plan) still opens an email to `support@transferlinkz.com`. The address and wording live in `lib/contact.ts`.
- **The FAQ answer "How do I get started?"** (from the PDF) still says early access opens an email to the team. It now opens the waitlist form, so the answer needs updating in `components/faq-section/faqs.ts`.
- **The Contact form** has no backend yet: submitting it opens an email draft to `support@transferlinkz.com` with the answers filled in (`contactMessageHref` in `lib/contact.ts`). Swap `handleSubmit` in `features/contact/hero/contact-form` for a real endpoint when there is one.
- **Legal documents** (`features/privacy/content.ts`, `features/terms/content.ts`) were converted from the `.docx` files in `ui-web-designs/4-legal`, and there are no designs for them: the layout follows the About page. Fill in the placeholders that are still in [square brackets]: the effective date, the registered address and the payment term ("[14 days]"). Every "[Insert Contact Email]" renders as `support@transferlinkz.com`. Have the text reviewed by a lawyer before launch.
- **Social profiles** (X, LinkedIn, Instagram) are set in `lib/site.ts` (`socialLinks`) and feed both the footer and the Organization structured data. Check they still point at the right accounts.
- **FAQ answers** come from `ui-web-designs/1-home/FAQs.pdf` and live in `components/faq-section/faqs.ts`.
- **Section 5 copy for suppliers, drivers and guests** and the **Guests mockup** were written for this build, because the designs only covered the tour operator view fully (`features/home/section5/roles.ts`).
- **Pricing** is copied from the design (`features/home/section7/plans.ts`).
- **Site URL:** confirm the domain in `lib/site.ts` / `NEXT_PUBLIC_SITE_URL`.
- **No `apple-touch-icon` yet:** it needs a PNG of the icon-only logo (180×180).
