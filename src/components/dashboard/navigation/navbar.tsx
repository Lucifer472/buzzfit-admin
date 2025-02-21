"use client";
import Link from "next/link";

import { LogOut } from "./logout";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <header className="mt-6 rounded-md w-full shadow-xl border px-2 bg-white">
      <nav className="flex items-center justify-center gap-x-4 py-4">
        <Button variant={"link"} asChild>
          <Link
            className={cn(pathname === "/dashboard" && "underline")}
            href={"/dashboard"}
          >
            Dashboard
          </Link>
        </Button>
        <Button variant={"link"} asChild>
          <Link
            className={cn(pathname.includes("add-quiz") && "underline")}
            href={"/dashboard/add-quiz"}
          >
            Add Quiz
          </Link>
        </Button>
        <Button variant={"link"} asChild>
          <Link
            className={cn(pathname.includes("add-ai-image") && "underline")}
            href={"/dashboard/add-ai-image"}
          >
            Ai Image
          </Link>
        </Button>
        <LogOut />
      </nav>
    </header>
  );
};
