"use server";

import { z } from "zod";

import db from "@/lib/db";

import { QuizSchema } from "@/schema";

export const addQuiz = async (v: z.infer<typeof QuizSchema>) => {
  const validateFields = QuizSchema.safeParse(v);

  if (!validateFields.success) {
    console.log(validateFields.error);
    return { error: "Invalid Fields" };
  }

  const { category, img, tags, title, url, users, ans1, ans2, ans3, quiz } =
    validateFields.data;

  try {
    await db.quiz.create({
      data: {
        title,
        ans1,
        ans2,
        ans3,
        category,
        img,
        quiz,
        url,
        users,
        tags,
      },
    });

    return { success: "Data Added Successfully!" };
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong!" };
  }
};
