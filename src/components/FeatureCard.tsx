import React from 'react';

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  delay?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, delay = '' }) => {
  return (
    <div 
      className={`opacity-0 animate-fade-in-up ${delay} bg-card border border-border rounded-2xl p-6 hover:shadow-card hover:border-primary/20 transition-all duration-300 group`}
    >
      <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
        <i className={`bx ${icon} text-2xl text-primary-foreground`}></i>
      </div>
      <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
    </div>
  );
};

export default FeatureCard;
