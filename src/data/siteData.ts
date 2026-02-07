export const company = {
  name: "Apex Intelligence",
  tagline: "Enterprise AI Solutions",
  description:
    "We transform businesses through intelligent automation, advanced analytics, and custom AI solutions that deliver measurable results.",
  email: "hello@apexintelligence.ai",
  phone: "+1 (555) 234-5678",
  address: "450 Innovation Drive, Suite 800, San Francisco, CA 94105",
  social: {
    linkedin: "#",
    twitter: "#",
    github: "#",
  },
};

export const services = [
  {
    id: "ml-engineering",
    title: "ML Engineering",
    description:
      "Custom machine learning models designed for your specific business challenges. From predictive analytics to recommendation systems.",
    icon: "bi-cpu",
    features: [
      "Custom model development",
      "Model optimization & deployment",
      "MLOps pipeline setup",
      "Performance monitoring",
    ],
  },
  {
    id: "ai-strategy",
    title: "AI Strategy",
    description:
      "Comprehensive AI roadmaps that align with your business objectives. We identify high-impact opportunities and build implementation plans.",
    icon: "bi-compass",
    features: [
      "AI readiness assessment",
      "Technology stack evaluation",
      "ROI analysis & planning",
      "Change management support",
    ],
  },
  {
    id: "data-engineering",
    title: "Data Engineering",
    description:
      "Build robust data infrastructure that powers your AI initiatives. From data lakes to real-time processing pipelines.",
    icon: "bi-database",
    features: [
      "Data pipeline architecture",
      "ETL/ELT implementation",
      "Data quality frameworks",
      "Cloud data platforms",
    ],
  },
  {
    id: "nlp-solutions",
    title: "NLP Solutions",
    description:
      "Extract insights from unstructured text data. Document processing, sentiment analysis, and conversational AI systems.",
    icon: "bi-chat-dots",
    features: [
      "Document understanding",
      "Sentiment analysis",
      "Chatbot development",
      "Text classification",
    ],
  },
  {
    id: "computer-vision",
    title: "Computer Vision",
    description:
      "Visual intelligence for quality control, surveillance, medical imaging, and autonomous systems.",
    icon: "bi-eye",
    features: [
      "Object detection & tracking",
      "Image classification",
      "Video analytics",
      "OCR & document scanning",
    ],
  },
  {
    id: "ai-integration",
    title: "AI Integration",
    description:
      "Seamlessly integrate AI capabilities into your existing software stack. APIs, microservices, and edge deployment.",
    icon: "bi-braces",
    features: [
      "API development",
      "Microservice architecture",
      "Edge AI deployment",
      "Legacy system integration",
    ],
  },
];

export const products = [
  {
    id: "apex-analytics",
    name: "Apex Analytics",
    description:
      "Real-time business intelligence platform powered by AI. Automated insights, anomaly detection, and predictive forecasting.",
    status: "Live",
    tags: ["Analytics", "BI", "Forecasting"],
    icon: "bi-graph-up-arrow",
  },
  {
    id: "docmind",
    name: "DocMind",
    description:
      "Intelligent document processing system. Extract, classify, and route documents with 99.2% accuracy using advanced NLP.",
    status: "Live",
    tags: ["NLP", "Document AI", "Automation"],
    icon: "bi-file-earmark-text",
  },
  {
    id: "sentinel-ai",
    name: "Sentinel AI",
    description:
      "AI-powered security monitoring and threat detection. Real-time analysis of network traffic and user behavior patterns.",
    status: "Beta",
    tags: ["Security", "Monitoring", "Real-time"],
    icon: "bi-shield-check",
  },
  {
    id: "flowops",
    name: "FlowOps",
    description:
      "MLOps platform for managing the full machine learning lifecycle. Version control, experiment tracking, and automated deployment.",
    status: "Live",
    tags: ["MLOps", "DevOps", "Deployment"],
    icon: "bi-arrow-repeat",
  },
];

export const portfolio = [
  {
    id: "fintech-fraud",
    client: "Major US Bank",
    title: "Real-time Fraud Detection System",
    description:
      "Built an ML pipeline processing 50M+ transactions daily with sub-100ms latency, reducing fraud losses by 67%.",
    metrics: ["67% fraud reduction", "50M+ daily transactions", "<100ms latency"],
    tags: ["ML Engineering", "Real-time", "FinTech"],
    industry: "Financial Services",
  },
  {
    id: "healthcare-nlp",
    client: "Healthcare Network",
    title: "Clinical Document Understanding",
    description:
      "NLP system that extracts structured data from clinical notes, reducing manual data entry by 80% across 200+ facilities.",
    metrics: ["80% less manual entry", "200+ facilities", "99.1% accuracy"],
    tags: ["NLP", "Healthcare", "Document AI"],
    industry: "Healthcare",
  },
  {
    id: "retail-demand",
    client: "Global Retailer",
    title: "Demand Forecasting Platform",
    description:
      "Predictive analytics platform managing inventory across 2,000+ stores, improving forecast accuracy by 34%.",
    metrics: ["34% better forecasts", "2,000+ stores", "$12M saved annually"],
    tags: ["Forecasting", "Retail", "Analytics"],
    industry: "Retail",
  },
  {
    id: "manufacturing-cv",
    client: "Automotive Manufacturer",
    title: "Visual Quality Inspection",
    description:
      "Computer vision system detecting manufacturing defects in real-time, achieving 99.7% detection rate on production lines.",
    metrics: ["99.7% detection rate", "40% fewer defects shipped", "ROI in 4 months"],
    tags: ["Computer Vision", "Manufacturing", "Quality"],
    industry: "Manufacturing",
  },
];

export const team = [
  {
    name: "Sarah Chen",
    role: "CEO & AI Strategist",
    bio: "Former VP of AI at a Fortune 500 tech company. PhD in Machine Learning from Stanford. 15+ years driving enterprise AI transformation.",
    icon: "bi-person-circle",
  },
  {
    name: "Marcus Rodriguez",
    role: "CTO",
    bio: "Ex-Google Brain researcher. Specializes in scalable ML systems and has published 30+ papers in top-tier AI conferences.",
    icon: "bi-person-circle",
  },
  {
    name: "Dr. Aisha Patel",
    role: "Head of NLP",
    bio: "Led NLP research at a major AI lab. Expert in transformer architectures and large language models. MIT PhD.",
    icon: "bi-person-circle",
  },
  {
    name: "James O'Brien",
    role: "Head of Engineering",
    bio: "20 years building production ML systems. Previously architected data platforms processing petabytes daily at top tech companies.",
    icon: "bi-person-circle",
  },
  {
    name: "Dr. Lisa Wang",
    role: "Head of Computer Vision",
    bio: "Pioneer in medical imaging AI. Her research has been deployed in 500+ hospitals worldwide. Carnegie Mellon PhD.",
    icon: "bi-person-circle",
  },
  {
    name: "David Kim",
    role: "Head of Client Success",
    bio: "Bridges the gap between AI capability and business value. MBA from Wharton with deep expertise in digital transformation.",
    icon: "bi-person-circle",
  },
];

export const stats = [
  { value: "150+", label: "Projects Delivered" },
  { value: "98%", label: "Client Retention" },
  { value: "40+", label: "Enterprise Clients" },
  { value: "3.2x", label: "Average ROI" },
];

export const navigation = [
  { name: "Services", href: "/services" },
  { name: "Products", href: "/products" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Team", href: "/team" },
  { name: "Contact", href: "/contact" },
];
