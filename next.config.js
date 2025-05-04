const path = require('path')

const isProd = process.env.NODE_ENV === 'production' 
module.exports = {
  basePath: isProd? '/portfolio' : '',
  output: 'export',
  distDir: 'dist',
  publicRuntimeConfig: {
    basePath: isProd ? '/portfolio' : '',
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'media.dev.to',
        pathname: '**',
      },
    ],
  },
}