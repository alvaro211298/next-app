import { z } from "zod";

export const redirectionSchema = z.object({
  departament: z.string().min(3),
  description: z.string().min(3),
  redirection_date: z.date(),
  status: z.string().min(3),
});

export type RedirectionFormSchema = z.infer<typeof redirectionSchema>;
