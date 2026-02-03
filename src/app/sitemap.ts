import type { MetadataRoute } from 'next';
import fs from 'fs/promises';
import path from 'path';

const BASE_URL = 'https://technoseti.ru';

export default function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${BASE_URL}/catalog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/objects`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/contacts`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];

  const productsPath = path.join(
    process.cwd(),
    'src',
    'app',
    'data',
    'products',
    'products.json'
  );
  const portfolioPath = path.join(
    process.cwd(),
    'src',
    'app',
    'data',
    'portfolio',
    'portfolio.json'
  );

  return Promise.all([
    fs.readFile(productsPath, 'utf-8'),
    fs.readFile(portfolioPath, 'utf-8'),
  ]).then(([productsJson, portfolioJson]) => {
    const products = (
      JSON.parse(productsJson) as { products: { id: number }[] }
    ).products;
    const portfolio = (
      JSON.parse(portfolioJson) as {
        portfolio: { id: number }[];
      }
    ).portfolio;

    const catalogPages: MetadataRoute.Sitemap = products.map((item) => ({
      url: `${BASE_URL}/catalog/${item.id}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }));

    const objectPages: MetadataRoute.Sitemap = portfolio.map((item) => ({
      url: `${BASE_URL}/objects/${item.id}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }));

    return [...staticPages, ...catalogPages, ...objectPages];
  });
}
