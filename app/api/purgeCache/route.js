// /pages/api/purgeCache.js
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const response = await fetch(
      `https://api.vercel.com/v1/projects/${process.env.PROJECT_ID}/cache`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.VERCEL_PURGE_AUTH}`,
          'Content-Type': 'application/json',
        },
      }
    );

    if (response.ok) {
      return res.status(200).json({ message: 'Cache purged successfully!' });
    } else {
      const errorData = await response.json();
      return res
        .status(response.status)
        .json({ error: 'Failed to purge cache', details: errorData });
    }
  } catch (error) {
    console.error('Error purging cache:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
