type JsonLdProps = {
  data: Record<string, unknown> | Array<Record<string, unknown> | null>;
};

export function JsonLd({ data }: JsonLdProps) {
  const payload = Array.isArray(data) ? data.filter(Boolean) : [data];
  if (payload.length === 0) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload.length === 1 ? payload[0] : payload) }}
    />
  );
}
