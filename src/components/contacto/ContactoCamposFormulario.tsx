import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface DatosFormulario {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  startDate: string;
  location: string;
  companySize: string;
  message: string;
}

interface PropsCamposFormularioContacto {
  formData: DatosFormulario;
  onInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onSelectChange?: (name: string, value: string) => void;
  disabled: boolean;
}

const ContactoCamposFormulario = ({
  formData,
  onInputChange,
  onSelectChange,
  disabled,
}: PropsCamposFormularioContacto) => {
  const companySizes = [
    "Microempresa (1-10 empleados)",
    "Pequeña Empresa (11-50 empleados)",
    "Mediana Empresa (51-200 empleados)",
    "Gran Empresa (200+ empleados)",
    "Organismo Público",
    "ONG / Fundación",
    "Particular",
  ];

  const handleSelectChange = (name: string, value: string) => {
    if (onSelectChange) {
      onSelectChange(name, value);
    } else {
      const syntheticEvent = {
        target: { name, value },
      } as React.ChangeEvent<HTMLInputElement>;
      onInputChange(syntheticEvent);
    }
  };

  return (
    <div className="space-y-6">
      {/* Información Personal */}
      <div className="space-y-4">
        <div className="border-l-4 border-brand-green pl-4 py-0.5">
          <h3 className="text-lg font-semibold text-gray-900">
            Información de Contacto
          </h3>
          <p className="text-sm text-gray-600 mt-0.5">
            Los campos con (*) son obligatorios
          </p>
        </div>

        <div className="space-y-2">
          <Label htmlFor="email" className="text-sm font-medium text-gray-700">
            Correo Electrónico <span className="text-red-500">*</span>
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={onInputChange}
            required
            placeholder="ejemplo@email.com"
            disabled={disabled}
            className="border-gray-300 focus:border-brand-green focus:ring-brand-green"
          />
          <p className="text-xs text-gray-500 mt-1">
            Enviaremos la respuesta a este correo
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label
              htmlFor="companySize"
              className="text-sm font-medium text-gray-700"
            >
              Tamaño de la Empresa
            </Label>
            <Select
              value={formData.companySize}
              onValueChange={(value) =>
                handleSelectChange("companySize", value)
              }
              disabled={disabled}
            >
              <SelectTrigger className="border-gray-300 focus:border-brand-green focus:ring-brand-green">
                <SelectValue placeholder="Seleccione una opción" />
              </SelectTrigger>
              <SelectContent>
                {companySizes.map((size) => (
                  <SelectItem key={size} value={size}>
                    {size}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label
              htmlFor="location"
              className="text-sm font-medium text-gray-700"
            >
              Ubicación
            </Label>
            <Input
              id="location"
              name="location"
              value={formData.location}
              onChange={onInputChange}
              placeholder="Ej: Puerto Madryn, Trelew, etc."
              disabled={disabled}
              className="border-gray-300 focus:border-brand-green focus:ring-brand-green"
            />
          </div>
        </div>
      </div>

      {/* Mensaje */}
      <div className="space-y-4">
        <div className="border-l-4 border-brand-green pl-4 py-0.5">
          <h3 className="text-lg font-semibold text-gray-900">
            Información Adicional
          </h3>
        </div>

        <div className="space-y-2">
          <Label
            htmlFor="message"
            className="text-sm font-medium text-gray-700"
          >
            Mensaje / Descripción
          </Label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={onInputChange}
            placeholder="Describa su proyecto, requisitos específicos, objetivos, o cualquier otra información relevante que nos ayude a entender mejor sus necesidades..."
            rows={5}
            disabled={disabled}
            className="border-gray-300 focus:border-brand-green focus:ring-brand-green resize-none"
          />
          <p className="text-xs text-gray-500 mt-1">
            {formData.message.length}/1000 caracteres
          </p>
        </div>
      </div>

      {/* Privacy Notice */}
      <div className="bg-green-50 border border-brand-lime/30 rounded-lg p-3.5">
        <div className="flex items-start gap-3">
          <svg
            className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
            />
          </svg>
          <div className="text-xs text-gray-700 leading-relaxed">
            <strong className="text-brand-dark">Protección de Datos:</strong>{" "}
            Sus datos serán tratados de forma confidencial y utilizados
            únicamente para responder a su consulta. Consulte nuestra{" "}
            <a
              href="/privacidad"
              className="text-brand-teal underline hover:text-brand-dark transition-colors"
            >
              Política de Privacidad
            </a>{" "}
            para más información.
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactoCamposFormulario;