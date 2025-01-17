import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";
import { MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Definición del tipo Payment
export type Payment = {
  id: string;
  probability: "Frecuente" | "Remoto";
  severity: "Catastrofico" | "Insignificante";
  result: "Aceptable" | "Inaceptable" | "Tolerable";
  analysis_date: Date;
};

// Definición de las columnas de la tabla
export const columns: ColumnDef<Payment>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "probability",
    header: "Probabilidad",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("probability")}</div>
    ),
  },
  {
    accessorKey: "severity",
    header: "Severidad",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("severity")}</div>
    ),
  },
  {
    accessorKey: "result",
    header: "Resultado del analisis",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("result")}</div>
    ),
  },

  {
    accessorKey: "analysis_date",
    header: () => <div className="text-left">Fecha del análisis</div>,
    cell: ({ row }) => {
      const date = new Date(row.getValue("analysis_date"));
      const formatted = date.toLocaleDateString("en-ES", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });

      return <div className="text-left font-medium">{formatted}</div>;
    },
  },

  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const payment = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(payment.id)}
            >
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
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
