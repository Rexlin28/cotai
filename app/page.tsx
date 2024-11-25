import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronRight, BarChart2, Clock, DollarSign, Users, Zap, Shield, Globe } from 'lucide-react'


export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#09090b] text-gray-100">
      <header className="py-6 px-4 sm:px-6 lg:px-8 bg-gray-900 border-b border-gray-800">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">
            <span className="text-blue-500">COT</span>
            <span className="text-purple-500">AI</span>
          </h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#features" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Características</a></li>
              <li><a href="#benefits" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Beneficios</a></li>
              <li><a href="#testimonials" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Testimonios</a></li>
              <li><a href="#pricing" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Precios</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-purple-900 opacity-50"></div>
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl font-extrabold sm:text-5xl md:text-6xl mb-6">
                Cotización Empresarial del Futuro
              </h2>
              <p className="text-xl mb-8">
                COTAI: Potencia tu negocio con inteligencia artificial y blockchain para cotizaciones precisas y seguras.
              </p>
              <div className="flex justify-center space-x-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                  Comenzar ahora <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="border-white text-[#132336] hover:bg-white hover:text-gray-900">
                  Ver demo
                </Button>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#09090b] to-transparent"></div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-3xl font-bold text-center mb-12">Características Revolucionarias</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureCard
                icon={<BarChart2 className="h-10 w-10 text-blue-500" />}
                title="IA Avanzada"
                description="Algoritmos de inteligencia artificial que aprenden y mejoran con cada cotización."
              />
              <FeatureCard
                icon={<Shield className="h-10 w-10 text-purple-500" />}
                title="Seguridad Blockchain"
                description="Tus datos y cotizaciones protegidos por la tecnología blockchain más avanzada."
              />
              <FeatureCard
                icon={<Globe className="h-10 w-10 text-green-500" />}
                title="Acceso Global"
                description="Gestiona tus proyectos y cotizaciones desde cualquier parte del mundo, en tiempo real."
              />
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="py-20 bg-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-3xl font-bold text-center mb-12">Beneficios para tu Empresa</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <BenefitCard
                icon={<Clock className="h-12 w-12 text-yellow-500" />}
                title="Ahorro de Tiempo"
                description="Reduce el tiempo de cotización en un 75% con nuestra plataforma automatizada."
              />
              <BenefitCard
                icon={<DollarSign className="h-12 w-12 text-green-500" />}
                title="Incremento de Ingresos"
                description="Aumenta tus conversiones en un 40% con cotizaciones precisas y oportunas."
              />
              <BenefitCard
                icon={<Users className="h-12 w-12 text-blue-500" />}
                title="Mejora la Satisfacción del Cliente"
                description="Ofrece un servicio excepcional con respuestas rápidas y cotizaciones detalladas."
              />
              <BenefitCard
                icon={<Zap className="h-12 w-12 text-purple-500" />}
                title="Optimización de Recursos"
                description="Asigna eficientemente tus recursos con insights basados en datos reales."
              />
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-20 bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-3xl font-bold text-center mb-12">Lo que Dicen Nuestros Clientes</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <TestimonialCard
                quote="COTAI ha transformado completamente nuestra forma de hacer negocios. Las cotizaciones son más rápidas y precisas que nunca."
                author="María González"
                company="Tech Innovators Inc."
              />
              <TestimonialCard
                quote="La seguridad blockchain de COTAI nos da la tranquilidad que necesitábamos para manejar proyectos de alto valor."
                author="Carlos Rodríguez"
                company="Secure Solutions Ltd."
              />
              <TestimonialCard
                quote="Desde que implementamos COTAI, nuestras tasas de conversión han aumentado significativamente. Es una herramienta indispensable."
                author="Ana Martínez"
                company="Global Projects Co."
              />
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20 bg-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-3xl font-bold text-center mb-12">Planes Adaptados a tu Negocio</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <PricingCard
                title="Básico"
                price="$99"
                features={[
                  "Hasta 50 cotizaciones mensuales",
                  "Acceso a IA básica",
                  "Almacenamiento en blockchain",
                  "Soporte por email"
                ]}
              />
              <PricingCard
                title="Pro"
                price="$299"
                features={[
                  "Cotizaciones ilimitadas",
                  "IA avanzada con aprendizaje",
                  "Seguridad blockchain premium",
                  "Soporte prioritario 24/7"
                ]}
                highlighted={true}
              />
              <PricingCard
                title="Empresa"
                price="Personalizado"
                features={[
                  "Solución a medida",
                  "IA y blockchain personalizados",
                  "Integración con sistemas existentes",
                  "Gerente de cuenta dedicado"
                ]}
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-3xl font-bold mb-4">¿Listo para Revolucionar tus Cotizaciones?</h3>
            <p className="text-xl mb-8">Únete a COTAI y lleva tu negocio al siguiente nivel</p>
            <Button size="lg" variant="secondary" className="bg-white text-gray-900 hover:bg-gray-200">
              Comienza tu Prueba Gratuita <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-white font-semibold mb-4">Producto</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">Características</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Precios</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Casos de Uso</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Compañía</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">Sobre Nosotros</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Clientes</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contacto</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Recursos</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Documentación</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Webinars</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">Privacidad</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Términos</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Seguridad</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center">
            <p>&copy; 2023 COTAI. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <Card className="bg-gray-800 border-gray-700">
      <CardHeader>
        <div className="flex items-center justify-center mb-4">{icon}</div>
        <CardTitle className="text-xl font-semibold text-center text-[#7ba1d1]">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-center text-gray-300">{description}</CardDescription>
      </CardContent>
    </Card>
  )
}

function BenefitCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <Card className="bg-gray-900 border-gray-700">
      <CardContent className="flex items-start p-6">
        <div className="flex-shrink-0 mr-4">{icon}</div>
        <div>
          <CardTitle className="text-xl font-semibold mb-2 text-white">{title}</CardTitle>
          <CardDescription className="text-gray-300">{description}</CardDescription>
        </div>
      </CardContent>
    </Card>
  )
}

function TestimonialCard({ quote, author, company }: { quote: string; author: string; company: string }) {
  return (
    <Card className="bg-gray-800 border-gray-700">
      <CardContent className="p-6">
        <p className="text-gray-300 mb-4 text-[">&quot;{quote}&quot;</p>
        <p className="font-semibold text-[#7ba1d1]">{author}</p>
        <p className="text-sm text-gray-400">{company}</p>
      </CardContent>
    </Card>
  )
}

function PricingCard({ title, price, features, highlighted = false }: { title: string; price: string; features: string[]; highlighted?: boolean }) {
  return (
    <Card className={`${highlighted ? 'bg-blue-900 border-blue-500' : 'bg-gray-900 border-gray-700'} relative overflow-hidden`}>
      {highlighted && (
        <div className="absolute top-0 right-0 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-bl">
          Más Popular
        </div>
      )}
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center text-[#843bd2]">{title}</CardTitle>
        <CardDescription className="text-center">
          <span className="text-4xl font-bold text-white">{price}</span>
          {price !== "Personalizado" && <span className="text-gray-400">/mes</span>}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2 text-gray-200">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <Zap className="h-5 w-5 mr-2 text-blue-500" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <Button className={`w-full mt-6 ${highlighted ? 'bg-blue-500 hover:bg-blue-600 text-white' : 'bg-gray-700 hover:bg-gray-600 text-white'}`}>
          Elegir Plan
        </Button>
      </CardContent>
    </Card>
  )
}