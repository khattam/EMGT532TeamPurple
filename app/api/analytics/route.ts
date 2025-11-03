import { NextResponse } from 'next/server';
import { getAnalytics } from '@/lib/db';

export async function GET() {
  try {
    const analytics = getAnalytics();
    return NextResponse.json(analytics);
  } catch (error) {
    console.error('Error fetching analytics:', error);
    return NextResponse.json(
      { error: 'Failed to fetch analytics data' },
      { status: 500 }
    );
  }
}
