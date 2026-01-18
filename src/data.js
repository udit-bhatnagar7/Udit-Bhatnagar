/**
 * Portfolio Content Configuration
 * --------------------------------
 * This file centralizes all content used across the portfolio:
 * - Personal info (hero & about)
 * - Skills, services, process, experience, SEO highlights
 * - Case studies & project grid
 * - Testimonials
 *
 * Use this as the single source of truth for all display text
 * so the UI components remain clean, presentational, and reusable.
 */

//
// ──────────────────────────────────────────────────────────────
//   HERO / ABOUT / BASIC PROFILE
// ──────────────────────────────────────────────────────────────
//

/**
 * Basic personal information used in:
 * - Hero section
 * - Contact section
 * - SEO / meta info (optionally)
 */
export const personalInfo = {
  name: "Udit Bhatnagar",

  // Short positioning statement for hero section / page title
  tagline: "UI/UX and Web Designer with 3+ years of experience.",

  // Use a real number here in production
  phone: "+91 98765 43210",

  // Primary email for contact CTAs
  email: "hello@udit.dev",

  // Public LinkedIn profile link
  linkedin: "https://www.linkedin.com/in/uditbhatnagar",

  // Profile / portrait image used in hero or about section
  photoUrl: "/images/hero-profile.jpg",
};

/**
 * Long-form "About" copy displayed in About section.
 * Keeps main description and some personality-related info separate.
 */
export const aboutContent = {
  description: `I am a UI/UX & Web Designer focused on building meaningful digital experiences.
I blend creativity with strategy and modern technologies.`,

  personal: `Outside of design, I enjoy exploring photography, tech innovations,
and finding inspiration in everyday life.`,
};

/**
 * Education timeline / credentials.
 * Can be mapped as a vertical timeline or simple list.
 */
export const educationData = [
  {
    degree: "Bachelor of Computer Applications",
    institution: "Your University Name",
    year: "2022",
  },
  {
    degree: "Higher Secondary Education",
    institution: "Your School Name",
    year: "2019",
  },
];

/**
 * Spoken and professional languages.
 * Can be rendered as badges, tags, or a simple list.
 */
export const languages = ["English", "Hindi", "Punjabi"];

/**
 * Hobbies / interests outside of work.
 * Great for a more human 'About' section.
 */
export const hobbies = ["Photography", "Designing", "Reading", "Traveling"];

//
// ──────────────────────────────────────────────────────────────
//   SKILLS & SERVICES
// ──────────────────────────────────────────────────────────────
//

/**
 * Skills grouped into logical categories.
 * Each group has a title and a list of bullet points.
 * Can be rendered as cards / accordions / multi-column lists.
 */
export const skillsData = [
  {
    title: "UI/UX Design",
    skills: [
      "UI/UX Design",
      "User Research & Personas",
      "User Flows & IA",
      "Wireframing & Prototyping",
      "Interaction Design",
      "Visual Design",
      "Responsive & Mobile-First",
      "Design Systems",
    ],
  },
  {
    title: "Web & Front-End",
    skills: [
      "HTML5 & CSS3",
      "Bootstrap & Tailwind CSS",
      "jQuery Basics",
      "Landing Pages",
      "E-commerce Stores",
      "WordPress",
      "Component Libraries",
    ],
  },
  {
    title: "SEO & Performance",
    skills: [
      "Keyword Research",
      "On-Page SEO",
      "Technical SEO",
      "Content Structure",
      "Meta Tags Optimization",
      "Page Speed Improvement",
      "E-commerce SEO",
    ],
  },
  {
    title: "Graphic Design",
    skills: [
      "Branding & Logo Design",
      "Social Media Creatives",
      "Color Psychology",
      "Typography Rules",
      "Marketing Collateral",
    ],
  },
  {
    title: "Tools",
    skills: [
      "Figma",
      "Adobe Photoshop",
      "Adobe Illustrator",
      "Adobe XD",
      "Canva",
      "Google Search Console",
      "Zoho Commerce",
    ],
  },
  {
    title: "AI & Productivity",
    skills: [
      "ChatGPT",
      "UX Pilot",
      "Google AI Studio",
      "Builder.io",
      "Lovable",
      "Notion",
      "Trello",
      "ClickUp",
    ],
  },
];

/**
 * Services offered.
 * `icon` typically maps to an icon component name in the UI (e.g. Lucide/Feather icon keys).
 */
export const servicesData = [
  {
    icon: "Layout",
    title: "UI/UX Design",
    features: [
      "Wireframes & Prototypes",
      "User Flows",
      "Interaction Design",
      "Visual Design",
    ],
  },
  {
    icon: "Monitor",
    title: "Web Design",
    features: [
      "Responsive Websites",
      "Landing Pages",
      "Portfolio Websites",
      "Business Websites",
    ],
  },
  {
    icon: "ShoppingBag",
    title: "E-Commerce",
    features: [
      "Store Setup",
      "Product Management",
      "Payment Integrations",
      "Conversion Optimization",
    ],
  },
  {
    icon: "Search",
    title: "SEO Services",
    features: [
      "Keyword Research",
      "Technical SEO",
      "On-Page SEO",
      "Performance Optimization",
    ],
  },
  {
    icon: "TrendingUp",
    title: "Brand Strategy",
    features: [
      "Brand Identity",
      "Messaging & Tone",
      "Market Positioning",
      "Competitor Analysis",
    ],
  },
  {
    icon: "Palette",
    title: "Graphic Design",
    features: [
      "Branding",
      "Social Media Creatives",
      "Print Materials",
      "Advertising Banners",
    ],
  },
];

//
// ──────────────────────────────────────────────────────────────
//   CASE STUDIES (DETAILED PROJECTS)
// ──────────────────────────────────────────────────────────────
//

/**
 * Long-form case studies used for detailed project pages.
 * Each entry can be routed using `id` (e.g. /case-study/[id]).
 */
export const caseStudies = [
  {
    id: "likeme",
    featured: true,
    category: "Marketplace · Local Search",
    subtitle: "Flagship Project | Local Search & Marketplace",
    title: "LikeMe – Local Services Discovery Platform",
    tags: ["Marketplace", "Directory", "SEO", "Complex UX"],
    overview:
      "LikeMe is a local search and business directory platform. I led the end-to-end UX and UI, from information architecture to responsive web implementation.",
    role: "Lead UI/UX & Web Designer",
    imageAlt: "LikeMe local search platform UI",

    problems: [
      "Thousands of unstructured listings made browsing overwhelming.",
      "Navigation broke down as more categories and sub-categories were added.",
      "Users struggled to quickly find relevant local services.",
      "Desktop-heavy design led to poor mobile engagement.",
    ],

    solutions: [
      {
        title: "Search-First Information Architecture",
        description:
          "Redesigned the IA around search and filters with clear categorisation, tags and locality-based results.",
      },
      {
        title: "Modular Design System",
        description:
          "Created reusable cards, list patterns and navigation components for faster scaling.",
      },
      {
        title: "Mobile-First Layouts",
        description:
          "Optimised key flows like search, listing view and contact forms for small screens.",
      },
    ],

    seoStrategy: [
      {
        title: "Local SEO Structure",
        description:
          "Set up city, area and category-based pages to capture long-tail local search traffic.",
      },
      {
        title: "Content Patterns",
        description:
          "Designed listing templates that naturally included key metadata, reviews and location cues.",
      },
    ],

    impact: [
      "Improved search discoverability with clearer category pages.",
      "Increased engagement on mobile due to optimised layouts.",
      "Reduced time-to-ship new pages thanks to the design system.",
    ],

    learnings:
      "For high-data products like directories, information architecture and search experience are more important than visual decoration.",
  },

  {
    id: "naksh-carpet",
    featured: true,
    category: "Luxury E-commerce",
    subtitle: "Luxury E-Commerce Redesign",
    title: "Naksh Carpet – Premium Rug Store Experience",
    tags: ["E-commerce", "Branding", "UX UI"],
    overview:
      "Naksh Carpet is a premium rug brand. The goal was to redesign their e-commerce experience to feel high-end while keeping the journey simple for buyers.",
    role: "UI/UX Strategist",
    imageAlt: "Premium rug e-commerce layout",

    problems: [
      "Old layout felt busy and budget-focused, hurting the luxury perception.",
      "Product details were visually lost in cluttered pages.",
      "Confusing navigation caused high bounce rates, especially on mobile.",
    ],

    solutions: [
      {
        title: "Premium Visual Language",
        description:
          "Introduced a spacious, museum-style layout so individual rugs and textures could stand out.",
      },
      {
        title: "Refined Typography",
        description:
          "Used a calm serif + sans pairing to mix heritage with modern clarity.",
      },
      {
        title: "Guided Browsing Flow",
        description:
          "Reworked categories and filters around how real users shop: room type, size, style and price.",
      },
    ],

    seoStrategy: [
      {
        title: "Collection SEO",
        description:
          "Created focused collection pages (e.g. 'Hand-knotted living room rugs') targeting niche search terms.",
      },
      {
        title: "Content Storytelling",
        description:
          "Designed content blocks for material stories, care tips and origin to support long-form SEO content.",
      },
    ],

    impact: [
      "Elevated perceived brand value to match international competitors.",
      "Improved browsing experience for high-ticket products.",
      "Better alignment between brand storytelling and actual product pages.",
    ],

    learnings:
      "Luxury design is about restraint. Whitespace, type and photography must do the heavy lifting while the UX remains invisible.",
  },

  {
    id: "goldtips-hair",
    featured: true,
    category: "Zoho Commerce Store",
    subtitle: "Zoho Commerce Store Design",
    title: "GoldTips Hair – High-Converting Hair Extension Store",
    tags: ["Zoho Commerce", "Conversion", "Technical Setup"],
    overview:
      "GoldTips Hair sells premium human hair extensions. I designed and implemented a Zoho Commerce storefront focused on trust and smooth checkout.",
    role: "Web Designer & Developer",
    imageAlt: "GoldTips Hair e-commerce interface",

    problems: [
      "Products were hard to discover due to poor categorisation.",
      "Lack of trust signals led to cart abandonment.",
      "Checkout experience on mobile was long and error-prone.",
    ],

    solutions: [
      {
        title: "Discovery-Friendly Catalog",
        description:
          "Restructured the store into clear categories (Wigs, Extensions, Care) with visual cues and filters.",
      },
      {
        title: "Trust Building",
        description:
          "Highlighted reviews, guarantees, return policies and before/after imagery near key CTAs.",
      },
      {
        title: "Checkout UX",
        description:
          "Streamlined steps, clarified shipping/returns and optimised the layout for mobile thumb use.",
      },
    ],

    seoStrategy: [
      {
        title: "Product SEO",
        description:
          "Optimised titles and descriptions for long-tail hair and wig keywords using AI-assisted copy.",
      },
      {
        title: "Technical Setup",
        description:
          "Configured canonical tags and basic on-page technical SEO within Zoho Commerce.",
      },
    ],

    impact: [
      "Launched a fully functional store with a smoother mobile checkout.",
      "Reduced customer queries around product details and shipping.",
      "Achieved early keyword rankings in a competitive niche.",
    ],

    learnings:
      "Working with platform constraints (Zoho) forced creative problem-solving. Focusing on UX around the checkout has an outsized impact on conversions.",
  },

  {
    id: "zauco-website",
    featured: true,
    category: "Corporate Website",
    subtitle: "Corporate UI Refresh",
    title: "Zauco Website – Clearer B2B Storytelling",
    tags: ["Corporate", "B2B", "Redesign"],
    overview:
      "Zauco needed a refreshed corporate site that communicated their B2B value clearly, with better hierarchy and modern visuals.",
    role: "UI Designer",
    imageAlt: "Corporate website hero section",

    problems: [
      "Text-heavy pages with little visual hierarchy made it hard to scan.",
      "Inconsistent branding reduced trust and recall.",
      "Weak calls-to-action led to low enquiry volume.",
    ],

    solutions: [
      {
        title: "Content Hierarchy",
        description:
          "Defined a clear typographic scale and section pattern to guide the eye through complex information.",
      },
      {
        title: "Modern Visual System",
        description:
          "Introduced a more tech-forward palette and card-based layout to feel current and credible.",
      },
      {
        title: "Focused CTAs",
        description:
          "Placed strong, repeated enquiry CTAs aligned with the main business goals.",
      },
    ],

    seoStrategy: [
      {
        title: "On-Page Optimisation",
        description:
          "Refined meta titles, headings and internal linking for key service pages.",
      },
      {
        title: "Internal Linking",
        description:
          "Connected related services and case studies to support topical authority.",
      },
    ],

    impact: [
      "Delivered a clearer digital presence aligned with the company’s positioning.",
      "Improved readability and scanning of complex B2B content.",
      "Helped create a more focused enquiry-driven site structure.",
    ],

    learnings:
      "Content structure is king. Good UI for B2B is about turning dense text into clear, scannable chunks.",
  },
];

//
// ──────────────────────────────────────────────────────────────
//   PROJECT GRID / HIGHLIGHTS
// ──────────────────────────────────────────────────────────────
//

/**
 * Short-form project cards for use in:
 * - Project grid section
 * - Home highlights
 * Some entries map directly to case studies by `id`.
 */
export const creativeWorkData = [
  {
    id: "likeme",
    title: "LikeMe (likeme.co.in)",
    category: "UI/UX & Web",
    description:
      "Local search engine and directory platform with modular design system and mega-menu navigation.",
    tags: ["Figma", "HTML", "Bootstrap", "jQuery"],
    thumbnail: "/images/projects/likeme.jpg",
    link: "https://likeme.co.in",
  },
  {
    id: "hot-property-bazaar",
    title: "Hot Property Bazaar",
    category: "Real Estate Website",
    description:
      "Real-estate listing platform with visual cards, filters and location-aware search.",
    tags: ["Figma", "Bootstrap", "CSS"],
    thumbnail: "/images/projects/hot-property-bazaar.jpg",
    link: "https://hotpropertybazaar.com",
  },
  {
    id: "hot-property-bazaar-app",
    title: "Hot Property Bazaar App",
    category: "Mobile UX/UI",
    description:
      "Mobile app UI for browsing, saving and enquiring about properties on the go.",
    tags: ["Figma", "Mobile UX"],
    thumbnail: "/images/projects/hot-property-bazaar-app.jpg",
  },
  {
    id: "pragati-crm",
    title: "Pragati CRM",
    category: "SaaS / Dashboard",
    description:
      "Custom CRM interface with widget-based dashboards for sales teams.",
    tags: ["Figma", "Design System"],
    thumbnail: "/images/projects/pragati-crm.jpg",
    link: "https://pragati.likeme.co.in",
  },
  {
    id: "hrm-software",
    title: "HRM Software",
    category: "Web App",
    description:
      "HR management portal UI with employee tracking, leave flows and approvals.",
    tags: ["Figma", "Bootstrap", "Web App"],
    thumbnail: "/images/projects/hrm-software.jpg",
    link: "https://hrmsoftware.in",
  },
  {
    id: "vikasa",
    title: "Vikasa (vikasa.com)",
    category: "Corporate Website",
    description:
      "Corporate website for a large-scale organisation, designed in Figma and implemented in WordPress.",
    tags: ["Figma", "WordPress"],
    thumbnail: "/images/projects/vikasa.jpg",
    link: "https://vikasa.com",
  },
  {
    id: "thaiger-deals",
    title: "The Thaiger Deals (App)",
    category: "App UI",
    description:
      "Deals and discounts mobile app with offer cards and integrated wallet flows.",
    tags: ["Figma", "Mobile UI"],
    thumbnail: "/images/projects/thaiger-deals.jpg",
  },
  {
    id: "thaiger-property",
    title: "The Thaiger Property",
    category: "Property Website",
    description:
      "Property discovery site with clean, brand-aligned layouts and listing cards.",
    tags: ["Figma", "UI Design"],
    thumbnail: "/images/projects/thaiger-property.jpg",
  },
  {
    id: "thaiger-news",
    title: "The Thaiger News",
    category: "Content Platform",
    description:
      "News portal UI focused on readability, article hierarchy and ad-friendly layouts.",
    tags: ["Photoshop", "Content UI"],
    thumbnail: "/images/projects/thaiger-news.jpg",
  },
  {
    id: "naksh-carpet",
    title: "Naksh Carpet",
    category: "Luxury E-commerce",
    description:
      "Premium rug store redesign with high-end visual language and improved browsing.",
    tags: ["UX", "UI", "E-commerce"],
    thumbnail: "/images/projects/naksh-carpet.jpg",
  },
  {
    id: "goldtips-hair",
    title: "GoldTips Hair",
    category: "Zoho Commerce",
    description:
      "High-converting Zoho Commerce store for premium hair extensions.",
    tags: ["Zoho", "Web Design"],
    thumbnail: "/images/projects/goldtips-hair.jpg",
  },
  {
    id: "zauco-website",
    title: "Zauco Website",
    category: "Corporate Website",
    description:
      "Corporate UI refresh with clearer content hierarchy and enquiry-driven layout.",
    tags: ["UI", "Corporate"],
    thumbnail: "/images/projects/zauco-website.jpg",
  },
];

//
// ──────────────────────────────────────────────────────────────
//   EXPERIENCE / TIMELINE
// ──────────────────────────────────────────────────────────────
//

/**
 * Work experience timeline.
 * Can be rendered as cards, vertical timeline, or tabs.
 */
export const experienceData = [
  {
    role: "UI/UX & Web Designer (Freelance)",
    company: "Self-employed",
    duration: "2023 - Present",
    description: [
      "Designing UI/UX for businesses and personal brands.",
      "Building websites using no-code platforms.",
      "Creating SEO optimized designs for better ranking.",
      "Collaborating directly with clients from multiple industries.",
    ],
    tools: ["Figma", "Webflow", "WordPress", "Wix", "SEO Tools"],
  },
  {
    role: "UI/UX Designer",
    company: "ABC Agency",
    duration: "2021 - 2023",
    description: [
      "Designed responsive web interfaces.",
      "Improved conversion through UX audits.",
      "Collaborated with dev teams to implement design systems.",
    ],
    tools: ["Figma", "Notion", "Jira"],
  },
  {
    role: "Web Designer",
    company: "Freelance",
    duration: "2019 - 2021",
    description: [
      "Created landing pages and ecommerce stores.",
      "Developed brand identities for small businesses.",
    ],
    tools: ["WordPress", "Photoshop"],
  },
];

//
// ──────────────────────────────────────────────────────────────
//   PROCESS / APPROACH
// ──────────────────────────────────────────────────────────────
//

/**
 * Design process steps.
 * Usually shown as a 3–4 step process section.
 */
export const processData = [
  {
    number: "01",
    title: "Research",
    description:
      "Understanding business goals, user needs, and market environment.",
  },
  {
    number: "02",
    title: "Wireframing",
    description: "Structuring the experience and defining content hierarchy.",
  },
  {
    number: "03",
    title: "Visual Design",
    description:
      "Crafting polished UI with a strong focus on clarity and emotion.",
  },
];

//
// ──────────────────────────────────────────────────────────────
//   SEO HIGHLIGHTS / METRICS
// ──────────────────────────────────────────────────────────────
//

/**
 * SEO & performance achievements.
 * Great for a metrics / stats section.
 */
export const seoHighlightsData = [
  {
    label: "Organic Traffic Boost",
    value: "+120%",
    description:
      "Achieved through optimized structure, improved UX, and SEO-focused content.",
  },
  {
    label: "Page Load Improvement",
    value: "1.2s",
    description:
      "Reduced load time by optimizing assets and improving CLS and LCP scores.",
  },
  {
    label: "Higher Search Visibility",
    value: "+60%",
    description:
      "Improved ranking across key industry terms with targeted optimizations.",
  },
  {
    label: "Bounce Rate Reduction",
    value: "-35%",
    description:
      "Enhanced user flow and clarity increased engagement and retention.",
  },
];

//
// ──────────────────────────────────────────────────────────────
//   TESTIMONIALS / SOCIAL PROOF
// ──────────────────────────────────────────────────────────────
//

/**
 * Testimonials used in the Testimonials / Social Proof section.
 * Can be rotated in a carousel or grid.
 */
export const testimonialsData = [
  {
    name: "Amit Verma",
    role: "Founder",
    company: "BrandLabs",
    quote:
      "Udit transformed our digital presence with UI that not only looks great but converts better.",
  },
  {
    name: "Sara Kapoor",
    role: "Marketing Manager",
    company: "GrowthHive",
    quote:
      "His SEO-focused design approach improved our search ranking and user engagement.",
  },
  {
    name: "Rahul Mehta",
    role: "Product Lead",
    company: "",
    quote:
      "Incredible attention to detail. His prototypes helped us speed up development significantly.",
  },

  // Additional testimonials for volume / variety
  {
    name: "Ananya Sharma",
    role: "CEO",
    company: "BlueOrbit",
    quote:
      "Loved the UX clarity and design language. Our bounce rate dropped within weeks.",
  },
  {
    name: "Karan Singh",
    role: "Head of Product",
    company: "TechNova",
    quote:
      "He brought a strategic mindset to design, not just aesthetics. Huge value addition!",
  },
  {
    name: "Priya Nair",
    role: "Design Director",
    company: "PixelMint",
    quote:
      "His prototypes were so precise our dev cycle became faster and more accurate.",
  },
  {
    name: "Vikas Gupta",
    role: "CTO",
    company: "CloudShift",
    quote:
      "Exceptional understanding of UI systems and interaction flows.",
  },
  {
    name: "Meera Joshi",
    role: "Operations Head",
    company: "BizNest",
    quote:
      "A smooth experience working together. Very proactive and professional.",
  },
  {
    name: "Rohit Sharma",
    role: "Founder",
    company: "AdBoost",
    quote:
      "The conversion focused redesign doubled our lead submissions.",
  },
  {
    name: "Neha Rao",
    role: "Marketing Lead",
    company: "GrowthEdge",
    quote:
      "He thinks beyond design-helps shape messaging and brand feel.",
  },
  {
    name: "Tarun Desai",
    role: "Product Manager",
    company: "StreamSync",
    quote:
      "Delivered exactly what we imagined, even under tight timelines.",
  },
  {
    name: "Simran Kaur",
    role: "Brand Manager",
    company: "FreshLeaf",
    quote:
      "His design language immediately elevated our brand perception.",
  },
  {
    name: "Ishaan Malhotra",
    role: "Head of UX",
    company: "AppWorks",
    quote:
      "Deep research-driven thinking-rare combination of creativity and logic.",
  },
];
