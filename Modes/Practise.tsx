import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { ModeSelect } from './components/ModeSelect';
import { SectionPractice } from './components/SectionPractice';
import { Subsections } from './components/Subsections';
import { QuestionCount } from './components/QuestionCount';
import { FullTest } from './components/FullTest';


type Screen = 'mode-select' | 'section-practice' | 'subsections' | 'questionCount' | 'full-test';

export default function IELTSPractice() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('mode-select');
  const [selectedSection, setSelectedSection] = useState<string | null>(null); // Type can be string or null
  const [questionCount, setQuestionCount] = useState<number>(10); // Question count is a number

  const handleBack = () => {
    if (currentScreen === 'subsections') {
      setCurrentScreen('section-practice');
      setSelectedSection(null);
    } else if (currentScreen === 'questionCount') {
      setCurrentScreen('subsections');
    } else if (['section-practice', 'full-test'].includes(currentScreen)) {
      setCurrentScreen('mode-select');
    }
  };

  const startTest = () => {
    console.log('Starting test with:', {
      section: selectedSection,
      questionCount: questionCount,
      mode: currentScreen === 'full-test' ? 'full' : 'practice'
    });
  };

  return (
    <main className="min-h-screen bg-slate-50 py-8">
      <Card className="max-w-6xl mx-auto shadow-lg">
        <CardHeader className="py-8">
          <CardTitle className="text-3xl text-center">IELTS Practice Mode</CardTitle>
        </CardHeader>
        <CardContent className="pb-12">
          {currentScreen === 'mode-select' && (
            <ModeSelect onSelectMode={(mode) => setCurrentScreen(mode as Screen)} />
          )}
          {currentScreen === 'section-practice' && (
            <SectionPractice 
              onBack={handleBack}
              onSelectSection={(section) => {
                setSelectedSection(section);
                setCurrentScreen('subsections');
              }}
            />
          )}
          {currentScreen === 'subsections' && (
            <Subsections
              selectedSection={selectedSection!} // Use non-null assertion since we check section existence in Subsections
              onBack={handleBack}
              onSelectSubsection={(subsection) => {
                // You can pass subsection to onSelectSubsection
                setCurrentScreen('questionCount');
              }}
            />
          )}
          {currentScreen === 'questionCount' && (
            <QuestionCount
              questionCount={questionCount}
              onBack={handleBack}
              onSelectCount={setQuestionCount}
              onStartTest={startTest}
            />
          )}
          {currentScreen === 'full-test' && (
            <FullTest
              onBack={handleBack}
              onStartTest={startTest}
            />
          )}
        </CardContent>
      </Card>
    </main>
  );
}
