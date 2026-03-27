import type { CSSProperties, ReactNode } from "react";
import type { Metadata } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";

import { Providers } from "@/components/shared/providers";
import { getBrandingSettings } from "@/lib/branding";

import "./globals.css";

const fontSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans"
});

const fontDisplay = Fraunces({
  subsets: ["latin"],
  variable: "--font-display"
});

export async function generateMetadata(): Promise<Metadata> {
  const branding = getBrandingSettings();
  return {
    title: `${branding.portalName} | Premium Client Portal Demo`,
    description:
      "A polished white-label customer portal demo for service businesses using Next.js and Supabase."
  };
}

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  const branding = getBrandingSettings();
  const style = {
    "--brand": branding.accentHsl
  } as CSSProperties;

  return (
    <html lang="en" suppressHydrationWarning style={style}>
      <body className={`${fontSans.variable} ${fontDisplay.variable} min-h-screen font-sans`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
