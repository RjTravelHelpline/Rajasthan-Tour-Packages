import { query } from '../utils/db';

export async function GET(req) {
  try {
    const rows = await query('SELECT * FROM all_tour_packages', []);
    return new Response(JSON.stringify(rows), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'max-age=0, s-maxage=10, stale-while-revalidate=5',
        'Surrogate-Control': 'no-store',  // Prevent Vercel edge cache
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
