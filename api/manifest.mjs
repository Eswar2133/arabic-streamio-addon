export default function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.json({
    id: "org.arabic.catalog",
    version: "1.0.0",
    name: "Arabic Catalog",
    description: "Arabic Movies and Series for Stremio",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    resources: ["catalog", "stream"],
    types: ["movie", "series"],
    catalogs: [
      {
        type: "movie",
        id: "arabic-movies",
        name: "Arabic Movies",
        extra: [{ name: "search", isRequired: false }]
      },
      {
        type: "series",
        id: "arabic-series",
        name: "Arabic Series",
        extra: [{ name: "search", isRequired: false }]
      }
    ],
    idPrefixes: ["tt"],
    behaviorHints: {
      configurationRequired: false
    }
  });
}
