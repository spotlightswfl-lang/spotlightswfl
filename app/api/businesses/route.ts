import { NextResponse } from 'next/server';
import { directoryData } from '@/lib/site-data';

export async function GET() {
  return NextResponse.json({
    items: directoryData,
    total: directoryData.length,
  });
}
