export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method Not Allowed' });

  const body = { ...req.body, pwd: process.env.SHEET_PWD };

  try {
    const response = await fetch(process.env.SHEET_URL, {
      method: 'POST',
      body: JSON.stringify(body)
    });
    const data = await response.json();
    res.status(200).json(data);
  } catch (e) {
    res.status(500).json({ success: false, error: e.message });
  }
}