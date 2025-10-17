import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Proyecto } from "@/data/ProyectosDatos";
import { CheckCircle, Award, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface ProyectoCardProps {
  proyecto: Proyecto;
}

const ProyectoCard = ({ proyecto }: ProyectoCardProps) => {
  return (
    <Card className="hover:shadow-2xl transition-all duration-300 bg-white border-2 border-gray-200 hover:border-green-300 group h-full flex flex-col">
      <CardHeader className="pb-4">
        <div className="flex items-start gap-4">
          {/* Icon with gradient background */}
          <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-4 rounded-xl flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
            <proyecto.icon className="h-7 w-7" />
          </div>
          <div className="flex-1">
            {proyecto.link ? (
              <Link to={proyecto.link}>
                <CardTitle className="text-xl lg:text-2xl mb-2 text-gray-900 hover:text-blue-600 transition-colors cursor-pointer">
                  {proyecto.title}
                </CardTitle>
              </Link>
            ) : (
              <CardTitle className="text-xl lg:text-2xl mb-2 text-gray-900">
                {proyecto.title}
              </CardTitle>
            )}
            <CardDescription className="text-gray-600 text-base leading-relaxed">
              {proyecto.description}
            </CardDescription>
          </div>
        </div>
      </CardHeader>

      <CardContent className="flex-1 space-y-6">
        {/* Services Section */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
              <CheckCircle className="h-5 w-5 text-green-700" />
            </div>
            <h4 className="font-bold text-gray-900 text-base">
              Servicios Incluidos
            </h4>
          </div>
          <ul className="space-y-2 pl-1">
            {proyecto.services.map((service, idx) => (
              <li
                key={idx}
                className="flex items-start gap-3 text-sm text-gray-700 group/item"
              >
                <div className="w-5 h-5 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform">
                  <CheckCircle className="h-3 w-3 text-white" />
                </div>
                <span className="leading-relaxed">{service}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Project Type Section */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
              <svg
                className="h-5 w-5 text-blue-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
            </div>
            <h4 className="font-bold text-gray-900 text-base">
              Tipo de Proyecto
            </h4>
          </div>
          <div className="flex flex-wrap gap-2">
            {proyecto.events.map((event, idx) => (
              <Badge
                key={idx}
                variant="outline"
                className="text-xs px-3 py-1 border-2 border-gray-300 text-gray-700 hover:border-green-500 hover:text-green-700 hover:bg-green-50 transition-all"
              >
                {event}
              </Badge>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
              <Award className="h-5 w-5 text-green-700" />
            </div>
            <h4 className="font-bold text-gray-900 text-base">
              Certificaciones
            </h4>
          </div>
          <div className="flex flex-wrap gap-2">
            {proyecto.certifications.map((cert, idx) => (
              <Badge
                key={idx}
                className="bg-gradient-to-r from-green-600 to-emerald-600 text-white text-xs px-3 py-1.5 shadow-md hover:shadow-lg hover:scale-105 transition-all border-none"
              >
                <Award className="h-3 w-3 mr-1 inline" />
                {cert}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProyectoCard;
