// FAQ Schema for Rich Snippets in Google
// Add this to your homepage for instant rich results

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What age is Money Quest suitable for?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Money Quest is designed for everyone ages 7-70. Our gamified learning platform adapts to different age groups, ensuring age-appropriate financial concepts and engaging challenges for every body.",
      },
    },
    {
      "@type": "Question",
      name: "How does Money Quest teach financial literacy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Money Quest uses gamification to make learning about money fun and engaging. Everyone complete interactive adventures, earn rewards, and learn essential skills like budgeting, saving, investing, and smart spending through hands-on activities.",
      },
    },
    {
      "@type": "Question",
      name: "Is Money Quest free to use?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Money Quest offers both free and premium tiers. The free version includes core financial literacy lessons, while premium unlocks advanced features, personalized learning paths, and exclusive content.",
      },
    },
    {
      "@type": "Question",
      name: "What financial skills will my child learn?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Everyone learn essential money management skills including budgeting, saving, investing basics, understanding needs vs wants, setting financial goals, earning money, charitable giving, and making smart spending decisions.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to complete Money Quest?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Money Quest is designed as an ongoing learning journey. Everyone can progress at their own pace, with new content and challenges released regularly. Most children spend 15-30 minutes per session, 2-3 times per week.",
      },
    },
    {
      "@type": "Question",
      name: "Can parents track their child's progress?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! Parents have access to a comprehensive dashboard showing their child's progress, completed lessons, skills mastered, and areas for improvement. You'll receive regular updates on your child's financial literacy journey.",
      },
    },
    {
      "@type": "Question",
      name: "Is Money Quest available on mobile devices?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Money Quest is fully responsive and works on all devices including smartphones, tablets, and desktop computers. We also offer dedicated iOS and Android apps for the best mobile experience.",
      },
    },
    {
      "@type": "Question",
      name: "How is Money Quest different from other financial education apps?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Money Quest combines proven educational methods with engaging gamification. Unlike traditional apps, we focus on hands-on learning through interactive adventures, real-world scenarios, and personalized feedback that keeps children motivated and engaged.",
      },
    },
  ],
};

// How-To Schema for step-by-step guides
export const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Teach Your Child Financial Literacy with Money Quest",
  description:
    "A step-by-step guide to getting started with Money Quest and teaching your child essential money management skills.",
  image: "https://www.nurtureehaven.com/hero-section-logo.png",
  totalTime: "PT30M",
  estimatedCost: {
    "@type": "MonetaryAmount",
    currency: "USD",
    value: "0",
  },
  step: [
    {
      "@type": "HowToStep",
      name: "Sign Up for Money Quest",
      text: "Create a free account on Nature Haven and set up your child's profile.",
      url: "https://www.nurtureehaven.com/#signup",
      image: "https://www.nurtureehaven.com/step1.png",
    },
    {
      "@type": "HowToStep",
      name: "Choose Your Child's Avatar",
      text: "Let your child select their favorite avatar to personalize their learning experience.",
      url: "https://www.nurtureehaven.com/",
      image: "https://www.nurtureehaven.com/step2.png",
    },
    {
      "@type": "HowToStep",
      name: "Start the First Quest",
      text: "Begin with the introductory quest that teaches basic money concepts in a fun, interactive way.",
      url: "https://www.nurtureehaven.com/#money-quest",
      image: "https://www.nurtureehaven.com/step3.png",
    },
    {
      "@type": "HowToStep",
      name: "Track Progress",
      text: "Monitor your child's learning journey through the parent dashboard and celebrate their achievements.",
      url: "https://www.nurtureehaven.com/#progress",
      image: "https://www.nurtureehaven.com/step4.png",
    },
  ],
};

// Review Schema for social proof
export const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Money Quest by Nature Haven",
  description: "Gamified financial literacy platform for children",
  brand: {
    "@type": "Brand",
    name: "Nature Haven",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "1250",
    bestRating: "5",
    worstRating: "1",
  },
  review: [
    {
      "@type": "Review",
      author: {
        "@type": "Person",
        name: "Sarah Johnson",
      },
      datePublished: "2025-11-15",
      reviewBody:
        "My 8-year-old loves Money Quest! She's learning about saving and budgeting while having fun. Highly recommend!",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
    },
    {
      "@type": "Review",
      author: {
        "@type": "Person",
        name: "Michael Chen",
      },
      datePublished: "2025-11-20",
      reviewBody:
        "Finally, a financial education app that keeps kids engaged. My son asks to play Money Quest every day!",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
    },
  ],
};

// Breadcrumb Schema for navigation
export const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.nurtureehaven.com/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Money Quest",
      item: "https://www.nurtureehaven.com/#about",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Money Quest",
      item: "https://www.nurtureehaven.com/#pricing",
    },
  ],
};  

// Export all schemas
export const allSchemas = {
  faq: faqSchema,
  howTo: howToSchema,
  review: reviewSchema,
  breadcrumb: breadcrumbSchema,
};
