import db from "@/lib/db";

export const getUserByEmail = async ({ email }: { email: string }) => {
  try {
    const data = await db.user.findUnique({
      where: { email },
    });

    return data;
  } catch (error) {
    return { error };
  }
};
