import { Ads1, Ads2 } from "@/components/ads/google-ads";
import { TrendingQuizzes } from "@/components/web/etc/trending-quizzes";
import { Navbar } from "@/components/web/navigation/navbar";
import db from "@/lib/db";
import { formatNumber } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

const QuizPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  const data = await db.quiz.findUnique({
    where: {
      url: id,
    },
  });

  if (!data) {
    return redirect("/");
  }

  const tags = data.tags?.split(",");

  return (
    <>
      <Navbar background={false} title="Quizzing" />
      <div className="absolute top-0 left-0 w-full h-[300px] z-[-1]">
        <Image
          src={data.image}
          alt={data.title}
          fill
          className="aspect-auto object-cover"
        />
        <div className="bg-black bg-opacity-60 w-full h-full top-0 left-0 absolute"></div>
      </div>
      <div
        className={
          "w-full pt-20 sm:pt-28 mt-20  pb-4 rounded-t-[32px] bg-pink-50 relative"
        }
      >
        <div className="absolute -top-10 sm:-top-16 left-8  w-[170px] object-cover h-[90px] sm:w-[300px] sm:h-[150px]">
          <Image
            src={data.image}
            alt={data.title}
            fill
            className="border border-white"
          />
        </div>

        <div className="absolute top-4 sm:top-10 left-[210px] sm:left-[350px]">
          <p className="p-2 bg-pink-200 rounded-sm text-xs sm:text-xl font-semibold text-pink-500">
            {formatNumber(data.users)} Tests
          </p>
        </div>

        <div className="flex flex-col w-full px-8 gap-y-2">
          <h2 className="text-2xl sm:text-4xl font-bold">{data.title}</h2>
          <div className="flex items-center justify-start gap-x-2">
            {tags &&
              tags.map((t, index) => (
                <p
                  key={index}
                  className="px-2 py-1 text-xs rounded bg-white text-pink-500 border border-pink-300 capitalize"
                >
                  {t}
                </p>
              ))}
          </div>
          <Ads1 />

          <Link
            href={"/quiz/" + data.url + "/take"}
            className="w-full py-4 text-center bg-pink-400 hover:bg-pink-500 rounded-md text-xl font-bold text-white"
          >
            Take a Quiz
          </Link>

          <Image
            src="/assets/images/divider.png"
            alt="divider"
            width={1500}
            height={48}
            className="aspect-auto my-4 object-contain"
          />
        </div>

        <TrendingQuizzes />

        <Ads2 />
      </div>
    </>
  );
};

export default QuizPage;
