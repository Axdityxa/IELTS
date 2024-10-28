import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { LayoutGrid, Timer } from 'lucide-react';

// Define the props for the ModeSelect component
interface ModeSelectProps {
  onSelectMode: (mode: string) => void; // Callback for selecting a mode
}

export const ModeSelect: React.FC<ModeSelectProps> = ({ onSelectMode }) => (
  <div className="space-y-8">
    <h2 className="text-2xl font-semibold text-center mb-12">Select Practice Mode</h2>
    <div className="grid grid-cols-2 gap-8 px-8">
      <Card 
        className="hover:border-blue-500 cursor-pointer transition-colors duration-300 transform hover:-translate-y-1" 
        onClick={() => onSelectMode('section-practice')}
      >
        <CardContent className="pt-8">
          <div className="flex flex-col items-center gap-6 p-8">
            <LayoutGrid className="h-20 w-20 text-blue-500" />
            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-4">Section Practice</h3>
              <p className="text-gray-600 text-lg">Practice specific sections and subsections with customizable number of questions</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card 
        className="hover:border-blue-500 cursor-pointer transition-colors duration-300 transform hover:-translate-y-1"
        onClick={() => onSelectMode('full-test')}
      >
        <CardContent className="pt-8">
          <div className="flex flex-col items-center gap-6 p-8">
            <Timer className="h-20 w-20 text-blue-500" />
            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-4">Full Test</h3>
              <p className="text-gray-600 text-lg">Take a complete test with random questions from all subsections</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  </div>
);
