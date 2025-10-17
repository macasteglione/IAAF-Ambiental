
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HelpCircle } from "lucide-react";

const PeninsulaValdesFAQ = () => {
  const faqs = [
    {
      question: "¿Brindan servicios ambientales en Península Valdés?",
      answer: "Sí, brindamos servicios integrales de consultoría ambiental en toda la Península Valdés, Patrimonio de la Humanidad UNESCO. Trabajamos en área natural protegida con profesionales especializados en conservación y fauna marina."
    },
    {
      question: "¿Atienden proyectos en Patrimonio de la Humanidad UNESCO?",
      answer: "Absolutamente. Atendemos proyectos de conservación, turismo sustentable, monitoreo de fauna, investigación científica y emprendimientos en área protegida respetando estrictamente las normativas UNESCO y de conservación."
    },
    {
      question: "¿Trabajan en Punta Norte, Punta Delgada y Caleta Valdés?",
      answer: "Sí, tenemos experiencia trabajando en todos los puntos de la Península Valdés: Punta Norte (orcas, lobos marinos), Punta Delgada (elefantes marinos), Caleta Valdés (pingüinos) y Puerto Pirámides (ballenas)."
    },
    {
      question: "¿Atienden proyectos de monitoreo de fauna marina?",
      answer: "Sí, atendemos proyectos de monitoreo de ballenas francas, orcas, lobos marinos, elefantes marinos, pingüinos y otras especies protegidas. Conocemos las regulaciones especiales de fauna marina del área UNESCO."
    },
    {
      question: "¿Qué tipos de proyectos atienden en Península Valdés?",
      answer: "Atendemos proyectos de conservación, turismo sustentable, monitoreo de fauna, investigación científica, infraestructura en área protegida y emprendimientos respetando el Patrimonio de la Humanidad UNESCO."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Preguntas Frecuentes - Servicios Ambientales en Península Valdés
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

export default PeninsulaValdesFAQ;
