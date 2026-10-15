export type SolutionCard = {
  title: string;
  description: string;
};

export type SolutionVisual =
  | {
      kind: "image";
      src: string;
      alt: string;
      width: number;
      height: number;
      // Widest the visual gets inside its panel, in px
      maxWidth: number;
      // Tailwind classes for the frame around the screenshot
      frameClass?: string;
      // Rotation in degrees (positive = clockwise), as on the home page
      tilt?: number;
    }
  | { kind: "mockup"; label: string; maxWidth: number };

export type SolutionRole = {
  id: string;
  // Label on the sub-nav pill
  navLabel: string;
  // Role colour (same as the home page tabs) and its pale tint
  accent: string;
  tint: string;
  eyebrow: string;
  heading: string;
  paragraph: string;
  cards: SolutionCard[];
  visual: SolutionVisual;
};

// Copy is in docs/solutions-page-content.md. The product images are the same
// ones the home page's role tabs use.
export const SOLUTION_ROLES: SolutionRole[] = [
  {
    id: "operators",
    navLabel: "Tour operators",
    accent: "#2563eb",
    tint: "#eef4ff",
    eyebrow: "For tour operators and DMCs",
    heading: "Plan every transfer from one manifest.",
    paragraph:
      "Upload the Excel transfer list you already use. TransferLinkz turns it into structured records, guest links and supplier assignments, then keeps every journey connected from the first assignment to the final drop-off.",
    cards: [
      {
        title: "Manifest to plan",
        description:
          "Upload your existing Excel manifest and skip the manual rebuild. In busy periods, manifest work can drop from hours to minutes.",
      },
      {
        title: "Only what needs you",
        description:
          "The dashboard separates transfers that are at risk from those that need intervention, with a clear timeline of what has happened.",
      },
      {
        title: "Every destination, one view",
        description:
          "Organise transfers and manifests by destination while keeping a single overview across airports and countries.",
      },
    ],
    visual: {
      kind: "image",
      src: "/images/role-operator.webp",
      alt: "Tour operator app showing a destination's arrivals and activity feed",
      width: 600,
      height: 333,
      maxWidth: 560,
      frameClass:
        "rounded-[14px] border border-[#d0d6e8] shadow-[0_24px_60px_-24px_rgba(37,99,235,0.5)]",
      tilt: 3,
    },
  },
  {
    id: "suppliers",
    navLabel: "Transfer suppliers",
    accent: "#fd520c",
    tint: "#fff0e7",
    eyebrow: "For transfer suppliers",
    heading: "Keep your dispatch. Add a clearer handoff.",
    paragraph:
      "See every transfer assigned to you in one place. Accept jobs, assign vehicles and drivers, and keep the operator updated without replacing the dispatch system you already run.",
    cards: [
      {
        title: "Assignments with the details attached",
        description:
          "Each job arrives with what you need to run it, in one place.",
      },
      {
        title: "Vehicles and drivers in a few clicks",
        description:
          "Assign the vehicle and driver to each job so the operator can see who is on it.",
      },
      {
        title: "Status as it happens",
        description:
          "Update job status as each transfer progresses, so the operator stays informed.",
      },
    ],
    visual: {
      kind: "image",
      src: "/images/role-supplier.svg",
      alt: "Transfer supplier view with today's active jobs and pending assignments",
      width: 602,
      height: 480,
      maxWidth: 560,
    },
  },
  {
    id: "drivers",
    navLabel: "Drivers",
    accent: "#166e38",
    tint: "#e7f5ec",
    eyebrow: "For drivers",
    heading: "Know the trip before you leave.",
    paragraph:
      "Drivers see the vehicle, the pickup points and the timing for each transfer, with one tap to open the trip and keep everyone updated as it progresses.",
    cards: [
      {
        title: "Today at a glance",
        description:
          "See today’s trips and pickup points, with the guest count and flight before you set off.",
      },
      {
        title: "One tap to update",
        description:
          "Update progress as the trip moves. The platform prompts you when a status update is due.",
      },
      {
        title: "A controlled channel",
        description:
          "Reach the guest through a controlled channel, so meeting-point questions get answered at arrivals.",
      },
    ],
    visual: {
      kind: "image",
      src: "/images/role-driver.webp",
      alt: "Driver app showing an assigned vehicle and the trip to open",
      width: 380,
      height: 537,
      maxWidth: 300,
      frameClass:
        "rounded-[26px] border-4 border-[#dfe3f2] shadow-[0_24px_60px_-20px_rgba(22,110,56,0.45)]",
      tilt: -3.5,
    },
  },
  {
    id: "guests",
    navLabel: "Guests",
    accent: "#7c3aed",
    tint: "#f3edff",
    eyebrow: "For guests",
    heading: "Know who’s collecting you.",
    paragraph:
      "Each guest gets a simple trip link with their pickup details and live transfer status, so there is no guesswork at arrivals and no app to download.",
    cards: [
      {
        title: "Everything in one link",
        description:
          "The meeting point, driver details and live status, on a temporary mobile link.",
      },
      {
        title: "Expires after the transfer",
        description:
          "The link closes automatically once the transfer window ends.",
      },
      {
        title: "In their language",
        description:
          "Clear instructions in a language guests understand. Multiple languages, including Spanish, are planned from early access.",
      },
    ],
    visual: {
      kind: "mockup",
      label: "Guest trip link showing the driver, pickup time and live status",
      maxWidth: 340,
    },
  },
];
