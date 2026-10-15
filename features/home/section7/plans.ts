export type Plan = {
  name: string;
  price: string;
  // Shown small next to the price, e.g. "/mo"; omitted for custom pricing
  unit?: string;
  transfers: string;
  description: string;
  cta: string;
};

export const PLANS: Plan[] = [
  {
    name: "Core",
    price: "$199",
    unit: "/mo",
    transfers: "150 transfers",
    description: "For operators getting started with structured transfers.",
    cta: "Request early access",
  },
  {
    name: "Growth",
    price: "$499",
    unit: "/mo",
    transfers: "500 transfers",
    description: "For teams running transfers across several destinations.",
    cta: "Request early access",
  },
  {
    name: "Scale",
    price: "$999",
    unit: "/mo",
    transfers: "1,500 transfers",
    description: "For high-volume operators and DMCs.",
    cta: "Request early access",
  },
  {
    name: "Enterprise",
    price: "Custom",
    transfers: "Unlimited transfers",
    description: "For large operations with custom needs.",
    cta: "Talk to Us",
  },
];

export const INCLUDED_FEATURES = [
  "Manifest upload & auto-sort",
  "Supplier assignment flow",
  "Guest trip links",
  "Live transfer status",
  "Issue tracking",
  "Onboarding Support",
  "Full API Access",
];
