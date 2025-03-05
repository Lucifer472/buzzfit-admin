"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { Title } from "../title";

import { formatNumber } from "@/lib/utils";
import { Quiz } from "@prisma/client";

export const TrendingQuizzes = () => {
  const [data, setData] = useState<null | Quiz[]>(null);

  useEffect(() => {
    const handleData = async () => {
      const res = await fetch("/api/data/get-quiz");

      const response = await res.json();

      if (response.code === 400) {
        return;
      }

      setData(response.data);
    };

    handleData();
  }, []);

  if (!data) return;

  return (
    <section className="space-y-4 w-full px-2 mt-1 mb-4">
      <Title title="Trending Quizzes" />
      <div className="flex flex-col gap-y-4 w-full">
        {data.map((d) => (
          <Link
            href={"/quiz/" + d.url}
            key={d.id}
            className="grid grid-cols-5 items-center gap-x-4"
          >
            <div className="col-span-2">
              <Image
                src={d.image}
                alt={d.title}
                width={900}
                height={473}
                className="rounded-md sm:rounded-xl h-full object-cover"
              />
            </div>
            <div className="space-y-2 col-span-3">
              <h3 className="w-full text-xl sm:text-3xl font-bold line-clamp-2">
                {d.title}
              </h3>
              <p className="text-sm xx:text-base sm:text-xl font-medium text-gray-700">
                {formatNumber(d.users)} Users
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};
