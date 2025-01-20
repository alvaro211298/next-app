"use client";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { useFormContext } from "./context/FormContext";
import { FormSchema } from "@/validations/voluntarySchema";

type StringKeys<T> = Extract<
  keyof T,
  { [K in keyof T]: T[K] extends string ? K : never }[keyof T]
>;
type StringFormKeys = StringKeys<FormSchema>;

type InputProp = {
  name: StringFormKeys;
  title: string;
  placeholder: string;
};

export default function TextArea({ name, title, placeholder }: InputProp) {
  const form = useFormContext();
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{title}</FormLabel>
          <FormControl>
            <Textarea
              placeholder={placeholder}
              className="resize-none"
              {...field}
            />
          </FormControl>

          <FormMessage />
        </FormItem>
      )}
    />
  );
}
