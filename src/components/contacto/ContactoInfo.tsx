import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  MapPin,
  CheckCircle,
  Award,
  Users,
  FileCheck,
  Globe,
} from "lucide-react";
import { Link } from "react-router-dom";

const ContactoInfo = () => {
  const benefits = [
    {
      icon: Users,
      text: "Equipo de profesionales especializados",
    },
    {
      icon: FileCheck,
      text: "Soluciones integrales y personalizadas",
    },
    {
      icon: CheckCircle,
      text: "Cumplimiento de normativas ambientales vigentes",
    },
    {
      icon: Globe,
      text: "Cobertura en toda la región patagónica",
    },
  ];

  const serviceAreas = [
    { name: "Puerto Madryn", path: "/regiones/puerto-madryn", highlight: true },
    { name: "Trelew", path: "/regiones/trelew" },
    { name: "Rawson", path: "/regiones/rawson" },
    { name: "Gaiman", path: "/regiones/gaiman" },
    { name: "Dolavon", path: "/regiones/dolavon" },
    { name: "Puerto Pirámides", path: "/regiones/puerto-piramides" },
    { name: "Península Valdés", path: "/regiones/peninsula-valdes" },
    { name: "Comarca de los Alerces", path: "/regiones/comarca-alerces" },
  ];

  return (
    <div className="space-y-6">
      {/* Why Choose Us Card */}
      <Card className="bg-gradient-to-br from-brand-green to-brand-green text-white border-none shadow-2xl overflow-hidden relative">
        {/* Decorative background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white rounded-full blur-2xl"></div>
        </div>

        <CardContent className="p-6 lg:p-8 relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
              <CheckCircle className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl lg:text-2xl font-bold">
              ¿Por qué Elegir IAAF Ambiental?
            </h3>
          </div>

          <ul className="space-y-4">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <li key={index} className="flex items-start gap-3 group">
                  <div className="flex-shrink-0 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center group-hover:bg-white/30 transition-colors">
                    <IconComponent className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-white/95 leading-relaxed pt-1">
                    {benefit.text}
                  </span>
                </li>
              );
            })}
          </ul>
        </CardContent>
      </Card>

      {/* Service Areas Card */}
      <Card className="shadow-lg border-2 border-gray-100 hover:border-brand-lime/30 transition-colors">
        <CardHeader className="bg-gradient-to-r from-gray-50 to-green-50 border-b border-gray-200">
          <CardTitle className="flex items-center gap-2 text-gray-900">
            <div className="w-10 h-10 bg-brand-green rounded-full flex items-center justify-center">
              <MapPin className="h-5 w-5 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold">Áreas de Servicio</h3>
              <p className="text-sm text-gray-600 font-normal mt-1">
                Presencia en toda la región
              </p>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <p className="text-gray-600 mb-6 leading-relaxed">
            Brindamos servicios de consultoría ambiental en toda la región
            patagónica. Seleccione cualquier localidad para conocer más sobre
            nuestros servicios en esa área.
          </p>

          {/* Service Areas Grid */}
          <div className="grid grid-cols-2 gap-3">
            {serviceAreas.map((area, index) => (
              <Link key={index} to={area.path} className="block group">
                <Badge
                  variant="outline"
                  className={`justify-center py-3 px-4 transition-all cursor-pointer w-full text-sm font-medium border-2 ${
                    area.highlight
                      ? "bg-brand-green border-brand-teal text-white hover:bg-brand-teal hover:shadow-lg"
                      : "bg-white border-brand-lime/30 text-gray-700 hover:bg-green-50 hover:border-green-400 hover:text-brand-dark"
                  } group-hover:scale-105`}
                >
                  <MapPin className="h-3 w-3 mr-1.5 flex-shrink-0" />
                  {area.name}
                </Badge>
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContactoInfo;
