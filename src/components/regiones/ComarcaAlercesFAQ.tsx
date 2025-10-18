import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HelpCircle } from "lucide-react";

const ComarcaAlercesFAQ = () => {
  const faqs = [
    {
      question: "¿Brindan servicios ambientales en Comarca Los Alerces?",
      answer:
        "Sí, brindamos servicios integrales de consultoría ambiental en toda la Comarca Los Alerces, incluyendo Esquel, Trevelin, Parque Nacional Los Alerces, Lago Puelo, El Hoyo, Epuyén, Cholila y toda la zona cordillerana con profesionales especializados.",
    },
    {
      question: "¿Atienden proyectos en el Parque Nacional Los Alerces?",
      answer:
        "Absolutamente. Atendemos proyectos relacionados con el Parque Nacional Los Alerces, incluyendo turismo sustentable, conservación de bosques andino-patagónicos, proyectos de investigación y emprendimientos respetando las normativas de área protegida.",
    },
    {
      question: "¿Trabajan con proyectos forestales y de conservación?",
      answer:
        "Sí, tenemos experiencia trabajando en proyectos forestales, conservación de bosques nativos, gestión de recursos naturales, proyectos de reforestación y manejo sustentable de bosques andino-patagónicos.",
    },
    {
      question: "¿Atienden proyectos turísticos en la zona cordillerana?",
      answer:
        "Sí, atendemos proyectos turísticos en Esquel, Trevelin, La Hoya, Lago Puelo, zona de lagos, centros de esquí, hoteles, hosterías, campings y emprendimientos turísticos en la región cordillerana.",
    },
    {
      question: "¿Qué tipos de proyectos atienden en Comarca Los Alerces?",
      answer:
        "Atendemos proyectos forestales, turísticos (hoteles, gastronomía, centros de esquí), de conservación, agropecuarios, desarrollos inmobiliarios y proyectos de infraestructura en zona de montaña respetando el ecosistema cordillerano.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Preguntas Frecuentes - Servicios Ambientales en Comarca Los Alerces
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

export default ComarcaAlercesFAQ;
