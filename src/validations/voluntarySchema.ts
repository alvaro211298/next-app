import { z } from "zod";

const voluntarySchema = z.object({
  identification_date: z
    .date()
    .refine((val) => !isNaN(val.getTime()), { message: "Invalid Date" }),
  report_date: z
    .date()
    .refine((val) => !isNaN(val.getTime()), { message: "Invalid Date" }),

  selectedArea: z.string().nonempty("Debes seleccionar una area"),
  danger_place: z
    .string()
    .nonempty(
      "Debes indicar el area donde de identificacion del peligro ej: Plataforma"
    ),
  description: z.string(),
  consequences: z.string(),
  anonymous: z.boolean().default(false).optional(),
  name: z.string(),
  last_name: z.string(),
  phone: z.string(),
  email: z.string().email().or(z.literal("")),
});

export type VoluntarySchema = z.infer<typeof voluntarySchema>;

export default voluntarySchema;

//Schemas para el formulario del análisis
/*
const analysisSchema = z.object({
  probability: z.enum([
    "frequent",
    "occasional",
    "remote",
    "unlikely",
    "highly_unlikely",
  ]),
  severity: z.enum([
    "insignificant",
    "minor",
    "major",
    "dangerous",
    "catastrophic",
  ]),
});

export type AnalysisSchema = z.infer<typeof analysisSchema>;
*/
