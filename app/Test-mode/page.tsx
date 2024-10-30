"use client";

import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';

const IELTSReadingTest = () => {
  const [timeRemaining, setTimeRemaining] = useState(300);
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: number }>({});
  const [activePart, setActivePart] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const questions = [
    {
      id: 1,
      text: "What does the writer say about the performance of older typists on the test?",
      options: [
        "They used different motor skills from younger typists.",
        "They had been more efficiently trained than younger typists.",
        "They used more time-saving techniques than younger typists.",
        "They had better concentration skills than younger typists."
      ]
    },
    {
      id: 2,
      text: "The experiment with the rats showed that",
      options: [
        "brain structure only changed when the rats were given a familiar toy",
        "the rats became anxious after a lengthy period of time alone",
        "the rats lived longer when they were part of a social group",
        "the rats' brains expanded or shrank depending on the level of mental activity"
      ]
    },
    {
      id: 3,
      text: "A comparison between adults and children who played chess showed that",
      options: [
        "the children were as capable as the adults of remembering a series of numbers.",
        "the children could better recall the layout of pieces.",
        "the adults were less able to concentrate on the game."
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white p-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">IELTS Reading Test</h1>
          <div className="text-red-500">{formatTime(timeRemaining)} remaining</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Reading Passage - Scrollable */}
          <Card className="p-4 h-[60vh] overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
            <h2 className="text-lg font-semibold mb-2">READING PASSAGE 1</h2>
            <h3 className="text-lg mb-4">How the mind ages</h3>
            <div className="space-y-4 text-sm">
              <p>
                The way mental function changes is largely determined by three factors—mental lifestyle,
                the impact of chronic disease, and flexibility of the mind.
              </p>
              <p>
                Recent research has shown that memory and cognitive performance can be improved at
                any age. Studies carried out at the University of California at Irvine have shown that
                mental abilities tend to be at their sharpest at around 9 am, and then decline as the day
                goes on. However, older people tend to reverse this pattern, with their performance
                improving throughout the day.
              </p>
              <p>
                Recent research has shown that memory and cognitive performance can be improved at
                any age. Studies carried out at the University of California at Irvine have shown that
                mental abilities tend to be at their sharpest at around 9 am, and then decline as the day
                goes on. However, older people tend to reverse this pattern, with their performance
                improving throughout the day.
              </p>
              <p>
                Recent research has shown that memory and cognitive performance can be improved at
                any age. Studies carried out at the University of California at Irvine have shown that
                mental abilities tend to be at their sharpest at around 9 am, and then decline as the day
                goes on. However, older people tend to reverse this pattern, with their performance
                improving throughout the day.
              </p>
              <p>
                Recent research has shown that memory and cognitive performance can be improved at
                any age. Studies carried out at the University of California at Irvine have shown that
                mental abilities tend to be at their sharpest at around 9 am, and then decline as the day
                goes on. However, older people tend to reverse this pattern, with their performance
                improving throughout the day.
              </p>
              {/* Additional paragraphs can be added here as needed */}
            </div>
          </Card>

          {/* Questions Section - Scrollable */}
          <Card className="p-4 h-[60vh] overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
            <div className="mb-4 flex justify-center space-x-4">
              <button
                className={`px-4 py-2 ${activePart === 1 ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'}`}
                onClick={() => setActivePart(1)}
              >
                Part 1
              </button>
              <button
                className={`px-4 py-2 ${activePart === 2 ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'}`}
                onClick={() => setActivePart(2)}
              >
                Part 2
              </button>
              <button
                className={`px-4 py-2 ${activePart === 3 ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'}`}
                onClick={() => setActivePart(3)}
              >
                Part 3
              </button>
            </div>

            <div className="space-y-6">
              <h3 className="text-lg font-semibold">Multiple Choice Questions</h3>
              {questions.map((question) => (
                <div key={question.id} className="space-y-3">
                  <p className="font-medium">Question {question.id}</p>
                  <p>{question.text}</p>
                  <div className="space-y-2">
                    {question.options.map((option, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <input
                          type="radio"
                          name={`question-${question.id}`}
                          id={`q${question.id}-opt${idx}`}
                          className="h-4 w-4 text-blue-600"
                          checked={selectedAnswers[question.id] === idx}
                          onChange={() => setSelectedAnswers({ ...selectedAnswers, [question.id]: idx })}
                        />
                        <label htmlFor={`q${question.id}-opt${idx}`} className="text-sm">
                          {option}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <div className="flex justify-between mt-6">
          <button className="px-6 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300">
            Previous
          </button>
          <button className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default IELTSReadingTest;
