'use client';

import { useState, useRef } from 'react';

const Listen = () => {
  const [currentSection, setCurrentSection] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const questions = [
    {
      id: 1,
      section: 1,
      text: "What is the main topic of the conversation?",
      type: "multiple-choice",
      options: [
        "Holiday plans",
        "Work schedule",
        "Family reunion",
        "Weekend activities"
      ]
    },
    // Add more questions as needed
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">Listening Test - Section {currentSection}</h2>
          <div className="flex gap-4">
            {[1, 2, 3, 4].map((section) => (
              <button
                key={section}
                className={`px-4 py-2 rounded ${
                  currentSection === section ? 'bg-blue-100 text-blue-800' : 'bg-gray-50'
                }`}
                onClick={() => setCurrentSection(section)}
              >
                Section {section}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <div className="flex justify-center items-center gap-4 p-6 bg-gray-50 rounded">
            <button
              className={`p-4 rounded-full ${
                isPlaying ? 'bg-red-500' : 'bg-blue-600'
              } text-white`}
              onClick={() => {
                if (audioRef.current) {
                  if (isPlaying) {
                    audioRef.current.pause();
                  } else {
                    audioRef.current.play();
                  }
                  setIsPlaying(!isPlaying);
                }
              }}
            >
              {isPlaying ? '⏸' : '▶'}
            </button>
            <div className="text-sm text-gray-600">
              You can only play the audio ONCE
            </div>
            <audio ref={audioRef} className="hidden">
              <source src="/path-to-your-audio.mp3" type="audio/mpeg" />
            </audio>
          </div>
        </div>

        <div className="space-y-8">
          {questions
            .filter((q) => q.section === currentSection)
            .map((question) => (
              <div key={question.id} className="p-4 border rounded">
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
        </div>
      </div>

      <div className="flex justify-between mt-6">
        <button className="px-6 py-2 bg-gray-200 rounded">Previous</button>
        <button className="px-6 py-2 bg-blue-600 text-white rounded">Next</button>
      </div>
    </div>
  );
};

export default Listen;