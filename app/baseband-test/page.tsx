'use client'

import { memo, Suspense, useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Alert } from "@/components/ui/alert"
import { ChevronLeft, ChevronRight, Timer, X } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

// TypeScript interfaces
interface Option {
  id: string
  text: string
}

interface Question {
  id: number
  type: 'multipleChoice' | 'trueFalseNotGiven' | 'fillInBlanks' | 'matching'
  text: string
  options?: Option[]
  correctMatches?: { [key: string]: string }
  blanks?: string[]
}

interface Part {
  part: number
  title: string
  passage: string
  questions: Question[]
}

interface Answers {
  [key: number]: string
}

// Test data
const testData: Part[] = [
  {
    part: 1,
    title: "READING PASSAGE 1",
    passage: `How the mind ages
    
    The way mental function changes is largely determined by three factors-mental lifestyle, the impact of chronic disease and flexibility of the mind.
    
    Recent research has shown that memory and cognitive performance can be improved at any age. Studies carried out at the University of California at Irvine have shown that mental abilities tend to be at their sharpest at around 9 am, and then decline as the day goes on. However, older people tend to reverse this pattern, with their performance improving throughout the day.
    
    A study of typists carried out 15 years ago by Timothy Salthouse of the Georgia Institute of Technology showed that although older typists were slightly slower than younger ones, they made up for this by developing more efficient working methods. For example, they looked further ahead when reading from the source material, and they were less likely to correct minor errors. As a result, their overall typing speed was as fast as that of the younger typists.
    
    In another study, conducted at the Max Planck Institute for Human Development and Education in Berlin, researchers found that older adults were able to compensate for declines in reaction time by developing strategies to predict when certain events would occur. For example, in a simulated driving task, older adults were just as good as younger adults at responding to brake lights, even though their reaction times were slower. The older adults achieved this by looking further ahead and anticipating when they might need to brake.
    
    These findings suggest that older adults can compensate for some age-related declines by using their experience and knowledge to develop more efficient strategies. This ability to adapt and find new ways of doing things is known as cognitive flexibility, and it appears to be a key factor in maintaining mental sharpness as we age.
    
    However, it's important to note that not all cognitive abilities decline at the same rate. While processing speed and some aspects of memory may decline with age, other abilities, such as vocabulary and general knowledge, often remain stable or even improve over time.
    
    Moreover, research has shown that engaging in mentally stimulating activities throughout life can help maintain cognitive function in later years. This includes activities such as reading, learning new skills, solving puzzles, and engaging in social interactions. Physical exercise has also been shown to have positive effects on cognitive function, particularly in older adults.
    
    In conclusion, while some aspects of cognitive function may decline with age, the brain remains remarkably adaptable. By maintaining an active mental lifestyle, managing chronic health conditions, and cultivating cognitive flexibility, it's possible to maintain and even improve mental sharpness well into old age.`,
    questions: [
      {
        id: 1,
        type: 'multipleChoice',
        text: "What does the writer say about the performance of older typists on the test?",
        options: [
          { id: 'A', text: "They used different motor skills from younger typists." },
          { id: 'B', text: "They had been more efficiently trained than younger typists." },
          { id: 'C', text: "They used more time-saving techniques than younger typists." },
          { id: 'D', text: "They had better concentration skills than younger typists." }
        ]
      },
      {
        id: 2,
        type: 'multipleChoice',
        text: "The experiment with the rats showed that",
        options: [
          { id: 'A', text: "brain structure only changed when the rats were given a familiar toy" },
          { id: 'B', text: "the rats became anxious after a lengthy period of time alone" },
          { id: 'C', text: "the rats lived longer then they were part of a social group" },
          { id: 'D', text: "the rats' brains expanded or shrank depending on the level of mental activity" }
        ]
      },
      {
        id: 3,
        type: 'multipleChoice',
        text: "A comparison between adults and children who played chess showed that",
        options: [
          { id: 'A', text: "the children were as capable as the adults of remembering a series of numbers." },
          { id: 'B', text: "the children could better recall the layout of pieces." },
          { id: 'C', text: "the adults were less able to concentrate on the game." },
          { id: 'D', text: "the adults could remember the positions of more pieces." }
        ]
      },
      {
        id: 4,
        type: 'fillInBlanks',
        text: "Complete the following sentences using NO MORE THAN THREE WORDS from the passage.",
        blanks: [
          "Mental function changes are determined by mental lifestyle, chronic disease, and _______.",
          "Studies showed that mental abilities are sharpest at _______ in the morning.",
          "Older typists compensated for slower speed by developing more _______ methods.",
          "The ability to adapt and find new ways of doing things is known as _______."
        ]
      },
      {
        id: 5,
        type: 'matching',
        text: "Match the following concepts with their correct descriptions from the passage.",
        correctMatches: {
          "Cognitive flexibility": "The ability to adapt and find new ways of doing things",
          "Processing speed": "An ability that may decline with age",
          "Vocabulary": "An ability that often remains stable or improves over time",
          "Mental performance": "Peaks at different times for different age groups"
        }
      }
    ]
  },
  {
    part: 2,
    title: "READING PASSAGE 2",
    passage: `Ensuring our future food supply
    
    Climate change and new diseases threaten the limited varieties of seeds we depend on for food. Luckily, we still have many of the seeds used in the past-but we must take steps to save them.
    
    Standing outside the town of Decorah, in the US state of Iowa, is an ordinary-looking metal shed. Inside, however, are shelves upon shelves of sealed jars containing rare seeds from around the world. This is the headquarters of the Seed Savers Exchange, one of the largest non-government-owned seed banks in the United States.
    
    The Seed Savers Exchange was founded in 1975 by Diane Ott Whealy and Kent Whealy after Diane's grandfather gave them the seeds of two plant varieties that his parents had brought from Bavaria to the United States in the 1870s. Diane and Kent realized that many plant varieties were becoming extinct as large-scale agriculture focused on a few high-yield crops. They started to collect and preserve seeds from family gardeners and small-scale farmers.
    
    Today, the Seed Savers Exchange maintains a collection of more than 20,000 plant varieties, including many heirloom varieties that are no longer available commercially. The organization also encourages gardeners to grow these rare plants and save their seeds, thus keeping the varieties alive and adapting to changing conditions.
    
    One of the unique aspects of the Seed Savers Exchange is its focus on the stories behind the seeds. Many of the varieties in their collection have been passed down through generations of families, each with its own history and cultural significance. For example, they have a tomato variety called 'Mortgage Lifter', which was developed by a man in the 1930s who used the profits from selling the tomato plants to pay off his mortgage.
    
    The importance of preserving seed diversity cannot be overstated. As climate change alters growing conditions around the world, having a wide variety of plant genetics to draw from will be crucial for developing crops that can thrive in new environments. Additionally, maintaining diverse seed stocks helps protect against the spread of plant diseases, which can devastate monoculture crops.
    
    The work of organizations like the Seed Savers Exchange complements the efforts of larger, government-run seed banks like the Svalbard Global Seed Vault in Norway. While Svalbard serves as a backup for other seed banks, focusing mainly on staple food crops, the Seed Savers Exchange and similar organizations help preserve the genetic diversity of garden vegetables, flowers, and other plants that might otherwise be lost.
    
    In recent years, there has been growing interest in heirloom and rare plant varieties among gardeners and small-scale farmers. This trend has helped support the work of seed preservation organizations and has led to a resurgence of some nearly-lost varieties. However, the challenge of maintaining seed diversity remains significant, especially as climate change and habitat loss continue to threaten plant species around the world.
    
    As we look to the future, it's clear that preserving our agricultural heritage through seed saving will be crucial for ensuring food security and maintaining the rich tapestry of plant life on our planet. The work of dedicated individuals and organizations like the Seed Savers Exchange reminds us that sometimes, the key to our future lies in preserving the past.`,
    questions: [
      {
        id: 6,
        type: 'trueFalseNotGiven',
        text: "Heritage Farm is different from most other nearby farms."
      },
      {
        id: 7,
        type: 'trueFalseNotGiven',
        text: "The Seed Savers Exchange was founded to preserve plant varieties that were becoming extinct."
      },
      {
        id: 8,
        type: 'trueFalseNotGiven',
        text: "The Seed Savers Exchange only preserves seeds of vegetables."
      },
      {
        id: 9,
        type: 'trueFalseNotGiven',
        text: "The Svalbard Global Seed Vault focuses on preserving a wide variety of plant species."
      },
      {
        id: 10,
        type: 'trueFalseNotGiven',
        text: "Interest in heirloom and rare plant varieties has decreased in recent years."
      },
      {
        id: 11,
        type: 'multipleChoice',
        text: "What was the main reason for establishing the Seed Savers Exchange?",
        options: [
          { id: 'A', text: "To preserve endangered plant varieties" },
          { id: 'B', text: "To promote large-scale agriculture" },
          { id: 'C', text: "To study Bavarian farming methods" },
          { id: 'D', text: "To create new plant varieties" }
        ]
      },
      {
        id: 12,
        type: 'multipleChoice',
        text: "What is unique about the Seed Savers Exchange approach?",
        options: [
          { id: 'A', text: "Its focus on the cultural history of seeds" },
          { id: 'B', text: "Its government funding" },
          { id: 'C', text: "Its international scope" },
          { id: 'D', text: "Its modern farming techniques" }
        ]
      }
    ]
  },
  {
    part: 3,
    title: "READING PASSAGE 3",
    passage: `The fluoridation controversy
    
    The long-standing debate about whether to fluoridate our drinking water continues. Fluoridation is the addition of fluorine to public water supplies with the aim of reducing tooth decay. The fluorine, when mixed with water, becomes fluoride and the desired concentration of fluoride in public water supplies is usually between 0.7 and 1.2 parts per million.
    
    Fluoridation began in the 1940s in the United States after studies showed that people living in areas with higher levels of naturally occurring fluoride in the water had fewer cavities. Since then, many countries have adopted water fluoridation as a public health measure. Proponents argue that it's a safe and effective way to improve dental health, especially for those who might not have access to regular dental care.
    
    However, the practice has always had its critics. Some argue that adding fluoride to water is a form of mass medication without individual consent. Others question the effectiveness of fluoridation, pointing out that tooth decay rates have declined in many countries regardless of whether they fluoridate their water or not.
    
    One of the main arguments against fluoridation is the potential for dental fluorosis, a condition that affects the appearance of tooth enamel. While mild fluorosis (which causes barely noticeable white specks on teeth) is common in fluoridated areas, severe fluorosis (which can cause brown staining and pitting of teeth) is rare when fluoride levels are properly controlled.
    
    Critics also point to potential health risks beyond dental effects. Some studies have suggested a possible link between high fluoride intake and conditions such as bone fractures, cancer, and impaired brain development in children. However, most major health organizations, including the World Health Organization, have concluded that water fluoridation at recommended levels is safe and effective.
    
    The controversy is further complicated by the fact that fluoride is now available from many sources other than water, including toothpaste, mouthwash, and some foods. This has led some to argue that water fluoridation is no longer necessary and may lead to excessive fluoride intake.
    
    In recent years, the debate has intensified in some countries. For example, in 2013, Israel ended its mandatory fluoridation program, only to reinstate it in 2016 after a change in government policy. In the United States, while about 73% of the population on public water systems receives fluoridated water, some cities have voted to end the practice.
    
    The fluoridation debate illustrates the challenges of public health policy in a democratic society. It involves balancing scientific evidence, public health benefits, individual rights, and the precautionary principle. As our understanding of fluoride's effects continues to evolve, and as alternative sources of fluoride become more prevalent, it's likely that this debate will continue for years to come.
    
    Ultimately, the decision to fluoridate water supplies often comes down to local politics and public opinion. While the scientific consensus supports the safety and effectiveness of water fluoridation, the practice remains controversial in many parts of the world. As with many public health measures, the challenge lies in balancing population-wide benefits with concerns about individual choice and potential risks.`,
    questions: [
      {
        id: 13,
        type: 'multipleChoice',
        text: "The optimum amount of fluorine in fluoridated water is calculated partly according to",
        options: [
          { id: 'A', text: "how hot the area is." },
          { id: 'B', text: "how warm the water is." },
          { id: 'C', text: "how many dental problems there are in the community." },
          { id: 'D', text: "how much fluorine the community chooses to have in its water." }
        ]
      },
      {
        id: 14,
        type: 'multipleChoice',
        text: "Which of the following is NOT mentioned as a criticism of water fluoridation?",
        options: [
          { id: 'A', text: "It's a form of mass medication without consent." },
          { id: 'B', text: "It may not be effective in reducing tooth decay." },
          { 
            id: 'C',
            text: "It's too expensive to implement widely."
          },
          { id: 'D', text: "It may lead to dental fluorosis." }
        ]
      },
      {
        id: 15,
        type: 'fillInBlanks',
        text: "Complete the sentences below using NO MORE THAN TWO WORDS from the passage.",
        blanks: [
          "The desired concentration  of fluoride in water is between _______ parts per million.",
          "Fluoridation began in the _______ in the United States.",
          "Some critics argue that fluoridation is a form of _______ without consent.",
          "Israel ended its _______ fluoridation program in 2013."
        ]
      },
      {
        id: 16,
        type: 'trueFalseNotGiven',
        text: "The World Health Organization supports water fluoridation at recommended levels."
      },
      {
        id: 17,
        type: 'trueFalseNotGiven',
        text: "All countries that have implemented water fluoridation have seen a decrease in tooth decay rates."
      },
      {
        id: 18,
        type: 'trueFalseNotGiven',
        text: "Severe dental fluorosis is common in areas with fluoridated water."
      },
      {
        id: 19,
        type: 'trueFalseNotGiven',
        text: "The majority of the US population on public water systems receives fluoridated water."
      },
      {
        id: 20,
        type: 'trueFalseNotGiven',
        text: "The fluoridation debate has been completely resolved in most countries."
      }
    ]
  }
]

// Memoized QuestionsCard component
const QuestionsCard = memo(({ 
  currentPart, 
  setCurrentPart, 
  answers, 
  handleAnswer,
  testData
}: {
  currentPart: number
  setCurrentPart: (part: number) => void
  answers: Answers
  handleAnswer: (questionId: number, answer: string) => void
  testData: Part[]
}) => {
  const currentPartData = testData.find((part) => part.part === currentPart)
  
  const renderQuestion = (question: Question) => {
    switch (question.type) {
      case 'multipleChoice':
        return (
          <RadioGroup
            onValueChange={(value) => handleAnswer(question.id, value)}
            value={answers[question.id] || ''}
          >
            {question.options?.map((option) => (
              <div key={option.id} className="flex items-center space-x-2 mb-2">
                <div
                  className={`flex items-center justify-center w-5 h-5 border border-gray-300 rounded-full ${
                    answers[question.id] === option.id ? 'bg-black' : 'bg-white'
                  }`}
                  onClick={() => handleAnswer(question.id, option.id)}
                >
                  {answers[question.id] === option.id && (
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  )}
                </div>
                <Label htmlFor={`${question.id}-${option.id}`}>{option.text}</Label>
              </div>
            ))}
          </RadioGroup>
        );
      case 'trueFalseNotGiven':
        return (
          <RadioGroup
            onValueChange={(value) => handleAnswer(question.id, value)}
            value={answers[question.id] || ''}
          >
            {['TRUE', 'FALSE', 'NOT GIVEN'].map((option) => (
              <div key={option} className="flex items-center space-x-2 mb-2">
                <div
                  className={`flex items-center justify-center w-5 h-5 border border-gray-300 rounded-full ${
                    answers[question.id] === option ? 'bg-blue-500' : 'bg-white'
                  }`}
                  onClick={() => handleAnswer(question.id, option)}
                >
                  {answers[question.id] === option && (
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  )}
                </div>
                <Label htmlFor={`${question.id}-${option}`}>{option}</Label>
              </div>
            ))}
          </RadioGroup>
        );
      case 'fillInBlanks':
        return (
          <div className="space-y-4">
            {question.blanks?.map((blank, index) => (
              <div key={index} className="flex items-center space-x-2">
                <Label htmlFor={`blank-${question.id}-${index}`}>Blank {index + 1}</Label>
                <input
                  type="text"
                  id={`blank-${question.id}-${index}`}
                  className="border rounded p-2"
                  value={answers[question.id]?.split(',')[index] || ''}
                  onChange={(e) => {
                    const newAnswers = answers[question.id]?.split(',') || [];
                    newAnswers[index] = e.target.value;
                    handleAnswer(question.id, newAnswers.join(','));
                  }}
                />
              </div>
            ))}
          </div>
        );
      case 'matching':
        return (
          <div className="space-y-4">
            {Object.entries(question.correctMatches || {}).map(([key, value], index) => (
              <div key={index} className="flex items-center space-x-2">
                <Label>{key}</Label>
                <select
                  className="border rounded p-2"
                  value={answers[question.id]?.split(',')[index] || ''}
                  onChange={(e) => {
                    const newAnswers = answers[question.id]?.split(',') || [];
                    newAnswers[index] = e.target.value;
                    handleAnswer(question.id, newAnswers.join(','));
                  }}
                >
                  <option value="">Select match</option>
                  {Object.values(question.correctMatches || {}).map((option, i) => (
                    <option key={i} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            ))}
          </div>
        );
      default:
        return null;
    }
  };
  
  const renderSection = (questions: Question[], title: string) => (
    <div className="mb-8">
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      {questions.map((question) => (
        <div key={question.id} className="mb-6">
          <h4 className="font-semibold mb-2">Question {question.id}</h4>
          <p className="mb-4">{question.text}</p>
          {renderQuestion(question)}
        </div>
      ))}
    </div>
  )

  const getQuestionsByType = (type: Question['type']) => 
    currentPartData?.questions.filter(q => q.type === type) || []

  return (
    <Card className="h-[calc(100vh-200px)] overflow-y-auto">
      <CardContent className="p-6">
        <Tabs 
          defaultValue={currentPart.toString()} 
          onValueChange={(value) => {
            setCurrentPart(Number(value))
          }}
        >
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="1">Part 1</TabsTrigger>
            <TabsTrigger value="2">Part 2</TabsTrigger>
            <TabsTrigger value="3">Part 3</TabsTrigger>
          </TabsList>
          
          <TabsContent value="1">
            {renderSection(getQuestionsByType('multipleChoice'), 'Multiple Choice Questions')}
            {renderSection(getQuestionsByType('fillInBlanks'), 'Fill in the Blanks')}
            {renderSection(getQuestionsByType('matching'), 'Match the Correct Meaning')}
          </TabsContent>
          
          <TabsContent value="2">
            {renderSection(getQuestionsByType('trueFalseNotGiven'), 'True/False/Not Given')}
            {renderSection(getQuestionsByType('multipleChoice'), 'Multiple Choice Questions')}
          </TabsContent>
          
          <TabsContent value="3">
            {renderSection(getQuestionsByType('multipleChoice'), 'Multiple Choice Questions')}
            {renderSection(getQuestionsByType('fillInBlanks'), 'Fill in the Blanks')}
            {renderSection(getQuestionsByType('trueFalseNotGiven'), 'True/False/Not Given')}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
})

QuestionsCard.displayName = 'QuestionsCard'

// New Review component
const Review = ({ answers, testData }: { answers: Answers, testData: Part[] }) => {
  return (
    <div className="space-y-6">
      {[1, 2, 3].map((partNum) => (
        <div key={partNum} className="space-y-4">
          <h3 className="font-semibold">Part {partNum}</h3>
          <div className="grid grid-cols-5 gap-2">
            {[1, 2, 3, 4, 5].map((num) => (
              <div
                key={num}
                className="flex h-10 w-10 items-center justify-center rounded-md bg-muted hover:bg-muted/80 cursor-pointer"
              >
                {num}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

// Create a component that uses useSearchParams
function BasebandTestContent() {
  const searchParams = useSearchParams()
  const timerParam = searchParams.get('timer')
  const initialTime = (timerParam ? parseInt(timerParam) : 60) * 60

  const [currentPart, setCurrentPart] = useState(1)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Answers>({})
  const [timeLeft, setTimeLeft] = useState(initialTime)
  const [isTimeUp, setIsTimeUp] = useState(false)

  useEffect(() => {
    setTimeLeft(initialTime)
    setIsTimeUp(false)
  }, [initialTime])

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          setIsTimeUp(true)
          clearInterval(timer)
          return 0
        }
        return prevTime - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`
  }

  const handleAnswer = (questionId: number, answer: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: answer }))
  }

  const currentPartData = testData.find((part) => part.part === currentPart)
  const totalQuestions = currentPartData?.questions.length || 0

  const navigateQuestion = (direction: 'prev' | 'next') => {
    if (direction === 'prev') {
      if (currentQuestion > 0) {
        setCurrentQuestion(prev => prev - 1)
      } else if (currentPart > 1) {
        // Move to previous part
        const prevPart = currentPart - 1
        const prevPartData = testData.find(part => part.part === prevPart)
        setCurrentPart(prevPart)
        setCurrentQuestion((prevPartData?.questions.length || 1) - 1)
      }
    } else {
      const currentPartData = testData.find(part => part.part === currentPart)
      const totalQuestions = currentPartData?.questions.length || 0
      
      if (currentQuestion < totalQuestions - 1) {
        setCurrentQuestion(prev => prev + 1)
      } else if (currentPart < 3) {
        // Move to next part
        setCurrentPart(prev => prev + 1)
        setCurrentQuestion(0)
      }
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">IELTS Reading Test</h1>
        <div className="flex items-center space-x-4">
          <div className={`text-xl font-semibold flex items-center ${timeLeft < 300 ? 'text-red-500' : ''}`}>
            <Timer className="mr-2 h-5 w-5" />
            {formatTime(timeLeft)} remaining
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">Review </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Review Answers</DialogTitle>
              </DialogHeader>
              <Review answers={answers} testData={testData} />
            </DialogContent>
          </Dialog>
        </div>
      </header>

      {isTimeUp ? (
        <Alert className="m-4">
          Time's up! Please submit your answers.
        </Alert>
      ) : (
        <main className="container mx-auto p-4">
          <div className="relative mb-4">
            <Timer className="absolute left-0 top-1/2 transform -translate-y-1/2 h-5 w-5 text-primary" />
            <Progress 
              value={100 - ((timeLeft / initialTime) * 100)} 
              className="h-6 ml-6"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="h-[calc(100vh-200px)] overflow-y-auto">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-4">{currentPartData?.title}</h2>
                <div className="prose max-w-none">
                  <p className="whitespace-pre-line">{currentPartData?.passage}</p>
                </div>
              </CardContent>
            </Card>

            <QuestionsCard 
              currentPart={currentPart}
              setCurrentPart={setCurrentPart}
              answers={answers}
              handleAnswer={handleAnswer}
              testData={testData}
            />
          </div>

          <div className="flex justify-between mt-4">
            <Button
              onClick={() => navigateQuestion('prev')}
              disabled={currentPart === 1 && currentQuestion === 0}
            >
              <ChevronLeft className="mr-2 h-4 w-4" /> Previous
            </Button>
            <Button
              onClick={() => navigateQuestion('next')}
              disabled={currentPart === 3 && currentQuestion === testData[2].questions.length - 1}
            >
              Next <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </main>
      )}
    </div>
  )
}

// Main page component
export default function BasebandTest() {
  return (
    <Suspense fallback={<div className="flex items-center justify-center min-h-screen">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
    </div>}>
      <BasebandTestContent />
    </Suspense>
  )
}