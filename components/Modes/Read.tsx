'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Timer } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function Component() {
  const [currentPart, setCurrentPart] = useState(1)
  const [timeLeft, setTimeLeft] = useState(300)
  const [answers, setAnswers] = useState<Record<number, string>>({})

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => Math.max(0, prev - 1))
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-10 border-b bg-background p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">IELTS Reading Test</h1>
        <div className="flex items-center space-x-4">
          <div className={`text-xl font-semibold flex items-center ${timeLeft < 60 ? 'text-red-500' : ''}`}>
            <Timer className="mr-2 h-5 w-5" />
            {formatTime(timeLeft)} remaining
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">Review</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Review Answers</DialogTitle>
              </DialogHeader>
              <div className="grid gap-4">
                {[1, 2, 3].map((part) => (
                  <div key={part} className="space-y-2">
                    <h3 className="font-semibold">Part {part}</h3>
                    <div className="grid grid-cols-5 gap-2">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <div
                          key={i}
                          className={`p-2 text-center rounded ${
                            answers[i + 1] ? 'bg-primary/20' : 'bg-muted'
                          }`}
                        >
                          {i + 1}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </header>

      <div className="container mx-auto p-4">
        <div className="relative mb-4">
          <Timer className="absolute left-0 top-1/2 transform -translate-y-1/2 h-5 w-5 text-primary" />
          <Progress value={(300 - timeLeft) / 3} className="h-6 ml-6" />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Reading Passage Section */}
          <div className="bg-card rounded-lg border shadow-sm h-[calc(100vh-220px)] overflow-y-auto">
            <div className="p-6">
              <h2 className="text-xl font-bold mb-4">READING PASSAGE 1</h2>
              <div className="prose max-w-none">
                <h3 className="text-lg font-semibold">How the mind ages</h3>
                <p className="mt-4">
                  The way mental function changes is largely determined by three factors-mental lifestyle,
                  the impact of chronic disease and flexibility of the mind.
                </p>
                {/* Rest of the passage content */}
                <p className="mt-4">
                  In conclusion, while some aspects of cognitive function may decline with age, the
                  brain remains remarkably adaptable. By maintaining an active mental lifestyle,
                  managing chronic health conditions, and cultivating cognitive flexibility, it's
                  possible to maintain and even improve mental sharpness well into old age.
                </p>
              </div>
            </div>
          </div>

          {/* Questions Section */}
          <div className="bg-card rounded-lg border shadow-sm h-[calc(100vh-220px)] overflow-y-auto">
            <div className="p-6">
              <Tabs defaultValue="1" onValueChange={(value) => setCurrentPart(Number(value))}>
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="1">Part 1</TabsTrigger>
                  <TabsTrigger value="2">Part 2</TabsTrigger>
                  <TabsTrigger value="3">Part 3</TabsTrigger>
                </TabsList>

                <TabsContent value="1" className="space-y-8">
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Question 1</h3>
                    <p className="mb-4">What does the writer say about the performance of older typists on the test?</p>
                    <RadioGroup
                      onValueChange={(value) => setAnswers((prev) => ({ ...prev, 1: value }))}
                      value={answers[1]}
                    >
                      {[
                        "They used different motor skills from younger typists.",
                        "They had been more efficiently trained than younger typists.",
                        "They used more time-saving techniques than younger typists.",
                        "They had better concentration skills than younger typists."
                      ].map((option, i) => (
                        <div key={i} className="flex items-center space-x-2">
                          <RadioGroupItem value={String(i + 1)} id={`q1-${i}`} />
                          <Label htmlFor={`q1-${i}`}>{option}</Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>

                  {/* Additional questions */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Question 2</h3>
                    <p className="mb-4">According to the passage, what is cognitive flexibility?</p>
                    <RadioGroup
                      onValueChange={(value) => setAnswers((prev) => ({ ...prev, 2: value }))}
                      value={answers[2]}
                    >
                      {[
                        "The ability to maintain stable cognitive function throughout life",
                        "The ability to adapt and find new ways of doing things",
                        "The natural decline of mental abilities with age",
                        "The improvement of vocabulary and general knowledge over time"
                      ].map((option, i) => (
                        <div key={i} className="flex items-center space-x-2">
                          <RadioGroupItem value={String(i + 1)} id={`q2-${i}`} />
                          <Label htmlFor={`q2-${i}`}>{option}</Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-4">Question 3</h3>
                    <p className="mb-4">What role does social engagement play in cognitive function?</p>
                    <RadioGroup
                      onValueChange={(value) => setAnswers((prev) => ({ ...prev, 3: value }))}
                      value={answers[3]}
                    >
                      {[
                        "It has no significant impact on cognitive decline",
                        "It accelerates cognitive decline in older adults",
                        "It helps slow down cognitive decline",
                        "It only affects emotional well-being"
                      ].map((option, i) => (
                        <div key={i} className="flex items-center space-x-2">
                          <RadioGroupItem value={String(i + 1)} id={`q3-${i}`} />
                          <Label htmlFor={`q3-${i}`}>{option}</Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>
                </TabsContent>

                <TabsContent value="2">
                  <div className="text-center text-muted-foreground pt-8">
                    Select Part 2 to view questions
                  </div>
                </TabsContent>

                <TabsContent value="3">
                  <div className="text-center text-muted-foreground pt-8">
                    Select Part 3 to view questions
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}