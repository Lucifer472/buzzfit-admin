import { redirect } from "next/navigation";

import { auth } from "@/auth";
import { getUserByEmail } from "@/data/user";

import { Navbar } from "@/components/dashboard/navigation/navbar";

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await auth();

  if (!session || !session.user || !session.user.email) {
    return redirect("/");
  }

  const user = await getUserByEmail({ email: session.user.email });

  if (!user) {
    return redirect("/");
  }

  return (
    <main className="max-w-screen-xl mx-auto px-4 space-y-12 w-full min-h-screen">
      <Navbar />
      {children}
    </main>
  );
};

export default DashboardLayout;
