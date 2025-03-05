import { footerLinks, siteName } from "@/constant";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 flex flex-col gap-y-4 py-6">
      <div className="flex flex-wrap w-full gap-4 items-center justify-center px-4 sm:px-12">
        {footerLinks.map((f) => (
          <Link
            key={f.name}
            href={f.url}
            className="block text-white text-base sm:text-lg hover:underline transition"
          >
            {f.name}
          </Link>
        ))}
      </div>
      <div className="w-full h-[1px] bg-white"></div>
      <p className="text-white font-medium w-full text-center px-4">
        Copyright © 2019-2025 {siteName}. All rights reserved.
      </p>
    </footer>
  );
};
