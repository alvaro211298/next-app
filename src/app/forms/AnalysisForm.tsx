"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { CalendarIcon } from "lucide-react";
import { es } from "date-fns/locale";

import { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { format } from "date-fns";

import { Separator } from "@radix-ui/react-select";

const FormSchema = z.object({
  severity: z.string(),
  probability: z.string(),
});

type FormSchemaType = z.infer<typeof FormSchema>;

interface FormProps {
  onClose: () => void;
}
// { onClose }: FormProps
// lo de arriba va en prop
export default function VoluntaryReportForm() {
  const form = useForm<FormSchemaType>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      severity: "",
      probability: "",
    },
  });

  const onSubmit = (data: FormSchemaType) => {
    console.log(data);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col space-y-3"
      >
        <FormLabel className="text-lg text-center m-2">
          Análisis del seguimiento
        </FormLabel>

        <FormField
          control={form.control}
          name="severity"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Severidad</FormLabel>
              <FormControl>
                <Input placeholder="Descripcion " {...field} />
              </FormControl>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="probability"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Probabilidad</FormLabel>
              <FormControl>
                <Input placeholder="Descripcion " {...field} />
              </FormControl>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />
        <div className="flex justify-between items-center gap-x-4">
          <Separator className="flex-1" />
          <p className="text-muted-foreground">SIGEAC</p>
          <Separator className="flex-1" />
        </div>
        <Button>Enviar reporte</Button>
      </form>
    </Form>
  );
}
