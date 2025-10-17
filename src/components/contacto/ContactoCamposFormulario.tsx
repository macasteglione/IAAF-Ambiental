import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

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
  onInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onSelectChange?: (name: string, value: string) => void;
  disabled: boolean;
}

const ContactoCamposFormulario = ({ 
  formData, 
  onInputChange, 
  onSelectChange,
  disabled 
}: PropsCamposFormularioContacto) => {
  
  const projectTypes = [
    "Estudio de Impacto Ambiental (EIA)",
    "Gestión de Residuos",
    "Auditoría Ambiental",
    "Monitoreo Ambiental",
    "Plan de Gestión Ambiental",
    "Estudios de Suelo y Agua",
    "Asesoría en Legislación Ambiental",
    "Capacitación Ambiental",
    "Otro (especificar en mensaje)"
  ];

  const companySizes = [
    "Microempresa (1-10 empleados)",
    "Pequeña Empresa (11-50 empleados)",
    "Mediana Empresa (51-200 empleados)",
    "Gran Empresa (200+ empleados)",
    "Organismo Público",
    "ONG / Fundación",
    "Particular"
  ];

  const handleSelectChange = (name: string, value: string) => {
    if (onSelectChange) {
      onSelectChange(name, value);
    } else {
      // Fallback: crear un evento sintético
      const syntheticEvent = {
        target: { name, value }
      } as React.ChangeEvent<HTMLInputElement>;
      onInputChange(syntheticEvent);
    }
  };

  return (
    <div className="space-y-6">
      {/* Información Personal */}
      <div className="space-y-4">
        <div className="border-l-4 border-green-600 pl-4">
          <h3 className="text-lg font-semibold text-gray-900">Información de Contacto</h3>
          <p className="text-sm text-gray-600">Los campos con (*) son obligatorios</p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-sm font-medium text-gray-700">
              Nombre Completo <span className="text-red-500">*</span>
            </Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={onInputChange}
              required
              placeholder="Ej: Juan Pérez"
              disabled={disabled}
              className="border-gray-300 focus:border-green-600 focus:ring-green-600"
            />
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
              className="border-gray-300 focus:border-green-600 focus:ring-green-600"
            />
            <p className="text-xs text-gray-500">Enviaremos la respuesta a este correo</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
              Teléfono <span className="text-red-500">*</span>
            </Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={onInputChange}
              required
              placeholder="+54 280 XXX-XXXX"
              disabled={disabled}
              className="border-gray-300 focus:border-green-600 focus:ring-green-600"
            />
            <p className="text-xs text-gray-500">Incluya código de área</p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="companySize" className="text-sm font-medium text-gray-700">
              Tamaño de la Organización
            </Label>
            <Select 
              value={formData.companySize} 
              onValueChange={(value) => handleSelectChange('companySize', value)}
              disabled={disabled}
            >
              <SelectTrigger className="border-gray-300 focus:border-green-600 focus:ring-green-600">
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
        </div>
      </div>

      {/* Información del Proyecto */}
      <div className="space-y-4">
        <div className="border-l-4 border-green-600 pl-4">
          <h3 className="text-lg font-semibold text-gray-900">Detalles del Proyecto</h3>
          <p className="text-sm text-gray-600">Ayúdanos a entender mejor sus necesidades</p>
        </div>

        <div className="space-y-2">
          <Label htmlFor="projectType" className="text-sm font-medium text-gray-700">
            Tipo de Servicio Requerido <span className="text-red-500">*</span>
          </Label>
          <Select 
            value={formData.projectType} 
            onValueChange={(value) => handleSelectChange('projectType', value)}
            disabled={disabled}
          >
            <SelectTrigger className="border-gray-300 focus:border-green-600 focus:ring-green-600">
              <SelectValue placeholder="Seleccione un servicio" />
            </SelectTrigger>
            <SelectContent>
              {projectTypes.map((type) => (
                <SelectItem key={type} value={type}>
                  {type}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="location" className="text-sm font-medium text-gray-700">
              Ubicación del Proyecto
            </Label>
            <Input
              id="location"
              name="location"
              value={formData.location}
              onChange={onInputChange}
              placeholder="Ej: Puerto Madryn, Trelew, etc."
              disabled={disabled}
              className="border-gray-300 focus:border-green-600 focus:ring-green-600"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="startDate" className="text-sm font-medium text-gray-700">
              Fecha de Inicio Estimada
            </Label>
            <Input
              id="startDate"
              name="startDate"
              type="date"
              value={formData.startDate}
              onChange={onInputChange}
              disabled={disabled}
              min={new Date().toISOString().split('T')[0]}
              className="border-gray-300 focus:border-green-600 focus:ring-green-600"
            />
            <p className="text-xs text-gray-500">¿Cuándo necesita comenzar?</p>
          </div>
        </div>
      </div>

      {/* Mensaje */}
      <div className="space-y-4">
        <div className="border-l-4 border-green-600 pl-4">
          <h3 className="text-lg font-semibold text-gray-900">Información Adicional</h3>
          <p className="text-sm text-gray-600">Cuéntenos más sobre su proyecto</p>
        </div>

        <div className="space-y-2">
          <Label htmlFor="message" className="text-sm font-medium text-gray-700">
            Mensaje / Descripción del Proyecto
          </Label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={onInputChange}
            placeholder="Describa su proyecto, requisitos específicos, objetivos, o cualquier otra información relevante que nos ayude a entender mejor sus necesidades..."
            rows={6}
            disabled={disabled}
            className="border-gray-300 focus:border-green-600 focus:ring-green-600 resize-none"
          />
          <p className="text-xs text-gray-500">
            {formData.message.length}/1000 caracteres
          </p>
        </div>
      </div>

      {/* Privacy Notice */}
      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
        <div className="flex items-start gap-3">
          <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
          <div className="text-xs text-gray-700 leading-relaxed">
            <strong className="text-green-800">Protección de Datos:</strong> Sus datos serán tratados de forma confidencial 
            y utilizados únicamente para responder a su consulta. Consulte nuestra{" "}
            <a href="/privacidad" className="text-green-700 underline hover:text-green-800">
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