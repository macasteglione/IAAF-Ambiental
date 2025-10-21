import { lazy, Suspense } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Mail,
  Send,
  Shield,
  CheckCircle,
  AlertCircle,
  RotateCcw,
} from "lucide-react";
import { useFormularioContacto } from "@/hooks/useFormularioContacto";
import ContactoCamposFormulario from "./ContactoCamposFormulario";

// Lazy load hCaptcha to improve INP
const HCaptcha = lazy(() => import("@hcaptcha/react-hcaptcha"));

const ContactoFormulario = () => {
  const {
    formData,
    isSubmitting,
    submitStatus,
    captchaToken,
    captchaRef,
    handleInputChange,
    handleCaptchaVerify,
    handleCaptchaExpire,
    handleSubmit,
    resetForm,
  } = useFormularioContacto();

  const handleSelectChange = (name: string, value: string) => {
    const syntheticEvent = {
      target: { name, value },
    } as React.ChangeEvent<HTMLInputElement>;
    handleInputChange(syntheticEvent);
  };

  // IMPORTANTE: Reemplaza con tu SITE KEY de hCaptcha desde .env
  const HCAPTCHA_SITE_KEY = "50b2fe65-b00b-4b9e-ad62-3ba471098be2";

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
                Complete el formulario y nuestro equipo se pondrá en contacto
                dentro de{" "}
                <strong className="text-brand-teal">24 horas hábiles</strong>.
                Todas las consultas iniciales son sin cargo.
              </CardDescription>
            </div>
          </div>
        </CardHeader>

        <CardContent className="p-5">
          {/* Mensaje de Éxito */}
          {submitStatus === "success" && (
            <div className="bg-green-50 border-2 border-brand-green rounded-lg p-6 mb-6 animate-in fade-in slide-in-from-top-4 duration-500">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-brand-green rounded-full flex items-center justify-center">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    ¡Consulta Enviada con Éxito!
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed mb-3">
                    Hemos recibido su solicitud de consultoría. Nuestro equipo
                    revisará su información y se pondrá en contacto con usted
                    dentro de{" "}
                    <strong className="text-brand-teal">
                      24 horas hábiles
                    </strong>
                    .
                  </p>
                  <Button
                    type="button"
                    onClick={resetForm}
                    className="bg-brand-green hover:bg-brand-teal text-white"
                    size="sm"
                  >
                    <RotateCcw className="mr-2 h-4 w-4" />
                    Enviar Otra Consulta
                  </Button>
                </div>
              </div>
            </div>
          )}

          {/* Mensaje de Error */}
          {submitStatus === "error" && (
            <div className="bg-red-50 border-2 border-red-300 rounded-lg p-6 mb-6 animate-in fade-in slide-in-from-top-4 duration-500">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
                  <AlertCircle className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Error al Enviar la Consulta
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed mb-4">
                    Lo sentimos, hubo un problema al procesar su solicitud. Por
                    favor, intente nuevamente o contáctenos directamente.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Button
                      onClick={resetForm}
                      variant="outline"
                      size="sm"
                      className="border-red-300 hover:bg-red-50"
                    >
                      <RotateCcw className="h-4 w-4 mr-2" />
                      Intentar Nuevamente
                    </Button>
                    <Button
                      asChild
                      size="sm"
                      className="bg-red-500 hover:bg-red-600 text-white"
                    >
                      <a href="mailto:administracion@iaafambiental.com">
                        <Mail className="h-4 w-4 mr-2" />
                        Contactar Directamente
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Formulario - Solo mostrar si no se envió exitosamente */}
          {submitStatus !== "success" && (
            <form onSubmit={handleSubmit}>
              <ContactoCamposFormulario
                formData={formData}
                onInputChange={handleInputChange}
                onSelectChange={handleSelectChange}
                disabled={isSubmitting}
              />

              {/* hCaptcha */}
              <div className="flex flex-col space-y-3 py-4">
                <Suspense fallback={
                  <div className="h-20 flex items-center justify-center bg-gray-50 rounded border border-gray-200">
                    <span className="text-sm text-gray-500">Cargando verificación...</span>
                  </div>
                }>
                  <HCaptcha
                    ref={captchaRef}
                    sitekey={HCAPTCHA_SITE_KEY}
                    onVerify={handleCaptchaVerify}
                    onExpire={handleCaptchaExpire}
                    theme="light"
                  />
                </Suspense>
                {!captchaToken && (
                  <p className="text-xs text-gray-500">
                    Complete la verificación para habilitar el envío
                  </p>
                )}
              </div>

              {/* Botón de Envío */}
              <div className="pt-4 border-t border-gray-200">
                <Button
                  type="submit"
                  className="w-full bg-brand-green hover:bg-brand-teal text-white shadow-lg hover:shadow-xl transition-all text-base py-5 disabled:opacity-50 disabled:cursor-not-allowed"
                  size="lg"
                  disabled={isSubmitting || !captchaToken}
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
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default ContactoFormulario;
