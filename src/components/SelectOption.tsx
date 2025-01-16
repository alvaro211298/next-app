import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import formSchema, { FormSchema } from "@/validations/formSchema";
import { UseFormReturn } from "react-hook-form";
import { z } from "zod";
// ... other imports and component code

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

export default function SelectOption({ form, name, title }: InputProp) {
  const options = [
    { value: "operations", label: "Operaciones" },
    { value: "maintenence", label: "Mantenimiento" },
    { value: "administration", label: "Administracion y RRHH" },
    { value: "quality", label: "Control de Calidad" },
  ];
  return (
    <>
      <FormField
        control={form.control}
        name={name}
        render={({ field }) => (
          <FormItem>
            <FormLabel>{title}</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              {" "}
              {/* Important changes here */}
              <FormControl>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder={title} />{" "}
                  {/* Use title as placeholder */}
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectGroup>
                  {/* Make options dynamic if needed */}
                  {options.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
}
