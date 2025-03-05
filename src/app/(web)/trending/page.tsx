import { Ads1, Ads2 } from "@/components/ads/google-ads";
import { Navbar } from "@/components/web/navigation/navbar";
import db from "@/lib/db";
import { formatNumber } from "@/lib/utils";
import Link from "next/link";
import { redirect } from "next/navigation";

const TrendingPage = async () => {
  const quiz = await db.quiz.findMany({
    orderBy: {
      users: "desc",
    },
    take: 10,
  });

  const images = await db.imageLab.findMany({
    orderBy: {
      users: "desc",
    },
    take: 10,
  });

  if (!quiz || !images) {
    return redirect("/");
  }

  const combinedArray = [...quiz, ...images];

  return (
    <>
      <Navbar />
      <Ads1 />
      <div className="m-2 rounded-md bg-gradient-to-b from-[#ffeef0] to-white">
        <div className="w-full py-4 border-b-2 border-rose-600 border-dashed">
          <h2 className="text-3xl w-full text-center font-bold text-rose-600">
            Trending Quizzes
          </h2>
        </div>
        <div className="flex flex-col w-full gap-y-2">
          {combinedArray.map((c, index) => (
            <Link
              key={index}
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              href={c?.key ? "/ai/" + c.url : "/quiz/" + c.url}
              className="w-full grid gap-x-2 grid-cols-8 items-center justify-center px-4 py-2"
            >
              <p className="col-span-1 w-full text-center font-bold text-2xl text-rose-600">
                {index + 1}
              </p>
              <p className="col-span-5 line-clamp-2 text-left font-bold text-2xl text-gray-800">
                {c.title}
              </p>
              <button className="col-span-2 w-full px-1 py-2 bg-rose-100 text-rose-500 font-bold text-lg text-center rounded-sm">
                🔥 {formatNumber(c.users)}
              </button>
            </Link>
          ))}
        </div>
      </div>
      <Ads2 />
    </>
  );
};

export default TrendingPage;
