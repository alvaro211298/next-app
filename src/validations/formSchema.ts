import { z } from "zod";

const formSchema = z.object({
  name: z.string(),
  last_name: z.string(),
  phone: z.string(),
  email: z.string().email().or(z.literal("")),
  idDate: z
    .date()
    .refine((val) => !isNaN(val.getTime()), { message: "Invalid Date" }),
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
