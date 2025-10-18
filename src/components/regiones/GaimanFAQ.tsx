import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HelpCircle } from "lucide-react";

const GaimanFAQ = () => {
  const faqs = [
    {
      question: "¿Brindan servicios ambientales en Gaiman?",
      answer:
        "Sí, brindamos servicios integrales de consultoría ambiental en toda la localidad de Gaiman, incluyendo el centro histórico, zona turística, chacras, casas de té y áreas de patrimonio cultural con profesionales especializados.",
    },
    {
      question: "¿Atienden proyectos turísticos en Gaiman?",
      answer:
        "Absolutamente. Atendemos proyectos turísticos incluyendo casas de té, alojamientos, restaurantes, emprendimientos gastronómicos, circuitos turísticos y proyectos de turismo rural. Conocemos la importancia del patrimonio cultural galesa.",
    },
    {
      question: "¿Trabajan con proyectos en zonas de patrimonio histórico?",
      answer:
        "Sí, tenemos experiencia trabajando en zonas de patrimonio histórico y cultural. Brindamos asesoramiento ambiental para proyectos que respeten y preserven el patrimonio galesa de Gaiman, incluyendo edificios históricos y capillas.",
    },
    {
      question: "¿Atienden chacras y establecimientos agropecuarios en Gaiman?",
      answer:
        "Sí, atendemos chacras y establecimientos agropecuarios en la zona rural de Gaiman, incluyendo proyectos de riego, producción agrícola, quintas, huertas y actividades productivas tradicionales del valle.",
    },
    {
      question: "¿Qué tipos de proyectos atienden en Gaiman?",
      answer:
        "Atendemos proyectos turísticos (casas de té, alojamientos), agropecuarios (chacras, quintas), comerciales (gastronomía, artesanías), desarrollos inmobiliarios y proyectos de preservación del patrimonio cultural e histórico.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Preguntas Frecuentes - Servicios Ambientales en Gaiman
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

export default GaimanFAQ;
