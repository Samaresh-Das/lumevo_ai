export default function sitemap() {
  const baseUrl = "https://lumevo.ai";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    // Add other routes here if they exist, e.g. /blog, /about
  ];
}
