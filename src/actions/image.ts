"use server";

import { z } from "zod";
import db from "@/lib/db";

import { AiImageSchema } from "@/schema";

export const addImageLab = async (v: z.infer<typeof AiImageSchema>) => {
  const validatedFields = AiImageSchema.safeParse(v);

  if (!validatedFields.success) {
    return { error: "Invalid Fields" };
  }

  const { category, image, key, tags, title, url, users } =
    validatedFields.data;

  try {
    await db.imageLab.create({
      data: {
        category,
        image,
        key,
        tags,
        title,
        url,
        users,
      },
    });

    return { success: "Added Image Lab" };
  } catch (error) {
    console.log(error);

    return { error: "Something went wrong!" };
  }
};
