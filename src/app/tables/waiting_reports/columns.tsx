"use client";

import { ColumnDef } from "@tanstack/react-table";

import DownMenu from "@/components/DownMenu";
import DrownMenuA from "@/components/DrownMenuA";

// Definición del tipo Payment
export type Payment = {
  id: string;
  date: Date;
  report_date: Date;
  area: "Mantenimiento" | "Operaciones" | "Control" | "Calidad";
  identification_area: string;
  description: string;
};

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
          <DrownMenuA />
        </>
      );
    },
  },
];
