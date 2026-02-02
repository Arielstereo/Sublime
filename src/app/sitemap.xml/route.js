import data from "@/data/data.json";

export async function GET() {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://sublime.empren.dev";

  const pages = ["/"];

  // Categories
  const categories = Object.keys(data.categoryNames || {});
  categories.forEach((c) => pages.push(`/products/${c}`));

  // Products
  (data.products || []).forEach((p) => pages.push(`/products/${p.id}`));

  const urls = pages
    .map((p) => {
      return `  <url>\n    <loc>${base.replace(/\/$/, "")}${p}</loc>\n  </url>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
