'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FaChartLine, FaUserGraduate, FaClipboardList, FaBook, FaBolt, FaCogs, FaUserShield } from 'react-icons/fa';
import BasebandTestModal from './BasebandTestModal';
import CareerModeModal from './CareerModeModal';

export default function DashboardContent() {
  const [isBasebandModalOpen, setIsBasebandModalOpen] = useState(false);
  const [isCareerModalOpen, setIsCareerModalOpen] = useState(false);

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
              <li className="flex items-center gap-2">
                <FaBolt className="text-primary" />
                <span>AI-Powered Practice</span>
              </li>
              <li className="flex items-center gap-2">
                <FaBook className="text-primary" />
                <span>Curated Study Material</span>
              </li>
              <li className="flex items-center gap-2">
                <FaCogs className="text-primary" />
                <span>Personalized Feedback</span>
              </li>
              <li className="flex items-center gap-2">
                <FaUserShield className="text-primary" />
                <span>Career Guidance</span>
              </li>
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
              <li className="flex items-center gap-2">
                <FaChartLine className="text-primary" />
                <span>Unlimited Tests</span>
              </li>
              <li className="flex items-center gap-2">
                <FaBook className="text-primary" />
                <span>Free Study Material</span>
              </li>
              <li className="flex items-center gap-2">
                <FaCogs className="text-primary" />
                <span>Basic Progress Tracking</span>
              </li>
            </ul>
          </CardContent>
          <div className="mt-4">
            <Button 
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 flex items-center gap-2"
            >
              <FaChartLine />
              Start
            </Button>
          </div>
        </Card>
      </div>

      {/* Modals */}
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
