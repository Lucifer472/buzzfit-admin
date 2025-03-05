import { Ads1, Ads2, Ads3 } from "@/components/ads/google-ads";
import { Navbar } from "@/components/web/navigation/navbar";
import { category } from "@/constant";
import db from "@/lib/db";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

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

const CategoryPage = async ({
  params,
}: {
  params: Promise<{ cat: string }>;
}) => {
  const { cat } = await params;

  const c = category.find((c) => c.link === cat);

  if (!c) {
    return redirect("/");
  }

  const quiz = await db.quiz.findMany({
    where: {
      category: c.link,
    },
    take: 25,
    orderBy: {
      users: "desc",
    },
  });

  const ai = await db.imageLab.findMany({
    where: {
      category: c.link,
    },
    take: 25,
    orderBy: {
      users: "desc",
    },
  });

  return (
    <>
      <Navbar background title={c.label} />
      <Ads1 />
      <div className="space-y-4 my-4">
        {quiz && (
          <div className="w-full flex flex-col gap-y-4 px-4">
            {quiz.map((q, index) => {
              if (index === 0) {
                return (
                  <FullImageCard
                    href={"/quiz/" + q.url}
                    img={q.image}
                    name={q.title}
                    key={index}
                  />
                );
              }

              return (
                <ImageCard
                  href={"/quiz/" + q.url}
                  img={q.image}
                  name={q.title}
                  key={index}
                />
              );
            })}
          </div>
        )}

        <Ads2 />

        {ai && (
          <div className="w-full flex flex-col gap-y-4 px-4">
            {ai.map((q, index) => {
              if (index === 0) {
                return (
                  <FullImageCard
                    href={"/ai/" + q.url}
                    img={q.image}
                    name={q.title}
                    key={index}
                  />
                );
              }

              return (
                <ImageCard
                  href={"/ai/" + q.url}
                  img={q.image}
                  name={q.title}
                  key={index}
                />
              );
            })}
          </div>
        )}
      </div>
      <Ads3 />
    </>
  );
};

export default CategoryPage;
