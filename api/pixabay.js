// api/pixabay.js
export default async function handler(req, res) {
  const apiKey = process.env.PIXABAY_KEY;
  
  if (!apiKey) {
    return res.status(500).json({ error: 'Server API key is not configured' });
  }

  // Extract query parameters passed from your frontend (e.g., q, image_type, safesearch, per_page)
  const queryParams = new URLSearchParams(req.query).toString();
  
  try {
    const response = await fetch(`https://pixabay.com/api/?key=${apiKey}&${queryParams}`);
    const data = await response.json();
    
    res.setHeader('Access-Control-Allow-Origin', '*');
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ error: 'Failed to fetch from Pixabay' });
  }
}