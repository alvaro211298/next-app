import { z } from "zod";

const measureSchema = z.object({
  description: z.string(),
  monitoring_officer: z.string(),
  implemenation_officer: z.string(),
  estimated_date: z
    .date()
    .refine((val) => !isNaN(val.getTime()), { message: "Invalid Date" }),
  excution_date: z
    .date()
    .refine((val) => !isNaN(val.getTime()), { message: "Invalid Date" }),
});

export type MeasureSchema = z.infer<typeof measureSchema>;

export default measureSchema;
