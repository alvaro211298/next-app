import { Identification } from "./columns";

// Datos para la tabla

/**
 * export type Payment = {
  hazard: string;
  hazard_descripion: string;
  consequences: string;
  consequence_to_evaluate: string;
  hazard_type: string;
  status: "Abierto" | "Proceso" | "Cerrado";
};
 */
export const data: Identification[] = [
  {
    id: "1",
    report_date: new Date("2025-10-10"),
    identification_date: new Date("2023-12-12"),
    hazard: "Falta de extintor",
    hazard_description: "No existen extintores en el hangar 8",
    consequences:
      "Perdida de vida humana, perdida de aereonave , Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque minus labore dolor hic eum dicta porro, saepe modi quibusdam? Dolorum itaque sed eum ab dolore labore cumque, deserunt facilis aut.",
    consequence_to_evaluate: "perdidade de aereonave",
    hazard_type: "Organizacional",
    reporter: "Anonimo",
    status: "Abierto",
  },
];
