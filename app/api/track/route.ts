import { NextResponse } from 'next/server';
import { saveEvent } from '@/lib/db';

export async function POST(request: Request) {
  try {
    const event = await request.json();
    saveEvent(event);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error tracking event:', error);
    return NextResponse.json(
      { error: 'Failed to track event' },
      { status: 500 }
    );
  }
}
