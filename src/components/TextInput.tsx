import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { FieldValues, Path, UseFormReturn } from "react-hook-form";

type InputProp<T extends FieldValues> = {
  form: UseFormReturn<T>;
  name: Path<T>; // Cambia a Path<T>
  title: string;
};

export default function TextInput<T extends FieldValues>({
  form,
  name,
  title,
}: InputProp<T>) {
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
