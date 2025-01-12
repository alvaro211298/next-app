"use client";
import TextInput from "@/components/TextInput";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import formSchema from "@/validations/formSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

export default function Home() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: " ",
    },
  });

  const onSubmit = form.handleSubmit((values) => {
    console.log(values);
  });

  return (
    <>
      <Card>
        <Form {...form}>
          <form onSubmit={onSubmit} className="space-y-8">
            <TextInput form={form} name="name" title="nombre" />
            <Button type="submit">Send</Button>
          </form>
        </Form>
      </Card>
    </>
  );
}
