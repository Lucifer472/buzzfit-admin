import { z } from "zod";

export const LoginSchema = z.object({
  email: z.string().min(1),
  password: z.string().min(1),
});

export const QuizSchema = z.object({
  title: z.string().min(3),
  img: z.string().min(1),
  url: z.string().min(1),
  tags: z.string(),
  category: z.string().min(1),
  users: z.string(),

  quiz: z.any(),
  ans1: z.any(),
  ans2: z.any(),
  ans3: z.any(),
});

export const AiImageSchema = z.object({
  title: z.string().min(3),
  image: z.string().min(1),
  url: z.string().min(1),
  tags: z.string(),
  users: z.string().min(1),
  key: z.string().min(1),
  category: z.string().min(1),
});
