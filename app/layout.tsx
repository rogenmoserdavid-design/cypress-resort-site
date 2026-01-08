import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, Italiana } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import LoadingScreen from "@/components/ui/LoadingScreen";
import GrainOverlay from "@/components/ui/GrainOverlay";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const italiana = Italiana({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-accent",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cypress Resort | Where Luxury and Nature Meet",
  description:
    "Experience luxury mountain living at Cypress Resort in Jasper, Georgia. Private villas, 50-foot waterfall, world-class dining, and spa - just 50 minutes from Atlanta.",
  keywords: [
    "luxury resort Georgia",
    "mountain resort Atlanta",
    "Jasper Georgia resort",
    "luxury cabin rental",
    "North Georgia mountains",
    "private villa resort",
    "waterfall resort",
  ],
  openGraph: {
    title: "Cypress Resort | Where Luxury and Nature Meet",
    description:
      "Private luxury villas nestled in 48 acres of pristine North Georgia forest, featuring a 50-foot waterfall.",
    url: "https://cypressresort.com",
    siteName: "Cypress Resort",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable} ${italiana.variable}`}
    >
      <body className="bg-cream text-charcoal antialiased">
        <LoadingScreen />
        <GrainOverlay />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
