import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { SECTIONS } from '../constants';

// Define the props for the SectionPractice component
interface SectionPracticeProps {
  onBack: () => void; // Callback for going back
  onSelectSection: (id: string) => void; // Callback for selecting a section
}

export const SectionPractice: React.FC<SectionPracticeProps> = ({
  onBack,
  onSelectSection,
}) => (
  <div className="space-y-6 px-8">
    <div className="flex items-center gap-4 mb-8">
      <Button variant="outline" size="icon" onClick={onBack} className="h-12 w-12">
        <ArrowLeft className="h-6 w-6" />
      </Button>
      <h2 className="text-2xl font-semibold">Section Practice</h2>
    </div>
    <div className="grid grid-cols-2 gap-6">
      {SECTIONS.map(({ id, title, icon: Icon }) => (
        <Button
          key={id}
          variant="outline"
          className="h-32 flex flex-col items-center justify-center gap-4 hover:bg-slate-100 transition-colors"
          onClick={() => onSelectSection(id)}
        >
          <Icon className="h-12 w-12" />
          <span className="text-xl font-medium">{title}</span>
        </Button>
      ))}
    </div>
  </div>
);
