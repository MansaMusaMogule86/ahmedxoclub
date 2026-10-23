import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter, Cairo, Cinzel } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ahmedxoclub.com"),
  title: "Khaliji & Arabic Nightclub Dubai | XO Club Dubai | Book: +971503737162",
  description:
    "XO Club Dubai is the ultimate Khaliji & Arabic nightlife destination — Mezzanine Floor, Radisson Blu Hotel, Dubai Waterfront, Business Bay. Hip-Hop, R&B, Commercial & Khaleeji anthems, VIP bottle service, verified 5.0★ Google rating. Open daily 11 PM–4 AM. Reserve on WhatsApp +971503737162.",
  keywords: [
    "khaliji nightclub dubai",
    "arabic nightclub dubai",
    "best arabic nightclub dubai",
    "vip table booking dubai",
    "bottle service dubai",
    "business bay nightlife",
    "best nightclub dubai 2025",
    "dubai nightlife guide",
    "hip hop club dubai",
    "rnb club dubai",
    "private events dubai",
    "xO club dubai",
  ],
  authors: [{ name: "XO Club Dubai" }],
  creator: "XO Club Dubai",
  publisher: "XO Club Dubai",
  formatDetection: { telephone: true, address: true },
  alternates: {
    canonical: "/",
    languages: {
      en: "/",
      ar: "/?lang=ar",
      "x-default": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_AE",
    alternateLocale: ["ar_AE"],
    url: "https://ahmedxoclub.com/",
    siteName: "XO Club Dubai",
    title: "XO Club Dubai — The Ultimate Khaliji & Arabic Nightclub | Book: +971503737162",
    description:
      "Dubai's verified 5.0★ Khaliji & Arabic nightlife destination at Radisson Blu Hotel, Dubai Waterfront. VIP tables, bottle service, open daily 11 PM–4 AM. Reserve: WhatsApp +971503737162.",
    images: [
      {
        url: "/images/hero.png",
        width: 1344,
        height: 768,
        alt: "XO Club Dubai — luxury Khaliji nightclub at Radisson Blu Dubai Waterfront, VIP tables and golden interior. Book +971503737162",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "XO Club Dubai — Khaliji & Arabic Nightclub | +971503737162",
    description:
      "Verified 5.0★ nightlife at Radisson Blu Dubai Waterfront, Business Bay. VIP tables & bottle service, daily 11 PM–4 AM. Book: WhatsApp +971503737162.",
    images: ["/images/hero.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/images/branding/xo-logo-square.png", sizes: "512x512", type: "image/png" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/images/branding/xo-logo-square.png",
  },
  category: "nightlife",
};

export const viewport: Viewport = {
  themeColor: "#08080A",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${playfair.variable} ${cinzel.variable} ${cairo.variable} antialiased bg-background text-foreground min-h-screen flex flex-col`}
      >
        {children}
        <Toaster
          position="top-center"
          richColors
          toastOptions={{
            style: {
              background: "#13131A",
              border: "1px solid rgba(212,175,55,0.35)",
              color: "#F5F1E8",
            },
          }}
        />
      </body>
    </html>
  );
}
