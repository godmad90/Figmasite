# Sitemap & Static Files Deployment Guide

## The Problem
Your sitemap.xml and robots.txt files are showing "Not Found" because React SPAs (Single Page Applications) route all requests through the app, and static files need special configuration to be served directly.

## Solution
I've created configuration files for multiple hosting platforms. Follow the instructions for YOUR hosting platform:

---

## 🔵 For Vercel Hosting

The `/vercel.json` file has been created with the correct configuration.

**Steps:**
1. Commit and push your changes (including vercel.json)
2. Vercel will automatically detect the configuration
3. Deploy/redeploy your app
4. Test: Visit `https://toponlinecasino-australia.com/sitemap.xml`

---

## 🟢 For Netlify Hosting

The `/netlify.toml` file has been created with the correct configuration.

**Steps:**
1. Commit and push your changes (including netlify.toml)
2. Netlify will automatically detect the configuration
3. Deploy/redeploy your app
4. Test: Visit `https://toponlinecasino-australia.com/sitemap.xml`

---

## 🟠 For Other Hosting Platforms (Cloudflare, AWS, etc.)

The `/public/_redirects` file has been created which works with many platforms.

**Additional Steps You Might Need:**

### Option A: Apache (.htaccess)
If your host uses Apache, create a `.htaccess` file in the root:

```apache
# Serve static files first
RewriteEngine On
RewriteRule ^sitemap\.xml$ sitemap.xml [L]
RewriteRule ^robots\.txt$ robots.txt [L]

# SPA fallback
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]
```

### Option B: Nginx Configuration
If your host uses Nginx, add this to your config:

```nginx
location = /sitemap.xml {
    root /path/to/your/public;
    try_files $uri =404;
}

location = /robots.txt {
    root /path/to/your/public;
    try_files $uri =404;
}

location / {
    try_files $uri $uri/ /index.html;
}
```

---

## ✅ After Deployment - Verification Steps

1. **Test Static Files:**
   - Visit: `https://toponlinecasino-australia.com/sitemap.xml`
   - Visit: `https://toponlinecasino-australia.com/robots.txt`
   - Both should display properly (not "Not Found")

2. **Test in Google Search Console:**
   - Go to: https://search.google.com/search-console
   - Navigate to: Sitemaps
   - Remove old sitemap if exists
   - Add: `https://toponlinecasino-australia.com/sitemap.xml`
   - Click "Submit"

3. **Verify Robots.txt:**
   - In Google Search Console
   - Go to: Settings → robots.txt Tester
   - Enter your URL and test

4. **Check Indexing Status:**
   - Google Search Console → URL Inspection
   - Enter: `https://toponlinecasino-australia.com/`
   - Click "Request Indexing"

---

## 🐛 Troubleshooting

### Sitemap still shows 404:
- Clear your browser cache
- Try incognito/private mode
- Wait 5-10 minutes after deployment
- Check your hosting platform's build logs for errors

### Google Search Console still shows error:
- Remove the old sitemap entry
- Wait 24 hours for Google to re-crawl
- Re-submit the sitemap URL

### Files work locally but not in production:
- Check that your build process copies the `/public` folder to the output directory
- Verify the files exist in your deployed build (check your hosting platform's file explorer)

---

## 📝 Files Created

- ✅ `/public/sitemap.xml` - Your XML sitemap (corrected dates & format)
- ✅ `/public/robots.txt` - Search engine crawler instructions
- ✅ `/vercel.json` - Vercel configuration
- ✅ `/netlify.toml` - Netlify configuration
- ✅ `/public/_redirects` - Universal redirect rules
- ✅ `/vite.config.ts` - Updated with explicit public directory config

---

## 🎯 Current Status

Your files are ready and properly configured. You just need to:

1. **Deploy/publish your project** to your hosting platform
2. **Wait for build to complete** (usually 2-5 minutes)
3. **Test the sitemap URL** in your browser
4. **Submit to Google Search Console**

The "Not Found" error you're seeing is because you're viewing the development version or the deployment hasn't completed yet.

---

## 💡 Quick Check

**Are you using Figma Make's built-in hosting?**

If yes, the deploy/publish button in Figma Make should handle everything automatically. After clicking publish:
- Wait for the build to complete
- The sitemap.xml should be accessible immediately
- All static files from `/public` will be served at the root level

**Using custom domain with external hosting?**

Make sure to:
1. Build the project: `npm run build`
2. Upload the `dist` folder to your hosting
3. Ensure the hosting is configured to serve static files from root

---

**Need more help?** Share which hosting platform you're using and I can provide specific instructions!
