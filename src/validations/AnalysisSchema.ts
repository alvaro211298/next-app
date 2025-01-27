import { z } from "zod";

enum Probability {
  Frequent = "Frecuente",
  Ocassional = "Ocasional",
  Remoto = "Remoto",
  Unlikely = "Improbable",
  HighlyUnlikely = "Muy improbable",
}

enum Severity {
  Dangerous = "Peligroso",
  Catastrophic = "Catastrafico",
  Major = "Grave",
  Minor = "Leve",
  Insignificant = "Insignificante",
}

const analysisSchema = z.object({
  probability: z.enum([
    Probability.Frequent,
    Probability.Ocassional,
    Probability.Remoto,
    Probability.Unlikely,
    Probability.HighlyUnlikely,
  ]),

  severity: z.enum([
    Severity.Insignificant,
    Severity.Minor,
    Severity.Major,
    Severity.Dangerous,
    Severity.Catastrophic,
  ]),
});

export type AnalysisSchema = z.infer<typeof analysisSchema>;

export default analysisSchema;
