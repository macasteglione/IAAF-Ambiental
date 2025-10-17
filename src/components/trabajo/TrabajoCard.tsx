import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, MapPin, Send, Mail } from "lucide-react";

interface TrabajoCardProps {
  title: string;
  location: string;
  type: string;
  description: string;
  buttonText?: string;
  requirements?: string[];
  salary?: string;
}

const TrabajoCard = ({
  title,
  location,
  type,
  description,
  buttonText = "Postularme",
  requirements,
  salary,
}: TrabajoCardProps) => {
  const handleButtonClick = () => {
    if (buttonText === "Postularme" || buttonText === "Aplicar Ahora") {
      // Abrir formulario de postulación o enviar email
      window.location.href =
        "mailto:rrhh@iaafambiental.com?subject=Postulación: " +
        encodeURIComponent(title);
    } else if (buttonText === "Lista de Espera") {
      // Unirse a lista de espera
      window.location.href =
        "mailto:rrhh@iaafambiental.com?subject=Lista de Espera: " +
        encodeURIComponent(title);
    } else {
      // Contacto general
      window.location.href = "mailto:rrhh@iaafambiental.com";
    }
  };

  return (
    <Card className="hover:shadow-xl transition-all duration-300 border-l-4 border-l-green-600 hover:border-l-green-700 bg-white group">
      <CardHeader className="space-y-4">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-start gap-3 mb-3">
              <div className="flex-shrink-0 w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center group-hover:bg-green-700 transition-colors">
                <Send className="h-6 w-6 text-white" />
              </div>
              <div className="flex-1">
                <CardTitle className="text-xl lg:text-2xl text-gray-900 mb-2 group-hover:text-green-700 transition-colors">
                  {title}
                </CardTitle>
                <div className="flex flex-wrap gap-3 text-sm text-gray-500 mb-3">
                  <div className="flex items-center gap-1 bg-gray-100 px-3 py-1 rounded-full">
                    <MapPin className="h-4 w-4 text-green-600" />
                    <span className="font-medium">{location}</span>
                  </div>
                  <div className="flex items-center gap-1 bg-gray-100 px-3 py-1 rounded-full">
                    <Clock className="h-4 w-4 text-green-600" />
                    <span className="font-medium">{type}</span>
                  </div>
                  {salary && (
                    <div className="flex items-center gap-1 bg-green-50 px-3 py-1 rounded-full">
                      <svg
                        className="h-4 w-4 text-green-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span className="font-medium text-green-700">
                        {salary}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <CardDescription className="text-gray-600 mb-4 leading-relaxed text-base">
              {description}
            </CardDescription>

            {requirements && requirements.length > 0 && (
              <div className="mt-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
                <h4 className="text-sm font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <svg
                    className="h-4 w-4 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Requisitos:
                </h4>
                <ul className="space-y-1 text-sm text-gray-600">
                  {requirements.map((req, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-green-600 mt-0.5">•</span>
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="flex-shrink-0">
            <Button
              className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-6 shadow-lg hover:shadow-xl transition-all transform hover:scale-105 w-full lg:w-auto"
              onClick={handleButtonClick}
            >
              <Mail className="h-4 w-4 mr-2" />
              {buttonText}
            </Button>
          </div>
        </div>
      </CardHeader>
    </Card>
  );
};

export default TrabajoCard;
