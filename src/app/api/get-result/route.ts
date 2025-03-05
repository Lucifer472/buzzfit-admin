import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { id, imgUrl } = await req.json();

  const formData = new FormData();

  formData.append("qid", id);
  formData.append("img[img_2]", "");
  formData.append("img[img_1]", imgUrl);

  try {
    const res = await fetch(
      "https://api.buzzsight.co/en/api/result/getResult",
      {
        body: formData,
        method: "POST",
      }
    );

    if (res.status !== 200) {
      return NextResponse.json({
        code: res.status,
        msg: res.statusText,
      });
    }

    const data = await res.json();

    return NextResponse.json({
      resultImg: data.data.resultImg,
      code: 200,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      code: 500,
      msg: "Something went Wrong!",
    });
  }
}

export async function OPTIONS(request: Request) {
  const allowedOrigin = request.headers.get("origin");
  console.log(allowedOrigin)
  const response = new NextResponse(null, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin":"*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers":
        "Content-Type, Authorization, X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Date, X-Api-Version",
      "Access-Control-Max-Age": "86400",
    },
  });

  return response;
}
