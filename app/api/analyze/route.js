const handleSubmit = async () => {
  try {
    if (!image) {
      setResult("Pilih gambar dulu");
      return;
    }

    setLoading(true);

    const reader = new FileReader();
    reader.readAsDataURL(image);

    reader.onloadend = async () => {
      try {
        const base64 = reader.result.split(",")[1];

        const res = await fetch("/api/analyze", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ imageBase64: base64 }),
        });

        const data = await res.json();

        setResult(JSON.stringify(data));
      } catch (err) {
        setResult("Frontend error: " + err.message);
      } finally {
        setLoading(false);
      }
    };
  } catch (err) {
    setResult("Error umum: " + err.message);
    setLoading(false);
  }
};
