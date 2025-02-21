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

import { useQuestionEditModal } from "./state";
import { QuestionType } from "./type";

export const QuestionEditModal = ({
  setQuestion,
  index,
  question,
  setEdit,
}: {
  index: number | null;
  setQuestion: (v: QuestionType, index: number) => void;
  question: QuestionType | null | undefined;
  setEdit: (v: number | null) => void;
}) => {
  const { isOpen, setIsOpen } = useQuestionEditModal();

  const [img, setImg] = useState(question?.img);
  const [que, setQue] = useState(question?.que);
  const [optionA, setOptionA] = useState(question?.optionA);
  const [optionB, setOptionB] = useState(question?.optionB);
  const [optionC, setOptionC] = useState<string | undefined>(question?.optionC);
  const [optionD, setOptionD] = useState<string | undefined>(question?.optionD);

  if (!question) {
    return;
  }

  const handleSubmit = () => {
    if (!que || !img || !optionA || !optionB || !index) {
      toast.error("Field Missing!");
      return;
    }

    setQuestion(
      {
        que,
        img,
        optionA: optionA,
        optionB: optionB,
        optionC: optionC,
        optionD: optionD,
      },
      index
    );

    toast.success("Question Added!");

    setImg("");
    setQue("");
    setOptionA("");
    setOptionB("");
    setOptionC(undefined);
    setOptionD(undefined);

    setIsOpen(false);
    setEdit(null);
  };

  return (
    <Dialog modal onOpenChange={setIsOpen} open={isOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Question Edit Modal</DialogTitle>
          <DialogDescription>Edit Question</DialogDescription>
        </DialogHeader>
        <div className="flex flex-col w-full gap-y-4">
          <ImageUpload setImage={setImg} defaultImage={question.img} />
          <div className="flex gap-y-1 flex-col">
            <p className="text-xl font-medium">Question:</p>
            <Input
              type="text"
              placeholder="Question"
              required
              min={3}
              defaultValue={question.que}
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
              defaultValue={question.optionA}
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
              defaultValue={question.optionB}
              onChange={(e) => setOptionB(e.target.value)}
            />
          </div>
          <div className="flex gap-y-1 flex-col">
            <p className="text-xl font-medium">Option C:</p>
            <Input
              type="text"
              placeholder="Option C"
              defaultValue={question.optionC}
              onChange={(e) => setOptionC(e.target.value)}
            />
          </div>
          <div className="flex gap-y-1 flex-col">
            <p className="text-xl font-medium">Option D:</p>
            <Input
              type="text"
              placeholder="Option D"
              defaultValue={question.optionD}
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
