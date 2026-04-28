const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const isUserOrOrgPagesSite = repoName.endsWith(".github.io");
const basePath =
  process.env.GITHUB_ACTIONS === "true" && repoName && !isUserOrOrgPagesSite
    ? `/${repoName}`
    : "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath,
  assetPrefix: basePath,
};

export default nextConfig;
