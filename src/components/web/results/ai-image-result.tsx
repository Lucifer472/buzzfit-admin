"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import fileDownload from "js-file-download";

import { Ads1, Ads2 } from "@/components/ads/google-ads";
import { TrendingImages } from "../etc/trending-images";

import { ImageLab } from "@prisma/client";

export const AiImageResult = ({
  data,
  img,
  nextUrl,
}: {
  data: ImageLab;
  img: string;
  nextUrl: string;
}) => {
  const [aiImage, setAiImage] = useState("/assets/images/404.png");
  const [loading, setLoading] = useState(true);

  const [download, setDownload] = useState(false);

  useEffect(() => {
    const handleUploadImage = async () => {
      const response = await fetch("/api/get-result", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Set content type to JSON
        },
        body: JSON.stringify({
          id: data.key,
          imgUrl: img,
        }),
      });

      if (!response.ok) {
        setLoading(false);
        return;
      }

      const res = await response.json();

      if (res.code === 400) {
        setLoading(false);
        return;
      }

      if (res.img) {
        localStorage.setItem(data.key, res.img);

        setAiImage(res.img);
        setLoading(false);
        return;
      }

      const oldImage = localStorage.getItem(data.key);

      if (oldImage) {
        setAiImage(oldImage);
      }

      setLoading(false);
    };

    handleUploadImage();
  }, [data.key, img]);

  const downloadImage = () => {
    setDownload(true);
    try {
      fetch(aiImage)
        .then((response) => response.blob())
        .then((blob) => {
          fileDownload(blob, `${data.title}.png`);
        });
    } catch (error) {
      console.log(error);
    } finally {
      setDownload(false);
    }
  };

  return (
    <>
      {loading ? (
        <div className="flex flex-col items-center justify-center min-h-[90vh] px-12 py-12">
          <Image
            src="/assets/images/loading.gif"
            alt="loading"
            width={1000}
            height={1000}
            className="aspect-auto object-contain"
          />
          <h3 className="text-3xl font-medium mt-12">Loading...</h3>
        </div>
      ) : (
        <>
          <div className="space-y-4 mb-4">
            <Ads1 />
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
                <div className="flex items-center justify-center flex-col bg-rose-50 px-6 pb-4 rounded-md">
                  <Image
                    id="main-img"
                    src={aiImage}
                    alt="quiz"
                    width={1000}
                    height={1000}
                    className="w-full aspect-auto rounded-md my-6"
                  />
                  <button
                    onClick={downloadImage}
                    disabled={download}
                    className="w-full py-4 text-center bg-rose-400 rounded-md text3xl text-white font-bold border-2 border-rose-600"
                  >
                    Download
                  </button>
                </div>
              </div>

              <div className="flex flex-wrap sm:flex-nowrap  w-full gap-4">
                <Link
                  className="w-full py-4 text-center border-2 border-gray-100 rounded-md text3xl text-gray-900 font-bold"
                  href={"/ai/" + data.url}
                >
                  Upload Again
                </Link>
                <Link
                  href={"/ai/" + nextUrl}
                  className="w-full py-4 text-center bg-rose-400 rounded-md text3xl text-white font-bold border-2 border-rose-600"
                >
                  Next Ai Image
                </Link>
              </div>
            </div>
            <Ads2 />
          </div>

          <TrendingImages />
        </>
      )}
    </>
  );
};
