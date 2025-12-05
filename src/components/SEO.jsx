import React from "react";
import { Helmet } from "react-helmet-async";

const SEO = ({
  title = "Nature Haven - Financial Literacy | Money Quest Adventure",
  description = "Transform your financial future with Nature Haven's Money Quest. An engaging, gamified learning platform that teaches individuals essential money management skills through interactive adventures. Join thousands of people building financially smart.",
  keywords = "financial literacy, money management, finance app, teach people about money, financial education games, money quest, banking, savings, budgeting, financial skills for people",
  author = "Nature Haven",
  image = "/hero-section-logo.png",
  url = "https://www.nurtureehaven.com/",
  type = "website",
  twitterHandle = "@nurture_haven",
  publishedTime,
  modifiedTime,
  section,
  tags = [],
  locale = "en_US",
  siteName = "Nature Haven",
  canonicalUrl,
  noindex = false,
  nofollow = false,
  structuredData,
}) => {
  // Construct full URL for image
  const fullImageUrl = image.startsWith("http") ? image : `${url}${image}`;
  const fullUrl = canonicalUrl || url;

  // Default structured data for the organization
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${url}#organization`,
        name: siteName,
        url: url,
        logo: {
          "@type": "ImageObject",
          url: fullImageUrl,
        },
        sameAs: [
          "https://twitter.com/nurture_haven",
          // "https://facebook.com/naturehaven",
          "https://www.instagram.com/nurture_haven/",
          // "https://linkedin.com/company/naturehaven",
        ],
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "Customer Service",
          email: "moneyquest25@gmail.com",
        },
      },
      {
        "@type": "WebSite",
        "@id": `${url}#website`,
        url: url,
        name: siteName,
        publisher: {
          "@id": `${url}#organization`,
        },
        potentialAction: {
          "@type": "SearchAction",
          target: `${url}/search?q={search_term_string}`,
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "WebPage",
        "@id": `${fullUrl}#webpage`,
        url: fullUrl,
        name: title,
        description: description,
        isPartOf: {
          "@id": `${url}#website`,
        },
        about: {
          "@id": `${url}#organization`,
        },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: fullImageUrl,
        },
        datePublished: publishedTime,
        dateModified: modifiedTime || new Date().toISOString(),
        inLanguage: locale.split("_")[0],
      },
      {
        "@type": "EducationalOrganization",
        "@id": `${url}#educational`,
        name: siteName,
        description:
          "Leading provider of financial literacy education for people through gamified learning experiences",
        url: url,
        areaServed: "Worldwide",
        educationalCredentialAwarded: "Financial Literacy Certification",
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Money Quest Programs",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Course",
                name: "Money Quest Adventure",
                description:
                  "Interactive financial literacy course for people",
                provider: {
                  "@id": `${url}#organization`,
                },
              },
            },
          ],
        },
      },
      {
        "@type": "SoftwareApplication",
        name: "Money Quest",
        applicationCategory: "EducationalApplication",
        operatingSystem: "Web, iOS, Android",
        offers: {
          "@type": "Offer",
          price: "3000",
          priceCurrency: "Naira",
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "5.0",
          ratingCount: "5634",
          bestRating: "5",
          worstRating: "2",
        },
        description: description,
        screenshot: fullImageUrl,
        author: {
          "@id": `${url}#organization`,
        },
      },
    ],
  };

  const finalStructuredData = structuredData || defaultStructuredData;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <html lang={locale.split("_")[0]} />
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />

      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />

      {/* Robots Meta */}
      {(noindex || nofollow) && (
        <meta
          name="robots"
          content={`${noindex ? "noindex" : "index"},${
            nofollow ? "nofollow" : "follow"
          }`}
        />
      )}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:image:alt" content={title} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content={locale} />

      {publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
      {section && <meta property="article:section" content={section} />}
      {tags.length > 0 &&
        tags.map((tag) => (
          <meta key={tag} property="article:tag" content={tag} />
        ))}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />
      <meta name="twitter:image:alt" content={title} />
      {twitterHandle && <meta name="twitter:site" content={twitterHandle} />}
      {twitterHandle && <meta name="twitter:creator" content={twitterHandle} />}

      {/* Additional SEO Tags */}
      <meta name="theme-color" content="#F5EDE4" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content={siteName} />
      <meta name="format-detection" content="telephone=no" />

      {/* Geo Tags */}
      <meta name="geo.region" content="US" />
      <meta name="geo.placename" content="United States" />

      {/* Language Alternatives */}
      <link rel="alternate" hrefLang="en" href={fullUrl} />
      <link rel="alternate" hrefLang="x-default" href={fullUrl} />

      {/* Preconnect to external domains for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />

      {/* DNS Prefetch */}
      <link rel="dns-prefetch" href="https://www.google-analytics.com" />

      {/* Structured Data (JSON-LD) */}
      <script type="application/ld+json">
        {JSON.stringify(finalStructuredData)}
      </script>

      {/* Additional Performance Hints */}
      <link rel="preload" as="image" href={fullImageUrl} />
    </Helmet>
  );
};

export default SEO;
