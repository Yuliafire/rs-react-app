/** @type {import('next').NextConfig} */
import createNextIntlPlugin from "next-intl/plugin";
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: ["./styles"],
  },
  images: {
    domains: ["rickandmortyapi.com"],
  },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
