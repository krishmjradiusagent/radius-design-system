import React from 'react';
import { cn } from '../utils/cn';
import { Button } from './Button';

export type CTALayout = 'end' | 'split' | 'stacked';

interface CTAGroupProps {
  layout?: CTALayout;
  primaryLabel: string;
  primaryTone?: 'primary' | 'destructive' | 'outline';
  secondaryLabel?: string;
  showSecondary?: boolean;
  tertiaryLabel?: string;
  showTertiary?: boolean;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
  onTertiaryClick?: () => void;
  className?: string;
  disabled?: boolean;
}

/**
 * 🏛️ Radius Primitive: CTAGroup
 * Manages the composition and alignment of footer actions.
 */
export const CTAGroup: React.FC<CTAGroupProps> = ({
  layout = 'end',
  primaryLabel,
  primaryTone = 'primary',
  secondaryLabel = 'Cancel',
  showSecondary = true,
  tertiaryLabel,
  showTertiary = false,
  onPrimaryClick,
  onSecondaryClick,
  onTertiaryClick,
  className,
  disabled = false,
}) => {
  const containerClass = {
    end: 'flex items-center justify-end gap-3',
    split: 'flex items-center justify-between w-full',
    stacked: 'flex flex-col-reverse w-full gap-2',
  }[layout];

  return (
    <div className={cn(containerClass, className)}>
      <div className={cn(
        "flex items-center gap-3",
        layout === 'stacked' && "flex-col-reverse w-full"
      )}>
        {showTertiary && tertiaryLabel && (
          <Button 
            variant="ghost" 
            size="md" 
            className="text-slate-400 font-bold"
            onClick={onTertiaryClick}
            disabled={disabled}
          >
            {tertiaryLabel}
          </Button>
        )}
        
        {showSecondary && secondaryLabel && (
          <Button 
            variant="ghost" 
            size="md" 
            className="text-slate-500 font-bold px-4 hover:bg-slate-50"
            onClick={onSecondaryClick}
            disabled={disabled}
          >
            {secondaryLabel}
          </Button>
        )}
      </div>

      <Button 
        variant={primaryTone === 'destructive' ? 'destructive' : primaryTone === 'outline' ? 'outline' : 'primary'}
        size="md"
        className={cn(
          "font-black tracking-tight rounded-[16px]",
          layout === 'stacked' && "w-full"
        )}
        onClick={onPrimaryClick}
        disabled={disabled}
      >
        {primaryLabel}
      </Button>
    </div>
  );
};
