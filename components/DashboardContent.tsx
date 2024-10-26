'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import BasebandTestModal from './BasebandTestModal'
import CareerModeModal from './CareerModeModal'

export default function DashboardContent() {
  const [isBasebandModalOpen, setIsBasebandModalOpen] = useState(false)
  const [isCareerModalOpen, setIsCareerModalOpen] = useState(false)

  return (
    <main className="flex-grow container mx-auto px-4 py-8">
      <Card className="mb-6 bg-card text-card-foreground">
        <CardHeader>
          <CardTitle className="text-3xl">Hey, Welcome!</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg mb-4">
            We're thrilled to assist you in your IELTS exam preparation journey. Before diving into practice sessions, we recommend taking a quick baseband test to assess your current level and tailor your study plan accordingly.
          </p>
          <Button 
            className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90"
            onClick={() => setIsBasebandModalOpen(true)}
          >
            Start Baseband Test
          </Button>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-2 gap-6">
        <Card className="bg-card text-card-foreground">
          <CardHeader>
            <CardTitle className="text-2xl">Career Mode</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Prepare for your career with tailored IELTS practice.</p>
            <Button 
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
              onClick={() => setIsCareerModalOpen(true)}
            >
              Start
            </Button>
          </CardContent>
        </Card>
        <Card className="bg-card text-card-foreground">
          <CardHeader>
            <CardTitle className="text-2xl">Practice Mode</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Improve your skills with general IELTS practice sessions.</p>
            <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">Start</Button>
          </CardContent>
        </Card>
      </div>

      <BasebandTestModal 
        isOpen={isBasebandModalOpen} 
        onClose={() => setIsBasebandModalOpen(false)} 
      />

      <CareerModeModal 
        isOpen={isCareerModalOpen} 
        onClose={() => setIsCareerModalOpen(false)} 
      />
    </main>
  )
}