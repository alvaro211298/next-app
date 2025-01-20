"use client";
import { createContext, useContext, ReactNode } from "react";
import {
  FieldValues,
  useForm,
  UseFormReturn,
  DefaultValues,
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ZodSchema } from "zod";

interface FormProviderProps<T extends FieldValues> {
  children: ReactNode;
  schema: ZodSchema<T>;
  defaultValues: DefaultValues<T>;
}

// Key Change: Make FormContext generic as well
const FormContext = createContext<UseFormReturn<FieldValues> | undefined>(
  undefined
);

export const useFormContext = <T extends FieldValues>(): UseFormReturn<T> => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("useFormContext must be used within a FormProvider");
  }
  return context as UseFormReturn<T>; // Type assertion here as well.
};

export const FormProvider = <T extends FieldValues>({
  children,
  schema,
  defaultValues,
}: FormProviderProps<T>) => {
  const form = useForm<T>({
    resolver: zodResolver(schema),
    defaultValues,
  });

  return (
    <FormContext.Provider value={form as UseFormReturn<FieldValues>}>
      {children}
    </FormContext.Provider>
  );
};
