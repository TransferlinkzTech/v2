import type { LegalDocumentContent } from "@/components/legal-document/types";

// Converted from the supplied .docx in ui-web-designs/4-legal. {email} becomes
// the support address.
export const TERMS_OF_SERVICE: LegalDocumentContent = {
  title: "Terms of Service",
  effective: "1 October 2026",
  intro: [
    {
      type: "p",
      text: "These Terms of Service (“Terms”) govern access to and use of the Transferlinkz platform (“Platform”) operated by Transferlinkz Ltd (“Transferlinkz”, “we”, “us”, “our”).",
    },
    {
      type: "p",
      text: "By accessing or using the Platform, you (“User”, “you”, “your”) agree to be bound by these Terms. If you do not agree, you must not use the Platform.",
    },
  ],
  sections: [
    {
      title: "Definitions",
      blocks: [
        {
          type: "p",
          text: "For the purposes of these Terms:",
        },
        {
          type: "list",
          items: [
            "**“Platform”** means the Transferlinkz software system, including all associated applications, interfaces, and services.",
            "**“User”** means any individual or entity accessing or using the Platform.",
            "**“Operator”** means a tour operator using the Platform to manage transfer bookings.",
            "**“Supplier”** means a transfer service provider using the Platform to receive and fulfil bookings.",
            "**“End Customer”** means any traveller or individual receiving transfer services facilitated via the Platform.",
          ],
        },
      ],
    },
    {
      title: "Services",
      blocks: [
        {
          type: "p",
          text: "Transferlinkz provides a software platform designed to facilitate:",
        },
        {
          type: "list",
          items: [
            "Coordination and management of transfer bookings",
            "Communication between Operators and Suppliers",
            "Organisation and standardisation of operational workflows",
            "Monitoring and reporting of transfer performance",
          ],
        },
        {
          type: "p",
          text: "Transferlinkz may update, enhance, or modify the Platform from time to time, provided that core functionality is not materially reduced.",
        },
      ],
    },
    {
      title: "Role of Transferlinkz",
      blocks: [
        {
          type: "p",
          text: "Transferlinkz acts solely as a technology provider.",
        },
        {
          type: "p",
          text: "For the avoidance of doubt:",
        },
        {
          type: "list",
          items: [
            "Transferlinkz does not provide, own, or operate transport services",
            "Transferlinkz does not employ drivers or manage vehicles",
            "Transferlinkz is not a travel agent or transport provider",
            "Transferlinkz is not a party to any agreements between Users, Operators, Suppliers, or End Customers",
          ],
        },
        {
          type: "p",
          text: "All transfer services are provided independently by Operators and/or Suppliers.",
        },
      ],
    },
    {
      title: "User accounts",
      blocks: [],
      subsections: [
        {
          title: "4.1 Account registration",
          blocks: [
            {
              type: "p",
              text: "Users must provide accurate, complete, and up-to-date information when creating an account.",
            },
          ],
        },
        {
          title: "4.2 Account security",
          blocks: [
            {
              type: "p",
              text: "Users are responsible for:",
            },
            {
              type: "list",
              items: [
                "Maintaining the confidentiality of login credentials",
                "Restricting access to their account",
                "All activities conducted under their account",
              ],
            },
            {
              type: "p",
              text: "Users must notify Transferlinkz immediately of any unauthorised access or suspected security breach.",
            },
          ],
        },
        {
          title: "4.3 Account suspension",
          blocks: [
            {
              type: "p",
              text: "Transferlinkz reserves the right to suspend or terminate accounts where:",
            },
            {
              type: "list",
              items: [
                "False or misleading information is provided",
                "Security concerns arise",
                "These Terms are breached",
              ],
            },
          ],
        },
      ],
    },
    {
      title: "Fees and payment",
      blocks: [],
      subsections: [
        {
          title: "5.1 Fees",
          blocks: [
            {
              type: "p",
              text: "Users agree to pay:",
            },
            {
              type: "list",
              items: [
                "All applicable subscription fees",
                "Any usage-based, transaction-based, or overage charges",
              ],
            },
          ],
        },
        {
          title: "5.2 Payment terms",
          blocks: [
            {
              type: "list",
              items: [
                "Fees shall be invoiced in accordance with agreed billing cycles",
                "Payment is due within 28 days of invoice date unless otherwise agreed",
                "All fees are exclusive of applicable taxes",
              ],
            },
          ],
        },
        {
          title: "5.3 Non-payment",
          blocks: [
            {
              type: "p",
              text: "In the event of non-payment, Transferlinkz may:",
            },
            {
              type: "list",
              items: [
                "Suspend or restrict access to the Platform",
                "Charge interest on overdue amounts",
                "Terminate access after reasonable notice",
              ],
            },
          ],
        },
      ],
    },
    {
      title: "Acceptable use",
      blocks: [
        {
          type: "p",
          text: "Users agree not to:",
        },
        {
          type: "list",
          items: [
            "Use the Platform for any unlawful, fraudulent, or unauthorised purpose",
            "Input, upload, or transmit false, misleading, or inaccurate data",
            "Interfere with or disrupt the integrity or performance of the Platform",
            "Attempt to gain unauthorised access to systems, accounts, or data",
            "Reverse engineer, copy, or attempt to replicate the Platform",
          ],
        },
        {
          type: "p",
          text: "Transferlinkz reserves the right to investigate and take action against violations.",
        },
      ],
    },
    {
      title: "Data and privacy",
      blocks: [
        {
          type: "p",
          text: "Use of the Platform is subject to the Transferlinkz Privacy Policy and applicable Data Processing Agreement (DPA).",
        },
        {
          type: "p",
          text: "Users represent and warrant that:",
        },
        {
          type: "list",
          items: [
            "They have a lawful basis for processing and sharing any Personal Data uploaded to the Platform",
            "They comply with all applicable data protection laws",
          ],
        },
      ],
    },
    {
      title: "Intellectual property",
      blocks: [
        {
          type: "p",
          text: "All rights, title, and interest in and to the Platform, including software, design, content, and underlying technology, are owned by Transferlinkz or its licensors.",
        },
        {
          type: "p",
          text: "Users are granted a limited, non-exclusive, non-transferable licence to use the Platform for its intended purpose.",
        },
        {
          type: "p",
          text: "Users shall not:",
        },
        {
          type: "list",
          items: [
            "Copy, reproduce, or distribute any part of the Platform",
            "Modify, adapt, or create derivative works",
            "Use the Platform for competitive or benchmarking purposes",
          ],
        },
      ],
    },
    {
      title: "Availability and support",
      blocks: [
        {
          type: "p",
          text: "Transferlinkz will use reasonable efforts to ensure that the Platform is available and functioning.",
        },
        {
          type: "p",
          text: "However:",
        },
        {
          type: "list",
          items: [
            "The Platform may be subject to downtime, maintenance, or technical issues",
            "Transferlinkz does not guarantee uninterrupted or error-free operation",
          ],
        },
        {
          type: "p",
          text: "Support services may be provided at Transferlinkz’s discretion or as agreed separately.",
        },
      ],
    },
    {
      title: "Liability limitation",
      blocks: [],
      subsections: [
        {
          title: "10.1 Exclusion of liability",
          blocks: [
            {
              type: "p",
              text: "To the maximum extent permitted by law, Transferlinkz shall not be liable for:",
            },
            {
              type: "list",
              items: [
                "Any transport-related incidents, failures, or service delivery issues",
                "Actions or omissions of Operators, Suppliers, or End Customers",
                "Delays, cancellations, or missed transfers",
                "Loss of revenue, profits, business opportunities, or reputation",
                "Any indirect, incidental, or consequential losses",
              ],
            },
          ],
        },
        {
          title: "10.2 Limitation of liability",
          blocks: [
            {
              type: "p",
              text: "Transferlinkz’s total aggregate liability under these Terms shall not exceed:",
            },
            {
              type: "list",
              items: [
                "The total fees paid by the User in the **12 months preceding the claim**",
              ],
            },
          ],
        },
      ],
    },
    {
      title: "Termination",
      blocks: [
        {
          type: "p",
          text: "Transferlinkz may suspend or terminate access to the Platform where:",
        },
        {
          type: "list",
          items: [
            "These Terms are breached",
            "Payments are overdue",
            "The Platform is misused",
            "Continued access poses risk to the Platform or its users",
          ],
        },
        {
          type: "p",
          text: "Users may terminate their use of the Platform at any time, subject to any agreed notice period.",
        },
      ],
    },
    {
      title: "Changes to terms",
      blocks: [
        {
          type: "p",
          text: "Transferlinkz may update these Terms from time to time.",
        },
        {
          type: "p",
          text: "Where changes are material:",
        },
        {
          type: "list",
          items: ["Users will be notified via the Platform or email"],
        },
        {
          type: "p",
          text: "Continued use of the Platform constitutes acceptance of the updated Terms.",
        },
      ],
    },
    {
      title: "Force majeure",
      blocks: [
        {
          type: "p",
          text: "Transferlinkz shall not be liable for any failure or delay in performance resulting from events beyond its reasonable control, including:",
        },
        {
          type: "list",
          items: [
            "Natural disasters",
            "Internet or telecommunications failures",
            "Government actions",
            "Strikes or labour disputes",
          ],
        },
      ],
    },
    {
      title: "Governing law and jurisdiction",
      blocks: [
        {
          type: "p",
          text: "These Terms shall be governed by and construed in accordance with the laws of England & Wales.",
        },
        {
          type: "p",
          text: "The courts of England & Wales shall have exclusive jurisdiction.",
        },
      ],
    },
    {
      title: "Contact",
      blocks: [
        {
          type: "p",
          text: "For any questions regarding these Terms, please contact:",
        },
        {
          type: "p",
          text: "{email}",
        },
      ],
    },
  ],
};
