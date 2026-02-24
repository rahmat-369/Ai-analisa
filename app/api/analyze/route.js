export async function POST(req) {
  try {
    const { imageBase64 } = await req.json();

    if (!imageBase64) {
      return Response.json({ error: "Gambar tidak ada" });
    }

    const response = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=" +
        process.env.GEMINI_API_KEY,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                { text: "Balas dengan kata sukses" }
              ],
            },
          ],
        }),
      }
    );

    const text = await response.text();

    return Response.json({
      status: response.status,
      raw: text
    });

  } catch (error) {
    return Response.json({ error: error.message });
  }
}
