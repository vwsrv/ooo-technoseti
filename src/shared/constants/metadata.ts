export interface MetaIconItem {
  url: string;
  sizes?: string;
  type?: string;
  rel?: string;
}

export interface MetaIcons {
  icon: MetaIconItem[];
  apple: MetaIconItem[];
}

export interface MetaData {
  title: string;
  description: string;
  icons: MetaIcons;
  manifest: string;
  appleMobileWebAppTitle: string;
}

export const metaData: MetaData = {
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
  appleMobileWebAppTitle: 'Техносети',
};
