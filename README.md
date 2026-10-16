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

| #   | Section                                                   | Folder                   |
| --- | --------------------------------------------------------- | ------------------------ |
| –   | Announcement bar and header                               | `components/header`      |
| 1   | Hero: headline, calls to action, dashboard                | `features/home/hero`     |
| 3   | "Wave goodbye to…" word ticker                            | `features/home/section3` |
| 4   | "Flexible for the many ways guest journeys begin" cards   | `features/home/section4` |
| 5   | "One operation. The right view for every role." role tabs | `features/home/section5` |
| 6   | FAQ accordion (shared with the About page)                | `components/faq-section` |
| 7   | Pricing                                                   | `features/home/section7` |
| 8   | Closing call to action with illustration (shared)         | `components/cta-section` |
| –   | Footer                                                    | `components/footer`      |

### Other pages

| Route        | Feature              | Status                                                     |
| ------------ | -------------------- | ---------------------------------------------------------- |
| `/`          | `features/home`      | Complete                                                   |
| `/solutions` | `features/solutions` | Complete (copy in `docs/solutions-page-content.md`)        |
| `/waitlist`  | `features/waitlist`  | Complete (saves signups to Postgres, needs `DATABASE_URL`) |
| `/about`     | `features/about`     | Complete                                                   |
| `/contact`   | `features/contact`   | Complete (the form opens an email draft)                   |
| `/privacy`   | `features/privacy`   | Complete (content has placeholders to fill in)             |
| `/terms`     | `features/terms`     | Complete (content has placeholders to fill in)             |
