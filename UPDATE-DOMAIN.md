# 🔧 Quick Domain Update Guide

## What You Need to Update

When you deploy your website, you only need to update **ONE PLACE** for the SEO component to work automatically:

### ✅ **AUTOMATIC (Smart Detection)**

The SEO component (`/src/app/components/SEO.tsx`) will **automatically detect** your domain using `window.location.origin` when the site is live!

**How it works:**
- During development (localhost): Uses fallback `https://yourwebsite.com.au`
- After deployment: **Automatically uses your real domain**

**No manual updates needed for SEO.tsx!** 🎉

---

### ⚠️ **MANUAL UPDATES REQUIRED (2 files only)**

#### 1. `/public/robots.txt`
**Line 7:** Update the Sitemap URL
```txt
# BEFORE:
Sitemap: https://yourwebsite.com.au/sitemap.xml

# AFTER (example):
Sitemap: https://aucasinoguide.com.au/sitemap.xml
```

#### 2. `/public/sitemap.xml`
**Replace all instances** of `https://yourwebsite.com.au/` with your actual domain

**Easy Find & Replace:**
- Find: `https://yourwebsite.com.au/`
- Replace: `https://youractualsite.com.au/`

**Example:**
```xml
<!-- BEFORE -->
<loc>https://yourwebsite.com.au/</loc>

<!-- AFTER -->
<loc>https://aucasinoguide.com.au/</loc>
```

---

## 📋 Quick Checklist

Before deploying:

- [ ] Update `/public/robots.txt` (Line 7 - Sitemap URL)
- [ ] Update `/public/sitemap.xml` (All URLs - use Find & Replace)
- [ ] Deploy your site
- [ ] SEO.tsx will automatically use the correct domain ✅
- [ ] Verify in Google Search Console
- [ ] Submit sitemap

---

## 🎨 Logo Files (Already Using Current Branding)

The following files are automatically created based on your current logo design:

- `/public/logo.svg` - Main logo (200x200px)
- `/public/og-image.svg` - Social media sharing image (1200x630px)

Both use your current gradient branding (amber to red) with the BookOpen icon.

**These are automatically referenced** by the SEO component:
- Logo: `{SITE_URL}/logo.svg`
- OG Image: `{SITE_URL}/og-image.svg`

---

## 🚀 Example: Complete Update Process

**Your Domain:** `aucasinoguide.com.au`

### Step 1: Update robots.txt
```txt
Sitemap: https://aucasinoguide.com.au/sitemap.xml
```

### Step 2: Update sitemap.xml (Find & Replace)
- Find: `https://yourwebsite.com.au/`
- Replace: `https://aucasinoguide.com.au/`

### Step 3: Deploy
Deploy your site to your hosting (Netlify, Vercel, etc.)

### Step 4: SEO Component Auto-Updates
No action needed! The component detects `https://aucasinoguide.com.au` automatically.

### Step 5: Verify
1. Visit your site
2. Right-click → View Page Source
3. Search for `<meta property="og:url"` 
4. Should see: `content="https://aucasinoguide.com.au/"`

---

## 🔍 How to Verify It's Working

### Check Meta Tags
1. Visit your live site
2. Right-click → "View Page Source"
3. Look for these tags (should show your real domain):

```html
<meta property="og:url" content="https://yourdomain.com.au/">
<meta property="og:image" content="https://yourdomain.com.au/og-image.svg">
<link rel="canonical" href="https://yourdomain.com.au/">
```

### Check Structured Data
1. Go to: https://search.google.com/test/rich-results
2. Enter your site URL
3. Verify all structured data is detected

### Check Social Sharing
1. Use Facebook Debugger: https://developers.facebook.com/tools/debug/
2. Use Twitter Card Validator: https://cards-dev.twitter.com/validator
3. Enter your URL and check preview

---

## 💡 Pro Tips

### If Using Custom Domain Later
If you change domains, just:
1. Update robots.txt
2. Update sitemap.xml
3. Redeploy
4. SEO component auto-adjusts ✅

### Keeping Placeholder for Development
The fallback URL `https://yourwebsite.com.au` only shows:
- During local development (localhost)
- In server-side rendering (if applicable)

Once live, the real domain takes over automatically!

---

## 📞 Need Help?

If something doesn't look right:
1. Check browser console for errors
2. Verify `/public/logo.svg` and `/public/og-image.svg` are accessible
3. Test with Google Rich Results Test
4. Ensure your domain is properly configured in DNS

---

## ✅ Summary

**You Only Need to Update:**
1. ✏️ `/public/robots.txt` (1 line)
2. ✏️ `/public/sitemap.xml` (Find & Replace)

**Everything Else is Automatic!** 🎉

The SEO component intelligently detects your domain and uses:
- Your current logo design
- Proper meta tags
- Structured data
- Social media cards

All optimized for Google indexing!
