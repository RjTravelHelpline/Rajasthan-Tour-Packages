module.exports = {
  siteUrl: 'https://www.rajasthantourpackages.in',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  exclude: ['/api/*', '/admin/*'],
  additionalSitemaps: [
    'https://www.rajasthantourpackages.in/sitemap.xml', // Your main sitemap
  ],
  transform: async (config, path) => {
    // Ensure the homepage is included
    if (path === '/') {
      return {
        loc: 'https://www.rajasthantourpackages.in', // Full URL for the homepage
        lastmod: new Date().toISOString(),
        changefreq: 'daily',
        priority: 1.0,
      };
    }

    return {
      loc: `https://www.rajasthantourpackages.in${path}`,
      lastmod: new Date().toISOString(),
      changefreq: 'daily',
      priority: 0.7,
    };
  },
  generateIndexSitemap: false,

  // Custom options for robots.txt
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: '*',
        disallow: ['/api/*', '/admin/'], // Exclude API and admin routes
      },
    ],
  },
};
