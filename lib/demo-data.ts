import { BadgeCheck, Lock, TimerReset, Users } from "lucide-react";
import type { Builder, Committee, PageKey, StatCard } from "@/components/demo/types";

export const pages: PageKey[] = [
  "Prelanding",
  "Home",
  "Passport",
  "Credentials",
  "Notarization",
  "Review Desk",
  "Grant Ops",
  "Hackathons",
  "Analytics",
  "Reputation",
  "Mainnet Access",
  "Submitted",
];

export const builders: Builder[] = [
  {
    id: "Amina",
    role: "Open-source tooling builder",
    country: "UK / Europe",
    grants: 4,
    score: 94,
    credentials: ["Milestone 1 Complete", "Security Review Passed", "Workshop Speaker"],
    tags: ["IOTA Identity", "Move", "TypeScript"],
  },
  {
    id: "Mateo",
    role: "Protocol interface engineer",
    country: "Spain",
    grants: 3,
    score: 89,
    credentials: ["Hackathon Finalist", "Verified OSS Contributor", "Grant Deliverable Signed"],
    tags: ["UI", "Notarization", "TS SDK"],
  },
  {
    id: "Innocent",
    role: "Product and ecosystem lead",
    country: "United Kingdom",
    grants: 5,
    score: 96,
    credentials: ["Core Maintainer", "Issuer Approved", "Community Mentor"],
    tags: ["Builder Ops", "Identity", "Growth"],
  },
];

export const committees: Committee[] = [
  { id: "Open Source Committee", focus: "Utilities, frameworks, public goods", score: 92 },
  { id: "Education Committee", focus: "Programs, curriculum, workshops", score: 85 },
  { id: "Events Committee", focus: "Hackathons, meetups, showcases", score: 88 },
];

export const statCards: StatCard[] = [
  { label: "Grant-ready builders", value: "12,480", sub: "+18.4% month on month", icon: Users },
  { label: "Credential issuance rate", value: "98.6%", sub: "verified across workflows", icon: BadgeCheck },
  { label: "Bundle notarization latency", value: "1.8s", sub: "simulated product metric", icon: TimerReset },
  { label: "Mainnet trust unlocks", value: "7,220", sub: "gated access sessions", icon: Lock },
];

export const dashboardSummary = [
  ["Credential issuance", "VCs for milestones, speakers, reviewers, finalists"],
  ["Proof notarization", "Hash repos, Looms, docs, deliverables, and sign-offs"],
  ["Reputation trails", "Portable builder history usable across programs"],
  ["Access controls", "Mainnet features unlocked by verified trust state"],
] as const;

export const premiumBullets = [
  "Toggle issuer state",
  "Live badge issuance",
  "Review API key generation",
  "Submission workflow hooks",
];

export const reasonsCommitteesLikeThis = [
  "Clear evidence trail for every milestone",
  "Reduces subjectivity in reviews",
  "Reusable across grants and events",
  "Makes proof portable for the builder",
];

export const gatedSurfaces = [
  "Committee dashboard",
  "Issuer controls",
  "Protected event workspace",
  "Advanced builder analytics",
  "Credential minting endpoints",
  "Premium proof explorer",
];

export const hackathonBlocks = [
  ["Finalist credentials", "Awarded automatically after judging"],
  ["Mentor proofs", "Verified mentor participation and feedback logs"],
  ["Speaker badges", "Recognize event contributors across regions"],
  ["Learning pathways", "Guide new builders from workshop to grant"],
] as const;

export const analyticsStats = [
  ["Proof velocity", "147/week"],
  ["Review completion", "91%"],
  ["Revocation rate", "0.3%"],
  ["Average trust depth", "8.4"],
] as const;

export const reputationBlocks = [
  ["Sybil resistance cues", "Identity trails and issuer relationships reduce noise"],
  ["Cross-program portability", "Reputation follows the builder between events and grants"],
  ["Committee context", "Reviewers see proof, badges, and trust signals together"],
  ["Mainnet unlock logic", "Access can be tied to verified status instead of raw wallets only"],
] as const;
