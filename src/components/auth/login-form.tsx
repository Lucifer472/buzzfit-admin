"use client";
import { z } from "zod";
import { useTransition } from "react";
import { LoginSchema } from "@/schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Login } from "@/actions/login";

export const LoginForm = () => {
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onLogin = (v: z.infer<typeof LoginSchema>) => {
    startTransition(() => {
      Login(v);
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onLogin)} className="space-y-6">
        <div className="space-y-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email:</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    {...field}
                    disabled={isPending}
                    placeholder="Email Address..."
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password:</FormLabel>
                <FormControl>
                  <Input
                    disabled={isPending}
                    type="password"
                    {...field}
                    placeholder="Password..."
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="space-y-2">
          <Button className="w-full" disabled={isPending}>
            Login
          </Button>
          <Button
            variant={"outline"}
            className="w-full"
            disabled={isPending}
            type="reset"
          >
            Reset
          </Button>
        </div>
      </form>
    </Form>
  );
};
