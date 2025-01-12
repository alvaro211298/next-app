import { z } from "zod";

const formSchema = z.object({
  name: z.string(),
  //.min(3, { message: "El nombre debe tener al menos 3 caracteres" })
  //.max(50, { message: "El nombre no puede tener más de 50 caracteres" }),
});

export type FormSchema = z.infer<typeof formSchema>;

export default formSchema;
/*
reportDate: z
    .date()
    .max(new Date(), {
      message: "La fecha de nacimiento no puede ser en el futuro",
    })
    .nullable(), // Permite valores nulos (opcional)
  identificationDate: z.date(),
*/
