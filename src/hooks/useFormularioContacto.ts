
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface FormData {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  startDate: string;
  location: string;
  companySize: string;
  message: string;
}

export const useFormularioContacto = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    startDate: "",
    location: "",
    companySize: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      projectType: "",
      startDate: "",
      location: "",
      companySize: "",
      message: ""
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    setIsSubmitting(true);

    try {
      // Create mailto link
      const subject = encodeURIComponent(`Solicitud de Cotización - ${formData.projectType}`);
      const body = encodeURIComponent(`
Nombre: ${formData.name}
Email: ${formData.email}
Teléfono: ${formData.phone}
Tipo de Proyecto: ${formData.projectType}
Fecha de Inicio: ${formData.startDate}
Ubicación: ${formData.location}
Tamaño de Empresa: ${formData.companySize}
Información Adicional: ${formData.message}
      `);

      const mailtoLink = `mailto:contacto@iaafambiental.com?subject=${subject}&body=${body}`;
      window.location.href = mailtoLink;

      toast({
        title: "Solicitud Preparada",
        description: "Se abrirá su cliente de correo con la solicitud lista para enviar.",
      });

      resetForm();

    } catch (error) {
      console.error("Error preparing email:", error);

      toast({
        title: "Error",
        description: "Hubo un problema al preparar su solicitud. Por favor, intente nuevamente.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    formData,
    isSubmitting,
    handleInputChange,
    handleSubmit
  };
};
