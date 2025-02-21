"use client";

import { useEffect, useState } from "react";

import { ImageUpload } from "@/components/image-upload";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { AnswerType } from "./type";

export const AnswerInput = ({
  setData,
  index,
}: {
  setData: (v: AnswerType) => void;
  index: number;
}) => {
  const [src, setSrc] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    setData({
      description,
      src,
      title,
    });
  }, [src, title, description, setData]);

  return (
    <div className="w-full">
      <h3 className="text-xl font-medium mb-4">Answers {index}:</h3>
      <div className="flex flex-col gap-y-4">
        <div className="flex items-center gap-x-2">
          <Label className="flex-shrink-0 text-lg">Answer Title</Label>
          <Input
            type="text"
            placeholder="Answer Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-x-2">
          <Label className="flex-shrink-0 text-lg">Answer Description</Label>
          <Input
            type="text"
            placeholder="Answer Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <ImageUpload setImage={setSrc} />
      </div>
    </div>
  );
};
