"use client";
import { DatePicker } from "@/components/DatePicker";
//import { DatePicker } from "@/components/DatePicker";
import TextInput from "@/components/TextInput";
import { Button } from "@/components/ui/button";
//import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import {
  Form,
  /*
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  */
  //FormMessage,
} from "@/components/ui/form";

import /*
  Popover,
  PopoverContent,
  PopoverTrigger,

*/
"@/components/ui/popover";
//import { cn } from "@/lib/utils";

// import { Input } from "@/components/ui/input";
import formSchema from "@/validations/formSchema";
import { zodResolver } from "@hookform/resolvers/zod";
//import { format } from "date-fns";
//import { CalendarIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Home() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),

    defaultValues: {
      name: "",
      last_name: "",
      phone: "",
      email: "",
    },
  });

  const onSubmit = form.handleSubmit((values) => {
    console.log(values);
    const { idDate } = values;
    console.log(idDate);
    console.log("-", idDate.getMonth(), "-", idDate.getFullYear());
  });

  return (
    <>
      <Card className="flex flex-col h-screen w-screen justify-center items-center">
        <CardTitle className="text-center m-4 text-xl">
          Reporte Voluntario de Peligro
        </CardTitle>
        <CardContent className="flex w-1/3">
          <Form {...form}>
            <form onSubmit={onSubmit} className="space-y-8">
              <DatePicker
                form={form}
                name="idDate"
                title="Fecha de identificacion"
              />
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Operaciones</SelectItem>
                  <SelectItem value="dark">Mantenimeinto</SelectItem>
                  <SelectItem value="system">Plataforma</SelectItem>
                </SelectContent>
              </Select>
              <TextInput form={form} name="name" title="Nombre" />
              <TextInput form={form} name="last_name" title="Apellido" />
              <TextInput form={form} name="phone" title="Telefono" />
              <TextInput form={form} name="email" title="Correo" />

              <Button type="submit">Send</Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </>
  );
}
