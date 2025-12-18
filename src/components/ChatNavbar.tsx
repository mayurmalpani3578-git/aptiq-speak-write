import React from 'react';
import { useNavigate } from 'react-router-dom';
import AptiqLogo from './AptiqLogo';
import { Button } from './ui/button';

interface ChatNavbarProps {
  isListening: boolean;
  onStartListening: () => void;
  onStopListening: () => void;
}

const ChatNavbar: React.FC<ChatNavbarProps> = ({
  isListening,
  onStartListening,
  onStopListening,
}) => {
  const navigate = useNavigate();

  const handleEnd = () => {
    if (isListening) {
      onStopListening();
    }
    navigate('/');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <AptiqLogo size="sm" />

        <div className="flex items-center gap-3">
          {!isListening ? (
            <Button
              onClick={onStartListening}
              size="sm"
              className="gap-2 gradient-primary text-primary-foreground font-semibold shadow-soft hover:shadow-glow hover:scale-105 active:scale-95"
            >
              <i className='bx bx-microphone text-lg'></i>
              <span className="hidden sm:inline">Start</span>
            </Button>
          ) : (
            <Button
              onClick={onStopListening}
              variant="destructive"
              size="sm"
              className="gap-2 rounded-full shadow-md"
            >
              <i className='bx bx-stop text-lg'></i>
              <span className="hidden sm:inline">Stop</span>
            </Button>
          )}

          <Button 
            onClick={handleEnd} 
            size="sm" 
            className="gap-2 bg-destructive/10 text-destructive hover:bg-destructive hover:text-destructive-foreground font-medium"
          >
            <i className='bx bx-exit text-lg'></i>
            <span className="hidden sm:inline">End</span>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default ChatNavbar;
