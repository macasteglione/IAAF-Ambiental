import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Send } from "lucide-react";
import { useFormularioContacto } from "@/hooks/useFormularioContacto";
import ContactoCamposFormulario from "./ContactoCamposFormulario";

const ContactoFormulario = () => {
  const { formData, isSubmitting, handleInputChange, handleSubmit } =
    useFormularioContacto();

  const handleSelectChange = (name: string, value: string) => {
    const syntheticEvent = {
      target: { name, value },
    } as React.ChangeEvent<HTMLInputElement>;
    handleInputChange(syntheticEvent);
  };

  return (
    <div className="w-full" id="formulario">
      <Card className="bg-white shadow-2xl border-2 border-brand-lime/20 hover:border-brand-lime/30 transition-colors h-full">
        <CardHeader className="bg-gradient-to-r from-green-50 to-green-50/30 border-b border-brand-lime/20 p-5">
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 w-11 h-11 bg-brand-green rounded-full flex items-center justify-center shadow-md">
              <Mail className="h-5 w-5 text-white" />
            </div>
            <div className="flex-1">
              <CardTitle className="text-xl lg:text-2xl text-gray-900 mb-1.5">
                Solicite una Consultoría
              </CardTitle>
              <CardDescription className="text-sm text-gray-600 leading-relaxed">
                Complete el formulario y nuestro equipo se pondrá en contacto dentro de{" "}
                <strong className="text-brand-teal">24 horas hábiles</strong>.
                Todas las consultas iniciales son sin cargo.
              </CardDescription>
            </div>
          </div>
        </CardHeader>

        <CardContent className="p-5">
          <form onSubmit={handleSubmit} className="space-y-6">
            <ContactoCamposFormulario
              formData={formData}
              onInputChange={handleInputChange}
              onSelectChange={handleSelectChange}
              disabled={isSubmitting}
            />

            {/* Submit Button */}
            <div className="pt-4 border-t border-gray-200">
              <Button
                type="submit"
                className="w-full bg-brand-green hover:bg-brand-teal text-white shadow-lg hover:shadow-xl transition-all text-base py-5 disabled:opacity-50 disabled:cursor-not-allowed"
                size="lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Enviando Consulta...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-5 w-5" />
                    Enviar Consulta Ahora
                  </>
                )}
              </Button>

              <p className="text-center text-xs text-gray-500 mt-3">
                Al enviar este formulario, acepta nuestra{" "}
                <a
                  href="/privacidad"
                  className="text-brand-teal hover:text-brand-dark underline transition-colors"
                >
                  Política de Privacidad
                </a>
              </p>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContactoFormulario;
