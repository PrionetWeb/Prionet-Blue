import { memo } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import ppnLogo from 'figma:asset/37580bb4cfa59eb10ae033d4a76d46140e8629d6.png';

interface LogoProps {
  className?: string;
  onClick?: () => void;
}

export const Logo = memo(function Logo({ className = "", onClick }: LogoProps) {
  const handleClick = (e: React.MouseEvent | React.KeyboardEvent) => {
    if (onClick) {
      onClick();
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleClick(e);
    }
  };

  return (
    <div 
      className={`flex items-center gap-3 cursor-pointer ${className}`}
      onClick={handleClick}
      onKeyDown={handleKeyPress}
      role="button"
      tabIndex={0}
      aria-label="Priority Pay Network - Return to homepage"
    >
      {/* PPN Logo */}
      <div className="flex items-center">
        <ImageWithFallback
          src={ppnLogo}
          alt=""
          className="h-10 w-10"
          aria-hidden="true"
        />
      </div>
      
      {/* Company Name */}
      <div className="flex items-center">
        <span 
          className="text-foreground leading-none text-lg"
          style={{ fontFamily: 'var(--font-inter)', fontWeight: 600 }}
        >
          PRIONET<span className="hidden md:inline"> Practitioner Network</span>
        </span>
      </div>
    </div>
  );
});