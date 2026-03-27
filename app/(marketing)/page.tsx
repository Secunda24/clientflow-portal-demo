import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";

import { FadeIn } from "@/components/shared/fade-in";
import { FeatureGrid } from "@/components/marketing/feature-grid";
import { LandingShowcase } from "@/components/marketing/landing-showcase";
import { TestimonialGrid } from "@/components/marketing/testimonial-grid";
import { Button } from "@/components/ui/button";

export default function LandingPage() {
  return (
    <div>
      <section className="container grid gap-12 py-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-24">
        <FadeIn className="space-y-8">
          <div className="space-y-5">
            <span className="eyebrow">Client portals for premium service brands</span>
            <h1 className="font-display text-5xl font-semibold tracking-tight sm:text-6xl">
              Your clients deserve a better portal
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-muted-foreground">
              ClientFlow Portal is a polished white-label customer portal demo for agencies, consultancies, maintenance teams, legal firms, and other service businesses that want a more premium client experience.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button size="lg" asChild>
              <Link href="/signup">
                Start the demo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/pricing">See pricing tiers</Link>
            </Button>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-3xl border border-border/70 bg-background/70 p-5">
              <Sparkles className="h-5 w-5 text-brand" />
              <p className="mt-3 font-semibold">White-label ready</p>
              <p className="mt-2 text-sm text-muted-foreground">Portal name, logo, and accent color can be rebranded quickly.</p>
            </div>
            <div className="rounded-3xl border border-border/70 bg-background/70 p-5">
              <ShieldCheck className="h-5 w-5 text-brand" />
              <p className="mt-3 font-semibold">Secure by default</p>
              <p className="mt-2 text-sm text-muted-foreground">Supabase auth, RLS schema, storage design, and route protection are included.</p>
            </div>
            <div className="rounded-3xl border border-border/70 bg-background/70 p-5">
              <CheckCircle2 className="h-5 w-5 text-brand" />
              <p className="mt-3 font-semibold">Demo data included</p>
              <p className="mt-2 text-sm text-muted-foreground">Seeded requests, projects, invoices, documents, and articles make the app feel alive immediately.</p>
            </div>
          </div>
        </FadeIn>
        <FadeIn delay={0.12}>
          <LandingShowcase />
        </FadeIn>
      </section>

      <section className="container py-12 lg:py-20">
        <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="space-y-3">
            <span className="eyebrow">Built to sell</span>
            <h2 className="section-title">A polished product story from the first click</h2>
          </div>
          <p className="max-w-2xl text-sm text-muted-foreground sm:text-base">
            The experience blends request management, project visibility, document sharing, billing, knowledge base content, and branded messaging in a single modern interface.
          </p>
        </div>
        <FeatureGrid />
      </section>

      <section className="container py-12 lg:py-20">
        <div className="mb-10 space-y-3 text-center">
          <span className="eyebrow">Social proof</span>
          <h2 className="section-title">Trusted by modern service teams</h2>
        </div>
        <TestimonialGrid />
      </section>

      <section className="container py-12 lg:py-20">
        <div className="rounded-[2.5rem] bg-slate-950 px-8 py-12 text-white shadow-card sm:px-12">
          <div className="mx-auto max-w-3xl space-y-5 text-center">
            <span className="eyebrow border-white/10 bg-white/10 text-white">Launch your portal</span>
            <h2 className="font-display text-4xl font-semibold">Turn a service relationship into a premium software experience</h2>
            <p className="text-base leading-8 text-slate-300">
              Use this demo as a marketing showcase, a white-label accelerator, or the foundation for a custom client system for your next business client.
            </p>
            <div className="flex flex-col justify-center gap-3 sm:flex-row">
              <Button size="lg" asChild>
                <Link href="/login">Explore the live demo</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-white/20 bg-transparent text-white hover:bg-white/10">
                <Link href="/contact">Request a tailored build</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

