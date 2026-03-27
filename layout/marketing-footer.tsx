import Link from "next/link";

import { SiteLogo } from "@/components/shared/site-logo";
import { getBrandingSettings } from "@/lib/branding";

export function MarketingFooter() {
  const branding = getBrandingSettings();

  return (
    <footer className="border-t border-border/70 py-10">
      <div className="container flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div className="space-y-4">
          <SiteLogo name={branding.portalName} mark={branding.logoPlaceholder} />
          <p className="max-w-md text-sm text-muted-foreground">
            Premium white-label client portals for service businesses that want a more modern, trustworthy customer experience.
          </p>
        </div>
        <div className="flex flex-col gap-2 text-sm text-muted-foreground">
          <Link href="/pricing" className="transition hover:text-foreground">
            Pricing
          </Link>
          <Link href="/contact" className="transition hover:text-foreground">
            Contact
          </Link>
          <Link href="/login" className="transition hover:text-foreground">
            Login
          </Link>
        </div>
      </div>
    </footer>
  );
}

