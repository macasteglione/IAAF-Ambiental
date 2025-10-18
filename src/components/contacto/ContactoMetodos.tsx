import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock, MessageSquare, Users } from "lucide-react";

const ContactoMetodos = () => {
  const contactMethods = [
    {
      icon: Phone,
      title: "Teléfono",
      primary: "+54 280 412-3456",
      secondary: "Lun-Vie: 9:00-18:00",
      description:
        "Atención telefónica para consultas y asesoramiento con nuestro equipo profesional.",
      link: "tel:+542804123456",
      color: "from-brand-green to-brand-green",
    },
    {
      icon: Mail,
      title: "Email",
      primary: "contacto@iaafambiental.com",
      secondary: "Respuesta en 24-48 hs",
      description:
        "Para cotizaciones, información general y consultas técnicas por escrito.",
      link: "mailto:contacto@iaafambiental.com",
      color: "from-brand-teal to-brand-green",
    },
    {
      icon: MapPin,
      title: "Oficina Central",
      primary: "Puerto Madryn, Chubut",
      secondary: "Patagonia Argentina",
      description:
        "Nuestra sede principal brindando servicios de consultoría en toda la región patagónica.",
      link: null,
      color: "from-brand-lime to-brand-green",
    },
    {
      icon: Clock,
      title: "Horario de Atención",
      primary: "Lunes a Viernes",
      secondary: "09:00 - 18:00 hs",
      description:
        "Consultas técnicas y asesoramiento disponible en horario laboral.",
      link: null,
      color: "from-brand-green to-brand-teal",
    },
  ];

  const additionalContacts = [
    {
      icon: MessageSquare,
      title: "Formulario de Contacto",
      description:
        "Complete nuestro formulario online y nos contactaremos a la brevedad",
      link: "/contacto#formulario",
      buttonText: "Ir al Formulario",
    },
    {
      icon: Users,
      title: "Visita Presencial",
      description: "Coordine una reunión en nuestras oficinas de Puerto Madryn",
      link: "mailto:contacto@iaafambiental.com.ar?subject=Solicitud de Reunión Presencial",
      buttonText: "Solicitar Reunión",
    },
  ];

  return (
    <section className="py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Métodos de Contacto
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Múltiples formas de comunicarse con nuestro equipo para todas sus
            necesidades de consultoría ambiental en la Patagonia.
          </p>
        </div>

        {/* Main Contact Methods */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
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
                  <CardHeader className="pb-4">
                    <div
                      className={`bg-gradient-to-br ${method.color} text-white p-4 rounded-2xl w-16 h-16 mx-auto mb-4 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}
                    >
                      <method.icon className="h-8 w-8" />
                    </div>
                    <CardTitle className="text-xl text-gray-900 group-hover:text-brand-teal transition-colors">
                      {method.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p className="font-bold text-gray-900 text-lg">
                      {method.primary}
                    </p>
                    {method.secondary && (
                      <p className="text-sm font-semibold text-brand-teal bg-green-50 inline-block px-3 py-1 rounded-full">
                        {method.secondary}
                      </p>
                    )}
                    <p className="text-sm text-gray-600 leading-relaxed pt-2">
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
