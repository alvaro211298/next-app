import { format, parse } from "date-fns";
import { es } from "date-fns/locale";
import { z } from "zod";
/*
enum incidentType {
  RED = "El avion aterrizan quedandose solo cn el combustible de reserva o menos",
  BLUE = "blue",
  GREEN = "green",
}
*/
const mandatorySchema = z.object({
  report_date: z
    .date()
    .refine((val) => !isNaN(val.getTime()), { message: "Invalid Date" }),

  incident_date: z
    .date()
    .refine((val) => !isNaN(val.getTime()), { message: "Invalid Date" })
    .optional(),

  incident_time: z.date().refine((date) => !isNaN(date.getTime()), {
    message: "Debe ser una fecha válida",
  }),
  incident_place: z.string(),

  id_pilot: z.string(),

  id_copilot: z.string(),

  flight_time: z.date().refine((date) => !isNaN(date.getTime()), {
    message: "Debe ser una hora válida",
  }),
  aicraft_id: z.string(),
  aircraft_model: z.string(),
  flight_number: z.string(),
  flight_origin: z.string(),
  flight_destination: z.string(),
  alternate_destination: z.string(),
  incident: z.array(z.string()),
  /*
  

  

  flight_time: z.string().optional() /*
    .refine((val) => /^([01]\d|2[0-3]):?([0-5]\d)$/.test(val), {
      message: "La hora debe estar en formato HH:MM",
    }),
,
  aicraft_id: z.string().optional(),
  aicraft_model: z.string().optional(),
  flight_number: z.string().optional(),
  flight_origin: z.string().optional(),
  flight_distination: z.string().optional(),
  alternate_destination: z.string().optional(),
  //tipoDocumento: z.nativeEnum(incidentType), 
  // */
});

export type MandatorySchema = z.infer<typeof mandatorySchema>;

export default mandatorySchema;
