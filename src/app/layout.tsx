import type { Metadata } from "next";
import { Plus_Jakarta_Sans} from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Header from "@/components/custom/large/header/Header";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta-sans",
  subsets: ['latin'],
});


export const metadata: Metadata = {
  title: "Islam Farghl",
  description: "I’m a front-end developer special in Nextjs frame work",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cn(`${plusJakarta.variable} antialiased overflow-x-hidden`)}`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
