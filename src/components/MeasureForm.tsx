"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Form } from "@/components/ui/form";

import { DefaultValues } from "react-hook-form";
import { FormProvider, useFormContext } from "./context/GenericFormContex";

import measureSchema, { MeasureSchema } from "@/validations/MeasureSchema";
import TextInput from "./TextInput";
import { DatePicker } from "./DatePicker";

const defaultValues: DefaultValues<MeasureSchema> = {};

export default function MeasureForm() {
  return (
    <FormProvider<MeasureSchema>
      schema={measureSchema}
      defaultValues={defaultValues}
    >
      <FormComponent />
    </FormProvider>
  );
}

function FormComponent() {
  const form = useFormContext<MeasureSchema>();

  const onSubmit = form.handleSubmit((values) => {
    console.log(values);
  });

  return (
    <Card className=" flex flex-col justify-center items-center w-1/4 h-full flex-shrink overflow-auto m-10 bg-slate-50 ">
      <CardTitle className=" m-2 text-lg text-center">
        Formulario para el analisis de peligro
      </CardTitle>
      <CardContent className="mt-10 space-y-6">
        <Form {...form}>
          <TextInput
            form={form}
            name="description"
            title="Descripcion de la medida"
          />
          <TextInput
            form={form}
            name="monitoring_officer"
            title="Encargo del seguimiento"
          />
          <TextInput
            form={form}
            name="implemenation_officer"
            title="Encargado de implementación"
          />

          <DatePicker
            form={form}
            name="estimated_date"
            title="Fecha de estimada de ejcucion"
          />
          <DatePicker
            form={form}
            name="excution_date"
            title="Fecha de ejecucion"
          />
          <form onSubmit={onSubmit} className="space-y-4">
            <Button className="w-full mt-4" type="submit">
              Enviar
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
