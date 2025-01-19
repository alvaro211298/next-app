"use client";

import { ColumnDef } from "@tanstack/react-table";

import DownMenu from "@/components/DownMenu";

// Definición del tipo Payment
export type Payment = {
  id: string;
  date: Date;
  report_date: Date;
  area: "Mantenimiento" | "Operaciones" | "Control" | "Calidad";
  identification_area: string;
  description: string;
};
//const [isFormVisible, setIsFormVisible] = useState(false);
//const handleOpenForm = () => {
//  setIsFormVisible(true);
//};
// Definición de las columnas de la tabla

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "date",
    header: () => <div className="text-left">Fecha de identificacion</div>,
    cell: ({ row }) => {
      const date = new Date(row.getValue("date"));
      const formatted = date.toLocaleDateString("en-ES", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });

      return <div className="text-left font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: "report_date",
    header: () => <div className="text-left">Fecha de reporte</div>,
    cell: ({ row }) => {
      const date = new Date(row.getValue("date"));
      const formatted = date.toLocaleDateString("en-ES", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });

      return <div className="text-left font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: "area",
    header: "Area de identificacion",
    cell: ({ row }) => <div className="capitalize">{row.getValue("area")}</div>,
  },
  {
    accessorKey: "identification_area",
    header: "Adea de idéntificacion",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("identification_area")}</div>
    ),
  },
  {
    accessorKey: "description",
    header: "Descripcion",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("description")}</div>
    ),
  },

  {
    id: "Opciones",
    enableHiding: false,
    cell: ({ row }) => {
      const payment = row.original;

      return (
        <>
          <DownMenu />
        </>
      );
    },
  },
];

/*"use client";

import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  id: string;
  date: Date;
  description: string;
  status: "Abierto" | "Cerrado" | "Proceso";
};




export type Payment = {
  id: string;
  date: Date;
  status: "pending" | "processing" | "success" | "failed";
  description: string;
};
export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "id",
    header: () => <div className="text-left">Id</div>,
    cell: ({ row }) => {
      const id = parseInt(row.getValue("id"));
      const formatted = new Intl.NumberFormat().format(id);

      return <div className="text-left font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: "date",
    header: () => <div className="text-left">Fecha</div>,
    cell: ({ row }) => {
      const date = new Date(row.getValue("date"));
      const formatted = date.toLocaleDateString("en-ES", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });

      return <div className="text-left">{formatted}</div>;
    },
  },
  {
    accessorKey: "description",
    header: () => <div className="text-left">Descripcion</div>,
    cell: ({ row }) => (
      <div className="text-left">{row.getValue("description")}</div>
    ),
  },
];
*/
