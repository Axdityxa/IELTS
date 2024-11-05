'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Book, Mic, Headphones, Pencil, ArrowLeft, LayoutGrid, Timer } from 'lucide-react'
import WritingTest from '@/components/Modes/Write'
import SpeakingTest from '@/components/Modes/Speak'
import ListeningTest from '@/components/Modes/Listen'

type Section = {
  id: string
  title: string
  icon: React.ElementType
  subsections: { id: string; title: string }[]
}

const sections: Section[] = [
  {
    id: 'reading',
    title: 'Reading',
    icon: Book,
    subsections: [
      { id: 'academic-reading', title: 'Academic Reading' },
      { id: 'general-training-reading', title: 'General Training Reading' }
    ]
  },
  {
    id: 'speaking',
    title: 'Speaking',
    icon: Mic,
    subsections: [
      { id: 'part-1', title: 'Part 1: Introduction' },
      { id: 'part-2', title: 'Part 2: Long Turn' },
      { id: 'part-3', title: 'Part 3: Discussion' }
    ]
  },
  {
    id: 'listening',
    title: 'Listening',
    icon: Headphones,
    subsections: [
      { id: 'section-1', title: 'Section 1' },
      { id: 'section-2', title: 'Section 2' },
      { id: 'section-3', title: 'Section 3' },
      { id: 'section-4', title: 'Section 4' }
    ]
  },
  {
    id: 'writing',
    title: 'Writing',
    icon: Pencil,
    subsections: [
      { id: 'task-1', title: 'Task 1' },
      { id: 'task-2', title: 'Task 2' }
    ]
  }
]

const questionOptions = [5, 10, 15, 20]

export default function PracticeMode() {
  const router = useRouter()
  const [currentScreen, setCurrentScreen] = useState('mode-select')
  const [selectedSection, setSelectedSection] = useState<string | null>(null)
  const [selectedSubsection, setSelectedSubsection] = useState<string | null>(null)
  const [questionCount, setQuestionCount] = useState<number>(10)
  const [isModalOpen, setModalOpen] = useState(false)

  const handleBack = () => {
    if (currentScreen === 'subsections') {
      setCurrentScreen('section-practice')
      setSelectedSection(null)
      setModalOpen(false)
    } else if (currentScreen === 'questionCount') {
      setCurrentScreen('subsections')
    } else if (['section-practice', 'full-test', 'test'].includes(currentScreen)) {
      setCurrentScreen('mode-select')
    }
  }

  const startTest = () => {
    setCurrentScreen('test')
  }

  const renderModeSelect = () => (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-center mb-10">Select Practice Mode</h2>
      <div className="grid grid-cols-2 gap-8">
        <Card 
          className="hover:border-primary cursor-pointer transition-all duration-300 transform hover:scale-105"
          onClick={() => setCurrentScreen('section-practice')}
        >
          <CardContent className="pt-6">
            <div className="flex flex-col items-center gap-4 p-6">
              <LayoutGrid className="h-24 w-24 text-primary" />
              <div className="text-center">
                <h3 className="text-2xl font-semibold mb-2">Section Practice</h3>
                <p className="text-muted-foreground">Practice specific sections and subsections with customizable number of questions</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card 
          className="hover:border-primary cursor-pointer transition-all duration-300 transform hover:scale-105"
          onClick={() => setCurrentScreen('full-test')}
        >
          <CardContent className="pt-6">
            <div className="flex flex-col items-center gap-4 p-6">
              <Timer className="h-24 w-24 text-primary" />
              <div className="text-center">
                <h3 className="text-2xl font-semibold mb-2">Full Test</h3>
                <p className="text-muted-foreground">Take a complete test with random questions from all subsections</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )

  const renderSectionPractice = () => (
    <div className="space-y-6">
      <div className="flex items-center gap-4 mb-8">
        <Button variant="outline" size="icon" onClick={handleBack}>
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <h2 className="text-2xl font-bold">Section Practice</h2>
      </div>
      <div className="grid grid-cols-2 gap-6">
        {sections.map(({ id, title, icon: Icon }) => (
          <Button
            key={id}
            variant="outline"
            className="h-40 flex flex-col items-center justify-center gap-4 hover:bg-primary/10 transition-colors"
            onClick={() => {
              setSelectedSection(id)
              setModalOpen(true)
            }}
          >
            <Icon className="h-12 w-12 text-primary" />
            <span className="text-xl font-medium">{title}</span>
          </Button>
        ))}
      </div>
    </div>
  )

  const renderQuestionCount = () => (
    <div className="space-y-6">
      <div className="flex items-center gap-4 mb-8">
        <Button variant="outline" size="icon" onClick={handleBack}>
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <h2 className="text-2xl font-bold">Select Number of Questions</h2>
      </div>
      <div className="grid grid-cols-4 gap-4">
        {questionOptions.map((count) => (
          <Button
            key={count}
            variant={questionCount === count ? "default" : "outline"}
            className="h-28 text-2xl"
            onClick={() => setQuestionCount(count)}
          >
            {count} Questions
          </Button>
        ))}
      </div>
      <Button 
        className="w-full h-16 mt-8 text-xl"
        onClick={startTest}
      >
        Start Practice
      </Button>
    </div>
  )

  const renderFullTest = () => (
    <div className="space-y-6">
      <div className="flex items-center gap-4 mb-8">
        <Button variant="outline" size="icon" onClick={handleBack}>
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <h2 className="text-2xl font-bold">Full Test</h2>
      </div>
      <div className="grid gap-4">
        {sections.map(({ id, title, icon: Icon }) => (
          <Button
            key={id}
            variant="outline"
            className="h-24 flex items-center gap-6 text-left justify-start px-8 text-xl hover:bg-primary/10 transition-colors"
            onClick={() => {
              setSelectedSection(id)
              startTest()
            }}
          >
            <Icon className="h-10 w-10 text-primary" />
            <span className="text-xl">{title} Full Test</span>
          </Button>
        ))}
      </div>
    </div>
  )

  const renderTest = () => {
    switch (selectedSection) {
      case 'reading':
        router.push('/baseband-test?timer=5')
        return null
      case 'writing':
        return <WritingTest />
      case 'speaking':
        return <SpeakingTest />
      case 'listening':
        return <ListeningTest />
      default:
        return null
    }
  }

  return (
    <Card className="w-full max-w-5xl mx-auto">
      <CardHeader>
        <CardTitle className="text-4xl text-center font-bold">IELTS Practice Mode</CardTitle>
      </CardHeader>
      <CardContent>
        {currentScreen === 'mode-select' && renderModeSelect()}
        {currentScreen === 'section-practice' && renderSectionPractice()}
        {currentScreen === 'questionCount' && renderQuestionCount()}
        {currentScreen === 'full-test' && renderFullTest()}
        {currentScreen === 'test' && renderTest()}

        <Dialog open={isModalOpen} onOpenChange={setModalOpen}>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold mb-4">Select a Subsection</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4">
              {sections.find(s => s.id === selectedSection)?.subsections.map(({ id, title }) => (
                <Button
                  key={id}
                  variant="outline"
                  className="h-16 justify-start text-lg hover:bg-primary/10 transition-colors"
                  onClick={() => {
                    setSelectedSubsection(id)
                    setModalOpen(false)
                    setCurrentScreen('questionCount')
                  }}
                >
                  {title}
                </Button>
              ))}
            </div>
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
  )
}