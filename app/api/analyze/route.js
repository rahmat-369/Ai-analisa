export async function POST(req) {
  try {
    const { imageBase64 } = await req.json();

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

    const data = await res.json();
console.log("API RESPONSE:", data);
setResult(JSON.stringify(data));
    
    return Response.json({
      statusCode: response.status,
      fullResponse: data,
    });

  } catch (error) {
    return Response.json({ error: error.message });
  }
      } 
