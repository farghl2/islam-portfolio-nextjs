import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Header from "@/components/custom/large/header/Header";
import { ThemeProvider } from "@/components/theme-provider";
import BackgroundMusic from "@/components/custom/atoms/BackgroundMusic/BackgroundMusic";


const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ['latin'],
});


export const metadata: Metadata = {
  title: "Islam Farghl",
  description: "I’m a full stack developer special in Nextjs frame work",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${cn(`${outfit.variable} antialiased overflow-x-hidden`)}`}
      >
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
