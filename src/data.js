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
  phone: "+91 70270 71704",

  // Primary email for contact CTAs
  email: "work.uditbhatnagar@gmail.com",

  // Public LinkedIn profile link
  linkedin: "https://www.linkedin.com/in/udit-bhatnagar/",

  // Profile / portrait image used in hero or about section
  photoUrl: "/images/hero-profile.jpg",

  // Resume download link
  resume: "/resume.pdf",
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
    thumbnail: "/images/projects/likeme.png",

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
    thumbnail: "/images/projects/naksh-carpet.png",

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
    isCurrent: true,
    category: "Zoho Commerce Store",
    subtitle: "Zoho Commerce Store Design",
    title: "GoldTips Hair – High-Converting Hair Extension Store",
    tags: ["Zoho Commerce", "Conversion", "Technical Setup"],
    overview:
      "GoldTips Hair sells premium human hair extensions. I designed and implemented a Zoho Commerce storefront focused on trust and smooth checkout.",
    role: "Web Designer & Developer",
    imageAlt: "GoldTips Hair e-commerce interface",
    thumbnail: "/images/projects/goldtips.png",

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
    thumbnail: "/images/projects/zauco-website.png",

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
  {
    id: "mls-sofo-ai",
    featured: true,
    isCurrent: true,
    category: "Agentic AI",
    subtitle: "Agentic AI for Businesses",
    title: "Sofo AI – The Future of Companies",
    tags: ["AI", "Automation", "NLP", "PropTech"],
    overview:
      "Developed a high-performance UI/UX ecosystem that leverages custom AI models to ingest raw real-estate documents and instantly generate SEO-optimized, market-ready listings.",
    role: "Product Designer & AI Specialist",
    imageAlt: "AI intelligence dashboard",
    thumbnail: "/images/projects/mls-sofo.png",

    problems: [
      "Manual data entry from legal documents was slow and error-prone.",
      "Real estate agents spent hours formatting listings for different platforms.",
      "Lack of standardized data structure hurt search visibility.",
    ],

    solutions: [
      {
        title: "AI Extraction Engine",
        description:
          "Implemented advanced OCR and NLP processing to pull deep data from messy legal docs with 99.8% accuracy.",
      },
      {
        title: "Automated Syndication",
        description:
          "Smart workflow triggers that syndicate listings across platforms automatically, reducing latency to 140ms.",
      },
      {
        title: "Neural Core Dashboard",
        description:
          "Visualized complex ML insights in a user-friendly dashboard for real-time monitoring.",
      },
    ],

    seoStrategy: [
      {
        title: "Automated SEO",
        description:
          "AI generates SEO-optimized descriptions and meta tags automatically for every listing.",
      },
    ],

    impact: [
      "Drastically reduced listing time from hours to seconds.",
      "Improved data accuracy to 99.8%, eliminating human error.",
      "Enabled agents to focus on closing deals rather than admin work.",
    ],

    learnings:
      "Integrating AI into traditional workflows requires not just technical capability but a UX that breeds trust in the machine's output.",
    aiDetails: {
      subheadline: "The Future of PropTech.",
      subheadlineGradient: "from-blue-300 via-white to-sky-300",
      features: [
        {
          title: "Extraction",
          description:
            "Advanced OCR and NLP processing to pull deep data from messy legal docs.",
        },
        {
          title: "Automation",
          description:
            "Smart workflow triggers that syndicate listings across platforms automatically.",
        },
      ],
      stats: [
        { label: "Latency", value: "140ms", color: "text-blue-400" },
        { label: "Accuracy", value: "99.8%", color: "text-emerald-400" },
      ],
      visual: {
        label: "Neural Core v2.0",
        title: "ML Insights Engine",
        iconColor: "from-blue-500 to-sky-600",
      },
    },
  },
  {
    id: "ria-listing-manager",
    featured: true,
    isCurrent: true,
    category: "AI Workforce",
    subtitle: "Agentic AI Listing Manager",
    title: "Ria Listing Manager - Agentic MLS Assistant",
    tags: ["AI Agent", "MLS", "Automation", "PropTech"],
    overview:
      "Meet Ria - your agentic AI listing manager running the entire listing loop. Ingests documents, collaborates with sellers, and automates MLS execution.",
    role: "UX Designer & Builder",
    imageAlt: "Agentic listing manager workflow",
    thumbnail: "/images/projects/sofo-ria.png",
    problems: [
      "Coordinating listing details with sellers takes days of back-and-forth.",
      "MLS validation errors lead to listing rejections and delays.",
    ],
    solutions: [
      {
        title: "Autonomous Listing Loop",
        description:
          "Manages the listing lifecycle from intake to MLS upload without human bottleneck.",
      },
      {
        title: "Real-Time Collaboration",
        description:
          "Interactive interface that keeps sellers and agents aligned throughout the process.",
      },
    ],
    seoStrategy: [],
    impact: [
      "Reduced listing prep time by 90%.",
      "Achieved 100% compliance with local MLS regulations.",
    ],
    learnings:
      "Agentic workflows succeed when they have narrow, well-defined boundaries and clear collaboration interfaces.",
  },
  {
    id: "sofo-ai-virtual-staging",
    featured: true,
    isCurrent: true,
    category: "AI & Virtual Staging",
    subtitle: "AI-Powered Virtual Staging",
    title: "Sofo AI Virtual Staging - Immersive Space Transformation",
    tags: ["AI", "Virtual Staging", "Stable Diffusion", "PropTech"],
    overview:
      "An AI-powered tool that stage empty properties with modern furniture and styles, allowing buyers to visualize the potential of any space instantly.",
    role: "Product Designer & Frontend Developer",
    imageAlt: "AI Virtual Staging platform interface",
    thumbnail: "/images/projects/sofo-staging.png",
    problems: [
      "Manual staging is expensive and takes days to execute.",
      "Flat 2D photos fail to capture the potential of a room.",
      "Buyers struggle to visualize room layouts and decor.",
    ],
    solutions: [
      {
        title: "Generative AI Interior Design",
        description:
          "Utilized customized diffusion models to render photorealistic furniture in empty spaces based on selected themes.",
      },
      {
        title: "Instant Perspective Correction",
        description:
          "Smart geometry correction that maintains room dimensions and lighting while adding staged elements.",
      },
    ],
    seoStrategy: [],
    impact: [
      "Staged listings get 40% higher click-through rates.",
      "Reduces space visualization friction for potential home buyers.",
    ],
    learnings:
      "Generative AI needs intuitive controls (e.g. style picker, drag-and-drop masking) so users can direct the AI without technical expertise.",
  },
  {
    id: "sofo-ai-marketing",
    featured: true,
    isCurrent: true,
    category: "AI & Marketing Automation",
    subtitle: "Real Estate AI Marketing System",
    title: "Sofo AI Marketing - Automated Campaigns for Agents",
    tags: ["AI Marketing", "Automation", "SaaS", "Copywriting"],
    overview:
      "An AI-driven marketing suite for real estate agents that auto-generates high-converting ad copy, social posts, and email newsletters directly from listing data.",
    role: "UX Designer & Builder",
    imageAlt: "Real estate AI marketing campaign builder",
    thumbnail: "/images/projects/sofo-marketing.png",
    problems: [
      "Agents spend hours writing descriptions and building ads for each new property.",
      "Ad copy is often repetitive and fails to capture audience segments.",
      "Managing multi-channel marketing campaigns is too complex for busy agents.",
    ],
    solutions: [
      {
        title: "One-Click Copy Generation",
        description:
          "Generates multi-platform ad copies (Facebook, Instagram, LinkedIn) and email campaigns tailored to property highlights.",
      },
      {
        title: "Audience Target Mapping",
        description:
          "Automatically matches property types with high-intent buyer personas to tailor copy tone.",
      },
    ],
    seoStrategy: [],
    impact: [
      "Decreased campaign creation time from 4 hours to 10 seconds.",
      "Increased click-through rate on social ad campaigns by 35%.",
    ],
    learnings:
      "Real-world utility of AI lies in workflow automation. A single click generating a full marketing bundle is more valuable than standard chatbots.",
  },
  {
    id: "hot-property-bazaar",
    featured: true,
    category: "Real Estate Marketplace",
    subtitle: "Real Estate Listing Platform",
    title: "Hot Property Bazaar – Buying & Selling Simplified",
    tags: ["Real Estate", "Web App", "Marketplace"],
    overview:
      "A comprehensive real-estate listing platform designed to simplify property discovery with visual cards, advanced filters, and location-aware search.",
    role: "Lead Designer",
    imageAlt: "Real estate listing website",
    thumbnail: "/images/projects/hotproperty.png",

    problems: [
      "Users found it difficult to filter properties by specific criteria like amenities or facing.",
      "Map-based search was clunky and disconnected from list views.",
      "Property details pages were cluttered and lacked key decision-making info.",
    ],

    solutions: [
      {
        title: "Visual Search Interface",
        description:
          "Designed card-based results with prominent photos and key specs (BHK, Area) for quick scanning.",
      },
      {
        title: "Interactive Maps",
        description:
          "Integrated map view with list view, allowing users to search by drawing on the map.",
      },
      {
        title: "Lead Gen Optimization",
        description:
          "Strategically placed inquiry forms and 'Schedule Visit' CTAs to maximize conversions.",
      },
    ],

    seoStrategy: [
      {
        title: "Hyper-Local Landing Pages",
        description:
          "Generated pages for specific neighborhoods and property types to capture local intent.",
      },
    ],

    impact: [
      "Increased average session duration by 40% with better search UX.",
      "Higher lead generation conversion rate on property detail pages.",
    ],

    learnings:
      "In real estate, high-quality visuals and location context are the primary drivers of user engagement.",
  },
  {
    id: "hot-property-bazaar-app",
    featured: true,
    category: "Mobile Application",
    subtitle: "Property Search Mobile App",
    title: "Hot Property Bazaar App – Real Estate on the Go",
    tags: ["Mobile App", "iOS", "Android", "UX"],
    overview:
      "The mobile companion to the Hot Property Bazaar platform, enabling users to browse, save, and inquire about properties directly from their phones.",
    role: "Mobile UX Designer",
    imageAlt: "Real estate mobile app interface",
    thumbnail: "/images/projects/hot-property-bazaar-app.jpg",

    problems: [
      "Desktop experience didn't translate well to mobile browsers.",
      "Location-based features were underutilized on web.",
      "Push notifications for new listings were missing.",
    ],

    solutions: [
      {
        title: "Native Mobile Patterns",
        description:
          "Utilized bottom navigation and touch-friendly gestures for seamless browsing.",
      },
      {
        title: "Saved Searches & Alerts",
        description:
          "Allowed users to save search criteria and receive instant notifications for new matches.",
      },
      {
        title: "One-Tap Inquiry",
        description:
          "Implemented easy WhatsApp and Call integrations for immediate agent contact.",
      },
    ],

    seoStrategy: [
      {
        title: "App Store Optimization",
        description: "Optimized app store listing with keywords and high-quality screenshots."
      }
    ],

    impact: [
      "Significant increase in return users via push notifications.",
      "Higher engagement with location-based 'Near Me' searches.",
    ],

    learnings:
      "Mobile contexts require simplified flows. Speed and ease of contact are critical for mobile property seekers.",
  },
  {
    id: "pragati",
    featured: true,
    category: "SaaS / Dashboard",
    subtitle: "Custom CRM Interface",
    title: "Pragati CRM – Sales Team Dashboard",
    tags: ["Figma", "Design System", "Dashboard"],
    overview:
      "A custom CRM interface designed with widget-based dashboards to help sales teams track performance and manage leads efficiently.",
    role: "UI/UX Designer",
    imageAlt: "Pragati CRM Dashboard",
    thumbnail: "/images/projects/pragati.png",

    problems: [
      "Sales data was scattered across multiple spreadsheets.",
      "Team performance tracking was manual and delayed.",
      "Lack of visual insights made decision-making difficult.",
    ],

    solutions: [
      {
        title: "Unified Dashboard",
        description: "Centralized all key metrics into a single, widget-based view.",
      },
      {
        title: "Visual Reporting",
        description: "Implemented charts and graphs for instant performance analysis.",
      },
      {
        title: "Lead Management Flow",
        description: "Streamlined the process of adding and updating lead statuses.",
      },
    ],

    seoStrategy: [],
    impact: [
      "Improved data visibility for management.",
      "Reduced time spent on manual reporting.",
    ],
    learnings:
      "Designing for internal tools requires a deep understanding of the specific workflows of the team using them.",
  },
  {
    id: "darbaan",
    featured: true,
    isCurrent: true,
    category: "Security Management",
    subtitle: "Gate Management System",
    title: "Darbaan – Apartment Security Solution",
    tags: ["Mobile App", "Security", "UX"],
    overview:
      "Dimensions of security management for modern apartment complexes, focusing on visitor tracking and resident safety.",
    role: "Product Designer",
    imageAlt: "Darbaan App Interface",
    thumbnail: "/images/projects/darbaan.png",

    problems: [
      "Manual visitor logs were insecure and hard to search.",
      "Residents had no real-time notification of guests.",
      "Gate congestion during peak hours.",
    ],

    solutions: [
      {
        title: "Digital Entry Log",
        description: "Replaced paper logs with a quick digital entry system.",
      },
      {
        title: "Instant Notifications",
        description: "App alerts for residents when visitors arrive.",
      },
      {
        title: "Pre-Approval Pass",
        description: "QR code passes for expected guests to speed up entry.",
      },
    ],

    seoStrategy: [],
    impact: [
      "Enhanced security and accountability.",
      "Reduced waiting time at the gate.",
    ],
    learnings:
      "Security products need to balance strict protocols with user convenience to be adopted effectively.",
  },
  {
    id: "safe-climate-trips",
    featured: true,
    isCurrent: true,
    category: "Travel & Ecology",
    subtitle: "Eco-Friendly Travel Platform",
    title: "Safe Climate Trips",
    tags: ["Web Design", "Figma", "Eco-Friendly"],
    overview:
      "A platform dedicated to promoting eco-conscious travel experiences, helping travelers find sustainable destinations and activities.",
    role: "UI/UX Designer",
    imageAlt: "Safe Climate Trips Interface",
    thumbnail: "/images/projects/safe-climate-trips.png",

    problems: [
      "Travelers struggle to find verified eco-friendly destinations.",
      "Lack of transparency in carbon footprint data for trips.",
    ],

    solutions: [
      {
        title: "Green Filters",
        description: "Search filters specifically for sustainable accommodations and activities.",
      },
      {
        title: "Impact Visualizer",
        description: "Visual cues showing the positive environmental impact of choices.",
      },
    ],

    seoStrategy: [],
    impact: [
      "Increased awareness of sustainable travel options.",
      "Connected eco-conscious travelers with verified green businesses.",
    ],
    learnings:
      "Designing for sustainability requires making complex impact data easy to understand and actionable.",
    aiDetails: {
      subheadline: "Sustainable Travel AI.",
      subheadlineGradient: "from-emerald-300 via-white to-teal-300",
      features: [
        {
          title: "Carbon Scoring",
          description:
            "AI-driven algorithms calculate the exact carbon footprint of every trip leg.",
        },
        {
          title: "Smart Routing",
          description:
            "Suggests eco-friendly alternatives for transport and accommodation in real-time.",
        },
      ],
      stats: [
        { label: "CO2 Saved", value: "125kg", color: "text-emerald-400" },
        { label: "Accuracy", value: "95%", color: "text-teal-400" },
      ],
      visual: {
        label: "Eco-Engine v1.0",
        title: "Sustainability Core",
        iconColor: "from-emerald-500 to-teal-600",
        logoUrl: "https://www.safeclimatetrip.com/assets/SafeClimateTripLogo-sSh1H7bv.jpg",
      },
    },
  },
  {
    id: "yantra-resort",
    featured: true,
    category: "Hospitality & Travel",
    subtitle: "Luxury Resort Website",
    title: "Yantra Resort – Serenity in Nature",
    tags: ["Web Design", "Hospitality", "Booking"],
    overview:
      "A premium website for a luxury resort, focused on capturing the serene atmosphere and driving direct bookings.",
    role: "Web Designer",
    imageAlt: "Yantra Resort Homepage",
    thumbnail: "/images/projects/yantra.png",

    problems: [
      "Low direct booking numbers due to a complex reservation flow.",
      "Previous site didn't showcase the resort's premium amenities effectively.",
    ],

    solutions: [
      {
        title: "Visual Storytelling",
        description: "Immersive full-screen imagery to showcase the property's beauty.",
      },
      {
        title: "Simplified Booking",
        description: "Streamlined booking engine integration for easier reservations.",
      },
    ],

    seoStrategy: [],
    impact: [
      "Increased direct booking rate by 25%.",
      "Longer session duration on amenities pages.",
    ],
    learnings:
      "For hospitality, the digital experience must mirror the physical comfort of the resort.",
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
    thumbnail: "/images/projects/likeme.png",
    link: "https://likeme.co.in",
  },
  {
    id: "hot-property-bazaar",
    title: "Hot Property Bazaar",
    category: "Real Estate Website",
    description:
      "Real-estate listing platform with visual cards, filters and location-aware search.",
    tags: ["Figma", "Bootstrap", "CSS"],
    thumbnail: "/images/projects/hotproperty.png",
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
    thumbnail: "/images/projects/pragati.png",
    link: "https://pragati.likeme.co.in",
  },
  {
    id: "hrm-software",
    title: "HRM Software",
    category: "Web App",
    description:
      "HR management portal UI with employee tracking, leave flows and approvals.",
    tags: ["Figma", "Bootstrap", "Web App"],
    thumbnail: "/images/projects/hrms.png",
    link: "https://hrmsoftware.in",
  },
  {
    id: "vikasa",
    title: "Vikasa (vikasa.com)",
    category: "Corporate Website",
    description:
      "Corporate website for a large-scale organisation, designed in Figma and implemented in WordPress.",
    tags: ["Figma", "WordPress"],
    thumbnail: "/images/projects/vikasa.png",
    link: "https://vikasa.com",
  },
  {
    id: "thaiger-app",
    title: "The Thaiger News App",
    category: "Mobile App",
    description:
      "Redesigned news application focusing on personalization, readability, and user engagement.",
    tags: ["Figma", "Mobile UI", "UX"],
    thumbnail: "/images/projects/thaiger-app.png",
  },
  {
    id: "thaiger-deals",
    title: "The Thaiger Deals (App)",
    category: "App UI",
    description:
      "Deals and discounts mobile app with offer cards and integrated wallet flows.",
    tags: ["Figma", "Mobile UI"],
    thumbnail: "/images/projects/thaiger-deals.png",
  },
  {
    id: "thaiger-property",
    title: "The Thaiger Property",
    category: "Property Website",
    description:
      "Property discovery site with clean, brand-aligned layouts and listing cards.",
    tags: ["Figma", "UI Design"],
    thumbnail: "/images/projects/thaiger-property.png",
  },
  {
    id: "thaiger-news",
    title: "The Thaiger News",
    category: "Content Platform",
    description:
      "News portal UI focused on readability, article hierarchy and ad-friendly layouts.",
    tags: ["Photoshop", "Content UI"],
    thumbnail: "/images/projects/thaiger-news.png",
  },
  {
    id: "naksh-carpet",
    title: "Naksh Carpet",
    category: "Luxury E-commerce",
    description:
      "Premium rug store redesign with high-end visual language and improved browsing.",
    tags: ["UX", "UI", "E-commerce"],
    thumbnail: "/images/projects/naksh-carpet.png",
  },
  {
    id: "goldtips-hair",
    title: "GoldTips Hair",
    category: "Zoho Commerce",
    description:
      "High-converting Zoho Commerce store for premium hair extensions.",
    tags: ["Zoho", "Web Design"],
    thumbnail: "/images/projects/goldtips.png",
  },
  {
    id: "zauco-website",
    title: "Zauco Website",
    category: "Corporate Website",
    description:
      "Corporate UI refresh with clearer content hierarchy and enquiry-driven layout.",
    tags: ["UI", "Corporate"],
    thumbnail: "/images/projects/zauco-website.png",
  },
  {
    id: "safe-climate-trips",
    title: "Safe Climate Trips",
    category: "Web Design",
    description:
      "Eco-friendly travel platform interface focusing on green tourism and sustainable choices.",
    tags: ["Figma", "Web Design"],
    thumbnail: "/images/projects/safe-climate-trips.png",
  },
  {
    id: "yantra-resort",
    title: "Yantra Resort",
    category: "Hospitality Website",
    description:
      "Luxury resort website design focused on visual storytelling and booking conversion.",
    tags: ["Web Design", "UI"],
    thumbnail: "/images/projects/yantra.png",
  },
];

//
// ──────────────────────────────────────────────────────────────
//   FAQ
// ──────────────────────────────────────────────────────────────
//

export const faqData = [
  {
    question: "Do you only design, or also build?",
    answer: "I handle both UI/UX design and implementation. Depending on the project, I either deliver production-ready designs or build the product using modern no-code, low-code, or frontend workflows."
  },
  {
    question: "What types of projects are the best fit for you?",
    answer: "I work best with startups, founders, and small teams who care about clarity, usability, and long-term scalability—not just visuals."
  },
  {
    question: "How do you usually work with clients?",
    answer: "I start with understanding the problem, then move into UX structure, visual design, and delivery. Communication is async-first with regular check-ins."
  },
  {
    question: "Do you work with existing teams or products?",
    answer: "Yes. I frequently step into existing products to improve UX, redesign interfaces, or collaborate with in-house developers."
  },
  {
    question: "How do you price your work?",
    answer: "Pricing depends on scope and impact. I typically work on fixed-scope projects or short retainers rather than hourly contracts."
  },
  {
    question: "What projects are NOT a good fit?",
    answer: "Projects that prioritize speed over clarity, or expect heavy work without proper discovery, usually aren’t a good fit."
  }
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
      "Led end-to-end UI/UX design for businesses and personal brands across multiple industries.",
      "Designed and launched conversion-focused websites using no-code, low-code, and AI-assisted development workflows.",
      "Built ecommerce and business websites using platforms like Zoho Commerce, Webflow, WordPress, and Wix.",
      "Applied vibe coding techniques to rapidly translate ideas into functional UI using HTML, CSS, and Tailwind CSS.",
      "Improved search visibility, performance, and user engagement through SEO-optimized layouts and UX-driven design decisions.",
      "Worked directly with clients from discovery to deployment, including requirements gathering, wireframes, prototyping, and final delivery."
    ],
    tools: [
      "HTML",
      "CSS",
      "Tailwind CSS",
      "Bootstrap",
      "Figma",
      "Adobe XD",
      "Adobe Photoshop",
      "Adobe Illustrator",
      "Canva",
      "Webflow",
      "WordPress",
      "Zoho Commerce",
      "Wix",
      "Notion",
      "ClickUp",
      "Lovable",
      "Builder.io",
      "UXPilot",
      "SEO Tools",
      "ChatGPT",
      "Google AI"
    ]
  },
  {
    role: "UI/UX & Web Designer",
    company: "Likeme",
    duration: "2021 - 2023",
    description: [
      "Designed responsive and user-centric web interfaces for multiple client projects.",
      "Handled UI/UX design, website layouts, and frontend structure for brand and marketing websites.",
      "Created visual assets including logos, social media posts, and short promotional videos aligned with brand identity.",
      "Collaborated with marketing and development teams to ensure design consistency across web and social platforms.",
      "Improved user engagement through usability improvements, layout optimization, and visual hierarchy."
    ],
    tools: [
      "Figma",
      "Adobe Photoshop",
      "Adobe Illustrator",
      "Canva",
      "HTML",
      "CSS",
      "Bootstrap"
    ]
  },
  {
    role: "UI/UX Designer",
    company: "Freelance",
    duration: "2019 - 2021",
    description: [
      "Designed UI/UX and responsive websites for small businesses and product teams, with a focus on discovery, wireframing, and user flows.",
      "Built and customized WordPress sites with Elementor using mobile-first, SEO-friendly layouts.",
      "Worked on real-world projects including TheThaiger.com (news & lifestyle platform), Thaiger Deals (daily deals/e-commerce), Thaiger Property (property portal), The Thaiger mobile app, and Vikasa.com (yoga retreat).",
      "Focused on conversion-optimized landing pages, content-to-commerce flows, mobile app feed UX, and booking/schedule funnels."
    ],
    projects: [
      {
        name: "The Thaiger (News & Lifestyle)",
        summary:
          "Bilingual news and lifestyle platform with web, mobile apps, and social distribution; designed mobile-first article templates, landing pages, and social/video integrations.",
        sources: ["thethaiger.com", "thethaiger app"]
      },
      {
        name: "Thaiger Deals",
        summary:
          "Daily-deals and e-commerce vertical; designed deal discovery pages, merchant listing flows, and conversion-focused promotional layouts.",
        sources: ["thethaiger.com/thaiger-deals"]
      },
      {
        name: "Thaiger Property",
        summary:
          "Property portal with advanced listings; worked on search filters, property detail UX, and inquiry-focused CTAs.",
        sources: ["thaigerproperty.com"]
      },
      {
        name: "The Thaiger App",
        summary:
          "Android/iOS news app; designed feed layouts, onboarding flows, and push-notification UX to improve engagement.",
        sources: ["Google Play", "App Store"]
      },
      {
        name: "Vikasa",
        summary:
          "Yoga retreat website; designed retreat landing pages, program schedules, instructor profiles, and booking flows for international audiences.",
        sources: ["vikasa.com"]
      }
    ],
    tools: [
      "Figma",
      "Adobe XD",
      "Adobe Photoshop",
      "Adobe Illustrator",
      "WordPress",
      "Elementor"
    ]
  }
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
    name: "Manoj Gupta",
    role: "Founder",
    company: "Madtion",
    quote:
      "Udit's ability to turn complex design ideas into flawless, high-performing code helped us scale our digital offerings dramatically.",
  },
  {
    name: "Vijay",
    role: "Owner",
    company: "Goldtips Hair",
    quote:
      "Our online bookings increased by 40% after the redesign. The luxurious, modern interface perfectly represents our salon's high-end brand.",
  },
  {
    name: "Parshant Gupta",
    role: "Director",
    company: "Naksh Carpet",
    quote:
      "The custom e-commerce layout beautifully showcases the intricate patterns of our carpets. The user experience is smooth and premium.",
  },
  {
    name: "Parteekt Shrivastav",
    role: "Product Lead",
    company: "Sofo AI",
    quote:
      "Udit designed an incredibly intuitive dashboard for our AI real estate suite. Complex workflows now feel completely effortless.",
  },
  {
    name: "Dinesh Ahuja",
    role: "Creative Director",
    company: "Likeme",
    quote:
      "Udit assisted our design team in creating UI layouts and maintaining our internal design systems.",
  },
  {
    name: "Manoj Gupta",
    role: "Founder",
    company: "Darbaan",
    quote:
      "The security management interface is clean, responsive, and easy to use for our gate staff. Exceptional UX design.",
  },
];


//
// ──────────────────────────────────────────────────────────────
//   GRAPHIC DESIGN GALLERY
// ──────────────────────────────────────────────────────────────
//

/**
 * Visual design work for the masonry gallery:
 * - Logos
 * - YouTube Thumbnails
 * - Flyers
 * - Social Media Graphics
 *
 * Each item has a title, category, and image URL.
 */
export const graphicDesignData = [
  {
    id: "g1",
    title: "Brand Identity Concept",
    category: "Logo Design",
    type: "logo",
    image: "https://picsum.photos/seed/logo1/600/600",
  },
  {
    id: "g2",
    title: "Tech Review Thumbnail",
    category: "YouTube Thumbnail",
    type: "thumbnail",
    image: "https://picsum.photos/seed/thumb1/800/450",
  },
  {
    id: "g3",
    title: "Event Flyer 2024",
    category: "Flyer Design",
    type: "flyer",
    image: "https://picsum.photos/seed/flyer1/600/800",
  },
  {
    id: "g4",
    title: "EcoStartup Logo",
    category: "Logo Design",
    type: "logo",
    image: "https://picsum.photos/seed/logo2/600/600",
  },
  {
    id: "g5",
    title: "Gaming Channel Art",
    category: "Social Media",
    type: "social",
    image: "https://picsum.photos/seed/social1/800/800",
  },
  {
    id: "g6",
    title: "Product Launch Poster",
    category: "Flyer Design",
    type: "flyer",
    image: "https://picsum.photos/seed/flyer2/600/800",
  },
  {
    id: "g7",
    title: "Minimalist Monogram",
    category: "Logo Design",
    type: "logo",
    image: "https://picsum.photos/seed/logo3/600/600",
  },
  {
    id: "g8",
    title: "Vlog Thumbnail",
    category: "YouTube Thumbnail",
    type: "thumbnail",
    image: "https://picsum.photos/seed/thumb2/800/450",
  },
  {
    id: "g9",
    title: "Instagram Campaign",
    category: "Social Media",
    type: "social",
    image: "https://picsum.photos/seed/social2/800/1000",
  },
  {
    id: "g10",
    title: "Corporate Brochure",
    category: "Print Design",
    type: "flyer",
    image: "https://picsum.photos/seed/print1/600/800",
  },
  {
    id: "g11",
    title: "Podcast Cover Art",
    category: "Social Media",
    type: "social",
    image: "https://picsum.photos/seed/social3/800/800",
  },
  {
    id: "g12",
    title: "Festival Banner",
    category: "Web Graphics",
    type: "social",
    image: "https://picsum.photos/seed/web1/1200/600",
  },
];
