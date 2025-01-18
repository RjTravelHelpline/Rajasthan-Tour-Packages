import { query } from '../utils/db';

export async function GET() {
  try {
    const rows = await query('SELECT * FROM packages_cost', []);
    return new Response(JSON.stringify(rows), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'max-age=10',
        'CDN-Cache-Control': 'max-age=60',
        'Vercel-CDN-Cache-Control': 'max-age=60',
      },
      next: {
        revalidate: 10, // Revalidate every 10 seconds
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
