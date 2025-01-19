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

export default function VoluntaryForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      last_name: "",
      phone: "",
      email: "",
      danger_place: "",
      report_date: new Date(),
      anonymous: false, // Añade este valor predeterminado
    },
  });

  const onSubmit = form.handleSubmit((values) => {
    console.log(values);
  });

  return (
    <>
      <FormProvider value={form}>
        <Card className=" flex-shrink overflow-auto bg-orange-500">
          <CardTitle className="m-2 text-lg text-center">
            Reporte Voluntario de Peligro
          </CardTitle>
          <CardContent className="mt-10">
            <Form {...form}>
              <form onSubmit={onSubmit} className="space-y-4">
                <DatePicker
                  form={form}
                  name="idDate"
                  title="Fecha de identificacion"
                />
                <DatePicker
                  form={form}
                  name="report_date"
                  title="Fecha del reporte"
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
                <Button className="w-full" type="submit">
                  Enviar
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </FormProvider>
    </>
  );
}
