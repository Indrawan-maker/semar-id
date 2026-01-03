import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/'], // Block jika ada halaman private
    },
    sitemap: 'https://semar-id.vercel.app/sitemap.xml',
  }
}