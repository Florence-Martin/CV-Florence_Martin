/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true, // Activer l'API appDir si vous utilisez le dossier 'app/'
  },
};

export default nextConfig;
