declare module 'next-pwa' {
  import type { NextConfig } from 'next';

  type PWAOptions = {
    dest?: string;
    register?: boolean;
    skipWaiting?: boolean;
    disable?: boolean;
    [key: string]: unknown;
  };

  // next-pwa exports a function which returns a Next.js config wrapper
  export default function withPWA(options?: PWAOptions): (nextConfig?: NextConfig) => NextConfig;
}


