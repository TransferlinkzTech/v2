# Solutions page: content plan

Status: **copy for review, nothing built yet.**

Decisions made: direction A (by role), headline "One operation, the right tools for every role", light section backgrounds, the home page's role images reused, cool blue hero dots.

Every claim below comes from material already in the project (the FAQ answers, the About audiences, the home role tabs). Lines marked **check** go slightly beyond that source, so please confirm they are accurate.

---

## Page

- **Route:** `/solutions`
- **Page title:** Solutions
- **Meta description:** One operation, the right tools for every role. See how TransferLinkz works for tour operators, transfer suppliers, drivers and guests.
- **Also wire up:** the footer's "Solutions" link and both "See features" buttons, plus a sitemap entry.

## 1. Hero

- **Eyebrow:** Solutions
- **Heading:** One operation, the right tools for every role.
- **Intro:** TransferLinkz gives tour operators, transfer suppliers, drivers and guests exactly what they need, all working from the same live transfer plan.
- **Buttons:** Join Waitlist, and an "Explore by role" link to the sections below.
- **Background:** dotted field, cool blue (as on the home page).

## 2. Role sub-nav

Sticky pills that jump to each role. Colours match the home page tabs.

Tour operators (blue) · Transfer suppliers (orange) · Drivers (green) · Guests (violet)

## 3. Role sections

Light backgrounds, alternating white and pale grey. Each section has an eyebrow, a heading, an intro, three cards and the product image on alternating sides. The image is the same one used on the home page for that role.

### Tour operators

- **Eyebrow:** For tour operators and DMCs
- **Heading:** Plan every transfer from one manifest.
- **Intro:** Upload the Excel transfer list you already use. TransferLinkz turns it into structured records, guest links and supplier assignments, then keeps every journey connected from the first assignment to the final drop-off.
- **Cards:**
  1. **Manifest to plan.** Upload your existing Excel manifest and skip the manual rebuild. In busy periods, manifest work can drop from hours to minutes.
  2. **Only what needs you.** The dashboard separates transfers that are at risk from those that need intervention, with a clear timeline of what has happened.
  3. **Every destination, one view.** Organise transfers and manifests by destination while keeping a single overview across airports and countries.

### Transfer suppliers

- **Eyebrow:** For transfer suppliers
- **Heading:** Keep your dispatch. Add a clearer handoff.
- **Intro:** See every transfer assigned to you in one place. Accept jobs, assign vehicles and drivers, and keep the operator updated without replacing the dispatch system you already run.
- **Cards:**
  1. **Assignments with the details attached.** Each job arrives with what you need to run it, in one place.
  2. **Vehicles and drivers in a few clicks.** Assign the vehicle and driver to each job so the operator can see who is on it. **check**
  3. **Status as it happens.** Update job status as each transfer progresses, so the operator stays informed.

### Drivers

- **Eyebrow:** For drivers
- **Heading:** Know the trip before you leave.
- **Intro:** Drivers see the vehicle, the pickup points and the timing for each transfer, with one tap to open the trip and keep everyone updated as it progresses.
- **Cards:**
  1. **Today at a glance.** See today's trips and pickup points, with the guest count and flight before you set off.
  2. **One tap to update.** Update progress as the trip moves. The platform prompts you when a status update is due.
  3. **A controlled channel.** Reach the guest through a controlled channel, so meeting-point questions get answered at arrivals.

### Guests

- **Eyebrow:** For guests
- **Heading:** Know who's collecting you.
- **Intro:** Each guest gets a simple trip link with their pickup details and live transfer status, so there is no guesswork at arrivals and no app to download.
- **Cards:**
  1. **Everything in one link.** The meeting point, driver details and live status, on a temporary mobile link.
  2. **Expires after the transfer.** The link closes automatically once the transfer window ends.
  3. **In their language.** Clear instructions in a language guests understand. Multiple languages, including Spanish, are planned from early access.

## 4. How it works

- **Eyebrow:** How it works
- **Heading:** From spreadsheet to drop-off in three steps.
- **Steps:**
  1. **Upload your manifest.** Drop in your existing Excel transfer list. TransferLinkz creates the transfer records, guest links and supplier assignments.
  2. **Assign and share.** Suppliers confirm jobs and assign vehicles and drivers. Guests receive their temporary trip link.
  3. **Track on the day.** Drivers update status, guests follow along, and your team sees only the transfers that need action.

## 5. Works alongside what you already use

- **Eyebrow:** Works alongside what you already use
- **Heading:** Start with what you already have.
- **Cards:**
  1. **Your suppliers.** Keep the transfer partners you trust. TransferLinkz adds a clearer handoff between suppliers, drivers and guests.
  2. **Your dispatch system.** Suppliers confirm assignments and update status without replacing their own dispatch system.
  3. **Your manifest.** Start from the Excel transfer list you already use.

## 6. FAQ and closing call to action

The shared FAQ section and the shared "Ready to take your operations to the next level?" section, unchanged.

---

## Not included on purpose

No statistics, customer logos, integration lists or pricing: none exist in the project yet. The only figure used is the FAQ's "hours to minutes" for manifest prep.

## Build notes (for later)

- `features/solutions/` with `hero`, `role-nav` (client component, for the active pill), `role-section` (one template, filled from a `roles.ts` data file), `how-it-works` and `works-alongside`.
- Reuses `HeroBackground` (cool), `Reveal`, `FaqSection`, `CtaSection` and the home role images.
- Mobile: the sub-nav scrolls sideways, role sections stack with the image below the text.
