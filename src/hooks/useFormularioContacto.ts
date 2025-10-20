import { useState, useRef } from "react";
import { useToast } from "@/hooks/use-toast";
import HCaptcha from "@hcaptcha/react-hcaptcha";

interface FormData {
  email: string;
  location: string;
  companySize: string;
  message: string;
}

export const useFormularioContacto = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const captchaRef = useRef<HCaptcha>(null);

  const [formData, setFormData] = useState<FormData>({
    email: "",
    location: "",
    companySize: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCaptchaVerify = (token: string) => {
    setCaptchaToken(token);
  };

  const handleCaptchaExpire = () => {
    setCaptchaToken(null);
  };

  const resetForm = () => {
    setFormData({
      email: "",
      location: "",
      companySize: "",
      message: "",
    });
    setCaptchaToken(null);
    setSubmitStatus("idle");
    captchaRef.current?.resetCaptcha();
  };

  const validateForm = (): boolean => {
    if (!formData.email) {
      toast({
        title: "Error de Validación",
        description: "El correo electrónico es obligatorio.",
        variant: "destructive",
      });
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Error de Validación",
        description: "Por favor, ingrese un correo electrónico válido.",
        variant: "destructive",
      });
      return false;
    }

    if (!captchaToken) {
      toast({
        title: "Verificación Requerida",
        description: "Por favor, complete la verificación hCaptcha.",
        variant: "destructive",
      });
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Preparar datos para Web3Forms como objeto JSON
      const formPayload = {
        // Access Key desde variable de entorno
        access_key: import.meta.env.VITE_WEB3FORMS,

        // Datos del formulario
        "Correo Electrónico": formData.email,
        "Ubicación": formData.location || "No especificado",
        "Tamaño de Empresa": formData.companySize || "No especificado",
        "Mensaje / Descripción": formData.message || "Sin mensaje adicional",

        // Token de hCaptcha (Web3Forms espera este campo específico)
        "h-captcha-response": captchaToken,

        // Configuración adicional
        subject: "Nueva Solicitud de consultoría IAAF Ambiental",
        from_name: "Formulario Web IAAF Ambiental | iaafambiental.com",
      };

      // Validar que el access key exista
      if (!formPayload.access_key) {
        throw new Error(
          "Configuración de formulario incompleta. Contacte al administrador."
        );
      }

      // Enviar a Web3Forms como JSON
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formPayload),
      });

      const data = await response.json();

      console.log("Web3Forms response:", data); // Para debug

      if (data.success) {
        setSubmitStatus("success");
        toast({
          title: "¡Consulta Enviada!",
          description:
            "Hemos recibido su solicitud. Nos pondremos en contacto dentro de 24 horas hábiles.",
        });
      } else {
        console.error("Web3Forms error:", data);
        setSubmitStatus("error");
        throw new Error(data.message || "Error al enviar el formulario");
      }
    } catch (error) {
      console.error("Error submitting form:", error);

      setSubmitStatus("error");
      toast({
        title: "Error al Enviar",
        description:
          "Hubo un problema al enviar su solicitud. Por favor, intente nuevamente o contáctenos directamente.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    formData,
    isSubmitting,
    submitStatus,
    captchaToken,
    captchaRef,
    handleInputChange,
    handleCaptchaVerify,
    handleCaptchaExpire,
    handleSubmit,
    resetForm,
  };
};
