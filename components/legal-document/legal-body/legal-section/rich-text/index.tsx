import { Fragment } from "react";
import { SUPPORT_EMAIL } from "@/lib/contact";

// Splits out **bold** text and the {email} token
const TOKENS = /(\*\*[^*]+\*\*|\{email\})/;

type RichTextProps = {
  text: string;
};

// Renders the small bit of markup the legal content uses: **bold**, the
// {email} token (a link to the support address) and \n line breaks.
export function RichText({ text }: RichTextProps) {
  return text.split("\n").map((line, lineIndex) => (
    <Fragment key={lineIndex}>
      {lineIndex > 0 && <br />}
      {line.split(TOKENS).map((part, partIndex) => {
        if (part === "{email}") {
          return (
            <a
              key={partIndex}
              href={`mailto:${SUPPORT_EMAIL}`}
              className="text-brand underline underline-offset-2 transition-colors hover:text-brand-hover"
            >
              {SUPPORT_EMAIL}
            </a>
          );
        }
        if (part.startsWith("**")) {
          return (
            <strong key={partIndex} className="font-semibold">
              {part.slice(2, -2)}
            </strong>
          );
        }
        return part;
      })}
    </Fragment>
  ));
}
