'use client';

import { useState } from 'react';

interface Question {
  id: number;
  text: string;
  options: string[];
}

const Read = () => {
  const [activePart, setActivePart] = useState(1);
  
  const passage = {
    title: "How the mind ages",
    content: `The way mental function changes is largely determined by three factors-mental lifestyle, the impact of chronic disease and flexibility of the mind.

Recent research has shown that memory and cognitive performance can be improved at any age. Studies carried out at the University of California at Irvine have shown that mental abilities tend to be at their sharpest at around 9 am, and then decline as the day goes on. However, older people tend to reverse this pattern, with their performance improving throughout the day.`
  };

  const questions: Question[] = [
    {
      id: 1,
      text: "What does the writer say about the performance of older typists on the test?",
      options: [
        "They used different motor skills from younger typists.",
        "They had been more efficiently trained than younger typists.",
        "They used more time-saving techniques than younger typists.",
        "They had better concentration skills than younger typists."
      ]
    }
  ];

  return (
    <div className="grid grid-cols-2 gap-8">
      {/* Left side - Reading passage */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-bold mb-4">READING PASSAGE 1</h2>
        <h3 className="text-lg font-medium mb-4">{passage.title}</h3>
        <div className="prose">
          <p>{passage.content}</p>
        </div>
      </div>

      {/* Right side - Questions */}
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex gap-4 mb-6">
          <button
            className={`px-4 py-2 rounded ${
              activePart === 1 ? 'bg-blue-100 text-blue-800' : 'bg-gray-50'
            }`}
            onClick={() => setActivePart(1)}
          >
            Part 1
          </button>
          <button
            className={`px-4 py-2 rounded ${
              activePart === 2 ? 'bg-blue-100 text-blue-800' : 'bg-gray-50'
            }`}
            onClick={() => setActivePart(2)}
          >
            Part 2
          </button>
          <button
            className={`px-4 py-2 rounded ${
              activePart === 3 ? 'bg-blue-100 text-blue-800' : 'bg-gray-50'
            }`}
            onClick={() => setActivePart(3)}
          >
            Part 3
          </button>
        </div>

        <h2 className="text-xl font-bold mb-6">Multiple Choice Questions</h2>
        
        {questions.map((question) => (
          <div key={question.id} className="mb-8">
            <h3 className="font-medium mb-4">Question {question.id}</h3>
            <p className="mb-4">{question.text}</p>
            <div className="space-y-3">
              {question.options.map((option, index) => (
                <label key={index} className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name={`question-${question.id}`}
                    className="mt-1"
                  />
                  <span>{option}</span>
                </label>
              ))}
            </div>
          </div>
        ))}

        <div className="flex justify-between mt-8">
          <button className="px-6 py-2 bg-gray-200 rounded">Previous</button>
          <button className="px-6 py-2 bg-blue-600 text-white rounded">Next</button>
        </div>
      </div>
    </div>
  );
};

export default Read;