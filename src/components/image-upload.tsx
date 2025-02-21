"use client";

import { ChangeEvent, useRef, useState } from "react";
import Image from "next/image";
import { toast } from "sonner";

import { Button } from "./ui/button";

export const ImageUpload = ({
  setImage,
  defaultImage,
}: {
  setImage: (v: string) => void;
  defaultImage?: string;
}) => {
  const [src, setSrc] = useState(defaultImage ? defaultImage : "/upload.png");

  const imgRef = useRef<HTMLInputElement>(null);

  const handleUpload = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) {
      return toast.error("Please select a file!");
    }

    const file = e.target.files[0];
    const maxSizeInBytes = 2 * 1024 * 1024; // 2MB in bytes

    // Check file size
    if (file.size > maxSizeInBytes) {
      return toast.error("File size must be less than 2MB!");
    }

    // Prepare FormData for POST request
    const formData = new FormData();
    formData.append("img", file);
    formData.append("folder", "buzzfit");

    fetch("https://img.missiongujarat.in/api/upload", {
      method: "POST",
      body: formData,
    })
      .then((res) => {
        if (res.status === 200) {
          res.text().then((data) => {
            setSrc(data);
            setImage(data);
          });
        } else {
          toast.error("Error Uploading Image!");
        }
      })
      .catch(() => {
        toast.error("Error Upload Image!");
      });
  };

  const resetImages = () => {
    setSrc("/upload.png");
    setImage("");
  };

  return (
    <div>
      <h3 className="text-xl font-medium mb-4">Image Upload:</h3>
      <div className="w-full flex items-center justify-start gap-x-6">
        <label
          htmlFor="upload-img"
          className="size-28 block rounded-xl relative border cursor-pointer"
        >
          <Image
            src={src}
            alt="Upload Image"
            fill
            className="object-cover rounded-xl p-1"
          />
        </label>
        <input
          type="file"
          ref={imgRef}
          className="hidden"
          accept=".jpg, .png, .gif, .webp"
          id="upload-img"
          name="upload-img"
          onChange={handleUpload}
        />
        <div className="flex flex-col gap-y-4">
          <Button
            type="button"
            variant={"default"}
            onClick={() => imgRef.current?.click()}
          >
            Add Image
          </Button>
          <Button
            disabled={src === "/upload.png"}
            type="button"
            onClick={resetImages}
            variant={"destructive"}
          >
            Remove Image
          </Button>
        </div>
      </div>
    </div>
  );
};
