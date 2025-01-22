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
    image:
      "https://imagenes.elpais.com/resizer/v2/PQWWIJMQLJEX7AB4OQMLO2XFIQ.jpg?auth=9dc6ff54cd645a2d008e0dbcf86c2ba00baf1ee158cf0472da64972ccdb49e5b&width=1200",
  },
  {
    id: "2",
    code: "RVP-002",
    date: new Date("2025-10-10"),
    status: "Cerrado",
    area: "Control",
    identification_area: "Hangar2",
    description: "Segundo problema",
    image:
      "https://imagenes.elpais.com/resizer/v2/PQWWIJMQLJEX7AB4OQMLO2XFIQ.jpg?auth=9dc6ff54cd645a2d008e0dbcf86c2ba00baf1ee158cf0472da64972ccdb49e5b&width=1200",
  },
  {
    id: "3",
    code: "RVP-003",
    date: new Date("2025-10-10"),
    status: "Abierto",
    area: "Mantenimiento",
    identification_area: "Hangar3",
    description: "Tercer problema",
    image:
      "https://imagenes.elpais.com/resizer/v2/PQWWIJMQLJEX7AB4OQMLO2XFIQ.jpg?auth=9dc6ff54cd645a2d008e0dbcf86c2ba00baf1ee158cf0472da64972ccdb49e5b&width=1200",
  },
  {
    id: "4",
    code: "RSO-001",
    date: new Date("2025-10-10"),
    status: "Cerrado",
    area: "Control",
    identification_area: "Hangar4",
    description: "Cuarto problema",
    image:
      "https://imagenes.elpais.com/resizer/v2/PQWWIJMQLJEX7AB4OQMLO2XFIQ.jpg?auth=9dc6ff54cd645a2d008e0dbcf86c2ba00baf1ee158cf0472da64972ccdb49e5b&width=1200",
  },
  {
    id: "5",
    code: "RVP-004",
    date: new Date("2025-10-10"),
    status: "Abierto",
    area: "Control",
    identification_area: "Hangar5",
    description: "Quinto problema",
    image:
      "https://imagenes.elpais.com/resizer/v2/PQWWIJMQLJEX7AB4OQMLO2XFIQ.jpg?auth=9dc6ff54cd645a2d008e0dbcf86c2ba00baf1ee158cf0472da64972ccdb49e5b&width=1200",
  },
];
