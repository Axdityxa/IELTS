'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Timer, ChevronLeft, ChevronRight } from "lucide-react"

export default function Component() {
  const [timeLeft, setTimeLeft] = useState(300)
  const [currentPart, setCurrentPart] = useState(1)
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
    <div className="min-h-screen bg-background p-4">
      <div className="flex items-center justify-between mb-2">
        <h1 className="text-xl font-semibold">IELTS Reading Test</h1>
        <div className="flex items-center gap-4">
          <div className="flex items-center text-red-500">
            <Timer className="h-4 w-4 mr-1" />
            <span>{formatTime(timeLeft)} remaining</span>
          </div>
          <Button variant="outline" size="sm">Review</Button>
        </div>
      </div>

      <Progress value={(300 - timeLeft) / 3} className="h-2 mb-4" />

      <div className="grid grid-cols-2 gap-4 h-[calc(100vh-140px)]">
        {/* Reading Passage */}
        <div className="overflow-y-auto">
          <div className="space-y-4">
            <h2 className="font-bold">READING PASSAGE 1</h2>
            <h3 className="font-semibold">How the mind ages</h3>
            <p>The way mental function changes is largely determined by three factors-mental lifestyle,
               the impact of chronic disease and flexibility of the mind.</p>
            {/* Additional paragraphs */}
          </div>
        </div>

        {/* Questions */}
        <div className="overflow-y-auto">
          <div className="flex space-x-2 mb-4">
            <Button 
              variant={currentPart === 1 ? "secondary" : "ghost"}
              onClick={() => setCurrentPart(1)}
              size="sm"
            >
              Part 1
            </Button>
            <Button
              variant={currentPart === 2 ? "secondary" : "ghost"}
              onClick={() => setCurrentPart(2)}
              size="sm"
            >
              Part 2
            </Button>
            <Button
              variant={currentPart === 3 ? "secondary" : "ghost"}
              onClick={() => setCurrentPart(3)}
              size="sm"
            >
              Part 3
            </Button>
          </div>

          <div className="space-y-8">
            <h2 className="font-bold">Multiple Choice Questions</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-2">Question 1</h3>
                <p className="mb-4">What does the writer say about the performance of older typists on the test?</p>
                <RadioGroup
                  onValueChange={(value) => setAnswers((prev) => ({ ...prev, 1: value }))}
                  value={answers[1]}
                  className="space-y-2"
                >
                  {[
                    "They used different motor skills from younger typists.",
                    "They had been more efficiently trained than younger typists.",
                    "They used more time-saving techniques than younger typists.",
                    "They had better concentration skills than younger typists."
                  ].map((option, i) => (
                    <label
                      key={i}
                      className="flex items-center space-x-2 p-2 rounded hover:bg-accent"
                    >
                      <RadioGroupItem value={String(i + 1)} id={`q1-${i}`} />
                      <span>{option}</span>
                    </label>
                  ))}
                </RadioGroup>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Question 2</h3>
                <p className="mb-4">The experiment with the rats showed that</p>
                <RadioGroup
                  onValueChange={(value) => setAnswers((prev) => ({ ...prev, 2: value }))}
                  value={answers[2]}
                  className="space-y-2"
                >
                  {[
                    "brain structure only changed when the rats were given a familiar toy",
                    "the rats became anxious after a lengthy period of time alone",
                    "the rats lived longer then they were part of a social group",
                    "the rats' brains expanded or shrank depending on the level of mental activity"
                  ].map((option, i) => (
                    <label
                      key={i}
                      className="flex items-center space-x-2 p-2 rounded hover:bg-accent"
                    >
                      <RadioGroupItem value={String(i + 1)} id={`q2-${i}`} />
                      <span>{option}</span>
                    </label>
                  ))}
                </RadioGroup>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Question 3</h3>
                <p className="mb-4">A comparison between adults and children who played chess showed that</p>
                <RadioGroup
                  onValueChange={(value) => setAnswers((prev) => ({ ...prev, 3: value }))}
                  value={answers[3]}
                  className="space-y-2"
                >
                  {[
                    "the children were as capable as the adults of remembering a series of numbers.",
                    "adults performed better when they had more experience.",
                    "children learned new strategies more quickly than adults.",
                    "there was no significant difference in performance."
                  ].map((option, i) => (
                    <label
                      key={i}
                      className="flex items-center space-x-2 p-2 rounded hover:bg-accent"
                    >
                      <RadioGroupItem value={String(i + 1)} id={`q3-${i}`} />
                      <span>{option}</span>
                    </label>
                  ))}
                </RadioGroup>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between mt-4">
        <Button variant="outline" size="sm" className="flex items-center gap-2">
          <ChevronLeft className="h-4 w-4" /> Previous
        </Button>
        <Button variant="outline" size="sm" className="flex items-center gap-2">
          Next <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}