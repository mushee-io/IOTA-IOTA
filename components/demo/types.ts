import type { LucideIcon } from "lucide-react";

export type PageKey =
  | "Prelanding"
  | "Home"
  | "Passport"
  | "Credentials"
  | "Notarization"
  | "Review Desk"
  | "Grant Ops"
  | "Hackathons"
  | "Analytics"
  | "Reputation"
  | "Mainnet Access"
  | "Submitted";

export type ActionState = {
  walletConnected: boolean;
  network: "mainnet" | "testnet";
  passportCreated: boolean;
  did: string;
  selectedBuilder: string;
  selectedCommittee: string;
  credentialCount: number;
  badgeCount: number;
  notarizedBundles: number;
  verifiedProofs: number;
  grantSubmissions: number;
  hackathonEntries: number;
  mainnetUnlocked: boolean;
  riskScore: number;
  performance: number;
  matchScore: number;
  actions: string[];
};

export type DemoAction = {
  id: string;
  label: string;
  page: PageKey;
  icon: LucideIcon;
  tone: string;
  run: (
    state: ActionState,
    setState: React.Dispatch<React.SetStateAction<ActionState>>
  ) => void;
};

export type Builder = {
  id: string;
  role: string;
  country: string;
  grants: number;
  score: number;
  credentials: string[];
  tags: string[];
};

export type Committee = {
  id: string;
  focus: string;
  score: number;
};

export type StatCard = {
  label: string;
  value: string;
  sub: string;
  icon: LucideIcon;
};
