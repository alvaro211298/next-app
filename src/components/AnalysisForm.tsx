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
import CheckBox from "./CheckBox";
import analysisSchema, { AnalysisSchema } from "@/validations/AnalysisSchema";
import SelectOption from "./SelectOption";

const defaultValues: DefaultValues<AnalysisSchema> = {};

export default function AnalysisForm() {
  return (
    <FormProvider<AnalysisSchema>
      schema={analysisSchema}
      defaultValues={defaultValues}
    >
      <FormComponent />
    </FormProvider>
  );
}

function FormComponent() {
  const form = useFormContext<AnalysisSchema>();
  const PROBABILITY_LIST = [
    { label: "Frequent", value: "Frecuente" },
    { label: "Ocassional", value: "Ocasional" },
    { label: "Remoto", value: "Remoto" },
    { label: "Unlikely", value: "Improbable" },
    { label: "HighlyUnlikely", value: "Muy improbable" },
  ];

  const SEVERITY_LIST = [
    { label: "Catastrophic", value: "Catastrofico" },
    { label: "Dangerous", value: "Peligroso" },
    { label: "Major", value: "Grave" },
    { label: "Minor", value: "Leve" },
    { label: "Insignificant", value: "Insignificante" },
  ];
  const onSubmit = form.handleSubmit((values) => {
    console.log(values);
  });

  return (
    <Card className=" flex flex-col w-1/5 h-screen flex-shrink overflow-auto m-6 bg-slate-50 ">
      <CardTitle className=" m-2 text-lg text-center">
        Formulario para el analisis de peligro
      </CardTitle>
      <CardContent className="mt-10 space-y-6">
        <Form {...form}>
          <SelectOption
            form={form}
            title="Frecuencia del peligro"
            name="probability"
            options={PROBABILITY_LIST}
          ></SelectOption>

          <SelectOption
            form={form}
            title="Severidad del peligro"
            name="severity"
            options={SEVERITY_LIST}
          ></SelectOption>
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
