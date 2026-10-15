type JsonLdProps = {
  data: Record<string, unknown>;
};

// Structured data for search engines. Escaping "<" keeps the JSON from ever
// closing the script tag, whatever the data contains.
export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
