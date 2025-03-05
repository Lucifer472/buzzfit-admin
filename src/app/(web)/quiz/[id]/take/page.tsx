import { Ads1, Ads2, Ads3 } from "@/components/ads/google-ads";
import { QuizComponent } from "@/components/web/etc/quiz";
import { TrendingQuizzes } from "@/components/web/etc/trending-quizzes";
import { Navbar } from "@/components/web/navigation/navbar";
import db from "@/lib/db";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

const QuizTakePage = async ({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ result?: string }>;
}) => {
  const { id } = await params;
  const { result } = await searchParams;

  const data = await db.quiz.findUnique({
    where: {
      url: id,
    },
  });

  const nextUrl = await db.quiz.findFirst({
    where: {
      NOT: {
        url: id,
      },
    },
    select: {
      url: true,
    },
  });

  if (!data) {
    return redirect("/");
  }
  let ansObject: {
    src: string;
    title: string;
    description: string;
  } | null = null;

  if (result) {
    switch (result) {
      case "1":
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        ansObject = data.ans1;
        break;
      case "2":
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        ansObject = data.ans2;
        break;
      case "3":
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        ansObject = data.ans3;
        break;
      default:
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        ansObject = data.ans1;
    }
  }

  return (
    <>
      <Navbar background title="Take Quiz" />
      <Ads1 />
      {result ? (
        <div className="px-4 py-2 space-y-4 w-full">
          <h2 className="text-3xl font-bold text-gray-900">{data.title}</h2>
          <div className="flex flex-col w-full">
            <Image
              src="/assets/images/ribbon.png"
              alt="ribbon"
              width={1500}
              height={40}
              className="w-full aspect-auto"
            />
            <div className="flex items-center justify-center flex-col bg-rose-50 px-6 rounded-md">
              <h3 className="text-3xl font-bold text-gray-900 text-center my-6">
                {ansObject?.title}
              </h3>
              <p className="text-justify font-semibold text-gray-900 text-2xl leading-9">
                {ansObject?.description}
              </p>
              <Image
                src={ansObject?.src as string}
                alt="quiz"
                width={900}
                height={473}
                className="w-full aspect-auto rounded-md my-6"
              />
            </div>
          </div>

          <div className="flex flex-wrap sm:flex-nowrap  w-full gap-4">
            <Link
              href={"/quiz/" + data.url}
              className="w-full py-4 text-center border-2 border-gray-100 rounded-md text3xl text-gray-900 font-bold"
            >
              Test Again
            </Link>
            <Link
              href={"/quiz/" + nextUrl?.url}
              className="w-full py-4 text-center bg-rose-400 rounded-md text3xl text-white font-bold border-2 border-rose-600"
            >
              Next Test
            </Link>
          </div>
        </div>
      ) : (
        <QuizComponent data={data} />
      )}
      <Ads2 />
      {result && <TrendingQuizzes />}
      {result && <Ads3 />}
    </>
  );
};

export default QuizTakePage;
