"use client";

import React, { JSX, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import RedirectionForm from "@/components/RedirectionForm";

const DownMenu = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogContent, setDialogContent] = useState<JSX.Element>();

  const handleOpenDialog = (content: JSX.Element) => {
    setDialogContent(content);
    setDialogOpen(true);
  };

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <span className="sr-only">Open menu</span>
            <MoreHorizontal />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Actions</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            onClick={() => handleOpenDialog(<RedirectionForm />)}
          >
            Aceptar reporte
          </DropdownMenuItem>
          <DropdownMenuItem>Redirigir reporte</DropdownMenuItem>
          <DropdownMenuItem>Eliminar reporte</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="h-full bg-blue-600">
          <DialogHeader>
            <DialogTitle>
              {typeof dialogContent === "string" ? dialogContent : "Formulario"}
            </DialogTitle>
          </DialogHeader>
          {typeof dialogContent !== "string" && dialogContent}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default DownMenu;
