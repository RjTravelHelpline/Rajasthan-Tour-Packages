import { query } from '../utils/db';

export const config = {
  runtime: 'edge', // This tells Vercel to treat this as an Edge function
};
export async function GET(req) {
  try {
    const rows = await query('SELECT * FROM all_tour_packages', []);
    return new Response(JSON.stringify(rows), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-store, must-revalidate, max-age=0',
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
