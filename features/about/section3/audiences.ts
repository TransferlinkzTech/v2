export type Audience = {
  title: string;
  description: string;
  icon: { src: string; width: number; height: number };
};

export const AUDIENCES: Audience[] = [
  {
    title: "Tour operators & DMCs",
    description:
      "Operations teams should spend their time on the transfers that need a decision, not on checking the ones that are fine.",
    icon: { src: "/images/audience-operators.svg", width: 13, height: 15 },
  },
  {
    title: "Transfer suppliers",
    description:
      "Confirm assignments, assign drivers and update status without replacing your own dispatch system.",
    icon: { src: "/images/audience-suppliers.svg", width: 18, height: 18 },
  },
  {
    title: "Drivers",
    description:
      "Get each pickup with the meeting point, update status on the day and reach guests through a controlled channel.",
    icon: { src: "/images/audience-drivers.svg", width: 18, height: 18 },
  },
  {
    title: "Guests",
    description:
      "See the meeting point, driver details and live status on a temporary link that expires after the transfer.",
    icon: { src: "/images/audience-guests.svg", width: 18, height: 18 },
  },
];
