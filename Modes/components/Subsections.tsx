import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { SECTIONS } from '../constants';

// Define the props for the Subsections component
interface SubsectionsProps {
  selectedSection: string; // ID of the selected section
  onBack: () => void; // Callback for going back
  onSelectSubsection: (subsection: string) => void; // Callback for selecting a subsection
}

export const Subsections: React.FC<SubsectionsProps> = ({
  selectedSection,
  onBack,
  onSelectSubsection,
}) => {
  const section = SECTIONS.find(s => s.id === selectedSection);

  if (!section) {
    return <div>Section not found</div>; // Handle case where section is not found
  }

  return (
    <div className="space-y-6 px-8">
      <div className="flex items-center gap-4 mb-8">
        <Button variant="outline" size="icon" onClick={onBack} className="h-12 w-12">
          <ArrowLeft className="h-6 w-6" />
        </Button>
        <h2 className="text-2xl font-semibold">{section.title} Practice</h2>
      </div>
      <div className="grid grid-cols-1 gap-4 max-w-3xl mx-auto">
        {section.subsections.map((subsection) => (
          <Button
            key={subsection}
            variant="outline"
            className="h-20 text-left justify-start px-6 hover:bg-slate-100 text-lg"
            onClick={() => onSelectSubsection(subsection)} // Pass the subsection to the callback
          >
            {subsection}
          </Button>
        ))}
      </div>
    </div>
  );
};
