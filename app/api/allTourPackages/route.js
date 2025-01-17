import { query } from '../utils/db';

export async function GET(req) {
  try {
    const rows = await query('SELECT * FROM all_tour_packages', []);
    return new Response(JSON.stringify(rows), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache, no-store, must-revalidate, max-age=0',
        'Pragma': 'no-cache', // Compatibility for older HTTP caches
        'Expires': '0', // Ensure no expiration date is set
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
