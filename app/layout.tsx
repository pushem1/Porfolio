import "./globals.css";
import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-body" });
const space = Space_Grotesk({ subsets: ["latin"], variable: "--font-display" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  metadataBase: new URL("https://web-dz-services.vercel.app"),
  title: "WEB DZ — Digital Engineering Studio",
  description: "WEB DZ builds web, mobile and custom digital systems from Sidi Bel Abbès, Algeria.",
  openGraph: { title: "WEB DZ — Digital Engineering Studio", description: "Web, mobile, realtime and custom digital solutions." },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body className={`${inter.variable} ${space.variable} ${mono.variable}`}>{children}</body></html>;
}
