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
};
// EN EL FUTURO DEBO AGREGAR COMO PROP UN OBJETO CON VALUE - LABEL
// PAR HACER DINAMICO Y REUTILIZABLE EL COMPONENTE SELECT OPTION
export default function SelectOption<T extends FieldValues>({
  form,
  name,
  title,
}: SelectProp<T>) {
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
