/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["s4.anilist.co", "encrypted-tbn0.gstatic.com"],
  },
};

//https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJSJYa-wXMcl05dQSUSYNtLPIwdXtijPx5-Q&usqp=CAU
module.exports = nextConfig;
