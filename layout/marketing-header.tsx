import Link from "next/link";

import { Button } from "@/components/ui/button";
import { SiteLogo } from "@/components/shared/site-logo";
import { getBrandingSettings } from "@/lib/branding";
import { marketingNav } from "@/lib/navigation";

export function MarketingHeader() {
  const branding = getBrandingSettings();

  return (
    <header className="sticky top-0 z-40 border-b border-white/20 bg-background/70 backdrop-blur-xl">
      <div className="container flex h-20 items-center justify-between gap-6">
        <SiteLogo name={branding.portalName} mark={branding.logoPlaceholder} />
        <nav className="hidden items-center gap-8 md:flex">
          {marketingNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Button variant="ghost" asChild className="hidden sm:inline-flex">
            <Link href="/login">Log in</Link>
          </Button>
          <Button asChild>
            <Link href="/signup">Book a demo</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}

