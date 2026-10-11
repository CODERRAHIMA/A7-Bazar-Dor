/** @type {import('next').NextConfig} */
const isNetlify = process.env.NETLIFY === 'true';

const nextConfig = {
  experimental: isNetlify ? {} : {
    agentFeedback: true,
  },
  
  cacheComponents: !isNetlify,
  partialPrefetching: !isNetlify,
  reactCompiler: !isNetlify,
  
  ...(isNetlify ? {} : {
    turbopack: {
      rules: {
        "*.css": {
          loaders: ["@tailwindcss/turbopack"],
          as: "*.css",
        },
      },
    },
  })
};

export default nextConfig;
