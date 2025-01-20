import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Form } from "@/components/ui/form";

import { DefaultValues } from "react-hook-form";
import { FormProvider, useFormContext } from "./context/GenericFormContex";
import {
  RedirectionFormSchema,
  redirectionSchema,
} from "@/validations/RedirectionSchema";
import TextInput from "./TextInput";
import { DatePicker } from "./DatePicker";

const defaultValues: DefaultValues<RedirectionFormSchema> = {
  departament: "",
  description: "",
  redirection_date: new Date(),
  status: "Process",
};

export default function RedirectionForm() {
  return (
    <FormProvider<RedirectionFormSchema>
      schema={redirectionSchema}
      defaultValues={defaultValues}
    >
      <FormComponent />
    </FormProvider>
  );
}

function FormComponent() {
  const form = useFormContext<RedirectionFormSchema>();

  const onSubmit = form.handleSubmit((values) => {
    console.log(values);
  });

  return (
    <Card className="flex-shrink overflow-auto bg-orange-500">
      <CardTitle className=" m-2 text-lg text-center">
        Formulario de redireccion de reporte
      </CardTitle>
      <CardContent className="mt-10">
        <Form {...form}>
          <form onSubmit={onSubmit} className="space-y-4">
            <TextInput
              form={form}
              name="departament"
              title="Departamento"
            ></TextInput>
            <TextInput
              form={form}
              name="description"
              title="Descripcion"
            ></TextInput>

            <DatePicker
              form={form}
              name="redirection_date"
              title="Rediccionar al departamento de: "
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
