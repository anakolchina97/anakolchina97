/** @type {import('next').NextConfig} */
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import withImages from "next-images";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["80.78.243.66"],
    remotePatterns: [
      {
        hostname: "80.78.243.66",
      },
    ],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "src/styles")],
    prependData: `@import "constants.scss"; @import "mixins.scss";`,
  },
};

export default withImages(nextConfig);
