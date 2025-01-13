import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import formSchema, { FormSchema } from "@/validations/formSchema";
import { UseFormReturn } from "react-hook-form";
import { z } from "zod";

type StringKeys<T> = Extract<
  keyof T,
  { [K in keyof T]: T[K] extends string ? K : never }[keyof T]
>;
type StringFormKeys = StringKeys<FormSchema>;

type InputProp = {
  form: UseFormReturn<z.infer<typeof formSchema>>;
  name: StringFormKeys;
  title: string;
};

export default function TextInput({ form, name, title }: InputProp) {
  return (
    <>
      <FormField
        control={form.control}
        name={name}
        render={({ field }) => (
          <FormItem>
            <FormLabel>{title}</FormLabel>
            <FormControl>
              <Input id={name} placeholder={title} {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
}
