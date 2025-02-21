import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

import { LoginSchema } from "@/schema";
import db from "@/lib/db";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        const validatedFields = LoginSchema.safeParse(credentials);

        if (!validatedFields.success) {
          throw new Error("Invalid Credentials");
        }

        const { email, password } = validatedFields.data;

        const user = await db.user.findUnique({
          where: { email },
        });

        if (!user) throw new Error("Invalid Credentials");

        if (!user.password || user.password !== password) {
          throw new Error("Invalid Credentials");
        }

        return user;
      },
    }),
  ],
});
