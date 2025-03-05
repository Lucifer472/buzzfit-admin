import { redirect } from "next/navigation";

import db from "@/lib/db";
import { ImageTemplate } from "@/components/web/etc/image-template";

const AiPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  const data = await db.imageLab.findUnique({
    where: {
      url: id,
    },
  });

  if (!data) return redirect("/");

  return <ImageTemplate data={data} />;
};

export default AiPage;
