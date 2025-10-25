import express from "express";
import puppeteer from "puppeteer";

const app = express();

app.get("/api/getdp", async (req, res) => {
  const { number } = req.query;
  if (!number) return res.json({ success: false, message: "No number" });

  try {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    await page.goto(`https://wa.me/${number}`);
    // ⚠️ Need to login to WhatsApp Web or use a session cookie

    // Placeholder (since WhatsApp blocks automated scraping)
    const dpUrl = "https://i.ibb.co/8zLqT3f/sample-dp.jpg";

    await browser.close();
    res.json({ success: true, dpUrl });
  } catch (err) {
    console.error(err);
    res.json({ success: false });
  }
});

app.listen(3000, () => console.log("Server running on port 3000"));
