const fs = require('fs');
const sitemap = require('sitemap');

const generateSitemap = () => {
  const pages = [
    { url: '/', changefreq: 'daily', priority: 0.7 },
    { url: '/portfolio', changefreq: 'daily', priority: 0.7 },
    { url: '/webDesign', changefreq: 'daily', priority: 0.7 },
    { url: '/Wordpress', changefreq: 'daily', priority: 0.7 },
    { url: '/contactPage', changefreq: 'daily', priority: 0.7 },
    { url: '/graphicDesigns', changefreq: 'daily', priority: 0.7 },
    // Add other URLs of your website here
  ];

  const sitemapInstance = sitemap.createSitemap({
    hostname: 'https://marjondoping.vercel.app',
    cacheTime: 600000, // 600 sec - cache purge period
    urls: pages,
  });

  fs.writeFileSync('./public/sitemap.xml', sitemapInstance.toString());
};

generateSitemap();
