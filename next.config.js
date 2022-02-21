/** @type {import('next').NextConfig} */

const withMDX = require("@next/mdx")({
    extension: /\.mdx$/,
});

module.exports = withMDX({
    pageExtensions: ["js", "jsx", "ts", "tsx", "mdx"],
});

// module.exports = {
//   reactStrictMode: true,
// };
