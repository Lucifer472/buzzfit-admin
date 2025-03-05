import { NextRequest, NextResponse } from "next/server";


async function getResult(formData: FormData) {
  try {

    const response = await fetch("https://api.buzzsight.co/en/api/result/getResult", {
      method: "POST",
      body: formData
    })

    if (response.status === 200) {
      const data = await response.json()
      console.log(data)

      if (data.data?.state) {
        return { code: 300, continuationId: data.data.continuationId }
      }

      return { code: 200, img: data.data.resultImg }

    }

    return { code: 400 }


  } catch (error) {
    console.log(error)

    return { code: 400 }
  }
}

async function getResultResult(formData: FormData) {
  try {
    const response = await fetch("https://api.buzzsight.co/en/api/result/result", {
      method: "POST",
      body: formData
    })


    if (response.status === 200) {
      const data = await response.json();

      console.log(data)

      if (data.code === 400) {
        return { code: 300 }
      }

      if (data.data?.state) {
        return { code: 300 }
      }

      return { code: 200, img: data.data.resultImg }
    }

    return { code: 400 }

  } catch (error) {
    console.log(error)

    return { code: 400 }
  }
}

export async function POST(req: NextRequest) {
  const { id, imgUrl } = await req.json();

  const formData = new FormData();

  formData.append("qid", id);
  formData.append("img[img_1]", imgUrl);
  formData.append("img[img_2]", "");

  const firstResponse = await getResult(formData);

  if (firstResponse.code === 200) {
    return NextResponse.json({
      code: 200,
      img: firstResponse.img
    })
  }

  if (firstResponse.code === 400) {
    return NextResponse.json({
      code: 400
    })
  }

  formData.append("continuationId", firstResponse.continuationId);

  let count = 1;
  let secondResponse;

  while (count < 15) {
    secondResponse = await getResultResult(formData);

    if (secondResponse.code === 200) {
      count = 15;
    }

    if (secondResponse.code === 400) {
      count = 15
    }

    count++
  }

  if (secondResponse?.code === 400) {
    return NextResponse.json({
      code: 400
    })
  }

  return NextResponse.json({
    code: secondResponse?.code,
    img: secondResponse?.img
  })
}

export async function OPTIONS(request: Request) {
  const allowedOrigin = request.headers.get("origin");
  console.log(allowedOrigin)
  const response = new NextResponse(null, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers":
        "Content-Type, Authorization, X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Date, X-Api-Version",
      "Access-Control-Max-Age": "86400",
    },
  });

  return response;
}
