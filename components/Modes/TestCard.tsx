// components/Modes/TestCard.tsx
import React from 'react';

const TestCard: React.FC = () => {
  return (
    <div style={{
      padding: '1rem',
      border: '1px solid #ccc',
      borderRadius: '8px',
      textAlign: 'center',
      margin: '1rem 0',
      maxWidth: '300px',
      boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)'
    }}>
      <h2>Test Mode Card</h2>
      <p>This is a test card component inside Modes.</p>
    </div>
  );
};

export default TestCard;
