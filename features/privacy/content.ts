import type { LegalDocumentContent } from "@/components/legal-document/types";

// Converted from the supplied .docx in ui-web-designs/4-legal. Placeholders in
// [square brackets] still need real values; {email} becomes the support address.
export const PRIVACY_POLICY: LegalDocumentContent = {
  title: "Privacy Policy",
  effective: "[Insert Date]",
  intro: [
    {
      type: "p",
      text: "Transferlinkz Ltd (“Transferlinkz”, “we”, “us”, “our”) is committed to protecting and respecting your privacy and personal data.",
    },
    {
      type: "p",
      text: "This Privacy Policy explains how we collect, use, process, and protect Personal Data when you use our platform (“Platform”) and services.",
    },
  ],
  sections: [
    {
      title: "Data controller",
      blocks: [
        {
          type: "p",
          text: "Transferlinkz Ltd\n[Insert Registered Address]\nEmail: {email}",
        },
        {
          type: "p",
          text: "For the purposes of data protection law, Transferlinkz may act as either:",
        },
        {
          type: "list",
          items: [
            "A **Data Controller** (where we determine how and why Personal Data is processed), or",
            "A **Data Processor** (where we process data on behalf of our customers, such as tour operators)",
          ],
        },
      ],
    },
    {
      title: "Personal data we collect",
      blocks: [
        {
          type: "p",
          text: "We may collect and process the following categories of Personal Data:",
        },
      ],
      subsections: [
        {
          title: "2.1 Identity data",
          blocks: [
            {
              type: "p",
              text: "Information used to identify an individual, including:",
            },
            {
              type: "list",
              items: [
                "First name(s) and last name",
                "Title (e.g. Mr, Ms, etc.)",
                "Date of birth (where provided)",
                "Nationality (where required for booking purposes)",
              ],
            },
          ],
        },
        {
          title: "2.2 Contact data",
          blocks: [
            {
              type: "p",
              text: "Information used to communicate with individuals, including:",
            },
            {
              type: "list",
              items: [
                "Email addresses",
                "Telephone numbers (mobile and/or landline)",
                "Messaging contact details (e.g. WhatsApp, where provided)",
                "Emergency contact information (if supplied)",
                "Business contact details (e.g. company email, job title)",
              ],
            },
          ],
        },
        {
          title: "2.3 Travel and booking data",
          blocks: [
            {
              type: "p",
              text: "Information required to coordinate transfer services, including:",
            },
            {
              type: "list",
              items: [
                "Booking reference numbers and identifiers",
                "Pick-up and drop-off locations",
                "Travel dates and times",
                "Flight details (including flight number, arrival/departure time, terminal)",
                "Number of passengers",
                "Passenger names associated with bookings",
                "Special requirements (e.g. accessibility needs, child seats, luggage requirements)",
                "Driver instructions and operational notes",
              ],
            },
          ],
        },
        {
          title: "2.4 Communication data",
          blocks: [
            {
              type: "p",
              text: "Records of communications, including:",
            },
            {
              type: "list",
              items: [
                "Messages exchanged via the Platform",
                "Customer service interactions",
                "Emails and support requests",
              ],
            },
          ],
        },
        {
          title: "2.5 Technical and usage data",
          blocks: [
            {
              type: "p",
              text: "Information automatically collected when using the Platform, including:",
            },
            {
              type: "list",
              items: [
                "IP address",
                "Device type and browser information",
                "Log-in data and access timestamps",
                "Platform usage activity and interaction logs",
              ],
            },
          ],
        },
      ],
    },
    {
      title: "How we use personal data",
      blocks: [
        {
          type: "p",
          text: "We process Personal Data for the following purposes:",
        },
      ],
      subsections: [
        {
          title: "3.1 Service delivery",
          blocks: [
            {
              type: "list",
              items: [
                "To provide access to the Platform",
                "To manage and coordinate transfer bookings",
                "To enable communication between Operators and Suppliers",
              ],
            },
          ],
        },
        {
          title: "3.2 Operational management",
          blocks: [
            {
              type: "list",
              items: [
                "To organise, monitor, and improve workflows",
                "To track service performance and fulfilment",
              ],
            },
          ],
        },
        {
          title: "3.3 Communication",
          blocks: [
            {
              type: "list",
              items: [
                "To send service-related notifications and updates",
                "To respond to enquiries and support requests",
              ],
            },
          ],
        },
        {
          title: "3.4 Security and compliance",
          blocks: [
            {
              type: "list",
              items: [
                "To maintain platform security",
                "To detect and prevent fraud or misuse",
                "To comply with legal and regulatory obligations",
              ],
            },
          ],
        },
        {
          title: "3.5 Platform improvement",
          blocks: [
            {
              type: "list",
              items: [
                "To analyse usage patterns",
                "To improve functionality, performance, and user experience",
              ],
            },
          ],
        },
      ],
    },
    {
      title: "Legal basis for processing",
      blocks: [
        {
          type: "p",
          text: "We process Personal Data under the following legal bases:",
        },
      ],
      subsections: [
        {
          title: "4.1 Contractual necessity",
          blocks: [
            {
              type: "p",
              text: "Processing is necessary to:",
            },
            {
              type: "list",
              items: [
                "Provide services under our agreement with Users",
                "Facilitate booking coordination and platform functionality",
              ],
            },
          ],
        },
        {
          title: "4.2 Legitimate interests",
          blocks: [
            {
              type: "p",
              text: "Processing is necessary for our legitimate interests, including:",
            },
            {
              type: "list",
              items: [
                "Operating and improving the Platform",
                "Ensuring security and preventing fraud",
                "Managing business operations",
              ],
            },
            {
              type: "p",
              text: "We ensure such interests do not override individuals’ rights.",
            },
          ],
        },
        {
          title: "4.3 Legal obligations",
          blocks: [
            {
              type: "p",
              text: "Processing is necessary to comply with:",
            },
            {
              type: "list",
              items: [
                "Applicable laws and regulations",
                "Requests from regulatory authorities",
              ],
            },
          ],
        },
      ],
    },
    {
      title: "Data sharing",
      blocks: [
        {
          type: "p",
          text: "We may share Personal Data with the following categories of recipients:",
        },
      ],
      subsections: [
        {
          title: "5.1 Operators and suppliers",
          blocks: [
            {
              type: "list",
              items: [
                "To facilitate transfer bookings and service delivery",
                "To enable coordination between parties",
              ],
            },
          ],
        },
        {
          title: "5.2 Service providers (sub-processors)",
          blocks: [
            {
              type: "p",
              text: "Including:",
            },
            {
              type: "list",
              items: [
                "Cloud hosting providers",
                "Infrastructure and storage providers",
                "Analytics providers",
                "Communication service providers",
              ],
            },
            {
              type: "p",
              text: "All such providers are subject to appropriate contractual safeguards.",
            },
          ],
        },
        {
          title: "5.3 Legal and regulatory authorities",
          blocks: [
            {
              type: "p",
              text: "Where required to:",
            },
            {
              type: "list",
              items: [
                "Comply with legal obligations",
                "Respond to lawful requests",
              ],
            },
            {
              type: "p",
              text: "Transferlinkz does **not sell Personal Data** to third parties.",
            },
          ],
        },
      ],
    },
    {
      title: "International data transfers",
      blocks: [
        {
          type: "p",
          text: "Where Personal Data is transferred outside the UK or European Economic Area (EEA), we ensure appropriate safeguards are in place, including:",
        },
        {
          type: "list",
          items: [
            "Standard Contractual Clauses (SCCs)",
            "Transfers to countries with adequacy decisions",
          ],
        },
      ],
    },
    {
      title: "Data storage and security",
      blocks: [
        {
          type: "p",
          text: "We implement appropriate technical and organisational measures to protect Personal Data, including:",
        },
        {
          type: "list",
          items: [
            "Role-based access controls",
            "Encryption in transit and, where appropriate, at rest",
            "Secure hosting environments",
            "Monitoring, logging, and intrusion detection systems",
            "Regular security assessments and updates",
          ],
        },
      ],
    },
    {
      title: "Data retention",
      blocks: [
        {
          type: "p",
          text: "We retain Personal Data only for as long as necessary to:",
        },
        {
          type: "list",
          items: [
            "Fulfil the purposes outlined in this Policy",
            "Comply with legal, regulatory, and contractual obligations",
          ],
        },
        {
          type: "p",
          text: "Data may be retained for longer periods where required by law or for legitimate business purposes.",
        },
      ],
    },
    {
      title: "Data subject rights",
      blocks: [
        {
          type: "p",
          text: "Under applicable data protection laws, individuals have the following rights:",
        },
        {
          type: "list",
          items: [
            "Right of access to their Personal Data",
            "Right to rectification of inaccurate data",
            "Right to erasure (“right to be forgotten”)",
            "Right to restrict processing",
            "Right to object to processing",
            "Right to data portability",
          ],
        },
        {
          type: "p",
          text: "Requests can be submitted to:\n{email}",
        },
        {
          type: "p",
          text: "We will respond in accordance with applicable legal timeframes.",
        },
      ],
    },
    {
      title: "Cookies and tracking technologies",
      blocks: [
        {
          type: "p",
          text: "The Platform may use cookies and similar technologies to:",
        },
        {
          type: "list",
          items: [
            "Enable core functionality",
            "Analyse usage and performance",
            "Improve user experience",
          ],
        },
        {
          type: "p",
          text: "Users can manage cookie preferences through their browser settings.",
        },
      ],
    },
    {
      title: "Changes to this policy",
      blocks: [
        {
          type: "p",
          text: "We may update this Privacy Policy from time to time.",
        },
        {
          type: "p",
          text: "Where changes are material, we will notify Users via the Platform or other appropriate means.",
        },
        {
          type: "p",
          text: "Continued use of the Platform constitutes acceptance of the updated Policy.",
        },
      ],
    },
    {
      title: "Contact",
      blocks: [
        {
          type: "p",
          text: "For any questions regarding this Privacy Policy or data protection matters, please contact:",
        },
        {
          type: "p",
          text: "{email}",
        },
      ],
    },
  ],
};
