import { Book, Mic, Headphones, Pencil } from 'lucide-react';


interface Subsection {
  title: string;
}

interface Section {
  id: string; // Unique identifier for the section
  title: string; // Title of the section
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>; // Type for the icon component
  subsections: string[]; // List of subsections
}


export const SECTIONS: Section[] = [
  {
    id: 'reading',
    title: 'Reading',
    icon: Book,
    subsections: ['Academic Reading', 'General Training Reading'],
  },
  {
    id: 'speaking',
    title: 'Speaking',
    icon: Mic,
    subsections: ['Part 1: Introduction', 'Part 2: Long Turn', 'Part 3: Discussion'],
  },
  {
    id: 'listening',
    title: 'Listening',
    icon: Headphones,
    subsections: ['Section 1', 'Section 2', 'Section 3', 'Section 4'],
  },
  {
    id: 'writing',
    title: 'Writing',
    icon: Pencil,
    subsections: ['Task 1', 'Task 2'],
  },
];
