import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Silence monorepo lockfile warning by pointing to the true workspace root
  outputFileTracingRoot: path.join(process.cwd(), "../../.."),
};

export default nextConfig;
