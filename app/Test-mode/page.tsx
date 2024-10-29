// Test-mode/page.tsx
'use client';

import { useState } from 'react';
import Read from '@/components/Modes/Read';
import Write from '@/components/Modes/Write';
import Listen from '@/components/Modes/Listen';
import Speak from '@/components/Modes/Speak';

const TestMode = () => {
  const [activeMode, setActiveMode] = useState<'read' | 'write' | 'listen' | 'speak'>('read');

  const navigation = [
    { mode: 'read', label: 'Reading' },
    { mode: 'write', label: 'Writing' },
    { mode: 'listen', label: 'Listening' },
    { mode: 'speak', label: 'Speaking' }
  ];

  const renderActiveMode = () => {
    switch (activeMode) {
      case 'read':
        return <Read />;
      case 'write':
        return <Write />;
      case 'listen':
        return <Listen />;
      case 'speak':
        return <Speak />;
      default:
        return <Read />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4">
          {/* Top Bar with Timer */}
          <div className="flex justify-between items-center h-16">
            <h1 className="text-xl font-bold">IELTS Test</h1>
            <div className="text-red-500 font-medium">
              4:52 remaining
            </div>
          </div>
          
          {/* Navigation Tabs */}
          <div className="flex space-x-1">
            {navigation.map(({ mode, label }) => (
              <button
                key={mode}
                onClick={() => setActiveMode(mode as any)}
                className={`px-6 py-3 text-sm font-medium rounded-t-lg transition-colors
                  ${activeMode === mode
                    ? 'bg-white text-blue-600 border-t-2 border-blue-600'
                    : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
                  }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        {renderActiveMode()}
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <button
              onClick={() => {
                const currentIndex = navigation.findIndex(n => n.mode === activeMode);
                if (currentIndex > 0) {
                  setActiveMode(navigation[currentIndex - 1].mode as any);
                }
              }}
              className="px-6 py-2 bg-gray-100 text-gray-700 rounded hover:bg-gray-200 transition-colors"
              disabled={activeMode === navigation[0].mode}
            >
              Previous Section
            </button>
            
            <div className="flex items-center space-x-2">
              {navigation.map(({ mode }, index) => (
                <div
                  key={mode}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    activeMode === mode
                      ? 'bg-blue-600'
                      : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => {
                const currentIndex = navigation.findIndex(n => n.mode === activeMode);
                if (currentIndex < navigation.length - 1) {
                  setActiveMode(navigation[currentIndex + 1].mode as any);
                }
              }}
              className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
              disabled={activeMode === navigation[navigation.length - 1].mode}
            >
              Next Section
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestMode;