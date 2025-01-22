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

import { FieldValues, Path, UseFormReturn } from "react-hook-form";
// ... other imports and component code

type SelectProp<T extends FieldValues> = {
  form: UseFormReturn<T>;
  name: Path<T>; // Cambia a Path<T>
  title: string;
  options: { label: string; value: string }[];
};
// EN EL FUTURO DEBO AGREGAR COMO PROP UN OBJETO CON VALUE - LABEL
// PAR HACER DINAMICO Y REUTILIZABLE EL COMPONENTE SELECT OPTION
export default function SelectOption<T extends FieldValues>({
  form,
  name,
  title,
  options,
}: SelectProp<T>) {
  return (
    <>
      <FormField
        control={form.control}
        name={name}
        render={({ field }) => (
          <FormItem>
            <FormLabel>{title}</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder={title} />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectGroup>
                  {options.map((option) => (
                    <SelectItem key={option.label} value={option.value}>
                      {option.value}
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
