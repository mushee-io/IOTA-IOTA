"use client";

import { useMemo, useState } from "react";
import {
  ArrowRight,
  BadgeCheck,
  Check,
  CheckCircle2,
  CircleDot,
  Flame,
  Gavel,
  Globe,
  Grid2X2,
  Hash,
  Hexagon,
  Lock,
  Radar,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Zap,
} from "lucide-react";
import { DemoButton, MetricCard, MiniBar, gradientText, panel, pill, softPanel } from "@/components/demo/atoms";
import type { ActionState } from "@/components/demo/types";
import {
  analyticsStats,
  builders,
  committees,
  dashboardSummary,
  gatedSurfaces,
  hackathonBlocks,
  pages,
  premiumBullets,
  reasonsCommitteesLikeThis,
  reputationBlocks,
  statCards,
} from "@/lib/demo-data";
import { buildDemoActions } from "@/lib/demo-actions";

export default function Page() {
  const dashboardPages = pages.filter((item) => item !== "Prelanding");

  const [page, setPage] = useState("Home");
  const [state, setState] = useState<ActionState>({
    walletConnected: false,
    network: "mainnet",
    passportCreated: false,
    did: "did:iota:main:builder-passport:0x00f9b1",
    selectedBuilder: "Innocent",
    selectedCommittee: "Open Source Committee",
    credentialCount: 12,
    badgeCount: 9,
    notarizedBundles: 28,
    verifiedProofs: 82,
    grantSubmissions: 17,
    hackathonEntries: 24,
    mainnetUnlocked: false,
    riskScore: 12,
    performance: 94,
    matchScore: 91,
    actions: [
      "System ready. Premium preview environment loaded.",
      "IOTA Builder Passport workspace prepared.",
    ],
  });

  const currentBuilder = builders.find((b) => b.id === state.selectedBuilder) ?? builders[0];
  const currentCommittee =
    committees.find((c) => c.id === state.selectedCommittee) ?? committees[0];

  const demos = useMemo(() => buildDemoActions(state), [state]);
  const pageDemos = demos.filter((d) => d.page === page);
  const completedDemoCount = Math.max(0, state.actions.length - 2);

  return (
    <div className="min-h-screen bg-hero-fade text-zinc-950">
      <div className="mx-auto max-w-[1600px] px-4 py-4 sm:px-6 lg:px-8">
        <div className={`${panel} overflow-hidden`}>
          <div className="border-b border-white/70 bg-black px-5 py-4 text-white sm:px-8">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/15 bg-white/10 shadow-[0_0_40px_rgba(255,255,255,0.08)]">
                  <Hexagon className="h-6 w-6 text-pink-300" />
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-[0.32em] text-pink-300">
                    Europe Global Incorporated
                  </div>
                  <div className="mt-1 text-xl font-semibold">IOTA Builder Passport</div>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-medium text-white/90">
                  YC-grade demo structure
                </span>
                <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-medium text-white/90">
                  White + pink product core
                </span>
                <span className="rounded-full border border-pink-400/20 bg-pink-400/15 px-3 py-1 text-xs font-medium text-pink-100">
                  Prelanding in black + white
                </span>
              </div>
            </div>
          </div>

          <div className="grid min-h-[92vh] grid-cols-1 xl:grid-cols-[260px_minmax(0,1fr)_360px]">
            <aside className="border-r border-pink-100 bg-white/70 p-4 backdrop-blur-xl">
              <div className="mb-4 rounded-[28px] border border-zinc-200 bg-black p-4 text-white shadow-elite">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-[0.28em] text-zinc-400">
                    Dashboard
                  </span>
                  <Sparkles className="h-4 w-4 text-pink-300" />
                </div>
                <div className="mt-4 text-2xl font-semibold leading-tight">
                  White and pink product core.
                </div>
                <div className="mt-3 text-sm text-zinc-300">
                  Public landing now lives on the homepage. This route is the working product demo.
                </div>
              </div>

              <div className="space-y-2">
                {dashboardPages.map((item) => (
                  <button
                    key={item}
                    onClick={() => setPage(item)}
                    className={`flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left transition ${
                      page === item
                        ? "bg-gradient-to-r from-zinc-900 to-pink-700 text-white shadow-lg"
                        : "border border-transparent bg-white text-zinc-700 hover:border-pink-200 hover:bg-pink-50/70"
                    }`}
                  >
                    <span className="text-sm font-medium">{item}</span>
                    <CircleDot
                      className={`h-4 w-4 ${page === item ? "text-pink-200" : "text-zinc-300"}`}
                    />
                  </button>
                ))}
              </div>

              <div className={`${softPanel} mt-4 p-4`}>
                <div className="mb-3 flex items-center justify-between">
                  <div>
                    <div className="text-xs uppercase tracking-[0.26em] text-pink-500">
                      Live Status
                    </div>
                    <div className="mt-1 text-lg font-semibold text-zinc-950">
                      Execution meter
                    </div>
                  </div>
                  <Zap className="h-5 w-5 text-pink-500" />
                </div>
                <div className="space-y-4">
                  <MiniBar value={state.performance} label="Performance" />
                  <MiniBar value={100 - state.riskScore} label="Safety" />
                  <MiniBar value={state.matchScore} label="Committee fit" />
                </div>
              </div>

              <div className={`${softPanel} mt-4 p-4`}>
                <div className="text-xs uppercase tracking-[0.26em] text-pink-500">
                  Demo Inventory
                </div>
                <div className="mt-2 text-3xl font-semibold">{demos.length}</div>
                <div className="text-sm text-zinc-500">
                  Interactive demo actions built into the prototype.
                </div>
                <div className="mt-4 flex items-center gap-2 text-sm text-zinc-600">
                  <Check className="h-4 w-4 text-pink-500" />
                  <span>{completedDemoCount} actions executed</span>
                </div>
              </div>
            </aside>

            <main className="overflow-y-auto p-4 sm:p-6 lg:p-8">
              {

                <section className="space-y-6">
                  <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                    <div>
                      <span className={pill}>IOTA Builder Passport / {page}</span>
                      <h2 className={`mt-4 text-4xl font-semibold sm:text-5xl ${gradientText}`}>
                        {page}
                      </h2>
                      <p className="mt-3 max-w-3xl text-base text-zinc-600 sm:text-lg">
                        A premium builder reputation and submission platform built around
                        identity, credentials, proof bundles, and committee-grade review
                        workflows.
                      </p>
                    </div>
                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                      {statCards.map((card) => (
                        <div
                          key={card.label}
                          className="rounded-2xl border border-pink-100 bg-white px-4 py-3 shadow-sm"
                        >
                          <div className="text-xs text-zinc-500">{card.label}</div>
                          <div className="mt-1 text-xl font-semibold text-zinc-950">
                            {card.value}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {page === "Home" && (
                    <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
                      <div className={`${panel} p-6 sm:p-8`}>
                        <div className="flex flex-wrap gap-2">
                          <span className={pill}>Trust layer</span>
                          <span className={pill}>Builder profile</span>
                          <span className={pill}>Issuer portal</span>
                          <span className={pill}>Mainnet gating</span>
                        </div>
                        <h3 className="mt-6 text-3xl font-semibold text-zinc-950 sm:text-4xl">
                          One system for grants, hackathons, workshops, and proof of shipped work.
                        </h3>
                        <p className="mt-4 max-w-3xl text-zinc-600">
                          This concept turns builder history into reusable trust primitives:
                          a passport, credentials, notarized bundles, and a reputation graph
                          that unlocks stronger access across the ecosystem.
                        </p>
                        <div className="mt-6 grid gap-4 sm:grid-cols-2">
                          {dashboardSummary.map(([title, desc]) => (
                            <div key={title} className={`${softPanel} p-5`}>
                              <div className="text-lg font-semibold text-zinc-950">{title}</div>
                              <div className="mt-2 text-sm text-zinc-600">{desc}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="space-y-6">
                        <div className={`${softPanel} p-6`}>
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="text-xs uppercase tracking-[0.26em] text-pink-500">
                                Mainnet Gate
                              </div>
                              <div className="mt-1 text-xl font-semibold">Current session</div>
                            </div>
                            <Lock className="h-5 w-5 text-pink-500" />
                          </div>
                          <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                            <div className="rounded-2xl border border-pink-100 bg-pink-50 p-4">
                              <div className="text-zinc-500">Network</div>
                              <div className="mt-1 font-semibold uppercase text-zinc-950">
                                {state.network}
                              </div>
                            </div>
                            <div className="rounded-2xl border border-pink-100 bg-pink-50 p-4">
                              <div className="text-zinc-500">Unlocked</div>
                              <div className="mt-1 font-semibold text-zinc-950">
                                {state.mainnetUnlocked ? "Yes" : "Pending"}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={`${softPanel} p-6`}>
                          <div className="text-xs uppercase tracking-[0.26em] text-pink-500">
                            Why it feels premium
                          </div>
                          <div className="mt-4 space-y-3 text-sm text-zinc-600">
                            <div className="rounded-2xl border border-zinc-100 bg-white p-4">
                              Investor-like entry page, deep product surfaces, and fast
                              interactive toggles.
                            </div>
                            <div className="rounded-2xl border border-zinc-100 bg-white p-4">
                              Designed to look like a polished trust operating system, not a
                              one-screen mockup.
                            </div>
                            <div className="rounded-2xl border border-zinc-100 bg-white p-4">
                              Enough product depth to convince reviewers the team can ship real
                              workflows.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {page === "Passport" && (
                    <div className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
                      <div className={`${panel} p-6 sm:p-8`}>
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-xs uppercase tracking-[0.26em] text-pink-500">
                              Active Builder
                            </div>
                            <div className="mt-1 text-2xl font-semibold text-zinc-950">
                              {currentBuilder.id}
                            </div>
                          </div>
                          <div className="rounded-2xl border border-pink-100 bg-pink-50 px-3 py-2 text-sm font-medium text-pink-700">
                            Score {currentBuilder.score}
                          </div>
                        </div>
                        <div className="mt-6 grid gap-4 sm:grid-cols-2">
                          <div className={`${softPanel} p-5`}>
                            <div className="text-sm text-zinc-500">Role</div>
                            <div className="mt-1 text-lg font-semibold text-zinc-950">
                              {currentBuilder.role}
                            </div>
                          </div>
                          <div className={`${softPanel} p-5`}>
                            <div className="text-sm text-zinc-500">Region</div>
                            <div className="mt-1 text-lg font-semibold text-zinc-950">
                              {currentBuilder.country}
                            </div>
                          </div>
                        </div>
                        <div className="mt-6 rounded-[28px] border border-pink-100 bg-gradient-to-br from-white to-pink-50 p-6">
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="text-xs uppercase tracking-[0.26em] text-pink-500">
                                Builder Passport DID
                              </div>
                              <div className="mt-2 break-all text-sm font-medium text-zinc-800">
                                {state.did}
                              </div>
                            </div>
                            <BadgeCheck className="h-6 w-6 text-pink-500" />
                          </div>
                          <div className="mt-4 flex flex-wrap gap-2">
                            {currentBuilder.tags.map((tag) => (
                              <span
                                key={tag}
                                className="rounded-full border border-pink-100 bg-white px-3 py-1 text-xs font-medium text-zinc-700"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="mt-6 grid gap-3 sm:grid-cols-3">
                          {currentBuilder.credentials.map((cred) => (
                            <div
                              key={cred}
                              className="rounded-2xl border border-pink-100 bg-white p-4 text-sm text-zinc-700 shadow-sm"
                            >
                              <BadgeCheck className="mb-3 h-4 w-4 text-pink-500" />
                              {cred}
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className={`${panel} p-6`}>
                        <div className="grid gap-4 sm:grid-cols-2">
                          {builders.map((builder) => (
                            <button
                              key={builder.id}
                              onClick={() =>
                                setState((s) => ({
                                  ...s,
                                  selectedBuilder: builder.id,
                                  actions: [`Builder switched to ${builder.id}.`, ...s.actions].slice(
                                    0,
                                    16,
                                  ),
                                }))
                              }
                              className={`rounded-[26px] border p-5 text-left transition ${
                                builder.id === state.selectedBuilder
                                  ? "border-pink-300 bg-pink-50 shadow-lg"
                                  : "border-zinc-200 bg-white hover:border-pink-200"
                              }`}
                            >
                              <div className="flex items-center justify-between">
                                <div className="text-lg font-semibold text-zinc-950">
                                  {builder.id}
                                </div>
                                <div className="rounded-full bg-zinc-950 px-2.5 py-1 text-xs font-medium text-white">
                                  {builder.grants} grants
                                </div>
                              </div>
                              <div className="mt-2 text-sm text-zinc-600">{builder.role}</div>
                              <div className="mt-4 flex flex-wrap gap-2">
                                {builder.tags.map((tag) => (
                                  <span
                                    key={tag}
                                    className="rounded-full border border-zinc-200 px-2.5 py-1 text-[11px] font-medium text-zinc-600"
                                  >
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {page === "Credentials" && (
                    <div className="grid gap-6 xl:grid-cols-[1fr_1fr]">
                      <div className={`${panel} p-6 sm:p-8`}>
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-xs uppercase tracking-[0.26em] text-pink-500">
                              Credential Core
                            </div>
                            <div className="mt-1 text-2xl font-semibold text-zinc-950">
                              Issue, present, verify
                            </div>
                          </div>
                          <ShieldCheck className="h-6 w-6 text-pink-500" />
                        </div>
                        <div className="mt-6 grid gap-4 sm:grid-cols-3">
                          <MetricCard
                            icon={BadgeCheck}
                            label="Issued credentials"
                            value={String(state.credentialCount)}
                            sub="builder achievements and roles"
                          />
                          <MetricCard
                            icon={ShieldCheck}
                            label="Verified proofs"
                            value={String(state.verifiedProofs)}
                            sub="presentations and claims checked"
                          />
                          <MetricCard
                            icon={Globe}
                            label="Public links"
                            value="42"
                            sub="portable credential views"
                          />
                        </div>
                      </div>
                      <div className={`${panel} p-6`}>
                        <div className="grid gap-4 sm:grid-cols-2">
                          {[
                            ["Grant milestone VC", "Milestone delivered with reviewer sign-off"],
                            ["Hackathon finalist VC", "Builder reached final judging round"],
                            ["Workshop speaker VC", "Speaker credential for education events"],
                            ["Issuer approval VC", "Authorized to issue committee badges"],
                          ].map(([t, d]) => (
                            <div key={t} className={`${softPanel} p-5`}>
                              <div className="text-lg font-semibold text-zinc-950">{t}</div>
                              <div className="mt-2 text-sm text-zinc-600">{d}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {page === "Notarization" && (
                    <div className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
                      <div className={`${panel} p-6 sm:p-8`}>
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-xs uppercase tracking-[0.26em] text-pink-500">
                              Proof Bundles
                            </div>
                            <div className="mt-1 text-2xl font-semibold text-zinc-950">
                              Notarize deliverables and timelines
                            </div>
                          </div>
                          <Hash className="h-6 w-6 text-pink-500" />
                        </div>
                        <div className="mt-6 grid gap-4 sm:grid-cols-3">
                          <MetricCard
                            icon={Hash}
                            label="Notarized bundles"
                            value={String(state.notarizedBundles)}
                            sub="hashes anchored with timestamped state"
                          />
                          <MetricCard
                            icon={CheckCircle2}
                            label="Receipts created"
                            value="112"
                            sub="downloadable proof receipts"
                          />
                          <MetricCard
                            icon={TrendingUp}
                            label="Average finality"
                            value="1.8s"
                            sub="simulated product benchmark"
                          />
                        </div>
                        <div className="mt-6 rounded-[28px] border border-pink-100 bg-pink-50/70 p-6">
                          <div className="text-sm text-zinc-500">Example milestone bundle</div>
                          <div className="mt-3 grid gap-3 sm:grid-cols-2">
                            {[
                              "GitHub commit archive",
                              "Loom walkthrough",
                              "Deployment URL",
                              "Security checklist",
                              "Committee sign-off",
                              "Budget evidence",
                            ].map((x) => (
                              <div
                                key={x}
                                className="rounded-2xl border border-pink-100 bg-white p-4 text-sm font-medium text-zinc-800"
                              >
                                {x}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className={`${panel} p-6`}>
                        <div className="text-xs uppercase tracking-[0.26em] text-pink-500">
                          Why committees like this
                        </div>
                        <div className="mt-4 space-y-3">
                          {reasonsCommitteesLikeThis.map((x) => (
                            <div
                              key={x}
                              className="flex items-center gap-3 rounded-2xl border border-zinc-100 bg-white p-4 text-sm text-zinc-700"
                            >
                              <CheckCircle2 className="h-4 w-4 text-pink-500" />
                              {x}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {page === "Review Desk" && (
                    <div className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
                      <div className={`${panel} p-6`}>
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-xs uppercase tracking-[0.26em] text-pink-500">
                              Committee Focus
                            </div>
                            <div className="mt-1 text-2xl font-semibold text-zinc-950">
                              {currentCommittee.id}
                            </div>
                          </div>
                          <Gavel className="h-6 w-6 text-pink-500" />
                        </div>
                        <div className="mt-2 text-sm text-zinc-600">{currentCommittee.focus}</div>
                        <div className="mt-6 space-y-4">
                          <MiniBar value={state.matchScore} label="Fit to committee mandate" />
                          <MiniBar value={100 - state.riskScore} label="Risk comfort" />
                          <MiniBar value={currentCommittee.score} label="Committee appetite" />
                        </div>
                        <div className="mt-6 grid gap-3 sm:grid-cols-2">
                          {committees.map((c) => (
                            <button
                              key={c.id}
                              onClick={() =>
                                setState((s) => ({
                                  ...s,
                                  selectedCommittee: c.id,
                                  actions: [`Committee focus switched to ${c.id}.`, ...s.actions].slice(
                                    0,
                                    16,
                                  ),
                                }))
                              }
                              className={`rounded-2xl border p-4 text-left transition ${
                                c.id === state.selectedCommittee
                                  ? "border-pink-300 bg-pink-50"
                                  : "border-zinc-200 bg-white hover:border-pink-200"
                              }`}
                            >
                              <div className="font-semibold text-zinc-950">{c.id}</div>
                              <div className="mt-1 text-sm text-zinc-600">{c.focus}</div>
                            </button>
                          ))}
                        </div>
                      </div>
                      <div className={`${panel} p-6 sm:p-8`}>
                        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                          <MetricCard
                            icon={TrendingUp}
                            label="Usefulness"
                            value={`${state.matchScore}/100`}
                            sub="ecosystem uplift confidence"
                          />
                          <MetricCard
                            icon={ShieldCheck}
                            label="Safety"
                            value={`${100 - state.riskScore}/100`}
                            sub="legal and reputational comfort"
                          />
                          <MetricCard
                            icon={TrendingUp}
                            label="Scale"
                            value="93/100"
                            sub="expandable across programs"
                          />
                        </div>
                        <div className="mt-6 rounded-[28px] border border-pink-100 bg-gradient-to-br from-white via-pink-50 to-white p-6">
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="text-xs uppercase tracking-[0.26em] text-pink-500">
                                Decision Snapshot
                              </div>
                              <div className="mt-1 text-xl font-semibold">
                                Submission looks execution-ready
                              </div>
                            </div>
                            <CheckCircle2 className="h-6 w-6 text-pink-500" />
                          </div>
                          <div className="mt-4 grid gap-3 sm:grid-cols-2">
                            {[
                              "Open-source proof attached",
                              "Credential trail established",
                              "Budget market check available",
                              "Proof bundle notarized",
                            ].map((x) => (
                              <div
                                key={x}
                                className="rounded-2xl border border-white bg-white/80 p-4 text-sm font-medium text-zinc-700 shadow-sm"
                              >
                                {x}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {page === "Grant Ops" && (
                    <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
                      <div className={`${panel} p-6 sm:p-8`}>
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-xs uppercase tracking-[0.26em] text-pink-500">
                              Operations Layer
                            </div>
                            <div className="mt-1 text-2xl font-semibold text-zinc-950">
                              Issuer control room
                            </div>
                          </div>
                          <Globe className="h-6 w-6 text-pink-500" />
                        </div>
                        <div className="mt-6 grid gap-4 sm:grid-cols-3">
                          <MetricCard
                            icon={Globe}
                            label="Open submissions"
                            value={String(state.grantSubmissions)}
                            sub="live builder applications"
                          />
                          <MetricCard
                            icon={BadgeCheck}
                            label="Issued badges"
                            value={String(state.badgeCount)}
                            sub="milestone and role recognition"
                          />
                          <MetricCard
                            icon={TrendingUp}
                            label="Ops endpoints"
                            value="18"
                            sub="reviewer and issuer controls"
                          />
                        </div>
                        <div className="mt-6 grid gap-4 sm:grid-cols-2">
                          {[
                            ["Issuer onboarding", "Approve orgs, committees, and event teams to issue credentials"],
                            ["Rules and gates", "Create logic for badge issuance and trust unlocks"],
                            ["Template library", "Prebuilt VCs for grants, speakers, finalists, mentors"],
                            ["API control", "Issue, verify, revoke, and query through clean workflows"],
                          ].map(([t, d]) => (
                            <div key={t} className={`${softPanel} p-5`}>
                              <div className="text-lg font-semibold text-zinc-950">{t}</div>
                              <div className="mt-2 text-sm text-zinc-600">{d}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className={`${panel} p-6`}>
                        <div className="text-xs uppercase tracking-[0.26em] text-pink-500">
                          Premium details
                        </div>
                        <div className="mt-4 space-y-3">
                          {premiumBullets.map((x) => (
                            <div key={x} className="rounded-2xl border border-zinc-100 bg-white p-4 text-sm text-zinc-700">
                              {x}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {page === "Hackathons" && (
                    <div className="grid gap-6 xl:grid-cols-[1fr_1fr]">
                      <div className={`${panel} p-6 sm:p-8`}>
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-xs uppercase tracking-[0.26em] text-pink-500">
                              Events Layer
                            </div>
                            <div className="mt-1 text-2xl font-semibold text-zinc-950">
                              Hackathons and workshops
                            </div>
                          </div>
                          <Flame className="h-6 w-6 text-pink-500" />
                        </div>
                        <div className="mt-6 grid gap-4 sm:grid-cols-3">
                          <MetricCard
                            icon={Flame}
                            label="Hackathon entries"
                            value={String(state.hackathonEntries)}
                            sub="registered in active tracks"
                          />
                          <MetricCard
                            icon={CheckCircle2}
                            label="Education flows"
                            value="14"
                            sub="learning paths and speaker trails"
                          />
                          <MetricCard
                            icon={ShieldCheck}
                            label="Mentor matches"
                            value="33"
                            sub="support distributed across teams"
                          />
                        </div>
                        <div className="mt-6 rounded-[28px] border border-pink-100 bg-pink-50/70 p-6">
                          <div className="text-xl font-semibold text-zinc-950">
                            Event-to-reputation loop
                          </div>
                          <div className="mt-3 text-sm text-zinc-600">
                            Build once, then let every hackathon and workshop contribution
                            strengthen the builder’s portable passport over time.
                          </div>
                        </div>
                      </div>
                      <div className={`${panel} p-6`}>
                        <div className="grid gap-4 sm:grid-cols-2">
                          {hackathonBlocks.map(([t, d]) => (
                            <div key={t} className={`${softPanel} p-5`}>
                              <div className="text-lg font-semibold text-zinc-950">{t}</div>
                              <div className="mt-2 text-sm text-zinc-600">{d}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {page === "Analytics" && (
                    <div className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
                      <div className={`${panel} p-6 sm:p-8`}>
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-xs uppercase tracking-[0.26em] text-pink-500">
                              Trust Analytics
                            </div>
                            <div className="mt-1 text-2xl font-semibold text-zinc-950">
                              Signals, velocity, and proof history
                            </div>
                          </div>
                          <TrendingUp className="h-6 w-6 text-pink-500" />
                        </div>
                        <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                          {analyticsStats.map(([t, v]) => (
                            <div key={t} className={`${softPanel} p-5`}>
                              <div className="text-sm text-zinc-500">{t}</div>
                              <div className="mt-1 text-2xl font-semibold text-zinc-950">{v}</div>
                            </div>
                          ))}
                        </div>
                        <div className="mt-6 rounded-[28px] border border-pink-100 bg-white p-6 shadow-sm">
                          <div className="text-sm text-zinc-500">Query surfaces</div>
                          <div className="mt-4 grid gap-3 sm:grid-cols-2">
                            {[
                              "By builder",
                              "By issuer",
                              "By hackathon",
                              "By grant cohort",
                              "By proof bundle",
                              "By network state",
                            ].map((x) => (
                              <div
                                key={x}
                                className="rounded-2xl border border-zinc-100 bg-pink-50/50 p-4 text-sm font-medium text-zinc-700"
                              >
                                {x}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className={`${panel} p-6`}>
                        <div className="text-xs uppercase tracking-[0.26em] text-pink-500">
                          Performance bars
                        </div>
                        <div className="mt-4 space-y-5">
                          <MiniBar value={state.performance} label="Frontend feel" />
                          <MiniBar value={89} label="Query speed" />
                          <MiniBar value={93} label="Proof completeness" />
                          <MiniBar value={96} label="UI confidence" />
                        </div>
                      </div>
                    </div>
                  )}

                  {page === "Reputation" && (
                    <div className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
                      <div className={`${panel} p-6 sm:p-8`}>
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-xs uppercase tracking-[0.26em] text-pink-500">
                              Portable Trust
                            </div>
                            <div className="mt-1 text-2xl font-semibold text-zinc-950">
                              Builder reputation graph
                            </div>
                          </div>
                          <Globe className="h-6 w-6 text-pink-500" />
                        </div>
                        <div className="mt-6 rounded-[32px] border border-pink-100 bg-gradient-to-br from-pink-50 via-white to-white p-8">
                          <div className="grid gap-6 sm:grid-cols-3">
                            {[
                              ["Identity depth", "92"],
                              ["Credential trust", "96"],
                              ["Review confidence", "91"],
                            ].map(([t, v]) => (
                              <div
                                key={t}
                                className="rounded-2xl border border-white bg-white/80 p-5 text-center shadow-sm"
                              >
                                <div className="text-3xl font-semibold text-zinc-950">{v}</div>
                                <div className="mt-1 text-sm text-zinc-500">{t}</div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className={`${panel} p-6`}>
                        <div className="grid gap-4 sm:grid-cols-2">
                          {reputationBlocks.map(([t, d]) => (
                            <div key={t} className={`${softPanel} p-5`}>
                              <div className="text-lg font-semibold text-zinc-950">{t}</div>
                              <div className="mt-2 text-sm text-zinc-600">{d}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {page === "Mainnet Access" && (
                    <div className="grid gap-6 xl:grid-cols-[1fr_1fr]">
                      <div className={`${panel} p-6 sm:p-8`}>
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-xs uppercase tracking-[0.26em] text-pink-500">
                              Access Control
                            </div>
                            <div className="mt-1 text-2xl font-semibold text-zinc-950">
                              Credential-gated mainnet experiences
                            </div>
                          </div>
                          <Lock className="h-6 w-6 text-pink-500" />
                        </div>
                        <div className="mt-6 grid gap-4 sm:grid-cols-2">
                          <div className={`${softPanel} p-5`}>
                            <div className="text-sm text-zinc-500">Current network</div>
                            <div className="mt-1 text-2xl font-semibold uppercase text-zinc-950">
                              {state.network}
                            </div>
                          </div>
                          <div className={`${softPanel} p-5`}>
                            <div className="text-sm text-zinc-500">Unlocked state</div>
                            <div className="mt-1 text-2xl font-semibold text-zinc-950">
                              {state.mainnetUnlocked ? "Access granted" : "Awaiting credential"}
                            </div>
                          </div>
                        </div>
                        <div className="mt-6 rounded-[28px] border border-pink-100 bg-pink-50/70 p-6">
                          <div className="text-lg font-semibold text-zinc-950">
                            Possible gated surfaces
                          </div>
                          <div className="mt-4 grid gap-3 sm:grid-cols-2">
                            {gatedSurfaces.map((x) => (
                              <div
                                key={x}
                                className="rounded-2xl border border-pink-100 bg-white p-4 text-sm font-medium text-zinc-700"
                              >
                                {x}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className={`${panel} p-6`}>
                        <div className="text-xs uppercase tracking-[0.26em] text-pink-500">
                          Why this is powerful
                        </div>
                        <div className="mt-4 space-y-3 text-sm text-zinc-600">
                          <div className="rounded-2xl border border-zinc-100 bg-white p-4">
                            Moves beyond anonymous wallet-only access and uses real trust state.
                          </div>
                          <div className="rounded-2xl border border-zinc-100 bg-white p-4">
                            Lets grants and events become identity-aware without giving up
                            builder portability.
                          </div>
                          <div className="rounded-2xl border border-zinc-100 bg-white p-4">
                            Creates a direct path from submission credibility to ecosystem access.
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {page === "Submitted" && (
                    <div className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
                      <div className={`${panel} p-6 sm:p-8`}>
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-xs uppercase tracking-[0.26em] text-pink-500">
                              Submission Room
                            </div>
                            <div className="mt-1 text-2xl font-semibold text-zinc-950">
                              Everything reviewers need in one surface
                            </div>
                          </div>
                          <CheckCircle2 className="h-6 w-6 text-pink-500" />
                        </div>
                        <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                          {[
                            ["Builder Passport", state.passportCreated ? "Ready" : "Pending"],
                            ["Credential Stack", `${state.credentialCount} active`],
                            ["Proof Bundles", `${state.notarizedBundles} notarized`],
                            ["Committee Match", `${state.matchScore}/100`],
                            ["Risk Readout", `${state.riskScore}/100`],
                            ["Mainnet Gate", state.mainnetUnlocked ? "Unlocked" : "Locked"],
                          ].map(([t, v]) => (
                            <div key={t} className={`${softPanel} p-5`}>
                              <div className="text-sm text-zinc-500">{t}</div>
                              <div className="mt-1 text-xl font-semibold text-zinc-950">{v}</div>
                            </div>
                          ))}
                        </div>
                        <div className="mt-6 rounded-[28px] border border-pink-100 bg-gradient-to-r from-zinc-950 via-zinc-900 to-pink-900 p-6 text-white">
                          <div className="text-xs uppercase tracking-[0.26em] text-pink-200">
                            Submitted state
                          </div>
                          <div className="mt-2 text-2xl font-semibold">
                            Premium, clear, and reviewable.
                          </div>
                          <div className="mt-3 max-w-2xl text-sm text-zinc-300">
                            The whole point of this screen is to stop reviewers from feeling
                            lost. Every trust signal is visible, linked, and easy to act on.
                          </div>
                        </div>
                      </div>
                      <div className={`${panel} p-6`}>
                        <div className="text-xs uppercase tracking-[0.26em] text-pink-500">
                          Final impression
                        </div>
                        <div className="mt-4 space-y-3">
                          {[
                            "Feels like a real trust product",
                            "Strong committee and grant fit",
                            "Many demo surfaces that actually respond",
                            "Ready to evolve into a production build",
                          ].map((x) => (
                            <div
                              key={x}
                              className="flex items-center gap-3 rounded-2xl border border-zinc-100 bg-white p-4 text-sm text-zinc-700"
                            >
                              <CheckCircle2 className="h-4 w-4 text-pink-500" />
                              {x}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  <div className={`${panel} p-6`}>
                    <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                      <div>
                        <div className="text-xs uppercase tracking-[0.26em] text-pink-500">
                          Interactive demo controls
                        </div>
                        <div className="mt-1 text-2xl font-semibold text-zinc-950">
                          {pageDemos.length ? `${pageDemos.length} actions on this page` : "Use the left menu to explore"}
                        </div>
                      </div>
                      <div className="rounded-full border border-pink-100 bg-pink-50 px-4 py-2 text-sm font-medium text-pink-700">
                        Total actions built: {demos.length}
                      </div>
                    </div>
                    <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                      {pageDemos.map((demo) => (
                        <DemoButton
                          key={demo.id}
                          label={demo.label}
                          icon={demo.icon}
                          tone={demo.tone}
                          onClick={() => demo.run(state, setState)}
                        />
                      ))}
                    </div>
                  </div>
                </section>

              }
            </main>

            <aside className="border-l border-pink-100 bg-white/70 p-4 backdrop-blur-xl">
              <div className={`${softPanel} p-5`}>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs uppercase tracking-[0.26em] text-pink-500">
                      Control Strip
                    </div>
                    <div className="mt-1 text-xl font-semibold text-zinc-950">
                      Live environment
                    </div>
                  </div>
                  <Sparkles className="h-5 w-5 text-pink-500" />
                </div>
                <div className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-1">
                  <div className="rounded-2xl border border-pink-100 bg-pink-50 p-4">
                    <div className="text-xs uppercase tracking-[0.22em] text-pink-500">Network</div>
                    <div className="mt-1 text-lg font-semibold uppercase text-zinc-950">
                      {state.network}
                    </div>
                  </div>
                  <div className="rounded-2xl border border-pink-100 bg-pink-50 p-4">
                    <div className="text-xs uppercase tracking-[0.22em] text-pink-500">Wallet</div>
                    <div className="mt-1 text-lg font-semibold text-zinc-950">
                      {state.walletConnected ? "Connected" : "Disconnected"}
                    </div>
                  </div>
                  <div className="rounded-2xl border border-pink-100 bg-pink-50 p-4">
                    <div className="text-xs uppercase tracking-[0.22em] text-pink-500">
                      Passport
                    </div>
                    <div className="mt-1 text-lg font-semibold text-zinc-950">
                      {state.passportCreated ? "Issued" : "Not created"}
                    </div>
                  </div>
                  <div className="rounded-2xl border border-pink-100 bg-pink-50 p-4">
                    <div className="text-xs uppercase tracking-[0.22em] text-pink-500">
                      Mainnet unlock
                    </div>
                    <div className="mt-1 text-lg font-semibold text-zinc-950">
                      {state.mainnetUnlocked ? "Granted" : "Awaiting proof"}
                    </div>
                  </div>
                </div>
              </div>

              <div className={`${softPanel} mt-4 p-5`}>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs uppercase tracking-[0.26em] text-pink-500">
                      Action feed
                    </div>
                    <div className="mt-1 text-xl font-semibold text-zinc-950">
                      Recent system events
                    </div>
                  </div>
                  <Radar className="h-5 w-5 text-pink-500" />
                </div>
                <div className="mt-4 space-y-3">
                  {state.actions.map((action, index) => (
                    <div
                      key={`${action}-${index}`}
                      className="rounded-2xl border border-zinc-100 bg-white p-4 text-sm text-zinc-700 shadow-sm"
                    >
                      <div className="flex items-start gap-3">
                        <div className="mt-0.5 rounded-full bg-pink-100 p-1.5 text-pink-600">
                          <CircleDot className="h-3 w-3" />
                        </div>
                        <div>{action}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className={`${softPanel} mt-4 p-5`}>
                <div className="text-xs uppercase tracking-[0.26em] text-pink-500">
                  Build cues
                </div>
                <div className="mt-4 space-y-3 text-sm text-zinc-600">
                  <div className="rounded-2xl border border-zinc-100 bg-white p-4">
                    12 page modes including a black-and-white prelanding experience.
                  </div>
                  <div className="rounded-2xl border border-zinc-100 bg-white p-4">
                    More than 30 interactive demo actions for committees, builders,
                    issuers, and events.
                  </div>
                  <div className="rounded-2xl border border-zinc-100 bg-white p-4">
                    Made to feel like a premium product deck and a working app at the same
                    time.
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
}
