'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
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
  const [timeLeft, setTimeLeft] = useState(300) // 5 minutes for demo
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
    <div className="min-h-screen bg-background flex flex-col w-full">
      <header className="border-b px-4 py-2 flex justify-between items-center">
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

      <main className="flex-grow flex flex-col">
        <div className="relative mb-4">
          <Timer className="absolute left-0 top-1/2 transform -translate-y-1/2 h-5 w-5 text-primary" />
          <Progress value={(300 - timeLeft) / 3} className="h-6 ml-6" />
        </div>

        <div className="flex-grow grid lg:grid-cols-2 gap-4">
          <Card className="h-full overflow-y-auto">
            <CardContent className="p-4">
              <h2 className="text-xl font-bold mb-4">READING PASSAGE 1</h2>
              <div className="prose max-w-none" style={{ maxWidth: "65ch" }}>
                <h3 className="text-lg font-semibold">How the mind ages</h3>

                <p className="mt-4">
                  The way mental function changes is largely determined by three factors-mental lifestyle,
                  the impact of chronic disease and flexibility of the mind.
                </p>

                <p className="mt-4">
                  Recent research has shown that memory and cognitive performance can be improved at
                  any age. Studies carried out at the University of California at Irvine have shown that
                  mental abilities tend to be at their sharpest at around 9 am, and then decline as the
                  day goes on. However, older people tend to reverse this pattern, with their performance
                  improving throughout the day.
                </p>

                <p className="mt-4">
                  A study of typists carried out 15 years ago by Timothy Salthouse of the Georgia Institute
                  of Technology showed that although older typists were slightly slower than younger ones,
                  they made up for this by developing more efficient working methods. For example, they
                  looked further ahead when reading from the source material, and they were less likely to
                  correct minor errors. As a result, their overall typing speed was as fast as that of
                  the younger typists.
                </p>

                <p className="mt-4">
                  In another study, conducted at the Max Planck Institute for Human Development and
                  Education in Berlin, researchers found that older adults were able to compensate for
                  declines in reaction time by developing strategies to predict when certain events would
                  occur. For example, in a simulated driving task, older adults were just as good as
                  younger adults at responding to brake lights, even though their reaction times were
                  slower. The older adults achieved this by looking further ahead and anticipating when
                  they might need to brake.
                </p>

                <p className="mt-4">
                  These findings suggest that older adults can compensate for some age-related declines
                  by using their experience and knowledge to develop more efficient strategies. This
                  ability to adapt and find new ways of doing things is known as cognitive flexibility,
                  and it appears to be a key factor in maintaining mental sharpness as we age.
                </p>

                <p className="mt-4">
                  However, it's important to note that not all cognitive abilities decline at the same
                  rate. While processing speed and some aspects of memory may decline with age, other
                  abilities, such as vocabulary and general knowledge, often remain stable or even
                  improve over time.
                </p>

                <p className="mt-4">
                  Moreover, research has shown that engaging in mentally stimulating activities
                  throughout life can help maintain cognitive function in later years. This includes
                  activities such as reading, learning new skills, solving puzzles, and engaging in
                  social interactions. Physical exercise has also been shown to have positive effects
                  on cognitive function, particularly in older adults.
                </p>

                <p className="mt-4">
                  The brain's remarkable plasticity means that it can continue to form new neural
                  connections throughout life. Studies have shown that even in old age, the brain
                  retains its ability to adapt and change in response to new experiences and learning.
                  This suggests that cognitive decline is not inevitable and that there are many ways
                  to maintain and even improve mental function as we age.
                </p>

                <p className="mt-4">
                  Research has also highlighted the importance of social engagement in maintaining
                  cognitive function. People who maintain strong social connections and participate
                  regularly in social activities tend to experience slower cognitive decline than
                  those who are more socially isolated. This may be because social interaction
                  provides mental stimulation and emotional support, both of which appear to be
                  important for cognitive health.
                </p>

                <p className="mt-4">
                  In conclusion, while some aspects of cognitive function may decline with age, the
                  brain remains remarkably adaptable. By maintaining an active mental lifestyle,
                  managing chronic health conditions, and cultivating cognitive flexibility, it's
                  possible to maintain and even improve mental sharpness well into old age.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="h-full overflow-y-auto">
            <CardContent className="p-4">
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
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}