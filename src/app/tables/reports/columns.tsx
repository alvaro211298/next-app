import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import VoluntaryForm from "@/components/VoluntaryForm";
import Image from "next/image";

// Definición del tipo Payment
export type Payment = {
  id: string;
  code: string;
  date: Date;
  status: "Abierto" | "Proceso" | "Cerrado";
  area: "Mantenimiento" | "Operaciones" | "Control" | "Calidad";
  identification_area: string;
  description: string;
  image: string;
};

const handleClick = () => {
  <VoluntaryForm />;
};
// Definición de las columnas de la tabla
export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "code",
    header: "Código de reporte",
    cell: ({ row }) => <div className="capitalize">{row.getValue("code")}</div>,
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
    accessorKey: "image",
    header: "Imagen",
    cell: ({ row }) => (
      <Image
        src={row.getValue("image")} // URL directa de la imagen
        alt="Descripción de la imagen" // Descripción alternativa
        width={210} // Ancho de la imagen
        height={10} // Alto de la imagen
      />
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
            <DropdownMenuItem onClick={handleClick}>
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
