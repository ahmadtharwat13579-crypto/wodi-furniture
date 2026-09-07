export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const SHEET_URL = process.env.SHEET_URL;
  const SHEET_PWD = process.env.SHEET_PWD;

  const body = { ...req.body, pwd: SHEET_PWD };

  try {
    const response = await fetch(SHEET_URL, {
      method: 'POST',
      body: JSON.stringify(body)
    });
    const data = await response.json();
    res.status(200).json(data);
  } catch (e) {
    res.status(500).json({ success: false, error: e.message });
  }
}export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const SHEET_URL = process.env.SHEET_URL;
  const SHEET_PWD = process.env.SHEET_PWD;

  const body = { ...req.body, pwd: SHEET_PWD };

  try {
    const response = await fetch(SHEET_URL, {
      method: 'POST',
      body: JSON.stringify(body)
    });
    const data = await response.json();
    res.status(200).json(data);
  } catch (e) {
    res.status(500).json({ success: false, error: e.message });
  }
}