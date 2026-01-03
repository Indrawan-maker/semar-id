import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://semar-id.vercel.app'
  
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/samarinda`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/balikpapan`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    // Nanti tambahkan halaman blog di sini
    // {
    //   url: `${baseUrl}/blog/artikel-1`,
    //   lastModified: new Date('2025-01-03'),
    //   changeFrequency: 'monthly',
    //   priority: 0.7,
    // },
  ]
}