"use client";

import { Checkbox } from "@/components/ui/checkbox";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useFormContext } from "./context/FormContext";

type CheckProp = {
  label: string;
  description?: string;
};

export default function CheckBox({ label, description }: CheckProp) {
  const form = useFormContext();
  return (
    <FormField
      control={form.control}
      name="anonymous"
      render={({ field }) => (
        <FormItem className="flex items-center space-x-2 rounded-md border p-4">
          <FormControl>
            <Checkbox checked={field.value} onCheckedChange={field.onChange} />
          </FormControl>
          <FormLabel className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            {label}
          </FormLabel>
          <FormMessage>{description}</FormMessage>
        </FormItem>
      )}
    />
  );
}
