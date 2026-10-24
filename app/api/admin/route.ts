import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    overview: {
      businesses: 1284,
      leads: 3182,
      revenue: '$84.6k',
      ticketsSold: 912,
    },
    alerts: [
      '5 new coupon redemptions in the last 24 hours',
      '26 new business profile views today',
      '3 pending marketplace moderation items',
    ],
  });
}
