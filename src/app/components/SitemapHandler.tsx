import { useEffect } from 'react';

export function SitemapHandler() {
  useEffect(() => {
    // Check if the current URL is requesting sitemap.xml
    if (window.location.pathname === '/sitemap.xml') {
      // Generate sitemap XML
      const sitemapXML = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  
  <!-- Homepage -->
  <url>
    <loc>https://toponlinecasino-australia.com/</loc>
    <lastmod>2025-01-17T00:00:00+00:00</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>

  <!-- Top Casinos Section -->
  <url>
    <loc>https://toponlinecasino-australia.com/#top-casinos</loc>
    <lastmod>2025-01-17T00:00:00+00:00</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>

  <!-- Content Sections -->
  <url>
    <loc>https://toponlinecasino-australia.com/#what-are-online-casinos</loc>
    <lastmod>2025-01-17T00:00:00+00:00</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>

  <url>
    <loc>https://toponlinecasino-australia.com/#payment-methods</loc>
    <lastmod>2025-01-17T00:00:00+00:00</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>

  <url>
    <loc>https://toponlinecasino-australia.com/#responsible-gaming</loc>
    <lastmod>2025-01-17T00:00:00+00:00</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>

</urlset>`;

      // Clear the page and display XML
      document.open();
      document.write(sitemapXML);
      document.close();
      
      // Set correct content type
      document.contentType = 'application/xml';
    }
  }, []);

  // Don't render anything if we're on sitemap.xml
  if (window.location.pathname === '/sitemap.xml') {
    return null;
  }

  return null;
}
