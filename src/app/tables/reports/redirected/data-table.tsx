import { Payment } from "./columns";

// Datos para la tabla
export const data: Payment[] = [
  {
    id: "1",
    date: new Date("2025-10-10"),
    status: "Proceso",
    area: "Control",
    identification_area: "Hangar1",
    description: "Primer problema",
    redirected: "Departamento1",
  },
  {
    id: "2",
    date: new Date("2025-10-10"),
    status: "Cerrado",
    area: "Control",
    identification_area: "Hangar2",
    description: "Segundo problema",
    redirected: "Departamento2",
  },
  {
    id: "3",
    date: new Date("2025-10-10"),
    status: "Abierto",
    area: "Mantenimiento",
    identification_area: "Hangar3",
    description: "Tercer problema",
    redirected: "Departamento3",
  },
  {
    id: "4",
    date: new Date("2025-10-10"),
    status: "Cerrado",
    area: "Control",
    identification_area: "Hangar4",
    description: "Cuarto problema",
    redirected: "Departamento4",
  },
  {
    id: "5",
    date: new Date("2025-10-10"),
    status: "Abierto",
    area: "Control",
    identification_area: "Hangar5",
    description: "Quinto problema",
    redirected: "Departamento5",
  },
];
