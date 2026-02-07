/*
 * ============================================
 *  SITE DATA — Edit this file to update content
 * ============================================
 *
 *  All site content is centralized here so you can
 *  update text, add products, team members, or portfolio
 *  entries without touching any page code.
 */

// ─── Company Info ────────────────────────────────────────
export const company = {
  name: "Apex AI",
  tagline: "AI that works. Strategy that lasts.",
  description:
    "We help companies adopt AI with clarity — from strategy to production-ready tools. No hype, no complexity theater. Just clear thinking and reliable engineering.",
  email: "hello@apexai.com",
  calendarLink: "https://cal.com/apexai", // optional — set to "" to hide
};

// ─── Services ────────────────────────────────────────────
export const services = [
  {
    id: "consulting",
    title: "AI Consulting",
    subtitle: "From ambiguity to a clear plan.",
    description:
      "We work with leadership and technical teams to identify where AI creates real value — and where it doesn't. No generic roadmaps. Every engagement starts with your actual operations and ends with a concrete, prioritized plan.",
    deliverables: [
      "Use-case identification and prioritization",
      "AI readiness and data assessment",
      "Responsible AI adoption frameworks",
      "Workflow redesign for AI integration",
      "Build-vs-buy analysis",
      "Team upskilling and knowledge transfer",
    ],
  },
  {
    id: "development",
    title: "AI Full-Stack Development",
    subtitle: "End-to-end. From prototype to production.",
    description:
      "We design and build AI-powered applications, internal tools, and integrations. Our work covers the full stack — data pipelines, model integration, backend services, and user-facing interfaces. Everything is built to be maintained by your team.",
    deliverables: [
      "Custom AI-enabled web applications",
      "Internal tools and automation platforms",
      "LLM integration and prompt engineering",
      "Data pipelines and processing workflows",
      "API development and third-party integrations",
      "Deployment, monitoring, and handoff documentation",
    ],
  },
];

// ─── Products ────────────────────────────────────────────
// Add new products by copying the object structure below.
export const products = [
  {
    name: "Beacon",
    description:
      "An internal operations dashboard for tracking team workloads, project status, and resource allocation across departments.",
    purpose: "Centralize operational visibility for growing teams.",
    status: "Active",
    url: "",
  },
  {
    name: "DocScheduler",
    description:
      "A scheduling and intake platform for healthcare practices. Handles appointment booking, patient forms, and provider availability.",
    purpose: "Simplify patient scheduling for small to mid-size clinics.",
    status: "Active",
    url: "",
  },
  {
    name: "ContainerTrack",
    description:
      "A container tracking API that aggregates real-time shipping data from major carriers into a single, normalized interface.",
    purpose: "Give logistics teams real-time container visibility without carrier lock-in.",
    status: "Active",
    url: "",
  },
  {
    name: "CalculatorHub",
    description:
      "A collection of industry-specific calculators for sales teams and operations — ROI estimators, pricing tools, and capacity planners.",
    purpose: "Equip non-technical teams with data-driven estimation tools.",
    status: "In Development",
    url: "",
  },
];

// ─── Portfolio ────────────────────────────────────────────
// Add new case studies by copying the object structure below.
export const portfolio = [
  {
    title: "Operations Dashboard for a Growing Consultancy",
    problem:
      "A 40-person consultancy was managing projects across spreadsheets, Slack, and email. Leadership had no real-time view of team capacity or project health.",
    approach:
      "We designed and built a centralized dashboard with live project tracking, workload visualization, and automated status reporting. Integrated with their existing tools via API.",
    outcome:
      "Project visibility went from weekly manual reports to real-time. The team reduced status meetings by 60% and caught resourcing conflicts weeks earlier.",
    tags: ["Full-Stack Development", "Internal Tools", "Dashboard"],
  },
  {
    title: "AI Strategy for a Regional Healthcare Network",
    problem:
      "A healthcare network wanted to 'use AI' but had no clarity on where to start, what data they actually had, or which use cases would deliver ROI.",
    approach:
      "We ran a structured assessment: mapped their workflows, audited data readiness, and identified 12 candidate use cases. We prioritized three based on feasibility, impact, and compliance risk.",
    outcome:
      "The client launched their first AI pilot — automated intake triage — within 90 days. Two more use cases are in development with internal teams.",
    tags: ["AI Consulting", "Healthcare", "Strategy"],
  },
  {
    title: "Container Tracking API for a Logistics Platform",
    problem:
      "A freight broker was manually checking five carrier websites daily to track container status. Data was inconsistent and always lagging.",
    approach:
      "We built a unified tracking API that normalizes data from MSC, Maersk, and three regional carriers. Deployed as a lightweight service with webhook notifications.",
    outcome:
      "Tracking updates went from once-daily manual checks to real-time automated alerts. Customer inquiries about shipment status dropped by 75%.",
    tags: ["Full-Stack Development", "API", "Logistics"],
  },
];

// ─── Team ────────────────────────────────────────────────
// Add new team members by copying the object structure below.
// For photos, place images in /public/team/ and reference them as "/team/filename.jpg"
export const team = [
  {
    name: "Alex Morgan",
    role: "Founder & Lead Consultant",
    bio: "15 years in software engineering and technical leadership. Previously led engineering teams at two enterprise SaaS companies. Focuses on helping organizations cut through AI noise and build things that actually work.",
    photo: "",
  },
  {
    name: "Jordan Lee",
    role: "Senior AI Engineer",
    bio: "ML engineer with deep experience in NLP, LLM integration, and production ML systems. Built data pipelines and model serving infrastructure for fintech and healthcare clients.",
    photo: "",
  },
  {
    name: "Sam Rivera",
    role: "Full-Stack Developer",
    bio: "Full-stack developer specializing in React, Node.js, and Python. Builds the applications and interfaces that make AI accessible to end users. Strong focus on maintainability and clean architecture.",
    photo: "",
  },
];
