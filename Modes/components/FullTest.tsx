import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { SECTIONS } from '../constants';

// Define the props for the FullTest component
interface FullTestProps {
  onBack: () => void; // Callback for the back button
  onStartTest: () => void; // Callback for starting the test
}

export const FullTest: React.FC<FullTestProps> = ({ onBack, onStartTest }) => (
  <div className="space-y-6 px-8">
    <div className="flex items-center gap-4 mb-8">
      <Button variant="outline" size="icon" onClick={onBack} className="h-12 w-12">
        <ArrowLeft className="h-6 w-6" />
      </Button>
      <h2 className="text-2xl font-semibold">Full Test</h2>
    </div>
    <div className="grid grid-cols-1 gap-4 max-w-3xl mx-auto">
      {SECTIONS.map(({ id, title, icon: Icon }) => (
        <Button
          key={id}
          variant="outline"
          className="h-20 flex items-center gap-4 text-left justify-start px-6 hover:bg-slate-100"
          onClick={onStartTest}
        >
          <Icon className="h-8 w-8" />
          <span className="text-xl">{title} Full Test</span>
        </Button>
      ))}
    </div>
  </div>
);
