import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ООО Техноcети - Современные технологии и решения',
  description:
    'Техноcети - ваш надежный партнер в мире современных технологий. Мы предлагаем инновационные решения в сфере строительства.',
  icons: {
    icon: [
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', rel: 'shortcut icon' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
  appleWebApp: {
    title: 'Техносети',
  },
  other: {
    'geo.region': 'RU',
  },
  openGraph: {
    siteName: 'Техно-Сети',
    title: 'ООО Техноcети - Современные технологии и решения',
    description:
      'Техноcети - ваш надежный партнер в мире современных технологий. Мы предлагаем инновационные решения в сфере строительства.',
    type: 'website',
    url: 'https://technoseti.ru',
    locale: 'ru_RU',
    images: [
      {
        url: 'https://technoseti.ru/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Техно-Сети',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ООО Техноcети - Современные технологии и решения',
    description:
      'Техноcети - ваш надежный партнер в мире современных технологий. Мы предлагаем инновационные решения в сфере строительства.',
    images: [
      {
        url: 'https://technoseti.ru/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Техно-Сети',
      },
    ],
  },
};
