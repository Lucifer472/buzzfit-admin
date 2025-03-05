"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { category } from "@/constant";
import { cn } from "@/lib/utils";

export const Navbar = ({
  background,
  title,
}: {
  background?: boolean;
  title?: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav
        className={cn(
          "w-full flex items-center justify-between px-2 py-4",
          background ? "bg-white border-b border-gray-100 " : "bg-transparent"
        )}
      >
        {background === false || background === true ? (
          <div className="w-[235px] flex items-center justify-start gap-x-1">
            <button
              onClick={() => {
                window.history.back();
              }}
            >
              <Image
                src={
                  background
                    ? "/assets/images/icon-back-black.png"
                    : "/assets/images/icon-back-white.png"
                }
                width={56}
                height={56}
                alt="Icon Back White"
                className="object-cover"
              />
            </button>
            <p
              className={cn(
                "font-semibold text-lg sm:text-2xl",
                background ? "text-black" : "text-white"
              )}
            >
              {title}
            </p>
          </div>
        ) : (
          <Link href="/" className="block relative w-[235px] h-[50px]">
            <Image
              src="/assets/images/logo.png"
              alt="Logo"
              fill
              className="w-full h-full aspect-auto object-contain"
            />
          </Link>
        )}
        <ul className="flex items-center justify-end gap-x-4">
          <li>
            <Link href="/trending">
              <Image
                src="/assets/images/fire.png"
                alt="fire"
                width={64}
                height={64}
                className="object-contain"
              />
            </Link>
          </li>
          <li>
            <Link href="/">
              <Image
                src="/assets/images/house.png"
                alt="home"
                width={64}
                height={64}
                className="object-contain"
              />
            </Link>
          </li>
          <li
            onClick={() => {
              setIsOpen((prev) => !prev);
            }}
          >
            <Image
              src={
                isOpen ? "/assets/images/close.png" : "/assets/images/menu.png"
              }
              alt="menu"
              width={64}
              height={64}
              className="object-contain cursor-pointer"
            />
          </li>
        </ul>
      </nav>

      {isOpen && (
        <div className="absolute max-w-screen-sm w-full h-full min-h-screen bg-black bg-opacity-80 z-10"></div>
      )}

      <div
        className="absolute w-[240px] h-full min-h-screen z-20 bg-white transition-all duration-500 border-l border-t border-gray-100"
        style={{
          right: isOpen ? "0" : "-240px",
        }}
      >
        <ul className="flex flex-col items-start justify-center">
          {category.map((c) => (
            <li key={c.label} className="border-y w-full border-gray-100">
              <Link
                href={"/" + c.link}
                className="w-full p-4 block text-2xl font-bold"
              >
                {c.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
