import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

import "./globals.css";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "Admin Panel",
  description: "Buzzfit Admin Panel not For Users",
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
      <body
        className={cn(
          "antialiased bg-gradient-to-b from-sky-400 to-blue-400 w-full",
          poppins.className
        )}
      >
        <Toaster />
        {children}
      </body>
    </html>
  );
}
