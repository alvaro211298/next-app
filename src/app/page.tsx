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
import { FormProvider } from "@/components/FormContext";
import TextArea from "@/components/TextArea";

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

  /*
  const [isAnonymous, setIsAnonymous] = useState(form.getValues("anonymous"));

  useEffect(() => {
    const subscription = form.watch((value) => {
      setIsAnonymous(value.anonymous);
      if (value.anonymous) {
        // Actualiza el estado de los campos opcionales solo si cambia a true
        form.resetField("name");
        form.resetField("last_name");
        form.resetField("phone");
        form.resetField("email");
      }
    });
    return () => subscription.unsubscribe();
  }, [form]);
*/
  const onSubmit = form.handleSubmit((values) => {
    console.log(values);
  });

  return (
    <>
      <FormProvider value={form}>
        <Card className="mt-20">
          <CardTitle className="text-center m-4 text-xl">
            Reporte Voluntario de Peligro
          </CardTitle>
          <CardContent className="flex w-1/3">
            <Form {...form}>
              <form onSubmit={onSubmit} className=" space-y-4">
                <DatePicker
                  form={form}
                  name="idDate"
                  title="Fecha de identificacion"
                />

                <SelectOption
                  form={form}
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
