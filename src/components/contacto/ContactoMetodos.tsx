import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const ContactoMetodos = () => {
  const contactMethods = [
    {
      icon: Phone,
      title: "Teléfono",
      primary: ["+54 280 459-7153", "+54 280 455-7226"],
      secondary: "Todos los Días: 9:00-18:00",
      description:
        "Atención telefónica para consultas y asesoramiento con nuestro equipo profesional.",
      link: null,
      color: "from-brand-green to-brand-green",
    },
    {
      icon: Mail,
      title: "Email",
      primary: "administracion@iaafambiental.com",
      secondary: "Respuesta en 24-48 hs",
      description:
        "Para cotizaciones, información general y consultas técnicas por escrito.",
      link: "mailto:administracion@iaafambiental.com",
      color: "from-brand-teal to-brand-green",
    },
    {
      icon: MapPin,
      title: "Localidad Central",
      primary: "Puerto Madryn, Chubut",
      secondary: "Patagonia Argentina",
      description:
        "Nuestra localidad principal brindando servicios de consultoría en toda la región patagónica.",
      link: null,
      color: "from-brand-lime to-brand-green",
    },
    {
      icon: Clock,
      title: "Horario de Atención",
      primary: "Todos los Días",
      secondary: "09:00 - 18:00 hs",
      description:
        "Consultas técnicas y asesoramiento disponible en horario laboral.",
      link: null,
      color: "from-brand-green to-brand-teal",
    },
  ];

  return (
    <section className="py-12 lg:py-16 bg-gradient-to-br from-gray-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 lg:mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
            Métodos de Contacto
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Múltiples formas de comunicarse con nuestro equipo para todas sus
            necesidades de consultoría ambiental en la Patagonia.
          </p>
        </div>

        {/* Main Contact Methods */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {contactMethods.map((method, index) => {
            const CardWrapper = method.link ? "a" : "div";
            const cardProps = method.link ? { href: method.link } : {};

            return (
              <CardWrapper key={index} {...cardProps} className="block">
                <Card
                  className={`text-center h-full transition-all duration-300 border-l-4 ${
                    method.link
                      ? "hover:shadow-2xl hover:scale-105 cursor-pointer"
                      : "hover:shadow-lg"
                  } border-l-brand-green group`}
                >
                  <CardHeader className="pb-3 pt-5">
                    <div
                      className={`bg-gradient-to-br ${method.color} text-white p-3.5 rounded-2xl w-14 h-14 mx-auto mb-3 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}
                    >
                      <method.icon className="h-7 w-7" />
                    </div>
                    <CardTitle className="text-lg text-gray-900 group-hover:text-brand-teal transition-colors">
                      {method.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 pb-5">
                    {Array.isArray(method.primary) ? (
                      <div className="space-y-1">
                        {method.primary.map((phone, idx) => (
                          <p
                            key={idx}
                            className="font-bold text-gray-900 text-sm"
                          >
                            {phone}
                          </p>
                        ))}
                      </div>
                    ) : (
                      <p className="font-bold text-gray-900 text-sm">
                        {method.primary}
                      </p>
                    )}
                    {method.secondary && (
                      <p className="text-xs font-semibold text-brand-teal bg-green-50 inline-block px-2.5 py-1 rounded-full">
                        {method.secondary}
                      </p>
                    )}
                    <p className="text-sm text-gray-600 leading-relaxed pt-1.5">
                      {method.description}
                    </p>
                  </CardContent>
                </Card>
              </CardWrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ContactoMetodos;
