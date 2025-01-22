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
enum Result {
  Acceptable = "Aceptable",
  Tolerable = "Tolerable",
  Intolerable = "Intolerable",
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

  /*
  result: z.enum([Result.Acceptable, Result.Tolerable, Result.Intolerable]),
  */
});

export type AnalysisSchema = z.infer<typeof analysisSchema>;

export default analysisSchema;
