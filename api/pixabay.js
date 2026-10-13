// api/pixabay.js
export default async function handler(req, res) {
  const apiKey = process.env.PIXABAY_KEY;
  
  if (!apiKey) {
    return res.status(500).json({ error: 'Server API key is not configured' });
  }

  const params = new URLSearchParams(req.query);
  params.set('key', apiKey);

  try {
    const response = await fetch(`https://pixabay.com/api/?${params}`);
    const data = await response.json();

    return res.status(response.status).json(data);
  } catch (error) {
    return res.status(500).json({ error: 'Failed to fetch from Pixabay' });
  }
}