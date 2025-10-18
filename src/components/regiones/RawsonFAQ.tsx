import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HelpCircle } from "lucide-react";

const RawsonFAQ = () => {
  const faqs = [
    {
      question: "¿Brindan servicios ambientales en Rawson?",
      answer:
        "Sí, brindamos servicios integrales de consultoría ambiental en toda la ciudad de Rawson, incluyendo el centro administrativo, Playa Unión, Puerto Rawson, zona comercial, zona costera y áreas de desarrollo con profesionales especializados.",
    },
    {
      question:
        "¿Atienden proyectos gubernamentales y de infraestructura provincial?",
      answer:
        "Absolutamente. Atendemos proyectos gubernamentales, obras de infraestructura provincial, edificios públicos, organismos del estado, ministerios y proyectos de desarrollo urbano de la capital provincial.",
    },
    {
      question: "¿Trabajan en Playa Unión y Puerto Rawson?",
      answer:
        "Sí, tenemos experiencia trabajando en la zona costera de Rawson, incluyendo Playa Unión, Puerto Rawson, balnearios, zona portuaria y proyectos turísticos costeros. Conocemos la importancia del desarrollo turístico de la zona.",
    },
    {
      question: "¿Atienden proyectos comerciales y de servicios en Rawson?",
      answer:
        "Sí, atendemos proyectos comerciales, hoteles, restaurantes, servicios turísticos, emprendimientos gastronómicos, desarrollos inmobiliarios y proyectos de servicios en toda la ciudad.",
    },
    {
      question: "¿Qué tipos de proyectos atienden en Rawson?",
      answer:
        "Atendemos proyectos gubernamentales (edificios públicos, infraestructura), turísticos (hoteles, gastronomía), comerciales, desarrollos inmobiliarios, obras de infraestructura urbana y proyectos de servicios en la capital provincial.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Preguntas Frecuentes - Servicios Ambientales en Rawson
        </h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-start">
                  <HelpCircle className="h-5 w-5 text-brand-green mr-2 mt-0.5 flex-shrink-0" />
                  {faq.question}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-gray-600">{faq.answer}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RawsonFAQ;
