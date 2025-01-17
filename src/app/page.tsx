/*
import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Payment } from "./source_list/columns";

export const columns: ColumnDef<Payment>[] = [
  // ...
  {
    id: "actions",
    cell: ({ row }) => {
      const payment = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(payment.id)}
            >
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
  // ...
];
*/
"use client";
import { DatePicker } from "@/components/DatePicker";
import TextInput from "@/components/TextInput";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Form } from "@/components/ui/form";

import formSchema from "@/validations/formSchema";
import { zodResolver } from "@hookform/resolvers/zod";

import { useForm } from "react-hook-form";
import { z } from "zod";

import SelectOption from "@/components/SelectOption";
import { FormProvider } from "@/components/context/FormContext";
import TextArea from "@/components/TextArea";
import Link from "next/link";

export default function Home() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),

    defaultValues: {
      name: "",
      last_name: "",
      phone: "",
      email: "",
      danger_place: "",
      anonymous: false, // Añade este valor predeterminado
    },
  });

  const onSubmit = form.handleSubmit((values) => {
    console.log(values);
  });

  return (
    <>
      <FormProvider value={form}>
        <Card className="mt-20 ">
          <CardTitle className="text-center m-4 text-xl">
            Reporte Voluntario de Peligro
          </CardTitle>
          <CardContent className="">
            <Form {...form}>
              <form onSubmit={onSubmit} className=" space-y-4">
                <DatePicker
                  form={form}
                  name="idDate"
                  title="Fecha de identificacion"
                />

                <SelectOption
                  // form={form}
                  name="selectedArea"
                  title="Seleccionar Area"
                />

                <TextInput
                  name="danger_place"
                  title="Lugar de identificación"
                />

                <TextArea
                  name="description"
                  title="Descripcion del problema"
                  placeholder="Breve descripcion del problema"
                />
                <TextArea
                  name="consequences"
                  title="Consecuencias"
                  placeholder="Si son varias consecuencias, separales con una coma (,) "
                />

                <p>Datos Opcionales</p>
                <TextInput name="name" title="Nombre" />
                <TextInput name="last_name" title="Apellido" />
                <TextInput name="phone" title="Telefono" />
                <TextInput name="email" title="Correo" />
                <Button type="submit">Send</Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </FormProvider>
    </>
  );
}
