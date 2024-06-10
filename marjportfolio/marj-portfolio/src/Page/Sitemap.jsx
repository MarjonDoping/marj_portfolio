import React from 'react';

const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
   xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
   xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
         http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
<!-- created with Free Online Sitemap Generator www.xml-sitemaps.com -->

<url>
   <loc>https://marjondoping.vercel.app/</loc>
   <lastmod>2024-06-10T06:06:59+00:00</lastmod>
</url>

</urlset>`;

const Sitemap = () => {
   return (
      <React.Fragment>
         {sitemapContent}
      </React.Fragment>
   );
};

export default Sitemap;
