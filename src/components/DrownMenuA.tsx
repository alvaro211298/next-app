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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { JSX, useState } from "react";
import RedirectionForm from "./RedirectionForm";
import TrackingForm from "./TrackingForm";
import MitigationMeasureForm from "./MitigationMeasureForm";

export default function DownMenu() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogContent, setDialogContent] = useState<JSX.Element>();

  const handleOpenDialog = (content: JSX.Element) => {
    setDialogContent(content);
    setDialogOpen(true);
  };

  const handleClik = () => {
    console.log("click");
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
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
          <DropdownMenuItem onClick={() => setDialogOpen(true)}>
            Redirigir reporte
          </DropdownMenuItem>
          <DropdownMenuItem>Eliminar reporte</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-center">
              Redireccion a otro depatamento
            </DialogTitle>
            <DialogDescription className="text-center p-2 mb-0 pb-0">
              El reporte sera redirigido a otro departamento que le corresponda
            </DialogDescription>
          </DialogHeader>
          <MitigationMeasureForm onClose={() => setDialogOpen(false)} />
        </DialogContent>
      </Dialog>
    </>
  );
}
