import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Definición del tipo Payment
export type Identification = {
  id: string;
  report_date: Date;
  identification_date: Date;
  hazard: string;
  hazard_description: string;
  consequences: string;
  consequence_to_evaluate: string;
  hazard_type: "Organizacional" | "Tecnico" | "Humano" | "Natural";
  reporter: string;
  status: "Abierto" | "Proceso" | "Cerrado";
};

// Definición de las columnas de la tabla
export const columns: ColumnDef<Identification>[] = [
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
    accessorKey: "report_date",
    header: () => <div className="text-left">Fecha reporte</div>,
    cell: ({ row }) => {
      const date = new Date(row.getValue("report_date"));
      const formatted = date.toLocaleDateString("ES", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });

      return <div className="text-left font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: "identification_date",
    header: () => <div className="text-left">Fecha identificacion</div>,
    cell: ({ row }) => {
      const date = new Date(row.getValue("identification_date"));
      const formatted = date.toLocaleDateString("ES", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });

      return <div className="text-left font-medium">{formatted}</div>;
    },
  },

  {
    accessorKey: "hazard",
    header: "Peligro",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("hazard")}</div>
    ),
  },
  {
    accessorKey: "hazard_description",
    header: "Descripcion",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("hazard_description")}</div>
    ),
  },
  {
    accessorKey: "consequences",
    header: "Consecuencias",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("consequences")}</div>
    ),
  },
  {
    accessorKey: "consequence_to_evaluate",
    header: "Consecuencia a evaluar",
    cell: ({ row }) => (
      <div className="capitalize">
        {row.getValue("consequence_to_evaluate")}
      </div>
    ),
  },
  {
    accessorKey: "hazard_type",
    header: "Area de identificacion",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("hazard_type")}</div>
    ),
  },
  {
    accessorKey: "reporter",
    header: "Informante",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("reporter")}</div>
    ),
  },
  {
    accessorKey: "status",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Estado
          <ArrowUpDown />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="lowercase text-center">{row.getValue("status")}</div>
    ),
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
              onClick={() => navigator.clipboard.writeText(payment.status)}
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
