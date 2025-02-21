"use server";
import { z } from "zod";
import { LoginSchema } from "@/schema";

import { signIn } from "@/auth";

export const Login = async (v: z.infer<typeof LoginSchema>) => {
  const { email, password } = v;

  await signIn("credentials", {
    email,
    password,
    redirect: true,
    redirectTo: "/dashboard",
  });

  return;
};
