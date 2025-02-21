"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { QuestionModal } from "./question-modal";

import { useQuestionEditModal, useQuestionModal } from "./state";
import { QuestionType } from "./type";
import { QuestionEditModal } from "./question-edit-modal";

export const QuizQuestion = ({
  setData,
}: {
  setData: (v: QuestionType[]) => void;
}) => {
  const [questions, setQuestions] = useState<QuestionType[] | null>(null);
  const [edit, setEdit] = useState<number | null>(null);

  const { setIsOpen } = useQuestionModal();
  const { setIsOpen: setIsOpenEdit } = useQuestionEditModal();

  useEffect(() => {
    if (questions) {
      setData(questions);
    }
  }, [questions, setData]);

  const handleAddQuestion = (v: QuestionType) => {
    setQuestions((prev) => (prev ? [...prev, v] : [v]));
  };

  const handleRemoveQuestion = (index: number) => {
    if (!questions) {
      return;
    }

    const updatedQuestions = questions.filter((_, i) => i !== index);
    // Update the state with the new array
    setQuestions(updatedQuestions);

    toast.success("Question Removed!");
  };

  const handleEditQuestion = (v: QuestionType, index: number) => {
    if (!questions) {
      return;
    }

    const data = questions;

    data[index] = v;

    setQuestions(questions);

    toast.success("Question Removed!");
  };

  return (
    <div className="w-full">
      <QuestionModal setQuestion={handleAddQuestion} />
      <QuestionEditModal
        setQuestion={handleEditQuestion}
        index={edit}
        question={questions?.[edit!]}
        setEdit={setEdit}
      />
      <h3 className="text-xl font-medium mb-4">Questions:</h3>
      <div className="flex flex-col w-full gap-y-4">
        {questions && questions.length > 0 ? (
          questions.map((q, index) => (
            <div
              key={index}
              className="w-full border rounded-md flex items-center justify-start gap-x-4 p-2"
            >
              <p className="rounded-full flex-shrink-0 size-8 border flex items-center justify-center">
                {index + 1}
              </p>
              <p className="w-full">{q.que}</p>
              <Button
                type="button"
                variant={"outline"}
                className="flex-shrink-0"
                onClick={() => {
                  setEdit(index);
                  setIsOpenEdit(true);
                }}
              >
                ✏️
              </Button>
              <Button
                type="button"
                variant={"outline"}
                className="flex-shrink-0"
                onClick={() => handleRemoveQuestion(index)}
              >
                ❌
              </Button>
            </div>
          ))
        ) : (
          <p className="text-center text-xl font-medium px-2 py-4 border rounded-md">
            No Question Added Please Add Questions
          </p>
        )}
      </div>
      <div className="flex items-center justify-end w-full gap-x-4 mt-4">
        <Button type="button" size={"lg"} onClick={() => setIsOpen(true)}>
          Add Question
        </Button>
      </div>
    </div>
  );
};
