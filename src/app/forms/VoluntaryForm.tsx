"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { es } from "date-fns/locale";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const FormSchema = z.object({
  identification_date: z
    .date()
    .refine((val) => !isNaN(val.getTime()), { message: "Invalid Date" }),
  report_date: z
    .date()
    .refine((val) => !isNaN(val.getTime()), { message: "Invalid Date" }),

  identification_area: z.enum([
    "Operacional",
    "Mantenimiento",
    "Administracion y RRHH",
    "Control de calidad",
    "Tecnologia e informacion",
  ]),
  danger_place: z.string().min(5),
  description: z.string().min(5),
  consequences: z.string().min(5),
  name: z.string().optional(),
  last_name: z.string().optional(),
  phone: z
    .string()
    .regex(/^\d{11}$/, {
      message: "El número telefónico debe tener exactamente 11 dígitos",
    })
    .optional(),
  email: z.string().email().optional(),
});

type FormSchemaType = z.infer<typeof FormSchema>;

interface FormProps {
  onClose: () => void;
}
// { onClose }: FormProps
// lo de arriba va en prop
export function VoluntaryReportForm() {
  const options = [
    "Mantenimiento",
    "Administracion y RRHH",
    "Operacional",
    "Control de calidad",
    "Técnologia e informacion",
  ];

  const form = useForm<FormSchemaType>({
    resolver: zodResolver(FormSchema),
    defaultValues: {},
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
          Formulario de identificación de peligro
        </FormLabel>

        <FormField
          control={form.control}
          name="identification_date"
          render={({ field }) => (
            <FormItem className="flex flex-col mt-2.5">
              <FormLabel>Fecha de identificacion</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-[240px] pl-3 text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        format(field.value, "PPP", {
                          locale: es,
                        })
                      ) : (
                        <span>Seleccione una fecha...</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) =>
                      date > new Date() || date < new Date("1900-01-01")
                    }
                    initialFocus
                    locale={es}
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="report_date"
          render={({ field }) => (
            <FormItem className="flex flex-col mt-2.5">
              <FormLabel>Fecha del reporte</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-[240px] pl-3 text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        format(field.value, "PPP", {
                          locale: es,
                        })
                      ) : (
                        <span>Seleccione una fecha...</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) =>
                      date > new Date() || date < new Date("1900-01-01")
                    }
                    initialFocus
                    locale={es}
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="identification_area"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Área donde se identifico el peligro</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Area de identificación" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectGroup>
                    {options.map((option) => (
                      <SelectItem key={key} value={option.value}>
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
