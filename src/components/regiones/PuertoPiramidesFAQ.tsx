import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HelpCircle } from "lucide-react";

const PuertoPiramidesFAQ = () => {
  const faqs = [
    {
      question: "¿Brindan servicios ambientales en Puerto Pirámides?",
      answer:
        "Sí, brindamos servicios integrales de consultoría ambiental en Puerto Pirámides, única localidad dentro de la Península Valdés, Patrimonio de la Humanidad UNESCO. Trabajamos en área protegida con profesionales especializados en conservación.",
    },
    {
      question: "¿Atienden proyectos turísticos en área protegida UNESCO?",
      answer:
        "Absolutamente. Atendemos proyectos turísticos sustentables en Puerto Pirámides, incluyendo hoteles, hosterías, cabañas, restaurantes, operadores de avistaje de ballenas y emprendimientos turísticos respetando las normativas de conservación.",
    },
    {
      question:
        "¿Trabajan con operadores de avistaje de ballenas y turismo marino?",
      answer:
        "Sí, tenemos experiencia trabajando con operadores de avistaje de ballenas, empresas de buceo, kayak, snorkel y turismo náutico. Conocemos las regulaciones especiales de la Península Valdés y fauna marina protegida.",
    },
    {
      question:
        "¿Atienden proyectos hoteleros y gastronómicos en Puerto Pirámides?",
      answer:
        "Sí, atendemos proyectos hoteleros, gastronómicos, alojamientos turísticos, campings y emprendimientos de servicios en la localidad, siempre respetando las normativas ambientales del área protegida UNESCO.",
    },
    {
      question: "¿Qué tipos de proyectos atienden en Puerto Pirámides?",
      answer:
        "Atendemos proyectos turísticos (hoteles, gastronomía, avistaje), comerciales, de conservación, infraestructura sustentable, turismo náutico y emprendimientos en área protegida respetando el Patrimonio de la Humanidad UNESCO.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Preguntas Frecuentes - Servicios Ambientales en Puerto Pirámides
        </h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-start">
                  <HelpCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
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

export default PuertoPiramidesFAQ;
