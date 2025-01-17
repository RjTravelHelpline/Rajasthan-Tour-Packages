import { NextResponse } from 'next/server';

export async function GET(req) {
  // Check if the Authorization header matches the CRON_SECRET
  if (req.headers.get('Authorization') !== `Bearer ${process.env.VERCEL_PURGE_AUTH}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  // Place your logic here (e.g., call the purgeCache API)
  try {
    // Purge cache logic or other cron tasks
    console.log('Cron job is executed successfully.');

    return NextResponse.json({ message: 'Cron job executed successfully!' });
  } catch (error) {
    console.error('Error executing cron job:', error);
    return NextResponse.json(
      { error: 'Failed to execute cron job' },
      { status: 500 }
    );
  }
}
