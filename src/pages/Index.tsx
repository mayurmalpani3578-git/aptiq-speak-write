import React from 'react';
import { Link } from 'react-router-dom';
import LandingNavbar from '@/components/LandingNavbar';
import FeatureCard from '@/components/FeatureCard';
import AptiqLogo from '@/components/AptiqLogo';
import { Button } from '@/components/ui/button';

const Index: React.FC = () => {
  const features = [
    {
      icon: 'bx-microphone',
      title: 'Voice Input',
      description: 'Speak naturally and let Aptiq understand your questions with advanced speech recognition.',
    },
    {
      icon: 'bx-message-square-dots',
      title: 'Smart Responses',
      description: 'Get intelligent, contextual answers in text format for easy reading and reference.',
    },
    {
      icon: 'bx-code-alt',
      title: 'Code Support',
      description: 'Ask coding questions and receive formatted code snippets with explanations.',
    },
    {
      icon: 'bx-brain',
      title: 'AI Powered',
      description: 'Powered by advanced AI to provide accurate and helpful responses to any question.',
    },
    {
      icon: 'bx-mobile-alt',
      title: 'Fully Responsive',
      description: 'Seamless experience across all devices - desktop, tablet, and mobile.',
    },
    {
      icon: 'bx-dollar-circle',
      title: '100% Free',
      description: 'No hidden costs, no subscriptions. Aptiq is completely free to use.',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <LandingNavbar />

      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 gradient-glow"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <div className="opacity-0 animate-fade-in-up">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-accent rounded-full text-sm font-medium text-accent-foreground mb-6">
                <i className='bx bx-gift'></i>
                Free AI Interview Assistant
              </span>
            </div>
            
            <h1 className="opacity-0 animate-fade-in-up delay-100 text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Speak Your Questions,
              <br />
              <span className="text-gradient">Read the Answers</span>
            </h1>
            
            <p className="opacity-0 animate-fade-in-up delay-200 text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Aptiq is your AI-powered voice assistant for interviews and learning. 
              Ask any question using your voice and receive intelligent text responses.
            </p>
            
            <div className="opacity-0 animate-fade-in-up delay-300 flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/chat">
                <Button 
                  size="lg"
                  className="w-full sm:w-auto gap-2 h-14 px-10 text-lg gradient-primary text-primary-foreground font-semibold shadow-soft hover:shadow-glow hover:scale-105 active:scale-95"
                >
                  <i className='bx bx-microphone text-xl'></i>
                  Start Talking Free
                </Button>
              </Link>
              <a href="#features">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="w-full sm:w-auto gap-2 h-14 px-10 text-lg"
                >
                  <i className='bx bx-info-circle text-xl'></i>
                  Learn More
                </Button>
              </a>
            </div>

            {/* Floating Bot Animation */}
            <div className="opacity-0 animate-fade-in-up delay-400 mt-12 md:mt-16">
              <div className="animate-float inline-flex items-center justify-center w-24 h-24 md:w-32 md:h-32 gradient-primary rounded-3xl shadow-glow">
                <i className='bx bx-bot text-5xl md:text-6xl text-primary-foreground'></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose <span className="text-gradient">Aptiq</span>?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Everything you need for a seamless voice-to-text AI experience
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <FeatureCard
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                delay={`delay-${(index + 1) * 100}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Built by <span className="text-gradient">Unjac Tech</span>
                </h2>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Unjac Tech is committed to making advanced AI technology accessible to everyone. 
                  We believe in creating tools that enhance learning and productivity without barriers.
                </p>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Aptiq is our flagship product - a completely free AI assistant designed 
                  specifically for interview preparation and general knowledge queries.
                </p>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <i className='bx bx-check-circle text-2xl text-primary'></i>
                    <span className="text-foreground font-medium">No Sign Up Required</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <i className='bx bx-check-circle text-2xl text-primary'></i>
                    <span className="text-foreground font-medium">Forever Free</span>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 gradient-glow scale-150"></div>
                  <div className="relative bg-background border border-border rounded-3xl p-8 shadow-card">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center">
                        <i className='bx bx-buildings text-3xl text-primary-foreground'></i>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground">Unjac Tech</h3>
                        <p className="text-muted-foreground text-sm">Innovation for Everyone</p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 text-muted-foreground">
                        <i className='bx bx-globe'></i>
                        <span>Global AI Solutions</span>
                      </div>
                      <div className="flex items-center gap-3 text-muted-foreground">
                        <i className='bx bx-heart'></i>
                        <span>Community Focused</span>
                      </div>
                      <div className="flex items-center gap-3 text-muted-foreground">
                        <i className='bx bx-shield-quarter'></i>
                        <span>Privacy First</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Start Your <span className="text-gradient">AI Conversation</span>?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              No registration, no payment - just click and start talking to Aptiq instantly.
            </p>
            <Link to="/chat">
              <Button 
                size="lg"
                className="gap-2 h-14 px-10 text-lg gradient-primary text-primary-foreground font-semibold shadow-soft hover:shadow-glow hover:scale-105 active:scale-95"
              >
                <i className='bx bx-microphone text-xl'></i>
                Start Free Conversation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-card border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <AptiqLogo size="sm" />
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} Unjac Tech. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <i className='bx bxl-twitter text-xl'></i>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <i className='bx bxl-linkedin text-xl'></i>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <i className='bx bxl-github text-xl'></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
