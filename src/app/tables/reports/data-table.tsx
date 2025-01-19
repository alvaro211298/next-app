import { Payment } from "./columns";

// Datos para la tabla
export const data: Payment[] = [
  {
    id: "1",
    code: "RVP-001",
    date: new Date("2025-10-10"),
    status: "Proceso",
    area: "Control",
    identification_area: "Hangar1",
    description: "Primer problema",
  },
  {
    id: "2",
    code: "RVP-002",
    date: new Date("2025-10-10"),
    status: "Cerrado",
    area: "Control",
    identification_area: "Hangar2",
    description: "Segundo problema",
  },
  {
    id: "3",
    code: "RVP-003",
    date: new Date("2025-10-10"),
    status: "Abierto",
    area: "Mantenimiento",
    identification_area: "Hangar3",
    description: "Tercer problema",
  },
  {
    id: "4",
    code: "RSO-001",
    date: new Date("2025-10-10"),
    status: "Cerrado",
    area: "Control",
    identification_area: "Hangar4",
    description: "Cuarto problema",
  },
  {
    id: "5",
    code: "RVP-004",
    date: new Date("2025-10-10"),
    status: "Abierto",
    area: "Control",
    identification_area: "Hangar5",
    description: "Quinto problema",
  },
];
