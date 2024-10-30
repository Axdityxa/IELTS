'use client';

import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Book, Mic, Headphones, Pencil, ArrowLeft, LayoutGrid, Timer } from 'lucide-react';
import ReadingTest from '@/components/Modes/Read';
import WritingTest from '@/components/Modes/Write';
import SpeakingTest from '@/components/Modes/Speak';
import ListeningTest from '@/components/Modes/Listen';

type Section = {
  id: string;
  title: string;
  icon: React.ElementType;
  subsections: string[];
};

export default function PracticeMode() {
  const [currentScreen, setCurrentScreen] = useState('mode-select');
  const [selectedSection, setSelectedSection] = useState<string | null>(null);
  const [questionCount, setQuestionCount] = useState<number>(10);

  const sections: Section[] = [
    { id: 'reading', title: 'Reading', icon: Book, subsections: ['Academic Reading', 'General Training Reading'] },
    { id: 'speaking', title: 'Speaking', icon: Mic, subsections: ['Part 1: Introduction', 'Part 2: Long Turn', 'Part 3: Discussion'] },
    { id: 'listening', title: 'Listening', icon: Headphones, subsections: ['Section 1', 'Section 2', 'Section 3', 'Section 4'] },
    { id: 'writing', title: 'Writing', icon: Pencil, subsections: ['Task 1', 'Task 2'] }
  ];

  const questionOptions = [5, 10, 15, 20];

  const handleBack = () => {
    if (currentScreen === 'subsections') {
      setCurrentScreen('section-practice');
      setSelectedSection(null);
    } else if (currentScreen === 'questionCount') {
      setCurrentScreen('subsections');
    } else if (['section-practice', 'full-test', 'test'].includes(currentScreen)) {
      setCurrentScreen('mode-select');
    }
  };

  const startTest = () => {
    setCurrentScreen('test');
  };

  const renderModeSelect = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-center mb-10">Select Practice Mode</h2>
      <div className="grid grid-cols-2 gap-8">
        <Card className="hover:border-blue-500 cursor-pointer transition-colors" onClick={() => setCurrentScreen('section-practice')}>
          <CardContent className="pt-6">
            <div className="flex flex-col items-center gap-4 p-6">
              <LayoutGrid className="h-20 w-20 text-blue-500" />
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2">Section Practice</h3>
                <p className="text-gray-600">Practice specific sections and subsections with customizable number of questions</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:border-blue-500 cursor-pointer transition-colors" onClick={() => setCurrentScreen('full-test')}>
          <CardContent className="pt-6">
            <div className="flex flex-col items-center gap-4 p-6">
              <Timer className="h-20 w-20 text-blue-500" />
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2">Full Test</h3>
                <p className="text-gray-600">Take a complete test with random questions from all subsections</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  const renderSectionPractice = () => (
    <div className="space-y-4">
      <div className="flex items-center gap-2 mb-6">
        <Button variant="outline" size="icon" onClick={handleBack}>
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <h2 className="text-xl font-semibold">Section Practice</h2>
      </div>
      <div className="grid grid-cols-2 gap-6">
        {sections.map(({ id, title, icon: Icon }) => (
          <Button
            key={id}
            variant="outline"
            className="h-32 flex flex-col items-center justify-center gap-3 hover:bg-slate-100"
            onClick={() => {
              setSelectedSection(id);
              setCurrentScreen('subsections');
            }}
          >
            <Icon className="h-10 w-10" />
            <span className="text-lg font-medium">{title}</span>
          </Button>
        ))}
      </div>
    </div>
  );

  const renderSubsections = () => {
    const section = sections.find(s => s.id === selectedSection);
    if (!section) return null;

    return (
      <div className="space-y-4">
        <div className="flex items-center gap-2 mb-6">
          <Button variant="outline" size="icon" onClick={handleBack}>
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <h2 className="text-xl font-semibold">{section.title} Practice</h2>
        </div>
        <div className="grid gap-3">
          {section.subsections.map((subsection) => (
            <Button
              key={subsection}
              variant="outline"
              className="h-20 text-left justify-start px-6 text-lg hover:bg-slate-100"
              onClick={() => setCurrentScreen('questionCount')}
            >
              {subsection}
            </Button>
          ))}
        </div>
      </div>
    );
  };

  const renderQuestionCount = () => (
    <div className="space-y-4">
      <div className="flex items-center gap-2 mb-6">
        <Button variant="outline" size="icon" onClick={handleBack}>
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <h2 className="text-xl font-semibold">Select Number of Questions</h2>
      </div>
      <div className="grid grid-cols-4 gap-4">
        {questionOptions.map((count) => (
          <Button
            key={count}
            variant={questionCount === count ? "default" : "outline"}
            className="h-24 text-xl"
            onClick={() => setQuestionCount(count)}
          >
            {count} Questions
          </Button>
        ))}
      </div>
      <Button 
        className="w-full h-16 mt-6 text-lg"
        onClick={startTest}
      >
        Start Practice
      </Button>
    </div>
  );

  const renderFullTest = () => (
    <div className="space-y-4">
      <div className="flex items-center gap-2 mb-6">
        <Button variant="outline" size="icon" onClick={handleBack}>
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <h2 className="text-xl font-semibold">Full Test</h2>
      </div>
      <div className="grid gap-3">
        {sections.map(({ id, title, icon: Icon }) => (
          <Button
            key={id}
            variant="outline"
            className="h-20 flex items-center gap-4 text-left justify-start px-6 text-lg hover:bg-slate-100"
            onClick={() => {
              setSelectedSection(id);
              startTest();
            }}
          >
            <Icon className="h-8 w-8" />
            <span className="text-lg">{title} Full Test</span>
          </Button>
        ))}
      </div>
    </div>
  );

  const renderTest = () => {
    switch (selectedSection) {
      case 'reading':
        return <ReadingTest />;
      case 'writing':
        return <WritingTest />;
      case 'speaking':
        return <SpeakingTest />;
      case 'listening':
        return <ListeningTest />;
      default:
        return null;
    }
  };

  return (
    <Card className="w-[1024px] mx-auto">
      <CardHeader>
        <CardTitle className="text-3xl text-center font-bold">IELTS Practice Mode</CardTitle>
      </CardHeader>
      <CardContent>
        {currentScreen === 'mode-select' && renderModeSelect()}
        {currentScreen === 'section-practice' && renderSectionPractice()}
        {currentScreen === 'subsections' && renderSubsections()}
        {currentScreen === 'questionCount' && renderQuestionCount()}
        {currentScreen === 'full-test' && renderFullTest()}
        {currentScreen === 'test' && renderTest()}
      </CardContent>
    </Card>
  );
}