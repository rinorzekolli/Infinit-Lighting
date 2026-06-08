import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Infinit Lighting | Ndriçim Profesional LED",
  description:
    "Zgjidhje profesionale të ndriçimit LED për rrugë, autostrada, zona urbane dhe hapësira publike. Teknologji e avancuar, efiçiencë energjetike dhe siguri maksimale.",
  keywords: [
    "LED lighting",
    "street lighting",
    "urban lighting",
    "ndriçim LED",
    "ndriçim rrugor",
    "Infinit Lighting",
    "Kosovë",
  ],
  openGraph: {
    title: "Infinit Lighting | Ndriçim Profesional LED",
    description:
      "Zgjidhje profesionale të ndriçimit LED për rrugë, autostrada, zona urbane dhe hapësira publike.",
    type: "website",
    locale: "sq_XK",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="sq"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body
        className="w-full min-h-full flex flex-col text-foreground"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
