export type Faq = {
  question: string;
  answer: string;
};

// Answers come from ui-web-designs/1-home/FAQs.pdf
export const FAQS: Faq[] = [
  {
    question: "What problem does TransferLinkz solve?",
    answer:
      "TransferLinkz reduces avoidable arrival escalations and speeds up manifest preparation. You can upload your existing Excel transfer list and automatically generate structured records, guest links, and supplier assignments. Guests and drivers then use a temporary communication channel with clear meeting-point instructions and live status, while your operations team sees only the transfers that genuinely need intervention.",
  },
  {
    question: "Who is TransferLinkz for?",
    answer:
      "TransferLinkz is designed for tour operators, DMCs, and incoming agencies that coordinate guest transfers across multiple suppliers or destinations. Transfer suppliers and drivers use the platform to confirm assignments, update status, and communicate with guests through a controlled channel.",
  },
  {
    question: "Do I need to change my existing transfer suppliers?",
    answer:
      "No. TransferLinkz works alongside your current supplier network. You continue to use the transfer partners you trust; the platform simply adds a clearer handoff between your suppliers, drivers, and guests.",
  },
  {
    question: "Can I use TransferLinkz across multiple destinations?",
    answer:
      "Yes. You can organise transfers and manifests by destination while maintaining a single overview of your operations. This is particularly useful for operators managing arrivals across several airports or countries.",
  },
  {
    question: "How much time does TransferLinkz save on transfer manifests?",
    answer:
      "TransferLinkz allows you to upload your existing Excel manifest and automatically generate structured transfer records, guest links, and supplier assignments. In busy destinations and peak periods, this can reduce manual manifest work from hours to minutes, while keeping your operation consistent and auditable.",
  },
  {
    question: "Do guests need to download an app?",
    answer:
      "No. Guests access their transfer details through a temporary mobile link. The link shows the meeting point, driver information, live status, and a controlled communication channel. The link expires automatically after the transfer window.",
  },
  {
    question: "How does TransferLinkz reduce operational escalations?",
    answer:
      "The platform gives guests clear meeting-point instructions and live driver status, which prevents many “I cannot find my driver” incidents. When an issue does occur, the guest and driver can communicate through a controlled channel, and your team is alerted only when human intervention is genuinely required.",
  },
  {
    question: "What happens if something goes wrong with a transfer?",
    answer:
      "TransferLinkz separates “at risk” from “needs intervention.” The system prompts the driver to update status, guides the guest through the meeting point, and allows controlled communication. Your operations dashboard shows only the exceptions that require action, with a clear timeline of what has happened.",
  },
  {
    question:
      "Can transfer suppliers use TransferLinkz with their existing workflows?",
    answer:
      "Yes. Suppliers can confirm assignments, assign drivers, and update status without replacing their dispatch system. The platform is designed to complement existing operational tools rather than replace them.",
  },
  {
    question: "How do I get started?",
    answer:
      "You can request early access through the website. This opens an email to our team so you can tell us about your business, transfer volumes, and destinations. We will then contact you to discuss whether TransferLinkz is a good fit and, if so, how to structure a pilot.",
  },
  {
    question: "Is TransferLinkz available in multiple languages?",
    answer:
      "Yes. The platform is being built to support multiple languages, including Spanish, from the early-access phase. This allows operators and suppliers to work in their preferred language while providing guests with clear instructions in a language they understand.",
  },
];
