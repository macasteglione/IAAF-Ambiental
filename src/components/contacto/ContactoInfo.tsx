import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin } from "lucide-react";

const ContactoInfo = () => {
  const serviceAreas = [
    { name: "Chubut" },
    { name: "Santa Cruz" },
    { name: "Río Negro" },
    { name: "Neuquén" },
  ];

  return (
    <div className="space-y-6">
      <Card className="shadow-lg border-2 border-gray-100 hover:border-brand-lime/30 transition-colors">
        <CardHeader className="bg-gradient-to-r from-gray-50 to-green-50 border-b border-gray-200 p-6">
          <CardTitle className="flex items-center gap-3">
            <div className="w-10 h-10 bg-brand-green rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
              <MapPin className="h-5 w-5 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900">
                Áreas de Servicio
              </h3>
              <p className="text-sm text-gray-600 font-normal mt-1">
                Presencia en toda la región
              </p>
            </div>
          </CardTitle>
        </CardHeader>

        <CardContent className="p-6">
          <p className="text-gray-600 mb-6 leading-relaxed">
            Brindamos servicios de consultoría ambiental en las siguientes
            regiones patagónicas:
          </p>

          <div className="grid grid-cols-2 gap-3">
            {serviceAreas.map((area, index) => (
              <Badge
                key={index}
                variant="outline"
                className="justify-center py-3 px-4 transition-all w-full text-sm font-medium border-2 bg-white border-brand-lime/30 text-gray-700 hover:bg-green-50 hover:border-brand-green hover:scale-105"
              >
                <MapPin className="h-3.5 w-3.5 mr-2 flex-shrink-0 text-brand-green" />
                {area.name}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContactoInfo;