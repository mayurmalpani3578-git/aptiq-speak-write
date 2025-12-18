import React from 'react';

const TypingIndicator: React.FC = () => {
  return (
    <div className="flex items-center gap-1 px-4 py-3">
      <div className="w-2 h-2 rounded-full bg-primary typing-dot"></div>
      <div className="w-2 h-2 rounded-full bg-primary typing-dot"></div>
      <div className="w-2 h-2 rounded-full bg-primary typing-dot"></div>
    </div>
  );
};

export default TypingIndicator;
