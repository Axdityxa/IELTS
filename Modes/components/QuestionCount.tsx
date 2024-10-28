import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

// Define the props for the QuestionCount component
interface QuestionCountProps {
  questionCount: number; // Current selected question count
  onBack: () => void; // Callback for going back
  onSelectCount: (count: number) => void; // Callback for selecting a question count
  onStartTest: () => void; // Callback for starting the test
}

const questionOptions = [5, 10, 15, 20];

export const QuestionCount: React.FC<QuestionCountProps> = ({
  questionCount,
  onBack,
  onSelectCount,
  onStartTest,
}) => (
  <div className="space-y-6 px-8">
    <div className="flex items-center gap-4 mb-8">
      <Button variant="outline" size="icon" onClick={onBack} className="h-12 w-12">
        <ArrowLeft className="h-6 w-6" />
      </Button>
      <h2 className="text-2xl font-semibold">Select Number of Questions</h2>
    </div>
    <div className="grid grid-cols-2 gap-6 max-w-3xl mx-auto">
      {questionOptions.map((count) => (
        <Button
          key={count}
          variant={questionCount === count ? 'default' : 'outline'}
          className="h-24 text-xl"
          onClick={() => onSelectCount(count)}
        >
          {count} Questions
        </Button>
      ))}
    </div>
    <Button 
      className="w-full h-20 mt-8 text-xl max-w-3xl mx-auto"
      onClick={onStartTest}
    >
      Start Practice
    </Button>
  </div>
);
