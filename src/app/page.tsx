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
  );
};

export default LoginPage;
