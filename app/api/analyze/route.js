export async function POST(req) {
  try {
    const { imageBase64 } = await req.json();

    const response = await fetch(
      "https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent?key=" +
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
                {
                  text: "Balas dengan kata sukses"
                }
              ]
            }
          ]
        })
      }
    );

    const data = await response.json();

    return Response.json(data);

  } catch (error) {
    return Response.json({ error: error.message });
  }
}    return Response.json({ error: error.message });
  }
}
