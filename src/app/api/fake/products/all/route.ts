import type { ProductsAllResponse } from '@/app/api/fake/types';
import fs from 'fs/promises';
import { NextResponse } from 'next/server';
import path from 'path';

export function GET() {
  const filePath = path.join(
    process.cwd(),
    'src',
    'app',
    'data',
    'products',
    'products.json'
  );

  return fs
    .readFile(filePath, 'utf-8')
    .then((json) => {
      const data: ProductsAllResponse = JSON.parse(json) as ProductsAllResponse;
      return NextResponse.json(data, {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'no-store',
        },
      });
    })
    .catch((error) => NextResponse.json({ error }, { status: 500 }));
}
