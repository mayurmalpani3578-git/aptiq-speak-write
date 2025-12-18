import React from 'react';
import { Link } from 'react-router-dom';
import AptiqLogo from './AptiqLogo';
import { Button } from './ui/button';

const LandingNavbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <AptiqLogo size="sm" />

        <div className="flex items-center gap-4">
          <a href="#features" className="hidden sm:block text-sm text-muted-foreground hover:text-foreground transition-colors">
            Features
          </a>
          <a href="#about" className="hidden sm:block text-sm text-muted-foreground hover:text-foreground transition-colors">
            About
          </a>
          <Link to="/chat">
            <Button 
              size="sm" 
              className="gap-2 gradient-primary text-primary-foreground font-semibold shadow-soft hover:shadow-glow hover:scale-105 active:scale-95"
            >
              <i className='bx bx-microphone'></i>
              Try Free
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default LandingNavbar;
