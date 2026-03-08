/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://legalstaygeo.com',
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
  additionalPaths: async (config) => [
    await config.transform(config, '/'),
    await config.transform(config, '/stories'),
    await config.transform(config, '/contact'),
  ],
};

