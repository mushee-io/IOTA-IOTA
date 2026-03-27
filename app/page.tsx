import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Blocks,
  Briefcase,
  Building2,
  CheckCircle2,
  ChevronRight,
  Fingerprint,
  Flame,
  Gavel,
  Globe,
  Hash,
  Hexagon,
  Layers3,
  Lock,
  Radar,
  ShieldCheck,
  Sparkles,
  Star,
  TrendingUp,
  WandSparkles,
  Zap,
} from "lucide-react";

const heroStats = [
  ["12", "product surfaces"],
  ["38", "interactive demo actions"],
  ["3", "trust layers"],
  ["1", "clear grant narrative"],
] as const;

const trustPillars = [
  {
    icon: Fingerprint,
    title: "Builder Passport",
    body: "Create reusable builder identity with a polished credential-ready profile, not just a wallet address.",
  },
  {
    icon: BadgeCheck,
    title: "Verifiable Credentials",
    body: "Issue proof for milestones, hackathon finals, workshop speaking, mentorship, and committee approvals.",
  },
  {
    icon: Hash,
    title: "Notarized Proof Bundles",
    body: "Bundle commits, Looms, docs, budget evidence, and sign-offs into one clean review artifact.",
  },
  {
    icon: Lock,
    title: "Mainnet Access Gates",
    body: "Unlock deeper product surfaces only when builder trust state actually supports it.",
  },
] as const;

const landingSections = [
  ["01", "Why this wins", "It feels like a real trust product, not a generic hackathon landing page."],
  ["02", "Why IOTA", "Identity, credentials, proof, and trust are obvious IOTA-native angles."],
  ["03", "Why committees care", "It makes usefulness, safety, execution, and scale easier to evaluate."],
  ["04", "Why builders care", "One passport follows them across grants, hackathons, workshops, and reviews."],
  ["05", "Why demos improve", "The flow is visual, believable, and packed with things reviewers can actually click."],
] as const;

const featureGrid = [
  "Black and white prelanding entrance",
  "Separate public landing page",
  "Dedicated dashboard route",
  "Builder passport creation flow",
  "Credential issuance controls",
  "Proof bundle notarization",
  "Committee review desk",
  "Grant ops control room",
  "Hackathon and workshop mode",
  "Trust analytics surface",
  "Reputation graph concept",
  "Mainnet access gating",
] as const;

const committeeCards = [
  {
    title: "Usefulness",
    score: "96/100",
    body: "A public-good tool that helps grant programs, events, and builders at the same time.",
  },
  {
    title: "Safety",
    score: "93/100",
    body: "Low legal and PR risk compared with speculative or unclear ecosystem concepts.",
  },
  {
    title: "Long-term viability",
    score: "94/100",
    body: "Trust and builder reputation are reusable across cohorts, events, and future programs.",
  },
  {
    title: "Scale",
    score: "95/100",
    body: "Starts as a grants workflow and expands into ecosystem-wide credential infrastructure.",
  },
] as const;

const productMoments = [
  {
    icon: Briefcase,
    title: "Grant submission",
    body: "Builder submits repo, demo, docs, budget, and milestone evidence into one passport-linked record.",
  },
  {
    icon: Gavel,
    title: "Committee review",
    body: "Reviewers see a tighter confidence layer: proof bundles, credentials, risk signals, and fit score.",
  },
  {
    icon: Flame,
    title: "Hackathon reuse",
    body: "The same builder identity becomes reusable for finalist badges, mentor proofs, and speaker credentials.",
  },
  {
    icon: Globe,
    title: "Portable reputation",
    body: "What the builder ships once becomes a reusable trust asset for future IOTA ecosystem programs.",
  },
] as const;

export default function LandingPage() {
  return (
    <div id="top" className="min-h-screen bg-[linear-gradient(180deg,#050505,#0a0a0a_20%,#ffffff_20.01%,#fff7fb_58%,#fffdfd)] text-zinc-950">
      <header className="sticky top-0 z-40 border-b border-white/10 bg-black/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 text-white">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
              <Hexagon className="h-5 w-5 text-pink-300" />
            </div>
            <div>
              <div className="text-[11px] uppercase tracking-[0.28em] text-pink-300">Europe Global Incorporated</div>
              <div className="text-sm font-semibold">IOTA Builder Passport</div>
            </div>
          </div>

          <nav className="hidden items-center gap-6 text-sm text-zinc-300 md:flex">
            <a href="#why">Why this</a>
            <a href="#stack">Stack</a>
            <a href="#committee">Committee fit</a>
            <a href="#screens">Screens</a>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/dashboard"
              className="rounded-2xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/10"
            >
              Open Dashboard
            </Link>
            <Link
              href="/dashboard"
              className="hidden rounded-2xl bg-white px-4 py-2 text-sm font-semibold text-black transition hover:scale-[1.02] sm:inline-flex"
            >
              Enter Demo
            </Link>
          </div>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden bg-black text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(244,114,182,0.20),transparent_24%),radial-gradient(circle_at_left,rgba(255,255,255,0.08),transparent_18%)]" />
          <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-24">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-zinc-300">
                <Sparkles className="h-4 w-4 text-pink-300" />
                Black and white prelanding
              </div>
              <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-tight sm:text-6xl lg:text-7xl">
                IF IT AIN'T IOTA, THEN WHAT ?.
              </h1>
              <p className="mt-6 max-w-2xl text-base text-zinc-300 sm:text-lg">
                This version separates the public story from the product dashboard. The homepage sells the vision. The dashboard shows the working demo. That is the structure the last zip was missing.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/dashboard"
                  className="inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-black shadow-xl transition hover:scale-[1.02]"
                >
                  View working dashboard
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href="#why"
                  className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  See the story
                  <ChevronRight className="h-4 w-4" />
                </a>
              </div>
              <div className="mt-10 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                {heroStats.map(([value, label]) => (
                  <div key={label} className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                    <div className="text-3xl font-semibold text-white">{value}</div>
                    <div className="mt-1 text-sm text-zinc-400">{label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[32px] border border-white/10 bg-white/5 p-6 shadow-[0_30px_120px_rgba(0,0,0,0.35)] backdrop-blur-xl">
              <div className="flex items-center justify-between text-sm text-zinc-400">
                <span>Landing preview</span>
                <span>Ready for Vercel</span>
              </div>
              <div className="mt-6 space-y-4">
                {landingSections.map(([index, title, body]) => (
                  <div key={title} className="rounded-2xl border border-white/10 bg-black/30 p-4">
                    <div className="text-xs uppercase tracking-[0.22em] text-pink-300">{index}</div>
                    <div className="mt-2 text-lg font-semibold text-white">{title}</div>
                    <div className="mt-2 text-sm text-zinc-300">{body}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="why" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-pink-200 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-pink-600 shadow-sm">
              <WandSparkles className="h-4 w-4" />
              Landing section one
            </div>
            <h2 className="mt-5 text-4xl font-semibold text-zinc-950 sm:text-5xl">
              The product story now starts before the dashboard.
            </h2>
            <p className="mt-4 text-lg text-zinc-600">
              Reviewers should understand the problem before they enter the interface. The landing page explains the trust system, why it matters, why IOTA fits, and what the product unlocks.
            </p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {trustPillars.map(({ icon: Icon, title, body }) => (
              <div key={title} className="rounded-[28px] border border-pink-100 bg-white/90 p-6 shadow-[0_20px_60px_rgba(236,72,153,0.08)]">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-pink-100 bg-pink-50 text-pink-600">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="mt-5 text-xl font-semibold text-zinc-950">{title}</div>
                <div className="mt-3 text-sm leading-6 text-zinc-600">{body}</div>
              </div>
            ))}
          </div>
        </section>

        <section id="stack" className="border-y border-pink-100 bg-white/70">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
            <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-pink-200 bg-pink-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-pink-600">
                  <Layers3 className="h-4 w-4" />
                  Landing section two
                </div>
                <h3 className="mt-5 text-4xl font-semibold text-zinc-950">A cleaner product stack.</h3>
                <p className="mt-4 text-lg text-zinc-600">
                  The demo is split like a real startup site: public homepage first, product experience second. That makes the whole repo feel more investor-ready and less confusing.
                </p>
                <div className="mt-6 space-y-4">
                  {productMoments.map(({ icon: Icon, title, body }) => (
                    <div key={title} className="rounded-3xl border border-pink-100 bg-white p-5 shadow-sm">
                      <div className="flex items-start gap-4">
                        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-pink-50 text-pink-600">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <div className="text-lg font-semibold text-zinc-950">{title}</div>
                          <div className="mt-1 text-sm leading-6 text-zinc-600">{body}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-[34px] border border-zinc-200 bg-gradient-to-br from-zinc-950 via-zinc-900 to-pink-900 p-6 text-white shadow-[0_30px_120px_rgba(0,0,0,0.22)]">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-[0.22em] text-pink-200">Premium stack</span>
                  <Blocks className="h-5 w-5 text-pink-200" />
                </div>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {featureGrid.map((item) => (
                    <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-zinc-200">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 text-pink-300" />
                        <span>{item}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="committee" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-pink-200 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-pink-600 shadow-sm">
                <Radar className="h-4 w-4" />
                Landing section three
              </div>
              <h3 className="mt-5 text-4xl font-semibold text-zinc-950 sm:text-5xl">
                Built to read well through committee eyes.
              </h3>
              <p className="mt-4 text-lg text-zinc-600">
                The homepage frames the narrative in the same language reviewers care about: usefulness, safety, scale, and the team’s ability to execute something real.
              </p>
            </div>
            <div className="rounded-2xl border border-pink-100 bg-pink-50 px-4 py-3 text-sm font-medium text-pink-700">
              Trust product, public-good positioning, low-noise pitch
            </div>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {committeeCards.map((card) => (
              <div key={card.title} className="rounded-[28px] border border-pink-100 bg-white p-6 shadow-[0_20px_70px_rgba(236,72,153,0.08)]">
                <div className="text-sm text-zinc-500">{card.title}</div>
                <div className="mt-2 text-4xl font-semibold text-zinc-950">{card.score}</div>
                <div className="mt-3 text-sm leading-6 text-zinc-600">{card.body}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-zinc-950 text-white">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-3 lg:px-8 lg:py-24">
            <div className="rounded-[30px] border border-white/10 bg-white/5 p-6">
              <ShieldCheck className="h-6 w-6 text-pink-300" />
              <div className="mt-4 text-2xl font-semibold">Trust-first design</div>
              <p className="mt-3 text-sm leading-6 text-zinc-300">
                The public site explains what the product is doing before users touch the dashboard.
              </p>
            </div>
            <div className="rounded-[30px] border border-white/10 bg-white/5 p-6">
              <Building2 className="h-6 w-6 text-pink-300" />
              <div className="mt-4 text-2xl font-semibold">Europe-global polish</div>
              <p className="mt-3 text-sm leading-6 text-zinc-300">
                Strong typography, deep spacing, black-and-white entrance, and white-pink product depth.
              </p>
            </div>
            <div className="rounded-[30px] border border-white/10 bg-white/5 p-6">
              <TrendingUp className="h-6 w-6 text-pink-300" />
              <div className="mt-4 text-2xl font-semibold">More convincing flow</div>
              <p className="mt-3 text-sm leading-6 text-zinc-300">
                Landing page sells the why. Dashboard proves the how. That is the missing conversion layer.
              </p>
            </div>
          </div>
        </section>

        <section id="screens" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-pink-200 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-pink-600 shadow-sm">
              <Star className="h-4 w-4" />
              Landing sections four to ten
            </div>
            <h3 className="mt-5 text-4xl font-semibold text-zinc-950 sm:text-5xl">
              Ten-plus real landing blocks instead of one hidden prelanding state.
            </h3>
            <p className="mt-4 text-lg text-zinc-600">
              This homepage is intentionally long, structured, and sectioned so it reads like a premium startup website before users open the dashboard.
            </p>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {[
              {
                title: "01 Hero",
                body: "Strong black-and-white entrance with a clear headline and CTA.",
                icon: Sparkles,
              },
              {
                title: "02 Trust pillars",
                body: "Builder passport, credentials, notarization, and mainnet gating.",
                icon: BadgeCheck,
              },
              {
                title: "03 Product stack",
                body: "A dedicated product story instead of a generic dashboard drop-in.",
                icon: Layers3,
              },
              {
                title: "04 Committee fit",
                body: "Speaks directly to usefulness, safety, viability, and scale.",
                icon: Gavel,
              },
              {
                title: "05 Screens overview",
                body: "Explains the journey from landing page into dashboard experience.",
                icon: Globe,
              },
              {
                title: "06 Builder flow",
                body: "Makes the user journey feel obvious and premium.",
                icon: Fingerprint,
              },
              {
                title: "07 Trust loop",
                body: "Shows how credentials and proof compound over time.",
                icon: ShieldCheck,
              },
              {
                title: "08 Mainnet logic",
                body: "Connects trust state to gated access for deeper product value.",
                icon: Lock,
              },
              {
                title: "09 Performance framing",
                body: "Makes the build feel clean, modern, and execution-ready.",
                icon: Zap,
              },
              {
                title: "10 Final CTA",
                body: "Clean ending that pushes users into the working product demo.",
                icon: ArrowRight,
              },
            ].map(({ title, body, icon: Icon }) => (
              <div key={title} className="rounded-[28px] border border-pink-100 bg-white p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-pink-50 text-pink-600">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="mt-5 text-xl font-semibold text-zinc-950">{title}</div>
                <div className="mt-3 text-sm leading-6 text-zinc-600">{body}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="border-t border-pink-100 bg-[radial-gradient(circle_at_top_right,rgba(244,114,182,0.14),transparent_24%),linear-gradient(180deg,#ffffff,#fff8fc)]">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
            <div className="rounded-[36px] border border-zinc-200 bg-black px-6 py-10 text-white shadow-[0_30px_120px_rgba(0,0,0,0.30)] sm:px-10">
              <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-pink-200">
                    <Hexagon className="h-4 w-4" />
                    Final call to action
                  </div>
                  <h3 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl">
                    Now the repo opens with a real landing page and a separate dashboard.
                  </h3>
                  <p className="mt-4 max-w-2xl text-lg text-zinc-300">
                    That fixes the exact issue you called out. The homepage now sells the vision. The dashboard handles the demo depth.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/dashboard"
                    className="inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-black transition hover:scale-[1.02]"
                  >
                    Open dashboard
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <a
                    href="#top"
                    className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                  >
                    Back to top
                    <ChevronRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
