import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

import "./globals.css";
import { Toaster } from "sonner";
import { siteName } from "@/constant";

export const metadata: Metadata = {
  title:
    siteName +
    "| All Quizzes, Trivia, Photo Effects, Articles And Viral Topics",
  description:
    "Dive into funny quizzes, free photo effects, compelling articles, and viral trends. Join @ now for unforgettable fun!",
  keywords:
    "test, quiz, IQ, EQ, love, relationship, fun tests, test me, test about me, IQ quiz, EQ quiz, love quiz, personality test, psychological test, quiz games, test games, online quiz, free quiz, my personality, my love, my test, real me, constellations, tarot",
};

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("antialiased w-full", poppins.className)}>
        <Toaster />
        {children}
      </body>
    </html>
  );
}
