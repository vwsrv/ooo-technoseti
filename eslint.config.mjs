import nextConfig from 'eslint-config-next/core-web-vitals';

const config = Array.isArray(nextConfig) ? nextConfig : [nextConfig];

const eslintConfig = [
  ...config,
  {
    rules: {
      'react-hooks/exhaustive-deps': 'off',
    },
  },
];

export default eslintConfig;
