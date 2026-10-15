export type HowItWorksStep = {
  title: string;
  description: string;
};

export const STEPS: HowItWorksStep[] = [
  {
    title: "Upload your manifest",
    description:
      "Drop in your existing Excel transfer list. TransferLinkz creates the transfer records, guest links and supplier assignments.",
  },
  {
    title: "Assign and share",
    description:
      "Suppliers confirm jobs and assign vehicles and drivers. Guests receive their temporary trip link.",
  },
  {
    title: "Track on the day",
    description:
      "Drivers update status, guests follow along, and your team sees only the transfers that need action.",
  },
];
