"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";

import { Quiz } from "@prisma/client";
import { cn } from "@/lib/utils";

export const QuizComponent = ({ data }: { data: Quiz }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(false);

  const [select, setSelect] = useState<number[]>([]);

  const router = useRouter();

  type question = {
    img: string;
    questions: string;
    answers: string[];
  };

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const questions: question[] = data.quiz?.map((q) => {
    const answers = [q.optionA, q.optionB];

    if (q.optionC) {
      answers.push(q.optionC);
    }

    if (q.optionD) {
      answers.push(q.optionD);
    }

    return {
      img: q.img,
      question: q.question,
      answers,
    };
  });

  const handleSelect = (num: number) => {
    const arr = [...select];
    arr[currentIndex] = num;

    setSelect(arr);
  };

  const handleSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      router.push("?result=" + Math.floor(Math.random() * 3 + 1));
    }, 2000);
  };

  return (
    <div className="w-full">
      {!loading && (
        <div className="my-4 bg-white space-y-4 px-4" id="quiz-container">
          <div className="flex items-center justify-start gap-x-2">
            <p className="text-3xl font-semibold text-gray-600">
              <span id="currentIndex" className="text-rose-400">
                {currentIndex + 1}
              </span>
              /<span>{questions.length}</span>
            </p>
            <p className="text-xl font-medium text-gray-500 px-3 py-2 bg-gray-600 bg-opacity-10">
              Single Choice
            </p>
          </div>
          <h2 className="text-3xl font-bold text-gray-900">
            {questions[currentIndex].questions}
          </h2>
          <Image
            id="questionImg"
            src={questions[currentIndex].img}
            alt="quiz"
            width={900}
            height={473}
            className="object-cover aspect-auto rounded-xl"
          />

          <div className="grid grid-cols-2 w-full gap-4">
            {questions[currentIndex].answers.map((option, index) => (
              <button
                className={cn(
                  "col-span-1 w-full py-8 text-center text-3xl font-medium bg-white border-[12px] border-gray-100 rounded-md cursor-pointer",
                  select[currentIndex] === index + 1 && "border-blue-400"
                )}
                key={index}
                onClick={() => handleSelect(index + 1)}
              >
                {option}
              </button>
            ))}
          </div>

          <div className="flex justify-between mt-4">
            <button
              className="px-8 py-4 text-2xl disabled:bg-gray-100 disabled:text-gray-600 text-rose-600 bg-rose-100 rounded-md"
              disabled={currentIndex === 0}
              onClick={() => setCurrentIndex((prev) => prev - 1)}
            >
              ← Previous
            </button>
            {currentIndex + 1 !== questions.length && (
              <button
                className="px-8 py-4 text-2xl disabled:bg-gray-100 disabled:text-gray-600 text-rose-600 bg-rose-100 rounded-md"
                disabled={!select[currentIndex]}
                onClick={() => setCurrentIndex((prev) => prev + 1)}
              >
                Next →
              </button>
            )}
          </div>

          {currentIndex + 1 === questions.length && (
            <button
              className="px-8 py-4 text-2xl w-full text-center disabled:bg-gray-50 disabled:text-gray-600 text-rose-600 bg-rose-100 rounded-md"
              onClick={handleSubmit}
              disabled={!select[currentIndex]}
            >
              Submit
            </button>
          )}
        </div>
      )}

      {loading && (
        <div className="flex flex-col items-center justify-center min-h-[450px] px-12 py-12">
          <Image
            src="/assets/images/loading.gif"
            alt="loading"
            width={970}
            height={473}
            className="w-full aspect-auto"
          />
          <h3 className="text-3xl font-medium mt-12">Loading...</h3>
        </div>
      )}
    </div>
  );
};
