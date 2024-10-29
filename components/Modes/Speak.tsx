
'use client';

import { useState, useRef } from 'react';

const Speak = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [currentTask, setCurrentTask] = useState(1);
  const [timer, setTimer] = useState<number | null>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);

  const tasks = [
    {
      id: 1,
      title: "Introduction and Interview",
      description: "In this part, the examiner will ask you general questions about yourself and a range of familiar topics, such as home, family, work, studies and interests.",
      duration: 300 // 5 minutes in seconds
    },
    {
      id: 2,
      title: "Individual Long Turn",
      description: "You will be given a card which asks you to talk about a particular topic. You will have 1 minute to prepare before speaking for up to 2 minutes.",
      duration: 180 // 3 minutes in seconds
    },
    {
      id: 3,
      title: "Discussion",
      description: "You will be asked further questions about the topic in Part 2, which will give you an opportunity to discuss more abstract ideas and issues.",
      duration: 240 // 4 minutes in seconds
    }
  ];

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      mediaRecorder.start();
      setIsRecording(true);
      // Start timer
      setTimer(tasks[currentTask - 1].duration);
    } catch (err) {
      console.error('Error accessing microphone:', err);
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
      setTimer(null);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">Speaking Test</h2>
          {timer !== null && (
            <div className="text-xl font-mono">
              {Math.floor(timer / 60)}:{(timer % 60).toString().padStart(2, '0')}
            </div>
          )}
        </div>

        <div className="space-y-8">
          {tasks.map((task) => (
            <div
              key={task.id}
              className={`p-6 border rounded ${
                currentTask === task.id ? 'border-blue-500 bg-blue-50' : ''
              }`}
            >
              <h3 className="text-lg font-medium mb-2">Part {task.id}: {task.title}</h3>
              <p className="text-gray-600 mb-4">{task.description}</p>
              {currentTask === task.id && (
                <div className="flex justify-center mt-4">
                  <button
                    className={`px-6 py-3 rounded-full ${
                      isRecording ? 'bg-red-500' : 'bg-blue-600'
                    } text-white`}
                    onClick={() => {
                      if (isRecording) {
                        stopRecording();
                      } else {
                        startRecording();
                      }
                    }}
                  >
                    {isRecording ? 'Stop Recording' : 'Start Recording'}
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="flex justify-between mt-6">
          <button
            className="px-6 py-2 bg-gray-200 rounded"
            onClick={() => setCurrentTask(Math.max(1, currentTask - 1))}
          >
            Previous Part
          </button>
          <button
            className="px-6 py-2 bg-blue-600 text-white rounded"
            onClick={() => setCurrentTask(Math.min(3, currentTask + 1))}
          >
            Next Part
          </button>
        </div>
      </div>
    </div>
  );
};

export default Speak;