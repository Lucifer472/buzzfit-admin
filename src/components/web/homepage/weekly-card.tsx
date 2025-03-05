"use client";

import { useState } from "react";
import Image from "next/image";

import { cn } from "@/lib/utils";
import { ImageLab, Quiz } from "@prisma/client";
import Link from "next/link";

const FullImageCard = ({
  href,
  img,
  name,
}: {
  href: string;
  img: string;
  name: string;
}) => {
  return (
    <Link href={href} className="relative w-full h-full block">
      <Image
        src={img}
        alt={name}
        width={900}
        height={473}
        className="aspect-auto object-cover rounded-md"
      />
      <div className="absolute bottom-0 left-0 w-full bg-black rounded-b-md bg-opacity-60 p-2 sm:p-4">
        <h2 className="text-xl sm:text-4xl font-bold text-white line-clamp-2">
          {name}
        </h2>
      </div>
    </Link>
  );
};

const ImageCard = ({
  href,
  img,
  name,
}: {
  href: string;
  img: string;
  name: string;
}) => {
  return (
    <Link href={href} className="grid grid-cols-5 items-center gap-x-4">
      <div className="col-span-2 w-full">
        <Image
          src={img}
          alt={name}
          width={900}
          height={473}
          className="w-full aspect-auto rounded-md sm:rounded-xl h-full object-cover"
        />
      </div>
      <div className="space-y-2 col-span-3">
        <h3 className="w-full text-base sm:text-3xl font-bold line-clamp-2">
          {name}
        </h3>
        <p className="px-2 py-1 text-xs sm:text-base bg-pink-200 text-pink-500 w-fit rounded">
          700k Tests
        </p>
      </div>
    </Link>
  );
};

export const WeeklyCard = ({
  data,
}: {
  data?: {
    weekly: ImageLab[];
    popular: Quiz[];
  };
}) => {
  const [week, setWeek] = useState(true);

  if (!data) {
    return;
  }

  return (
    <section className="px-2 my-4">
      <div className="mx-auto relative w-full">
        <div
          className={cn(
            "cursor-pointer relative top-0 left-0 w-full",
            week ? "block" : "hidden"
          )}
        >
          <Image
            src="/assets/images/slide-left.png"
            alt="slide-left"
            width={1280}
            height={200}
            className="w-full aspect-auto inset-0 object-cover"
          />
        </div>

        <div
          className={cn(
            "cursor-pointer relative top-0 left-0 w-full",
            !week ? "block" : "hidden"
          )}
        >
          <Image
            src="/assets/images/slide-right.png"
            alt="slide-right"
            width={1280}
            height={200}
            className="w-full aspect-auto inset-0 object-cover"
          />
        </div>

        <div className="w-full h-full absolute top-1/2 -translate-y-1/2 left-0 flex items-center justify-between">
          <button
            onClick={() => setWeek(true)}
            className={cn(
              "w-full flex items-center justify-center text-lg sm:text-2xl font-medium",
              week ? "text-rose-600" : "text-black"
            )}
          >
            Popular Picks
          </button>

          <button
            onClick={() => setWeek(false)}
            className={cn(
              "w-full flex items-center justify-center text-lg sm:text-2xl font-medium",
              !week ? "text-rose-600" : "text-black"
            )}
          >
            Weekly Wonder
          </button>
        </div>
      </div>
      <div className="bg-[#ffe3e6] rounded-b-xl p-4">
        {week && (
          <div className="bg-white p-4 rounded-xl flex w-full gap-y-4 flex-col">
            {data.popular.map((p, index) => {
              if (index === 0) {
                return (
                  <FullImageCard
                    href={"/quiz/" + p.url}
                    img={p.image}
                    name={p.title}
                    key={index}
                  />
                );
              }

              return (
                <ImageCard
                  href={"/quiz/" + p.url}
                  img={p.image}
                  name={p.title}
                  key={index}
                />
              );
            })}
          </div>
        )}

        {!week && (
          <div className="bg-white p-4 rounded-xl flex w-full gap-y-4 flex-col">
            {data.weekly.map((p, index) => {
              if (index === 0) {
                return (
                  <FullImageCard
                    href={"/ai/" + p.url}
                    img={p.image}
                    name={p.title}
                    key={index}
                  />
                );
              }

              return (
                <ImageCard
                  href={"/ai/" + p.url}
                  img={p.image}
                  name={p.title}
                  key={index}
                />
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};
