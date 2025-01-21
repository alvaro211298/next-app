import { useState, useEffect } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { FieldValues, Path, UseFormReturn } from "react-hook-form";

type CheckProp<T extends FieldValues> = {
  form: UseFormReturn<T>;
  title: string;
  name: Path<T>;
  label?: string;
  options: string[];
};

export default function CheckBox<T extends FieldValues>({
  form,
  name,
  label,
  options,
}: CheckProp<T>) {
  const [selectedOptions, setSelectedOptions] = useState<string[]>(
    (form.getValues(name) as string[]) || []
  );

  const handleCheckboxChange = (option: string) => {
    setSelectedOptions((prevOptions) =>
      prevOptions.includes(option)
        ? prevOptions.filter((opt) => opt !== option)
        : [...prevOptions, option]
    );
  };

  useEffect(() => {
    form.setValue(name, selectedOptions as any); // Aseguramos que el tipo sea correcto
  }, [selectedOptions, form, name]);

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex flex-col space-y-6 rounded-md border p-4 ">
          <FormLabel className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            {label}
          </FormLabel>
          {options.map((option) => (
            <FormControl key={option}>
              <div className="flex items-center space-x-2 ">
                <Checkbox
                  checked={selectedOptions.includes(option)}
                  onCheckedChange={() => handleCheckboxChange(option)}
                />
                <FormLabel className=" text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ">
                  {option}
                </FormLabel>
              </div>
            </FormControl>
          ))}
        </FormItem>
      )}
    />
  );
}
