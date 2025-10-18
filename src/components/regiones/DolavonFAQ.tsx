import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HelpCircle } from "lucide-react";

const DolavonFAQ = () => {
  const faqs = [
    {
      question: "¿Brindan servicios ambientales en Dolavon?",
      answer:
        "Sí, brindamos servicios integrales de consultoría ambiental en toda la localidad de Dolavon, incluyendo la zona de molinos harineros, centro histórico, chacras, zona turística y áreas de patrimonio cultural con profesionales especializados.",
    },
    {
      question: "¿Atienden proyectos en los molinos harineros históricos?",
      answer:
        "Absolutamente. Atendemos proyectos relacionados con los molinos harineros históricos de Dolavon, incluyendo restauración, preservación patrimonial, proyectos turísticos y emprendimientos culturales. Conocemos la importancia histórica de estos monumentos.",
    },
    {
      question: "¿Trabajan con proyectos turísticos en Dolavon?",
      answer:
        "Sí, tenemos experiencia trabajando en proyectos turísticos en Dolavon, incluyendo alojamientos, restaurantes, circuitos turísticos, emprendimientos gastronómicos y proyectos de turismo cultural relacionados con el patrimonio galesa.",
    },
    {
      question:
        "¿Atienden chacras y establecimientos agropecuarios en Dolavon?",
      answer:
        "Sí, atendemos chacras y establecimientos agropecuarios en la zona rural de Dolavon, incluyendo proyectos de riego, producción agrícola, quintas, huertas y actividades productivas tradicionales del valle.",
    },
    {
      question: "¿Qué tipos de proyectos atienden en Dolavon?",
      answer:
        "Atendemos proyectos turísticos (molinos, alojamientos, gastronomía), agropecuarios (chacras, quintas), patrimoniales (preservación histórica), comerciales y desarrollos inmobiliarios respetando el patrimonio cultural galesa de la localidad.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Preguntas Frecuentes - Servicios Ambientales en Dolavon
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

export default DolavonFAQ;
