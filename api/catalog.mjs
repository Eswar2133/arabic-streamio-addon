export default function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");

  const { type, id, search } = req.query;

  const validCatalogs = {
    "arabic-movies": "movie",
    "arabic-series": "series"
  };

  if (!id || !validCatalogs[id] || validCatalogs[id] !== type) {
    return res.status(400).send("Invalid catalog request");
  }

  const catalog = {
    "arabic-movies": [
      {
        id: "tt0001001",
        name: "الفيل الأزرق",
        type: "movie",
        poster: "https://m.media-amazon.com/images/M/MV5BNWU1NWRhMjQtYTVjNS00NDVjLTk4ZTctY2RjYzJhMTM5M2VmXkEyXkFqcGdeQXVyMzQwMTY2Nzk@._V1_.jpg"
      },
      {
        id: "tt0001002",
        name: "الممر",
        type: "movie",
        poster: "https://m.media-amazon.com/images/M/MV5BZjc3YTg3NTktMmUwNi00ZDdjLWEwM2ItMzVjMDY4ZmU5ZDRhXkEyXkFqcGdeQXVyMjMxOTE0ODA@._V1_.jpg"
      }
    ],
    "arabic-series": [
      {
        id: "tt0002001",
        name: "الاختيار",
        type: "series",
        poster: "https://m.media-amazon.com/images/M/MV5BNjBiMjRhZDQtNzRhYS00OWVjLWJkNDMtMzViNDc3ZGVmNjQ5XkEyXkFqcGdeQXVyMjMxOTE0ODA@._V1_.jpg"
      }
    ]
  };

  let results = catalog[id] || [];

  if (search) {
    const normalizedSearch = search.trim().toLowerCase().replace(/\s+/g, "");
    results = results.filter(item =>
      item.name.toLowerCase().replace(/\s+/g, "").includes(normalizedSearch)
    );
  }

  res.json({ metas: results });
}
