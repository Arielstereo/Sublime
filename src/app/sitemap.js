import data from "@/data";

const baseUrl = "https://sublime.empren.dev";

export default function sitemap() {
  const categoryUrls = Object.keys(data.categoryNames).map((id) => ({
    url: `${baseUrl}/products/${id}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const productUrls = data.products.map((p) => ({
    url: `${baseUrl}/products/${p.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    ...categoryUrls,
    ...productUrls,
  ];
}
