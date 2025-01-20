"use client";
import { DatePicker } from "@/components/DatePicker";
import TextInput from "@/components/TextInput";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Form } from "@/components/ui/form";

import voluntarySchema, {
  VoluntarySchema,
} from "@/validations/voluntarySchema";
import { DefaultValues } from "react-hook-form";
import { FormProvider, useFormContext } from "./context/GenericFormContex";

const defaultValues: DefaultValues<VoluntarySchema> = {};

export default function RedirectionForm() {
  return (
    <FormProvider<VoluntarySchema>
      schema={voluntarySchema}
      defaultValues={defaultValues}
    >
      <FormComponent />
    </FormProvider>
  );
}

function FormComponent() {
  const form = useFormContext<VoluntarySchema>();

  const onSubmit = form.handleSubmit((values) => {
    console.log(values);
  });

  return (
    <Card className="flex-shrink overflow-auto bg-orange-500">
      <CardTitle className=" m-2 text-lg text-center">
        Formulario de reporte voluntario
      </CardTitle>
      <CardContent className="mt-10">
        <Form {...form}>
          <form onSubmit={onSubmit} className="space-y-4">
            <TextInput form={form} name="name" title="Nombre"></TextInput>
            <TextInput
              form={form}
              name="last_name"
              title="Apellido"
            ></TextInput>

            <DatePicker
              form={form}
              name="identification_date"
              title="Fecha de identificacion"
            />

            <Button className="w-full" type="submit">
              Enviar
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
