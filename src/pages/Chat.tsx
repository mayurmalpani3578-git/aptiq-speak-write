import React, { useState, useEffect, useRef } from 'react';
import ChatNavbar from '@/components/ChatNavbar';
import ChatMessage from '@/components/ChatMessage';
import useSpeechRecognition from '@/hooks/useSpeechRecognition';
import { useToast } from '@/hooks/use-toast';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
}

// Mock AI responses - in production, connect to real AI
const generateResponse = (userMessage: string): string => {
  const lowercaseMsg = userMessage.toLowerCase();
  
  if (lowercaseMsg.includes('hello') || lowercaseMsg.includes('hi')) {
    return "Hello! I'm **Aptiq**, your AI assistant. I'm here to help you with any questions you have. Feel free to ask me about programming, interviews, or anything else!";
  }
  
  if (lowercaseMsg.includes('javascript') || lowercaseMsg.includes('js')) {
    return "**JavaScript** is a versatile programming language primarily used for web development. Here are some key concepts:\n\n• **Variables**: Use `let`, `const`, or `var` to declare variables\n• **Functions**: Can be declared using `function` keyword or arrow syntax `=>`\n• **Objects**: Key-value pairs enclosed in curly braces `{}`\n\nWould you like me to explain any specific JavaScript concept in more detail?";
  }
  
  if (lowercaseMsg.includes('interview') || lowercaseMsg.includes('prepare')) {
    return "Great question about **interview preparation**! Here are some tips:\n\n1. **Research the company** thoroughly before your interview\n2. **Practice common questions** like 'Tell me about yourself'\n3. **Prepare examples** using the STAR method (Situation, Task, Action, Result)\n4. **Ask thoughtful questions** about the role and team\n5. **Follow up** with a thank you email\n\nWould you like me to help you practice specific interview questions?";
  }
  
  if (lowercaseMsg.includes('react')) {
    return "**React** is a popular JavaScript library for building user interfaces. Key concepts include:\n\n• **Components**: Reusable UI pieces (functional or class-based)\n• **JSX**: JavaScript XML syntax for describing UI\n• **State**: Data that changes over time using `useState`\n• **Props**: Data passed from parent to child components\n• **Hooks**: Functions like `useEffect`, `useContext` for side effects\n\nWant me to explain any React concept further?";
  }
  
  if (lowercaseMsg.includes('python')) {
    return "**Python** is known for its simplicity and readability. It's great for:\n\n• **Web Development** (Django, Flask)\n• **Data Science** (Pandas, NumPy)\n• **Machine Learning** (TensorFlow, PyTorch)\n• **Automation** and scripting\n\nExample: `print('Hello, World!')`\n\nWhat would you like to learn about Python?";
  }

  if (lowercaseMsg.includes('help') || lowercaseMsg.includes('what can you do')) {
    return "I'm **Aptiq**, and I can help you with:\n\n• **Technical Questions** - Programming, frameworks, concepts\n• **Interview Prep** - Practice questions and tips\n• **Code Explanations** - Understanding snippets and logic\n• **General Knowledge** - Wide range of topics\n\nJust speak your question and I'll provide a helpful response!";
  }
  
  return `Thanks for your question about: **"${userMessage}"**\n\nI'm here to help! As an AI assistant, I can provide information on various topics including:\n\n• Programming and development\n• Interview preparation\n• Technical concepts\n• General knowledge\n\nCould you provide more details about what you'd like to know?`;
};

const Chat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();
  
  const {
    isListening,
    transcript,
    startListening,
    stopListening,
    resetTranscript,
    isSupported,
  } = useSpeechRecognition();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  // Handle new transcript
  useEffect(() => {
    if (transcript && !isTyping) {
      // Add user message
      const userMessage: Message = {
        id: Date.now().toString(),
        role: 'user',
        content: transcript,
      };
      setMessages((prev) => [...prev, userMessage]);
      resetTranscript();
      
      // Simulate AI typing
      setIsTyping(true);
      setTimeout(() => {
        const response = generateResponse(transcript);
        const assistantMessage: Message = {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          content: response,
        };
        setMessages((prev) => [...prev, assistantMessage]);
        setIsTyping(false);
      }, 1500);
    }
  }, [transcript, isTyping, resetTranscript]);

  const handleStartListening = () => {
    if (!isSupported) {
      toast({
        title: "Speech Recognition Not Supported",
        description: "Please use a modern browser like Chrome for voice input.",
        variant: "destructive",
      });
      return;
    }
    startListening();
    toast({
      title: "Listening...",
      description: "Speak your question. Click Stop when done.",
    });
  };

  const handleStopListening = () => {
    stopListening();
    toast({
      title: "Stopped Listening",
      description: "Processing your input...",
    });
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <ChatNavbar
        isListening={isListening}
        onStartListening={handleStartListening}
        onStopListening={handleStopListening}
      />

      {/* Chat Area */}
      <main className="flex-1 pt-16 pb-4">
        <div className="container mx-auto px-4 h-full max-w-3xl">
          {messages.length === 0 && !isListening ? (
            <div className="flex flex-col items-center justify-center h-[calc(100vh-8rem)] text-center">
              <div className="animate-float w-20 h-20 gradient-primary rounded-3xl flex items-center justify-center mb-6 shadow-glow">
                <i className='bx bx-bot text-4xl text-primary-foreground'></i>
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-3">
                Welcome to Aptiq
              </h2>
              <p className="text-muted-foreground mb-6 max-w-md">
                Click <strong>Start</strong> in the navbar to begin speaking. 
                I'll respond to your questions in text.
              </p>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <i className='bx bx-microphone text-primary'></i>
                <span>Voice input</span>
                <i className='bx bx-right-arrow-alt'></i>
                <i className='bx bx-message-detail text-primary'></i>
                <span>Text response</span>
              </div>
            </div>
          ) : (
            <div className="py-6 space-y-4">
              {messages.map((message) => (
                <ChatMessage
                  key={message.id}
                  role={message.role}
                  content={message.content}
                />
              ))}
              
              {isTyping && (
                <ChatMessage role="assistant" content="" isTyping />
              )}
              
              <div ref={messagesEndRef} />
            </div>
          )}
        </div>
      </main>

      {/* Listening Indicator */}
      {isListening && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
          <div className="bg-primary text-primary-foreground px-6 py-3 rounded-full shadow-glow flex items-center gap-3 animate-message">
            <div className="flex gap-1">
              <span className="w-2 h-2 bg-primary-foreground rounded-full typing-dot"></span>
              <span className="w-2 h-2 bg-primary-foreground rounded-full typing-dot"></span>
              <span className="w-2 h-2 bg-primary-foreground rounded-full typing-dot"></span>
            </div>
            <span className="font-medium">Listening...</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chat;
