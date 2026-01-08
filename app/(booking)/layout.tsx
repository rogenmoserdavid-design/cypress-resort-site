import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, Italiana } from "next/font/google";
import "../globals.css";
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
  title: "Book Your Stay | Cypress Resort",
  description: "Reserve your luxury villa at Cypress Resort.",
};

export default function BookingLayout({
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
        <GrainOverlay />
        {children}
      </body>
    </html>
  );
}
