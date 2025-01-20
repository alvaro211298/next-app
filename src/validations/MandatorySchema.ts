import { z } from "zod";

const mandatorySchema = z.object({
  report_date: z
    .date()
    .refine((val) => !isNaN(val.getTime()), { message: "Invalid Date" }),

  incident_date: z
    .date()
    .refine((val) => !isNaN(val.getTime()), { message: "Invalid Date" }),

  incident_time: z.string().nonempty("Debes seleccionar una area"),

  incident_place: z.string(),

  id_pilot: z.string(),

  id_copilot: z.string(),

  time_flight: z
    .string()
    .refine((val) => /^([01]\d|2[0-3]):?([0-5]\d)$/.test(val), {
      message: "La hora debe estar en formato HH:MM",
    }),
});

export type MandatorySchema = z.infer<typeof mandatorySchema>;

export default mandatorySchema;
