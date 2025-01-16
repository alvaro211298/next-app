import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useFormContext } from "./FormContext";
import { FormSchema } from "@/validations/formSchema";

type StringKeys<T> = Extract<
  keyof T,
  { [K in keyof T]: T[K] extends string ? K : never }[keyof T]
>;
type StringFormKeys = StringKeys<FormSchema>;

type InputProp = {
  name: StringFormKeys;
  title: string;
};

export default function TextInput({ name, title }: InputProp) {
  const form = useFormContext();
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
