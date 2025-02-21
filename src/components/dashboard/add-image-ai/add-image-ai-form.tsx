"use client";
import { z } from "zod";
import { toast } from "sonner";
import { useTransition } from "react";
import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { ImageUpload } from "@/components/image-upload";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { category, userList } from "@/constant";
import { AiImageSchema } from "@/schema";
import { addImageLab } from "@/actions/image";

export const AddImageAiForm = () => {
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof AiImageSchema>>({
    resolver: zodResolver(AiImageSchema),
    defaultValues: {
      image: "",
      key: "",
      tags: "",
      title: "",
      url: "",
      users: "100000",
      category: "image-lab",
    },
  });

  const updateImage = (v: string) => {
    form.setValue("image", v);
  };

  const onCreate = (v: z.infer<typeof AiImageSchema>) => {
    console.log(v);

    startTransition(() => {
      addImageLab(v).then((res) => {
        if (res.error) {
          toast.error(res.error);
        }

        if (res.success) {
          toast.success(res.success);

          setTimeout(() => {
            window.location.reload();
          }, 1000);
        }
      });
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onCreate)} className="space-y-6">
        <div className="space-y-4">
          <FormField
            name="title"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xl">Title:</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    {...field}
                    placeholder="How many people love secretly?"
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            name="url"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xl">URL:</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    {...field}
                    placeholder="how-many-people-love-me (Avoid Any and All Special Characters)"
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            name="key"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xl">Key (ID):</FormLabel>
                <FormControl>
                  <Input type="text" {...field} placeholder="534886" />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            name="tags"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xl">Tags:</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    {...field}
                    placeholder="love,romance,partner (Add comma separated tags)"
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            name="category"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xl">Category:</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a Category to display" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {category.map((c) => (
                      <SelectItem key={c.label} value={c.link}>
                        {c.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />
          <FormField
            name="users"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xl">Users:</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a Users to display" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {userList.map((u) => (
                      <SelectItem key={u.value} value={u.value}>
                        {u.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />
          <Separator />
          <ImageUpload setImage={updateImage} />
        </div>
        <div className="flex items-center justify-start gap-x-4">
          <Button type="submit" disabled={isPending} size={"lg"}>
            Save
          </Button>
          <Button
            type="reset"
            variant={"outline"}
            disabled={isPending}
            size={"lg"}
          >
            Reset
          </Button>
        </div>
      </form>
    </Form>
  );
};
