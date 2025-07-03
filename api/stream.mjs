export default function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");

  const { type, id } = req.query;

  const streams = {
    "tt0001001": [
      {
        title: "الفيل الأزرق - Stream",
        url: "https://example.com/video1.mp4"
      }
    ],
    "tt0001002": [
      {
        title: "الممر - Stream",
        url: "https://example.com/video2.mp4"
      }
    ],
    "tt0002001": [
      {
        title: "الاختيار - Stream",
        url: "https://example.com/video3.mp4"
      }
    ]
  };

  res.json({ streams: streams[id] || [] });
}
