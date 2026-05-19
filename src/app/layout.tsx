import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Header from "@/components/custom/large/header/Header";
import { ThemeProvider } from "@/components/theme-provider";
import BackgroundMusic from "@/components/custom/atoms/BackgroundMusic/BackgroundMusic";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://farghl.com"),
  title: {
    default: "Islam Farghl | Full-Stack Engineer",
    template: "%s | Islam Farghl",
  },
  description:
    "Full-Stack Engineer building scalable web apps with Next.js, React, NestJS, and TypeScript.",
  keywords: [
    "Islam Farghl",
    "Full Stack Developer",
    "Next.js Developer",
    "React Developer",
    "NestJS Developer",
    "TypeScript",
    "Portfolio",
  ],
  openGraph: {
    title: "Islam Farghl | Full-Stack Engineer",
    description:
      "Full-Stack Engineer building scalable web apps with Next.js, React, NestJS, and TypeScript.",
    url: "https://farghl.com",
    siteName: "Islam Farghl Portfolio",
    images: [
      {
        url: "/islam.webp",
        width: 1200,
        height: 630,
        alt: "Islam Farghl",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Islam Farghl | Full-Stack Engineer",
    description:
      "Full-Stack Engineer building scalable web apps with Next.js, React, NestJS, and TypeScript.",
    images: ["/islam.webp"],
  },
  icons: {
    icon: "/islam.webp",
    shortcut: "/islam.webp",
    apple: "/islam.webp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${cn(`${outfit.variable} antialiased overflow-x-hidden`)}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Header />

          {children}
          <BackgroundMusic />
        </ThemeProvider>
      </body>
    </html>
  );
}
