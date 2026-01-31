import type { PortfolioVersionResponse } from '@/app/api/fake/types';
import { VERSION } from '@/app/data/portfolio/version';
import { NextResponse } from 'next/server';

export function GET() {
  const body: PortfolioVersionResponse = { version: VERSION };
  return Promise.resolve(
    NextResponse.json(body, {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=3600',
      },
    })
  );
}
