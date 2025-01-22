"use client";
import Image from "next/image";
import formSchema from "@/validations/voluntarySchema";
import { zodResolver } from "@hookform/resolvers/zod";

import { useForm } from "react-hook-form";
import { z } from "zod";

export default function Home() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),

    defaultValues: {
      name: "",
      last_name: "",
      phone: "",
      email: "",
      danger_place: "",
      anonymous: false, // Añade este valor predeterminado
    },
  });

  const onSubmit = form.handleSubmit((values) => {
    console.log(values);
  });

  return (
    <>
      Home return (
      <div>
        <h1>Imagen desde Getty Images en Next.js</h1>
        <Image
          src="https://imagenes.elpais.com/resizer/v2/PQWWIJMQLJEX7AB4OQMLO2XFIQ.jpg?auth=9dc6ff54cd645a2d008e0dbcf86c2ba00baf1ee158cf0472da64972ccdb49e5b&width=1200" // URL directa de la imagen
          alt="Descripción de la imagen" // Descripción alternativa
          width={210} // Ancho de la imagen
          height={10} // Alto de la imagen
        />
      </div>
    </>
  );
}
