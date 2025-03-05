import { auth } from "@/auth";
import { redirect } from "next/navigation";

import { LoginForm } from "@/components/auth/login-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const LoginPage = async () => {
  const session = await auth();

  if (session && session.user && session.user.email) {
    return redirect("/dashboard");
  }

  return (
    <div className="bg-gradient-to-b from-sky-400 to-blue-400">
      <main className="w-full min-h-screen flex items-center justify-center">
        <Card>
          <CardHeader>
            <CardTitle>Login Buzzfit Dashboard</CardTitle>
            <CardDescription>
              This is Admin Panel Only For Admin Users
            </CardDescription>
          </CardHeader>
          <CardContent>
            <LoginForm />
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default LoginPage;
