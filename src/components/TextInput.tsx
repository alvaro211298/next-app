import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import formSchema from "@/validations/formSchema";
import { UseFormReturn } from "react-hook-form";
import { z } from "zod";

type FormSchema = z.infer<typeof formSchema>;

type prop = {
  form: UseFormReturn<z.infer<typeof formSchema>>;
  name: keyof FormSchema;
  title: string;
};

export default function voluntaryReport({ form, name, title }: prop) {
  return (
    <>
      <FormField
        control={form.control}
        name={name}
        render={({ field }) => (
          <FormItem>
            <FormLabel>{title}</FormLabel>
            <FormControl>
              <Input placeholder={title} {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
}
