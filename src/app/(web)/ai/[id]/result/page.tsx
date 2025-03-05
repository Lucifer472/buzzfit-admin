import { redirect } from "next/navigation";

import { Navbar } from "@/components/web/navigation/navbar";
import { AiImageResult } from "@/components/web/results/ai-image-result";

import db from "@/lib/db";

const ResultPage = async ({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ img: string }>;
}) => {
  const { id } = await params;
  const { img } = await searchParams;

  if (!id || !img) {
    return redirect("/");
  }

  const data = await db.imageLab.findUnique({
    where: {
      url: id,
    },
  });

  const nextUrl = await db.imageLab.findFirst({
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

  return (
    <>
      <Navbar background title="Result" />
      <AiImageResult data={data} img={img} nextUrl={nextUrl?.url as string} />
    </>
  );
};

export default ResultPage;
