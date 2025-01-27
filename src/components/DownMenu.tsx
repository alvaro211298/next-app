"use client";
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
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { JSX, useState } from "react";
import RedirectionForm from "./RedirectionForm";

export default function DownMenu() {
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
          <DropdownMenuItem>Aceptar reporte</DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => handleOpenDialog(<RedirectionForm />)}
          >
            Redirigir reporte
          </DropdownMenuItem>
          <DropdownMenuItem>Eliminar reporte</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent
          aria-describedby="dialog-description"
          className="min-h-80 bg-blue-600"
        >
          <DialogHeader>
            <DialogTitle>
              {typeof dialogContent === "string" ? dialogContent : "Formulario"}
            </DialogTitle>
          </DialogHeader>
          <div id="dialog-description">
            {typeof dialogContent !== "string" && dialogContent}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
