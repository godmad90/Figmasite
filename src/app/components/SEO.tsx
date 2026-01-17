import { useEffect } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

// ⚠️ IMPORTANT: Update this with your actual domain before deployment
const SITE_URL = 'https://toponlinecasino-australia.com';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
}

export function SEOHelmetProvider({ children }: { children: React.ReactNode }) {
  return <HelmetProvider>{children}</HelmetProvider>;
}

export function SEO({
  title = "Top 10 Online Casino Australia 2026 | Best Australian Online Casinos with AUD Bonuses",
  description = "Discover the best online casinos in Australia for 2026. Compare top-rated Australian online casinos with exclusive AUD bonuses, pokies, PayID deposits, and fast payouts. Licensed operators accepting Aussie players.",
  keywords = "online casino Australia, Australian online casinos, pokies Australia, online gambling Australia, AUD casino, online pokies real money, best online casino Australia, PayID casino, crypto casino Australia, live dealer casino Australia",
  canonicalUrl = SITE_URL + '/',
  ogImage = SITE_URL + '/og-image.svg'
}: SEOProps) {
  
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="AU Casino Guide" />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="geo.region" content="AU" />
      <meta name="geo.placename" content="Australia" />

      {/* Open Graph tags (for social media) */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content="en_AU" />
      <meta property="og:site_name" content="AU Casino Guide" />

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Mobile optimization */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#f59e0b" />

      {/* Canonical link */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Sitemap */}
      <link rel="sitemap" type="application/xml" title="Sitemap" href={SITE_URL + '/sitemap.xml'} />
    </Helmet>
  );
}

// Structured Data Component (JSON-LD)
export function StructuredData() {
  useEffect(() => {
    // Organization Schema
    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "AU Casino Guide",
      "description": "Leading Australian online casino comparison and review website",
      "url": SITE_URL,
      "logo": SITE_URL + "/logo.svg",
      "foundingDate": "2025",
      "areaServed": {
        "@type": "Country",
        "name": "Australia"
      }
    };

    // WebSite Schema
    const websiteSchema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "AU Casino Guide",
      "url": SITE_URL,
      "potentialAction": {
        "@type": "SearchAction",
        "target": SITE_URL + "/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    };

    // Article Schema
    const articleSchema = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Top 10 Online Casino Australia 2026 - Best Australian Online Casinos",
      "description": "Comprehensive guide to the best online casinos in Australia, featuring top-rated operators, exclusive bonuses, pokies, and payment methods for Australian players.",
      "author": {
        "@type": "Organization",
        "name": "AU Casino Guide"
      },
      "publisher": {
        "@type": "Organization",
        "name": "AU Casino Guide",
        "logo": {
          "@type": "ImageObject",
          "url": SITE_URL + "/logo.svg"
        }
      },
      "datePublished": "2026-01-15",
      "dateModified": "2026-01-15",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": SITE_URL
      }
    };

    // ItemList Schema for Top Casinos
    const itemListSchema = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "Top 10 Online Casinos Australia 2026",
      "description": "Ranked list of the best online casinos for Australian players",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "item": {
            "@type": "Product",
            "name": "S99AU Casino",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5.0",
              "bestRating": "5",
              "reviewCount": "1247"
            }
          }
        },
        {
          "@type": "ListItem",
          "position": 2,
          "item": {
            "@type": "Product",
            "name": "REC99AU Casino",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "bestRating": "5",
              "reviewCount": "1098"
            }
          }
        },
        {
          "@type": "ListItem",
          "position": 3,
          "item": {
            "@type": "Product",
            "name": "FC8AU Casino",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "bestRating": "5",
              "reviewCount": "987"
            }
          }
        },
        {
          "@type": "ListItem",
          "position": 4,
          "item": {
            "@type": "Product",
            "name": "DD8AU Casino",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "bestRating": "5",
              "reviewCount": "876"
            }
          }
        },
        {
          "@type": "ListItem",
          "position": 5,
          "item": {
            "@type": "Product",
            "name": "SPLINKOS Casino",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "bestRating": "5",
              "reviewCount": "765"
            }
          }
        }
      ]
    };

    // FAQ Schema
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Are online casinos legal in Australia?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Online casinos are legal for Australian players to access, though the Interactive Gambling Act 2001 regulates how operators can offer services to Australians. International licensed casinos accept Australian players legally."
          }
        },
        {
          "@type": "Question",
          "name": "What is the best online casino in Australia?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "S99AU is ranked #1 for 2026, offering a 100% SLOT bonus up to AUD 500, over 6000 games, PayID deposits, and cryptocurrency support with excellent customer service for Australian players."
          }
        },
        {
          "@type": "Question",
          "name": "Can I use PayID at online casinos?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, many top Australian online casinos now accept PayID for instant deposits using your mobile number or email address. It's one of the most popular payment methods for Aussie players."
          }
        },
        {
          "@type": "Question",
          "name": "What are pokies?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Pokies is the Australian term for slot machines. Online pokies are digital versions of these popular casino games, featuring various themes, bonus rounds, and progressive jackpots."
          }
        }
      ]
    };

    // Breadcrumb Schema
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": SITE_URL
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Top 10 Online Casinos Australia",
          "item": SITE_URL + "#top-casinos"
        }
      ]
    };

    // Create or update script tags
    const schemas = [
      organizationSchema,
      websiteSchema,
      articleSchema,
      itemListSchema,
      faqSchema,
      breadcrumbSchema
    ];

    // Remove existing schema scripts
    document.querySelectorAll('script[type="application/ld+json"]').forEach(el => el.remove());

    // Add new schema scripts
    schemas.forEach((schema, index) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(schema);
      script.id = `structured-data-${index}`;
      document.head.appendChild(script);
    });

  }, []);

  return null;
}