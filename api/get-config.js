export default async function handler(req, res) {
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method Not Allowed' });

  const { action, email } = req.query;
  
  let url = `${process.env.SHEET_URL}?pwd=${process.env.SHEET_PWD}`;
  if (action) url += `&action=${action}`;
  if (email) url += `&email=${encodeURIComponent(email)}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).json({ error: 'Failed to fetch data' });
  }
}