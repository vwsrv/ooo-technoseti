import type { ProductsVersionResponse } from '@/app/api/fake/types';
import { VERSION } from '@/app/data/products/version';
import { NextResponse } from 'next/server';

export function GET() {
  const body: ProductsVersionResponse = { version: VERSION };
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
