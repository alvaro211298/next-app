import formSchema from "@/validations/voluntarySchema";
import { createContext, useContext, ReactNode } from "react";
import { UseFormReturn } from "react-hook-form";
import { z } from "zod";

interface FormProviderProps {
  children: ReactNode;
  value: UseFormReturn<z.infer<typeof formSchema>>;
}

const FormContext = createContext<
  UseFormReturn<z.infer<typeof formSchema>> | undefined
>(undefined);

export const useFormContext = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("useFormContext must be used within a FormProvider");
  }
  return context;
};

export const FormProvider = ({ children, value }: FormProviderProps) => {
  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
};
