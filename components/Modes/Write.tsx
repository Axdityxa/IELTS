'use client';

import { useState } from 'react';

const Write = () => {
  const [currentTask, setCurrentTask] = useState(1);
  const [essay, setEssay] = useState('');
  const [wordCount, setWordCount] = useState(0);

  const tasks = [
    {
      id: 1,
      title: "Task 1",
      description: "You should spend about 20 minutes on this task. The graph below shows the number of visitors to a museum over a six-month period. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.",
      minWords: 150
    },
    {
      id: 2,
      title: "Task 2",
      description: "You should spend about 40 minutes on this task. Write about the following topic: Some people believe that universities should focus on providing academic skills while others think they should prepare students for employment. Discuss both these views and give your own opinion.",
      minWords: 250
    }
  ];

  const calculateWordCount = (text: string) => {
    return text.trim().split(/\s+/).filter(word => word.length > 0).length;
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">Writing Test</h2>
          <div className="flex gap-4">
            {tasks.map((task) => (
              <button
                key={task.id}
                className={`px-4 py-2 rounded ${
                  currentTask === task.id ? 'bg-blue-100 text-blue-800' : 'bg-gray-50'
                }`}
                onClick={() => setCurrentTask(task.id)}
              >
                {task.title}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <div className="p-4 bg-gray-50 rounded mb-4">
            <p className="text-gray-800">
              {tasks[currentTask - 1].description}
            </p>
            <p className="text-sm text-gray-600 mt-2">
              Write at least {tasks[currentTask - 1].minWords} words.
            </p>
          </div>

          {currentTask === 1 && (
            <div className="mb-4 p-4 border rounded">
              {/* Add your graph or image component here */}
              <div className="h-64 bg-gray-200 flex items-center justify-center">
                Sample Graph/Image
              </div>
            </div>
          )}

          <div className="relative">
            <textarea
              className="w-full h-96 p-4 border rounded resize-none"
              placeholder="Start writing here..."
              value={essay}
              onChange={(e) => {
                setEssay(e.target.value);
                setWordCount(calculateWordCount(e.target.value));
              }}
            />
            <div className="absolute bottom-4 right-4 text-gray-600">
              Words: {wordCount} / {tasks[currentTask - 1].minWords}
            </div>
          </div>
        </div>

        <div className="flex justify-between">
          <button className="px-6 py-2 bg-gray-200 rounded">Save Draft</button>
          <button className="px-6 py-2 bg-blue-600 text-white rounded">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Write;