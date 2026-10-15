export type LegalBlock =
  { type: "p"; text: string } | { type: "list"; items: string[] };

export type LegalSubsection = {
  title: string;
  blocks: LegalBlock[];
};

export type LegalSection = {
  title: string;
  blocks: LegalBlock[];
  subsections?: LegalSubsection[];
};

export type LegalDocumentContent = {
  title: string;
  effective: string;
  intro: LegalBlock[];
  sections: LegalSection[];
};
