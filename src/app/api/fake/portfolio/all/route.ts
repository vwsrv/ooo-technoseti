import type { PortfolioAllResponse } from '@/app/api/fake/types';
import fs from 'fs/promises';
import { NextResponse } from 'next/server';
import path from 'path';

export function GET() {
  const filePath = path.join(
    process.cwd(),
    'src',
    'app',
    'data',
    'portfolio',
    'portfolio.json'
  );

  return fs
    .readFile(filePath, 'utf-8')
    .then((json) => {
      const data: PortfolioAllResponse = JSON.parse(
        json
      ) as PortfolioAllResponse;
      return NextResponse.json(data, {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'public, max-age=3600',
        },
      });
    })
    .catch((error) => NextResponse.json({ error }, { status: 500 }));
}
