import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronRight, BarChart2, Clock , Users } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="py-6 px-4 sm:px-6 lg:px-8 bg-white border-b">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary">COTAI</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#features" className="text-sm font-medium text-gray-500 hover:text-primary">Características</a></li>
              <li><a href="#benefits" className="text-sm font-medium text-gray-500 hover:text-primary">Beneficios</a></li>
              <li><a href="#cta" className="text-sm font-medium text-gray-500 hover:text-primary">Comenzar</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl font-extrabold sm:text-5xl md:text-6xl">
                Cotización empresarial simplificada
              </h2>
              <p className="mt-4 text-xl">
                COTAI: La solución integral para gestionar y cotizar proyectos 
              </p>
              <div className="mt-8">
                <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
                  Comenzar ahora <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-3xl font-bold text-center mb-12">Características principales</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureCard
                icon={<BarChart2 className="h-10 w-10 text-primary" />}
                title="Gestión de proyectos"
                description="Centraliza y organiza todos tus proyectos en un solo lugar."
              />
              <FeatureCard
                icon={<Clock className="h-10 w-10 text-primary" />}
                title="Cotización rápida"
                description="Genera cotizaciones precisas en cuestión de minutos."
              />
              <FeatureCard
                icon={<Users className="h-10 w-10 text-primary" />}
                title="Colaboración en equipo"
                description="Trabaja eficientemente con tu equipo en tiempo real."
              />
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-3xl font-bold text-center mb-12">Beneficios para tu empresa</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Ahorro de tiempo</CardTitle>
                </CardHeader>
                <CardContent>
                  Reduce significativamente el tiempo dedicado a la planificación y cotización de proyectos.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Mayor precisión</CardTitle>
                </CardHeader>
                <CardContent>
                  Minimiza errores y mejora la precisión en tus cotizaciones con nuestro sistema automatizado.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Mejor gestión de recursos</CardTitle>
                </CardHeader>
                <CardContent>
                  Optimiza la asignación de recursos y mejora la eficiencia operativa de tu empresa.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Toma de decisiones informada</CardTitle>
                </CardHeader>
                <CardContent>
                  Obtén insights valiosos para tomar decisiones estratégicas basadas en datos reales.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="cta" className="bg-primary text-white py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-3xl font-bold mb-4">¿Listo para optimizar tus cotizaciones?</h3>
            <p className="text-xl mb-8">Únete a COTAI y lleva la gestión de proyectos al siguiente nivel</p>
            <Button size="lg" variant="secondary">
              Solicitar una demo <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2023 COTAI. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  )
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-center mb-4">{icon}</div>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </Card>
  )
}