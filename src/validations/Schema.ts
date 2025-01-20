import { z } from "zod";

export const formSchema = z.object({
  name: z.string().min(1, "El nombre es requerido"),
  last_name: z.string().min(1, "El apellido es requerido"),
  phone: z.string().optional(),
  email: z.string().email("Correo inválido").optional(),
  danger_place: z.string().min(1, "El lugar es requerido"),
  idDate: z.date(),
  report_date: z.date(),
  anonymous: z.boolean(),
});

export type FormSchemaType = z.infer<typeof formSchema>;
