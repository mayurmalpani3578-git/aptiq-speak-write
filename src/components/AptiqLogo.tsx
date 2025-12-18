import React from 'react';

interface AptiqLogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

const AptiqLogo: React.FC<AptiqLogoProps> = ({ size = 'md', showText = true }) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-14 h-14',
  };

  const textSizeClasses = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl',
  };

  return (
    <div className="flex items-center gap-2">
      <div className={`${sizeClasses[size]} gradient-primary rounded-xl flex items-center justify-center shadow-soft`}>
        <i className='bx bx-bot text-primary-foreground text-lg'></i>
      </div>
      {showText && (
        <span className={`${textSizeClasses[size]} font-bold text-foreground`}>
          Apt<span className="text-primary">iq</span>
        </span>
      )}
    </div>
  );
};

export default AptiqLogo;
