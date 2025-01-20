"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Form } from "@/components/ui/form";

import { DefaultValues } from "react-hook-form";
import { FormProvider, useFormContext } from "./context/GenericFormContex";

import { DatePicker } from "./DatePicker";
import mandatorySchema, {
  MandatorySchema,
} from "@/validations/MandatorySchema";
import TextInput from "./TextInput";
import { TimePicker } from "./TimePicker";

const defaultValues: DefaultValues<MandatorySchema> = {
  report_date: new Date(),
  incident_date: new Date(),
  incident_place: "",
  id_pilot: "",
  id_copilot: "",
  aicraft_id: "",
  aircraft_model: "",
  flight_number: "",
  flight_origin: "",
  flight_destination: "",
  alternate_destination: "",
};

export default function MandatoryForm() {
  return (
    <FormProvider<MandatorySchema>
      schema={mandatorySchema}
      defaultValues={defaultValues}
    >
      <FormComponent />
    </FormProvider>
  );
}

function FormComponent() {
  const form = useFormContext<MandatorySchema>();

  const onSubmit = form.handleSubmit((values) => {
    console.log(values);
  });

  return (
    <Card className="flex-shrink overflow-auto m-6 bg-slate-50 h-full ">
      <CardTitle className=" m-2 text-lg text-center">
        Formulario de reporte de suceso obligatorio
      </CardTitle>
      <CardContent className="mt-10">
        <Form {...form}>
          <DatePicker
            form={form}
            name="report_date"
            title="Fecha del suceso"
          ></DatePicker>
          <DatePicker
            form={form}
            name="incident_date"
            title="Fecha del suceso"
          ></DatePicker>
          <TimePicker
            form={form}
            name="incident_time"
            title="Hora del incidente"
          />
          <TextInput
            form={form}
            name="incident_place"
            title="Lugar del incidente"
          />
          <TextInput form={form} name="id_pilot" title="Cedula del piloto" />
          <TextInput form={form} name="id_copilot" title="Cedula del piloto" />
          Datos de vuelo
          <TimePicker form={form} name="flight_time" title="Hora de vuelo" />
          <TextInput
            form={form}
            name="aicraft_id"
            title="Matricula de la aereonave"
          />
          <TextInput
            form={form}
            name="aircraft_model"
            title="Modelo de la aereonave"
          />
          <TextInput
            form={form}
            name="flight_number"
            title="Nº Numero de vuelo"
          />
          <TextInput
            form={form}
            name="flight_origin"
            title="Origen del vuelo"
          />
          <TextInput
            form={form}
            name="flight_destination"
            title="Destino del vuelo"
          />
          <TextInput
            form={form}
            name="alternate_destination"
            title="Destino alterno del vuelo"
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
