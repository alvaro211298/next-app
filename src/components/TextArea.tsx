"use client";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { FieldValues, Path, UseFormReturn } from "react-hook-form";

type TextAreaProp<T extends FieldValues> = {
  form: UseFormReturn<T>;
  name: Path<T>; // Cambia a Path<T>
  title: string;
  placeholder: string;
};

export default function TextArea<T extends FieldValues>({
  form,
  name,
  title,
  placeholder,
}: TextAreaProp<T>) {
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
