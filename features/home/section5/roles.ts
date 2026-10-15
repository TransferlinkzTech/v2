export type RoleCopy = {
  eyebrow: string;
  // One entry per line of the heading (the design breaks it by hand)
  heading: string[];
  paragraph: string;
  bullets: string[];
};

// Product visual. `right` and `y` are px from the top-right of the section
// frame, so the visual stays tied to the right edge when the window narrows.
type VisualBase = { width: number; height: number; right: number; y: number };

export type RoleVisual =
  | (VisualBase & {
      kind: "image";
      src: string;
      alt: string;
      // Tailwind classes for the frame around the screenshot
      frameClass?: string;
      // Rotation in degrees (positive = clockwise), as in the design
      tilt?: number;
    })
  | (VisualBase & { kind: "mockup"; label: string });

export type Role = {
  id: string;
  label: string;
  // Tailwind background class of the active tab pill
  tabClass: string;
  // Page background for this role's view
  base: string;
  // Colour of the check badges in the bullet list
  iconColor: string;
  // "pattern" = large logo outline pattern, "rays" = rays in `raysColor`
  background: "pattern" | "rays";
  raysColor?: string;
  copy: RoleCopy;
  visual: RoleVisual;
};

export const ROLES: Role[] = [
  {
    id: "operators",
    label: "Tour operator app",
    tabClass: "bg-[#2563eb]",
    base: "#040a1a",
    iconColor: "#6ea4f7",
    background: "pattern",
    copy: {
      eyebrow: "For tour operators",
      heading: ["More guest journeys with", "less administrative work."],
      paragraph:
        "Turn your manifest into an organised transfer plan. Keep every location, supplier and guest connected from the first assignment to the final drop-off.",
      bullets: [
        "Group guests by date, flight and destination",
        "Assign transfers to your trusted supplier network",
        "Keep changes and issues attached to the right journey",
      ],
    },
    visual: {
      kind: "image",
      src: "/images/role-operator.webp",
      alt: "Tour operator app showing a destination's arrivals and activity feed",
      frameClass:
        "rounded-[14px] border border-[#d0d6e8] shadow-[0_30px_90px_-25px_rgba(37,99,235,0.55)]",
      tilt: 3,
      width: 600,
      height: 333,
      right: 38,
      y: 568,
    },
  },
  {
    id: "suppliers",
    label: "Transfer Suppliers",
    tabClass: "bg-[#fd520c]",
    base: "#020714",
    iconColor: "#fcc0a8",
    background: "rays",
    raysColor: "#ff5a28",
    copy: {
      eyebrow: "For transfer suppliers",
      heading: ["Every assignment clear,", "every transfer on track."],
      paragraph:
        "See every transfer assigned to you in one place. Accept jobs, assign vehicles and drivers, and keep the operator updated without leaving the screen.",
      bullets: [
        "Receive assignments with every detail attached",
        "Assign vehicles and drivers in a few clicks",
        "Update job status as each transfer progresses",
      ],
    },
    visual: {
      kind: "image",
      src: "/images/role-supplier.svg",
      alt: "Transfer supplier view with today's active jobs and pending assignments",
      width: 602,
      height: 480,
      right: 29,
      y: 491,
    },
  },
  {
    id: "drivers",
    label: "Drivers",
    tabClass: "bg-[#166e38]",
    base: "#020714",
    iconColor: "#fcc0a8",
    background: "rays",
    raysColor: "#19d3e6",
    copy: {
      eyebrow: "For drivers",
      heading: ["Every trip, clear and", "ready on the phone."],
      paragraph:
        "Drivers see the vehicle, the pickup points and the timing for each transfer, with one tap to open the trip and keep everyone updated as it progresses.",
      bullets: [
        "See today's trips and pickup points at a glance",
        "Know the guest count and flight before you leave",
        "Update progress with one tap as the trip moves",
      ],
    },
    visual: {
      kind: "image",
      src: "/images/role-driver.webp",
      alt: "Driver app showing an assigned vehicle and the trip to open",
      frameClass:
        "rounded-[26px] border-4 border-[#dfe3f2] shadow-[0_30px_90px_-20px_rgba(25,211,230,0.35)]",
      tilt: -3.5,
      width: 380,
      height: 537,
      right: 168,
      y: 466,
    },
  },
  {
    id: "guests",
    label: "Guests",
    tabClass: "bg-[#7c3aed]",
    base: "#050818",
    iconColor: "#c4b5fd",
    background: "rays",
    raysColor: "#a78bfa",
    copy: {
      eyebrow: "For guests",
      heading: ["Guests always know", "who is collecting them."],
      paragraph:
        "Each guest gets a simple trip link with their pickup details and live transfer status, so there is no guesswork at arrivals and no app to download.",
      bullets: [
        "Pickup point, time and driver in one link",
        "Live status as the driver heads to arrivals",
        "Quick contact if plans change",
      ],
    },
    visual: {
      kind: "mockup",
      label: "Guest trip link showing the driver, pickup time and live status",
      width: 414,
      height: 558,
      right: 150,
      y: 456,
    },
  },
];
