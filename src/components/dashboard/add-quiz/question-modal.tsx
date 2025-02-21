"use client";
import { useState } from "react";
import { toast } from "sonner";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ImageUpload } from "@/components/image-upload";

import { useQuestionModal } from "./state";
import { QuestionType } from "./type";

export const QuestionModal = ({
  setQuestion,
}: {
  setQuestion: (v: QuestionType) => void;
}) => {
  const { isOpen, setIsOpen } = useQuestionModal();

  const [img, setImg] = useState("");
  const [que, setQue] = useState("");
  const [optionA, setOptionA] = useState("");
  const [optionB, setOptionB] = useState("");
  const [optionC, setOptionC] = useState<string | undefined>();
  const [optionD, setOptionD] = useState<string | undefined>();

  const handleSubmit = () => {
    if (!que || !img || !optionA || !optionB) {
      toast.error("Field Missing!");
      return;
    }

    setQuestion({
      que,
      img,
      optionA: optionA,
      optionB: optionB,
      optionC: optionC,
      optionD: optionD,
    });

    setImg("");
    setQue("");
    setOptionA("");
    setOptionB("");
    setOptionC(undefined);
    setOptionD(undefined);

    setIsOpen(false);
  };

  return (
    <Dialog modal onOpenChange={setIsOpen} open={isOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Question Modal</DialogTitle>
          <DialogDescription>Add Question</DialogDescription>
        </DialogHeader>
        <div className="flex flex-col w-full gap-y-4">
          <ImageUpload setImage={setImg} />
          <div className="flex gap-y-1 flex-col">
            <p className="text-xl font-medium">Question:</p>
            <Input
              type="text"
              placeholder="Question"
              required
              min={3}
              onChange={(e) => setQue(e.target.value)}
            />
          </div>
          <div className="flex gap-y-1 flex-col">
            <p className="text-xl font-medium">Option A:</p>
            <Input
              type="text"
              placeholder="Option A"
              required
              min={3}
              onChange={(e) => setOptionA(e.target.value)}
            />
          </div>
          <div className="flex gap-y-1 flex-col">
            <p className="text-xl font-medium">Option B:</p>
            <Input
              type="text"
              placeholder="Option B"
              required
              min={3}
              onChange={(e) => setOptionB(e.target.value)}
            />
          </div>
          <div className="flex gap-y-1 flex-col">
            <p className="text-xl font-medium">Option C:</p>
            <Input
              type="text"
              placeholder="Option C"
              onChange={(e) => setOptionC(e.target.value)}
            />
          </div>
          <div className="flex gap-y-1 flex-col">
            <p className="text-xl font-medium">Option D:</p>
            <Input
              type="text"
              placeholder="Option D"
              onChange={(e) => setOptionD(e.target.value)}
            />
          </div>

          <Button
            type="button"
            variant={"default"}
            size={"lg"}
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
