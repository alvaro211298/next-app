//import FormComponent from "@/components/FormComponent";
import FormComponent from "@/components/FormComponent";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogTrigger /*
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,*/,
} from "@/components/ui/dialog";
//import { Input } from "@/components/ui/input";
//import { Label } from "@/components/ui/label";
import React from "react";

export default function DialogDemo() {
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Edit Profile</Button>
        </DialogTrigger>

        <FormComponent />
      </Dialog>
    </>
  );
}
