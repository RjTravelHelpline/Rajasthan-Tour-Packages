import { query } from '../utils/db';

export async function GET(req) {
  try {
    const rows = await query('SELECT * FROM all_tour_packages', []);
    return new Response(JSON.stringify(rows), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-store, must-revalidate, max-age=0',
        'Surrogate-Control': 'no-store',  // Prevent Vercel edge cache
        'Pragma': 'no-cache',  // Another instruction to avoid caching
        'Expires': '0',  // Ensure response is not cached
      },
    });
  } catch (error) {
    console.error('Database query failed:', error);
    return new Response(JSON.stringify({ error: 'Database query failed' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
