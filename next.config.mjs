// // nect.config.mjs to next.config.ts

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     images: {
//         domains: ['cdn.sanity.io'], // Allow images from Sanity's CDN
//       },
// };

// export default nextConfig;


/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
};

export default nextConfig;
