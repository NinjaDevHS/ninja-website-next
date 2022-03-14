const moduleExports = {
  typescript: {
    // PLEASE KEEP THIS COMMENTED FOR LOCAL TEST
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    // ignoreBuildErrors: true
  },
  images: {
    domains: [`${process.env.NEXT_PUBLIC_IMAGES_URL}`]
  },
  serverRuntimeConfig: {
    // Will only be available on the server side
    environment: process.env.NEXT_PUBLIC_ENVIRONMENT
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
    environment: process.env.NEXT_PUBLIC_ENVIRONMENT
  },
  cleanDistDir: false
};