import {
  ArrowRightLeft,
  BarChart3,
  Boxes,
  BrainCircuit,
  ClipboardCheck,
  Code2,
  FileSearch,
  GitBranch,
  GitCompareArrows,
  Layers3,
  LockKeyhole,
  Network,
  Radar,
  Route,
  ShieldCheck,
  Users,
} from "lucide-react";
import type { Plan } from "@/store/use-landing-store";

export const navItems = [
  { label: "Pipeline", href: "#pipeline" },
  { label: "Evidence", href: "#evidence" },
  { label: "API", href: "#api" },
  { label: "Pricing", href: "#pricing" },
];

export const problemRows = [
  {
    claim: "5 years Rails, no Django",
    ats: "Rejected for Django role",
    truth: "80% ready through MVC, ORM, and REST transfer",
  },
  {
    claim: "React developer",
    ats: "Accepted for React role",
    truth: "Shallow: no state management depth in real code",
  },
  {
    claim: "Python, Flask",
    ats: "Partial match for FastAPI",
    truth: "87% transfer from async patterns and ecosystem fit",
  },
  {
    claim: "Java Spring Boot",
    ats: "Rejected for Go role",
    truth: "72% ready through DI, concurrency, and service boundaries",
  },
];

export const transferExamples = [
  ["Flask", "FastAPI", "0.87", "same async patterns, same Python ecosystem"],
  ["Rails", "Django", "0.80", "MVC, ORM, REST patterns transfer cleanly"],
  ["React", "Vue", "0.75", "component model, virtual DOM, state concepts"],
  ["PostgreSQL", "MySQL", "0.88", "ACID semantics and SQL dialect overlap"],
];

export const pipelineSteps = [
  {
    icon: FileSearch,
    title: "Scan the candidate code",
    text: "Tree-sitter AST analysis detects frameworks, patterns, testing maturity, error handling, and architectural choices across repositories.",
    endpoint: "POST /api/v1/infer-capability",
  },
  {
    icon: ClipboardCheck,
    title: "Decompose the role",
    text: "The role becomes a weighted requirement vector with explicit skills, inferred skills, depth targets, and calibrated seniority.",
    endpoint: "POST /api/v1/decompose-role",
  },
  {
    icon: BarChart3,
    title: "Match, explain, and rank",
    text: "CGE scores direct fit, transfer fit, meta alignment, depth alignment, and the learning curve for every candidate.",
    endpoint: "POST /api/v1/match",
  },
];

export const scoreBreakdown = [
  { label: "Direct match", value: 40, color: "var(--teal)" },
  { label: "Transfer match", value: 30, color: "var(--amber)" },
  { label: "Meta alignment", value: 15, color: "var(--blue)" },
  { label: "Depth alignment", value: 15, color: "var(--rose)" },
];

export const apiEndpoints = [
  ["infer-capability", "Scan a code repository into a capability vector"],
  ["decompose-role", "Parse a job description into measurable requirements"],
  ["match", "Score a candidate against one role"],
  ["build-team", "Select the best N-person project team"],
  ["simulate-transition", "Estimate feasibility and weeks to upskill"],
  ["learn-path", "Find optimal learning steps between technologies"],
  ["graph/transfer", "Explain transfer between any two technologies"],
];

export const useCases = [
  {
    icon: Radar,
    title: "CV validation portal",
    text: "Turn every inbound candidate into a capability profile in seconds, with code-backed evidence for recruiters.",
  },
  {
    icon: GitCompareArrows,
    title: "Role ranking dashboard",
    text: "Parse each client role once, score the whole pool, and sort by defensible fit instead of CV keywords.",
  },
  {
    icon: Users,
    title: "Project team staffing",
    text: "Build multi-person teams that maximize collective capability coverage for full-stack delivery contracts.",
  },
  {
    icon: Route,
    title: "Bench reskilling",
    text: "Show which roles a candidate can grow into and the shortest capability path to close the gaps.",
  },
];

export const techPillars = [
  { icon: Network, label: "183 technology nodes" },
  { icon: GitBranch, label: "2,009 transfer edges" },
  { icon: Layers3, label: "6 abstraction layers" },
  { icon: Boxes, label: "15 capability domains" },
  { icon: ShieldCheck, label: "JWT, rate limits, path guards" },
  { icon: LockKeyhole, label: "Docker-ready deployment" },
];

export type PricingPlan = {
  name: Plan;
  price: string;
  caption: string;
  highlights: string[];
  featured?: boolean;
};

export const pricingPlans: PricingPlan[] = [
  {
    name: "Starter",
    price: "$299",
    caption: "For small teams validating up to 200 candidates/month",
    highlights: ["200 CV validations", "50 role decompositions", "200 candidate-role matches", "Unlimited graph reads", "Self-hosted Docker"],
  },
  {
    name: "Growth",
    price: "$999",
    caption: "For agencies matching 1,000+ candidates/month",
    highlights: ["2,000 CV validations", "500 role decompositions", "100 team builds", "Slack support", "Managed cloud option"],
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    caption: "For large outsourcing companies with dedicated pipelines",
    highlights: ["Unlimited API calls", "White-label reports", "VPC or on-prem deployment", "ATS and HRIS integrations", "Dedicated support engineer"],
  },
];

export const heroStats = [
  { label: "repo inference", value: "1-5s" },
  { label: "role parsing", value: "<50ms" },
  { label: "graph transfer", value: "<15ms" },
];

export const layerRows = [
  ["L5", "Domains", "Distributed Systems, Data Engineering, FinTech"],
  ["L4", "Paradigms", "OOP, Functional, Reactive, Actor Model, CSP"],
  ["L3", "Architectures", "Microservices, Event-Driven, Hexagonal"],
  ["L2", "Patterns", "MVC, Repository, DI, Circuit Breaker, OAuth2"],
  ["L1", "Frameworks", "Django, FastAPI, React, Kubernetes, PostgreSQL"],
  ["L0", "Languages", "Python, Java, Go, TypeScript, Rust, Kotlin"],
];

export const heroCapabilities = [
  { name: "Python", score: 95 },
  { name: "FastAPI", score: 88 },
  { name: "REST API", score: 82 },
  { name: "PostgreSQL", score: 74 },
];

export const iconSet = { BrainCircuit, Code2, ArrowRightLeft };
