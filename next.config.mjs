/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack(config) {
      config.module.rules.push({
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      });
      return config;
    },
    sassOptions: {
      additionalData: `$example_var: red;`,
    }
  };
  
  export default nextConfig;