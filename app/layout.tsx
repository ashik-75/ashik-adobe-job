import type { Metadata } from "next";
import { Playfair_Display, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["700", "900"],
  style: ["normal", "italic"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  // ── Core ──────────────────────────────────────────────
  metadataBase: new URL("https://ashik.dev"),
  title: {
    default: "Ashik — Adobe Plugin Developer (CEP & UXP)",
    template: "%s | Ashik",
  },
  description:
    "Custom Adobe plugins built with CEP & UXP for Photoshop, Illustrator, and InDesign. Automate complex workflows and save hours of manual work.",

  // ── Canonical ─────────────────────────────────────────
  alternates: {
    canonical: "/",
  },

  // ── Icons ─────────────────────────────────────────────
  icons: {
    icon: "/icon.png",
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },

  // ── Open Graph ────────────────────────────────────────
  openGraph: {
    title: "Ashik — Adobe Plugin Developer (CEP & UXP)",
    description:
      "Custom Adobe plugins for Photoshop, Illustrator & InDesign. Automate complex workflows with CEP panels and UXP APIs.",
    url: "https://ashik.dev",
    siteName: "Ashik",
    images: [
      {
        url: "/og-image.png", // 1200×630 in /public
        width: 1200,
        height: 630,
        alt: "Ashik — Adobe Plugin Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // ── Twitter / X ───────────────────────────────────────
  twitter: {
    card: "summary_large_image",
    title: "Ashik — Adobe Plugin Developer (CEP & UXP)",
    description:
      "Custom Adobe plugins for Photoshop, Illustrator & InDesign. Automate complex workflows with CEP panels and UXP APIs.",
    images: ["/og-image.png"],
  },

  // ── Crawling ──────────────────────────────────────────
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${ibmPlexMono.variable} antialiased`}
      >
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Ashik",
              url: "https://ashik.dev",
              jobTitle: "Adobe Plugin Developer",
              description:
                "Custom Adobe plugins built with CEP & UXP for Photoshop, Illustrator, and InDesign.",
              knowsAbout: [
                "Adobe CEP",
                "Adobe UXP",
                "ExtendScript",
                "Photoshop Automation",
                "Illustrator Automation",
                "InDesign Automation",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                email: "kowsera883@gmail.com",
                contactType: "customer support",
              },
              sameAs: [
                "https://www.linkedin.com/in/kowser-ahmed-a5048a3a5/",
                "https://www.youtube.com/@creativeitzone",
              ],
              offers: {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Custom Adobe Plugin Development",
                  description:
                    "Bespoke CEP and UXP plugins for Photoshop, Illustrator, and InDesign to automate complex design workflows.",
                },
              },
            }),
          }}
        />

        {children}
      </body>
    </html>
  );
}