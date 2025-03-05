import { redirect } from "next/navigation";

import { auth } from "@/auth";
import { getUserByEmail } from "@/data/user";

import { Navbar } from "@/components/dashboard/navigation/navbar";

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await auth();

  if (!session || !session.user || !session.user.email) {
    return redirect("/login");
  }

  const user = await getUserByEmail({ email: session.user.email });

  if (!user) {
    return redirect("/");
  }

  return (
    <div className="bg-gradient-to-b from-sky-400 to-blue-400">
      <main className="max-w-screen-xl mx-auto px-4 space-y-12 w-full min-h-screen">
        <Navbar />
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
