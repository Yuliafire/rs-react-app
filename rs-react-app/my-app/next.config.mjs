// /** @type {import('next').NextConfig} */
// const nextConfig = {
// //   output: 'export', 
//   distDir: './dist',
//   basePath: process.env.NEXT_PUBLIC_BASE_PATH, 
// }
 
// export default nextConfig

/** @type {import('next').NextConfig} */
import createNextIntlPlugin from 'next-intl/plugin';
const nextConfig = {};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
