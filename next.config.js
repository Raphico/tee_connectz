/** @type {import('next').NextConfig} */
const nextConfig = {
   experimental: { urlImports: ["https://themer.sanity.build/"] },
   images: {
      remotePatterns: [
         {
            protocol: "https",
            hostname: "cdn.sanity.io",
            port: "",
         },
      ],
   },
}

module.exports = nextConfig
