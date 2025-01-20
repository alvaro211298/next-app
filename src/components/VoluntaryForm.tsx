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
import SelectOption from "./SelectOption";
import TextArea from "./TextArea";
import { useState } from "react";

const defaultValues: DefaultValues<VoluntarySchema> = {
  name: "",
  last_name: "",
  phone: "",
  report_date: new Date(),
  identification_date: new Date(),
};

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
  const [showOptionalFields, setShowOptionalFields] = useState(true);

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
            <DatePicker
              form={form}
              name="identification_date"
              title="Fecha de identificacion"
            />
            <DatePicker
              form={form}
              name="report_date"
              title="Fecha del reporte"
            />
            <SelectOption
              form={form}
              name="selectedArea"
              title="Area afectada"
            />
            <TextInput
              form={form}
              name="danger_place"
              title="Lugar donde se identifico"
            />
            <TextArea
              form={form}
              name="description"
              title="Descripcion del problema"
              placeholder="Breve descripcion del problema"
            />
            <TextArea
              form={form}
              name="consequences"
              title="Posible consecuencias segun su criterio"
              placeholder="Si son varias consecuencias, separar por una coma (,)"
            />
            <TextInput form={form} name="name" title="Nombre" />
            <div>
              <label>
                <input
                  type="checkbox"
                  checked={showOptionalFields}
                  onChange={() => setShowOptionalFields(!showOptionalFields)}
                />
                ¿Desea realizar su reporte de forma anonima?
              </label>
            </div>
            {showOptionalFields && (
              <>
                <TextInput form={form} name="name" title="Nombre" />
                <TextInput form={form} name="last_name" title="Apellido" />
                <TextInput form={form} name="phone" title="Teléfono" />
                <TextInput
                  form={form}
                  name="email"
                  title="Correo electrónico"
                />
              </>
            )}
            <Button className="w-full" type="submit">
              Enviar
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
