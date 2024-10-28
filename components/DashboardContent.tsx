'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation'; // Import useRouter
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FaChartLine, FaUserGraduate, FaClipboardList, FaBook, FaBolt, FaCogs, FaUserShield } from 'react-icons/fa';
import BasebandTestModal from './BasebandTestModal';
import CareerModeModal from './CareerModeModal';

export default function DashboardContent() {
  const [isBasebandModalOpen, setIsBasebandModalOpen] = useState(false);
  const [isCareerModalOpen, setIsCareerModalOpen] = useState(false);
  const router = useRouter(); // Initialize the router

  const careerModeItems = [
    { icon: <FaBolt className="text-primary" />, text: 'AI-Powered Practice' },
    { icon: <FaBook className="text-primary" />, text: 'Curated Study Material' },
    { icon: <FaCogs className="text-primary" />, text: 'Personalized Feedback' },
    { icon: <FaUserShield className="text-primary" />, text: 'Career Guidance' },
  ];

  const practiceModeItems = [
    { icon: <FaChartLine className="text-primary" />, text: 'Unlimited Tests' },
    { icon: <FaBook className="text-primary" />, text: 'Free Study Material' },
    { icon: <FaCogs className="text-primary" />, text: 'Basic Progress Tracking' },
    { icon: <FaUserShield className="text-primary" />, text: 'Performance Insights' }, // Added to match career mode
  ];

  return (
    <main className="flex-grow container mx-auto px-4 py-8">
      {/* Welcome Message Card */}
      <Card className="mb-6 bg-card text-card-foreground shadow-lg">
        <CardHeader className="flex items-center gap-3">
          <FaClipboardList className="text-primary text-3xl" />
          <CardTitle className="text-3xl">Hey, Welcome!</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg mb-4">
            We're thrilled to assist you in your IELTS exam preparation journey. Before diving into practice sessions, we recommend taking a quick baseband test to assess your current level and tailor your study plan accordingly.
          </p>
          <Button 
            className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 flex items-center gap-2"
            onClick={() => setIsBasebandModalOpen(true)}
          >
            <FaChartLine />
            Start Baseband Test
          </Button>
        </CardContent>
      </Card>

      {/* Flex container to ensure equal-sized cards */}
      <div className="grid md:grid-cols-2 gap-6 items-stretch">
        {/* Career Mode Card */}
        <Card className="bg-card text-card-foreground shadow-lg flex flex-col h-full">
          <CardHeader className="flex items-center gap-3">
            <FaUserGraduate className="text-primary text-2xl" />
            <CardTitle className="text-2xl">Career Mode</CardTitle>
          </CardHeader>
          <CardContent className="flex-grow flex flex-col">
            <p className="mb-4">Prepare for your career with tailored IELTS practice.</p>
            <ul className="flex-grow space-y-2 text-gray-600">
              {careerModeItems.map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                  {item.icon}
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </CardContent>
          <div className="mt-4">
            <Button 
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 flex items-center gap-2"
              onClick={() => setIsCareerModalOpen(true)}
            >
              <FaChartLine />
              Start
            </Button>
          </div>
        </Card>

        {/* Practice Mode Card */}
        <Card className="bg-card text-card-foreground shadow-lg flex flex-col h-full">
          <CardHeader className="flex items-center gap-3">
            <FaClipboardList className="text-primary text-2xl" />
            <CardTitle className="text-2xl">Practice Mode</CardTitle>
          </CardHeader>
          <CardContent className="flex-grow flex flex-col">
            <p className="mb-4">Improve your skills with general IELTS practice sessions.</p>
            <ul className="flex-grow space-y-2 text-gray-600">
              {practiceModeItems.map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                  {item.icon}
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </CardContent>
          <div className="mt-4">
            <Button 
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 flex items-center gap-2"
              onClick={() => router.push('/practise')} // Navigate to /practise on click
            >
              <FaChartLine />
              Start
            </Button>
          </div>
        </Card>
      </div>

     
      <BasebandTestModal 
        isOpen={isBasebandModalOpen} 
        onClose={() => setIsBasebandModalOpen(false)} 
      />
      <CareerModeModal 
        isOpen={isCareerModalOpen} 
        onClose={() => setIsCareerModalOpen(false)} 
      />
    </main>
  )
}
