import { z } from "zod";

export const redirectionSchema = z.object({
  departament: z.string(),
  description: z.string(),
  redirection_date: z.date(),
  status: z.string(),
});

export type RedirectionFormSchema = z.infer<typeof redirectionSchema>;
