"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { PlusCircle, Trash2, Rocket, Zap, Box } from "lucide-react"
// import Image from 'next/image'

interface ProjectItem {
  description: string
  estimatedCost: number
}

export default function ProjectQuotation() {
  const [clientName] = useState('John Doe') // Asumimos que esto viene del login
  const [projectName, setProjectName] = useState('')
  const [projectDescription, setProjectDescription] = useState('')
  const [items, setItems] = useState<ProjectItem[]>([{ description: '', estimatedCost: 0 }])

  const addItem = () => {
    setItems([...items, { description: '', estimatedCost: 0 }])
  }

  const removeItem = (index: number) => {
    setItems(items.filter((_, i) => i !== index))
  }

  const updateItem = (index: number, field: keyof ProjectItem, value: string | number) => {
    const newItems = [...items]
    newItems[index] = { ...newItems[index], [field]: value }
    setItems(newItems)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí enviarías los datos al backend
    console.log({ clientName, projectName, projectDescription, items })
    alert('Proyecto enviado para cotización!')
  }

  return (
    <div className="min-h-screen bg-[#2c254b] text-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">
            <span className="text-blue-500">COT</span>
            <span className="text-purple-500">AI</span>
          </h1>
          <p className="text-xl text-gray-400">Sistema de Cotización Inteligente</p>
        </header>

        <form onSubmit={handleSubmit} className="space-y-8">
          <Card className="bg-gray-900 border-gray-700 overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-blue-900 to-purple-900">
              <CardTitle className="flex items-center text-2xl text-[#c4e9f2]">
                <Rocket className="mr-2 text-white" /> Información del Proyecto
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="clientName" className='text-white'>Cliente</Label>
                  <Input id="clientName" value={clientName} readOnly className="bg-gray-800 border-gray-700 text-gray-300" />
                </div>
                <div>
                  <Label htmlFor="projectName" className='text-white'>Nombre del Proyecto</Label>
                  <Input id="projectName" value={projectName} onChange={(e) => setProjectName(e.target.value)} required className="bg-gray-800 border-gray-700 text-gray-300" />
                </div>
              </div>
              <div>
                <Label htmlFor="projectDescription" className='text-white'>Descripción del Proyecto</Label>
                <Textarea id="projectDescription" value={projectDescription} onChange={(e) => setProjectDescription(e.target.value)} required className="bg-gray-800 border-gray-700 text-gray-300" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-700">
            <CardHeader className="bg-gradient-to-r from-green-90s0 to-teal-900">
              <CardTitle className="flex items-center text-2xl text-[#c4e9f2]">
                <Box className="mr-2 text-white" /> Características del Proyecto
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-4">
              {items.map((item, index) => (
                <div key={index} className="flex items-end space-x-4 bg-gray-800 p-4 rounded-lg">
                  <div className="flex-grow text-white">
                    <Label htmlFor={`item-${index}`}>Descripción</Label>
                    <Input id={`item-${index}`} value={item.description} onChange={(e) => updateItem(index, 'description', e.target.value)} required className="bg-gray-700 border-gray-600 text-gray-300" />
                  </div>
                  <div className="w-40 text-white">
                    <Label htmlFor={`cost-${index}`}>Costo Estimado</Label>
                    <Input id={`cost-${index}`} type="number" value={item.estimatedCost} onChange={(e) => updateItem(index, 'estimatedCost', parseFloat(e.target.value))} required min="0" step="0.01" className="bg-gray-700 border-gray-600 text-gray-300" />
                  </div>
                  <Button type="button" variant="destructive" size="icon" onClick={() => removeItem(index)} className="bg-red-900 hover:bg-red-800">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              ))}
              <Button type="button" variant="outline" onClick={addItem} className="w-full bg-gray-800 hover:bg-gray-700 text-gray-300 border-gray-700">
                <PlusCircle className="mr-2 h-4 w-4" /> Agregar Característica
              </Button>
            </CardContent>
          </Card>

          <div className="flex justify-center">
            <Button type="submit" className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold rounded-full transition-all duration-300 transform hover:scale-105">
              <Zap className="mr-2" /> Enviar Proyecto para Cotización
            </Button>
          </div>
        </form>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 ">
          
          {/* <Card className="bg-gray-900 border-gray-700">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <Image src="/placeholder.svg?height=100&width=100" alt="AI Icon" width={100} height={100} className="mb-4" />
              <h3 className="text-xl font-semibold mb-2">IA Avanzada</h3>
              <p className="text-gray-400">Nuestros algoritmos de IA optimizan tus cotizaciones para máxima precisión.</p>
            </CardContent>
          </Card>
          <Card className="bg-gray-900 border-gray-700">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <Image src="/placeholder.svg?height=100&width=100" alt="Security Icon" width={100} height={100} className="mb-4" />
              <h3 className="text-xl font-semibold mb-2">Seguridad Espacial</h3>
              <p className="text-gray-400">Protección de nivel NASA para todos tus datos y proyectos.</p>
            </CardContent>
          </Card> */}
        </div>
      </div>
    </div>
  )
}