import {
  BadgeCheck,
  Bell,
  BookOpen,
  Briefcase,
  CheckCircle2,
  Copy,
  Database,
  FileCheck2,
  FileCode2,
  Filter,
  Fingerprint,
  Flame,
  Gavel,
  Globe,
  GraduationCap,
  Hash,
  HeartHandshake,
  Link2,
  Lock,
  Medal,
  MonitorPlay,
  Network,
  Radar,
  RefreshCw,
  ScanSearch,
  ScrollText,
  Search,
  ShieldCheck,
  Star,
  TrendingUp,
  UserRoundCheck,
  Wallet,
  WandSparkles,
  Zap,
} from "lucide-react";
import { GitHubIcon } from "@/components/demo/GitHubIcon";
import type { ActionState, DemoAction } from "@/components/demo/types";

function addAction(
  setState: React.Dispatch<React.SetStateAction<ActionState>>,
  next: Partial<ActionState>,
  message: string
) {
  setState((s) => ({ ...s, ...next, actions: [message, ...s.actions].slice(0, 16) }));
}

export function buildDemoActions(state: ActionState): DemoAction[] {
  const buttonTone = "border-zinc-200 bg-white hover:border-pink-300 hover:bg-pink-50/60";

  return [
    {
      id: "connect-wallet",
      label: state.walletConnected ? "Wallet connected" : "Connect wallet",
      page: "Passport",
      icon: Wallet,
      tone: buttonTone,
      run: (_, set) =>
        addAction(set, { walletConnected: true, performance: 95 }, "Wallet connected. Builder workspace unlocked."),
    },
    {
      id: "switch-network",
      label: `Switch to ${state.network === "mainnet" ? "testnet" : "mainnet"}`,
      page: "Mainnet Access",
      icon: Network,
      tone: buttonTone,
      run: (s, set) =>
        addAction(set, { network: s.network === "mainnet" ? "testnet" : "mainnet" }, `Network switched to ${s.network === "mainnet" ? "testnet" : "mainnet"}.`),
    },
    {
      id: "create-passport",
      label: "Create builder passport DID",
      page: "Passport",
      icon: Fingerprint,
      tone: buttonTone,
      run: (_, set) =>
        addAction(
          set,
          {
            passportCreated: true,
            did: `did:iota:${Math.random() > 0.5 ? "main" : "test"}:builder-passport:0x${Math.random().toString(16).slice(2, 8)}`,
          },
          "Builder Passport DID created and bound to profile."
        ),
    },
    {
      id: "issue-vc",
      label: "Issue verifiable credential",
      page: "Credentials",
      icon: BadgeCheck,
      tone: buttonTone,
      run: (s, set) =>
        addAction(set, { credentialCount: s.credentialCount + 1, performance: Math.min(99, s.performance + 1) }, "Credential issued: Verified Open-Source Contributor."),
    },
    {
      id: "verify-vp",
      label: "Verify presentation",
      page: "Credentials",
      icon: ShieldCheck,
      tone: buttonTone,
      run: (s, set) => addAction(set, { verifiedProofs: s.verifiedProofs + 3 }, "Verifiable presentation successfully checked."),
    },
    {
      id: "linked-vp",
      label: "Publish linked presentation",
      page: "Credentials",
      icon: Link2,
      tone: buttonTone,
      run: (_, set) => addAction(set, {}, "Linked presentation published to public builder profile."),
    },
    {
      id: "notarize-bundle",
      label: "Notarize milestone bundle",
      page: "Notarization",
      icon: Hash,
      tone: buttonTone,
      run: (s, set) => addAction(set, { notarizedBundles: s.notarizedBundles + 1 }, "Milestone bundle hashed and notarized on IOTA."),
    },
    {
      id: "generate-hash",
      label: "Generate artifact hash",
      page: "Notarization",
      icon: FileCode2,
      tone: buttonTone,
      run: (_, set) => addAction(set, {}, `Artifact hash generated: 0x${Math.random().toString(16).slice(2, 12)}`),
    },
    {
      id: "bundle-receipt",
      label: "Create notarization receipt",
      page: "Notarization",
      icon: CheckCircle2,
      tone: buttonTone,
      run: (_, set) => addAction(set, {}, "Receipt created. Proof bundle ready for committee review."),
    },
    {
      id: "open-submission",
      label: "Open new grant submission",
      page: "Grant Ops",
      icon: Briefcase,
      tone: buttonTone,
      run: (s, set) => addAction(set, { grantSubmissions: s.grantSubmissions + 1 }, "New grant submission created."),
    },
    {
      id: "score-usefulness",
      label: "Run usefulness scoring",
      page: "Review Desk",
      icon: Star,
      tone: buttonTone,
      run: (s, set) => addAction(set, { matchScore: Math.min(99, s.matchScore + 2) }, `Usefulness scoring complete: ${Math.min(99, s.matchScore + 2)}.`),
    },
    {
      id: "risk-assessment",
      label: "Run risk assessment",
      page: "Review Desk",
      icon: Radar,
      tone: buttonTone,
      run: (s, set) => addAction(set, { riskScore: Math.max(3, s.riskScore - 1) }, `Risk profile improved to ${Math.max(3, s.riskScore - 1)}.`),
    },
    {
      id: "fair-market",
      label: "Check fair market budget",
      page: "Review Desk",
      icon: TrendingUp,
      tone: buttonTone,
      run: (_, set) => addAction(set, {}, "Budget benchmark passed against market comps."),
    },
    {
      id: "approve-issuer",
      label: "Approve issuer profile",
      page: "Grant Ops",
      icon: UserRoundCheck,
      tone: buttonTone,
      run: (s, set) => addAction(set, { badgeCount: s.badgeCount + 1 }, "Issuer approved and badge authority enabled."),
    },
    {
      id: "issue-badge",
      label: "Issue milestone badge",
      page: "Grant Ops",
      icon: Medal,
      tone: buttonTone,
      run: (s, set) => addAction(set, { badgeCount: s.badgeCount + 1 }, "Badge issued: Milestone 1 Delivered."),
    },
    {
      id: "committee-note",
      label: "Log committee note",
      page: "Review Desk",
      icon: ScrollText,
      tone: buttonTone,
      run: (_, set) => addAction(set, {}, "Committee note saved to review ledger."),
    },
    {
      id: "hackathon-entry",
      label: "Register hackathon project",
      page: "Hackathons",
      icon: Flame,
      tone: buttonTone,
      run: (s, set) => addAction(set, { hackathonEntries: s.hackathonEntries + 1 }, "Hackathon entry registered."),
    },
    {
      id: "mentor-assign",
      label: "Assign mentor",
      page: "Hackathons",
      icon: HeartHandshake,
      tone: buttonTone,
      run: (_, set) => addAction(set, {}, "Mentor assigned and kickoff call created."),
    },
    {
      id: "speaker-credential",
      label: "Issue workshop speaker credential",
      page: "Hackathons",
      icon: GraduationCap,
      tone: buttonTone,
      run: (s, set) => addAction(set, { credentialCount: s.credentialCount + 1 }, "Workshop speaker credential issued."),
    },
    {
      id: "repo-check",
      label: "Check open-source repo evidence",
      page: "Submitted",
      icon: GitHubIcon as any,
      tone: buttonTone,
      run: (_, set) => addAction(set, {}, "Repository scan complete. Open-source evidence attached."),
    },
    {
      id: "license-pass",
      label: "Validate OSS license",
      page: "Submitted",
      icon: FileCheck2,
      tone: buttonTone,
      run: (_, set) => addAction(set, {}, "License validation passed: MIT-compatible workflow."),
    },
    {
      id: "performance-boost",
      label: "Optimize dashboard performance",
      page: "Analytics",
      icon: Zap,
      tone: buttonTone,
      run: (s, set) => addAction(set, { performance: Math.min(99, s.performance + 2) }, `Frontend performance boosted to ${Math.min(99, s.performance + 2)}.`),
    },
    {
      id: "mainnet-unlock",
      label: "Unlock mainnet access",
      page: "Mainnet Access",
      icon: Lock,
      tone: buttonTone,
      run: (_, set) => addAction(set, { mainnetUnlocked: true }, "Mainnet access unlocked by credential check."),
    },
    {
      id: "api-key",
      label: "Create reviewer API key",
      page: "Grant Ops",
      icon: Database,
      tone: buttonTone,
      run: (_, set) => addAction(set, {}, `Reviewer API key created: bp_${Math.random().toString(36).slice(2, 9)}`),
    },
    {
      id: "copy-did",
      label: "Copy DID reference",
      page: "Passport",
      icon: Copy,
      tone: buttonTone,
      run: (s, set) => addAction(set, {}, `Copied ${s.did} to clipboard queue.`),
    },
    {
      id: "alerts",
      label: "Trigger milestone alert",
      page: "Submitted",
      icon: Bell,
      tone: buttonTone,
      run: (_, set) => addAction(set, {}, "Milestone alert sent to builder, reviewer, and ops."),
    },
    {
      id: "proof-query",
      label: "Search proof history",
      page: "Analytics",
      icon: Search,
      tone: buttonTone,
      run: (_, set) => addAction(set, {}, "Proof history query complete. 14 matching items found."),
    },
    {
      id: "trust-graph",
      label: "Refresh trust graph",
      page: "Reputation",
      icon: Globe,
      tone: buttonTone,
      run: (_, set) => addAction(set, {}, "Trust graph recalculated across builders and issuers."),
    },
    {
      id: "sybil-check",
      label: "Run duplicate identity check",
      page: "Reputation",
      icon: ScanSearch,
      tone: buttonTone,
      run: (_, set) => addAction(set, {}, "Duplicate identity check complete. No collision detected."),
    },
    {
      id: "review-packet",
      label: "Build committee packet",
      page: "Review Desk",
      icon: Gavel,
      tone: buttonTone,
      run: (_, set) => addAction(set, {}, "Committee packet assembled with credentials, proofs, and metrics."),
    },
    {
      id: "watch-demo",
      label: "Open walkthrough mode",
      page: "Home",
      icon: MonitorPlay,
      tone: buttonTone,
      run: (_, set) => addAction(set, {}, "Walkthrough mode activated for investor-style presentation."),
    },
    {
      id: "ecosystem-map",
      label: "Toggle ecosystem map",
      page: "Home",
      icon: Globe,
      tone: buttonTone,
      run: (_, set) => addAction(set, {}, "Ecosystem map expanded with grants, events, and credential lanes."),
    },
    {
      id: "filter-committee",
      label: "Switch committee focus",
      page: "Review Desk",
      icon: Filter,
      tone: buttonTone,
      run: (s, set) => {
        const next =
          s.selectedCommittee === "Open Source Committee"
            ? "Education Committee"
            : s.selectedCommittee === "Education Committee"
              ? "Events Committee"
              : "Open Source Committee";
        addAction(set, { selectedCommittee: next }, `Committee focus switched to ${next}.`);
      },
    },
    {
      id: "switch-builder",
      label: "Switch active builder",
      page: "Passport",
      icon: RefreshCw,
      tone: buttonTone,
      run: (s, set) => {
        const next =
          s.selectedBuilder === "Innocent"
            ? "Amina"
            : s.selectedBuilder === "Amina"
              ? "Mateo"
              : "Innocent";
        addAction(set, { selectedBuilder: next }, `Builder switched to ${next}.`);
      },
    },
    {
      id: "boost-reputation",
      label: "Boost reputation score",
      page: "Reputation",
      icon: TrendingUp,
      tone: buttonTone,
      run: (s, set) => addAction(set, { matchScore: Math.min(99, s.matchScore + 1), performance: Math.min(99, s.performance + 1) }, "Reputation graph strengthened with fresh credential signals."),
    },
    {
      id: "public-profile",
      label: "Publish public profile",
      page: "Submitted",
      icon: Globe,
      tone: buttonTone,
      run: (_, set) => addAction(set, {}, "Public builder profile published."),
    },
    {
      id: "review-complete",
      label: "Mark submission as reviewed",
      page: "Submitted",
      icon: CheckCircle2,
      tone: buttonTone,
      run: (_, set) => addAction(set, {}, "Submission marked as reviewed and ready for decision."),
    },
    {
      id: "education-path",
      label: "Generate education pathway",
      page: "Hackathons",
      icon: BookOpen,
      tone: buttonTone,
      run: (_, set) => addAction(set, {}, "Learning pathway generated for new builder cohort."),
    },
    {
      id: "smart-summary",
      label: "Create smart review summary",
      page: "Submitted",
      icon: WandSparkles,
      tone: buttonTone,
      run: (_, set) => addAction(set, {}, "Smart summary created for final committee pass."),
    },
  ];
}
