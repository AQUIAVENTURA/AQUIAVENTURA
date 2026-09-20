import { createFileRoute } from "@tanstack/react-router";

// No head() here: the home route inherits title/description/og/twitter from
// __root.tsx, and ships no og:image so serve-time hosting can inject the
// project's social preview (explicit og:image or latest screenshot).
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AQUIAVENTURA — Lago de Tota · Aquitania" },
      { name: "description", content: "Experiencias, gastronomía, avicultura y paisajes del Lago de Tota en Aquitania, Boyacá." },
      { property: "og:title", content: "AQUIAVENTURA — Lago de Tota · Aquitania" },
      { property: "og:description", content: "Experiencias, gastronomía, avicultura y paisajes del Lago de Tota en Aquitania, Boyacá." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

// IMPORTANT: Replace this placeholder. See ./README.md for routing conventions.
function Index() {
  return (
    <iframe
      className="block h-screen w-full border-0"
      src="/aquiventura.html"
      title="AQUIAVENTURA — Lago de Tota"
    />
  );
}
