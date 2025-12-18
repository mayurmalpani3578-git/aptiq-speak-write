import React from 'react';
import TypingIndicator from './TypingIndicator';

interface ChatMessageProps {
  role: 'user' | 'assistant';
  content: string;
  isTyping?: boolean;
}

const formatMessage = (content: string): React.ReactNode => {
  // Split by bold markers **text**
  const parts = content.split(/(\*\*[^*]+\*\*)/g);
  
  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <strong key={index} className="font-semibold text-foreground">
          {part.slice(2, -2)}
        </strong>
      );
    }
    // Handle code blocks `code`
    const codeParts = part.split(/(`[^`]+`)/g);
    return codeParts.map((codePart, codeIndex) => {
      if (codePart.startsWith('`') && codePart.endsWith('`')) {
        return (
          <code
            key={`${index}-${codeIndex}`}
            className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-accent-foreground"
          >
            {codePart.slice(1, -1)}
          </code>
        );
      }
      return <span key={`${index}-${codeIndex}`}>{codePart}</span>;
    });
  });
};

const ChatMessage: React.FC<ChatMessageProps> = ({ role, content, isTyping }) => {
  const isUser = role === 'user';

  return (
    <div
      className={`flex ${isUser ? 'justify-end' : 'justify-start'} animate-message`}
    >
      <div
        className={`max-w-[85%] md:max-w-[70%] rounded-2xl px-4 py-3 ${
          isUser
            ? 'gradient-primary text-primary-foreground rounded-br-md'
            : 'bg-card border border-border text-card-foreground rounded-bl-md shadow-card'
        }`}
      >
        {isTyping ? (
          <TypingIndicator />
        ) : (
          <div className="text-sm md:text-base leading-relaxed whitespace-pre-wrap">
            {formatMessage(content)}
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatMessage;
