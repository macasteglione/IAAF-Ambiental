import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HelpCircle } from "lucide-react";

const PuertoMadrynFAQ = () => {
  const faqs = [
    {
      question: "¿Brindan servicios ambientales en Puerto Madryn?",
      answer:
        "Sí, brindamos servicios integrales de consultoría ambiental en toda la ciudad de Puerto Madryn, incluyendo la zona urbana, el área industrial del Parque Industrial, la zona costera, y los atractivos turísticos cercanos como Punta Loma y Playa El Doradillo. Nuestro equipo tiene amplia experiencia en la ciudad.",
    },
    {
      question: "¿Qué tipos de proyectos atienden en Puerto Madryn?",
      answer:
        "Atendemos desarrollos turísticos (hoteles, restaurantes, agencias), proyectos industriales en el Parque Industrial, emprendimientos comerciales en la zona céntrica, obras de infraestructura urbana, proyectos de energía renovable y actividades productivas relacionadas con la pesca y el turismo.",
    },
    {
      question: "¿Trabajan con proyectos turísticos en Puerto Madryn?",
      answer:
        "Sí, tenemos amplia experiencia con proyectos turísticos en Puerto Madryn, desde hoteles y apart-hoteles hasta agencias de turismo, avistaje de ballenas, buceo recreativo y emprendimientos gastronómicos. Conocemos las particularidades ambientales de la ciudad y su entorno marino.",
    },
    {
      question:
        "¿Cuánto tiempo toma un estudio de impacto ambiental en Puerto Madryn?",
      answer:
        "El tiempo varía según la complejidad del proyecto. Para proyectos comerciales o turísticos pequeños, entre 1-2 meses. Para proyectos industriales o de mayor envergadura, entre 2-4 meses. Recomendamos contactarnos con anticipación para planificar adecuadamente.",
    },
    {
      question: "¿Realizan estudios en la zona costera de Puerto Madryn?",
      answer:
        "Absolutamente. Tenemos amplia experiencia en la costa de Puerto Madryn, incluyendo evaluaciones para proyectos en el frente marítimo, estudios de impacto en el ecosistema marino del Golfo Nuevo, monitoreo de fauna costera (lobos marinos, aves), y estudios de calidad de agua marina.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Preguntas Frecuentes - Servicios Ambientales en Puerto Madryn
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

export default PuertoMadrynFAQ;
