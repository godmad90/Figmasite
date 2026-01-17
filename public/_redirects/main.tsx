# Serve static files first, then fallback to SPA
/sitemap.xml  /sitemap.xml  200
/robots.txt   /robots.txt   200

# SPA fallback - redirect all other routes to index.html
/*            /index.html   200
