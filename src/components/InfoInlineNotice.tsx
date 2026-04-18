import React from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '../utils/cn';

interface InfoInlineNoticeProps {
  icon?: LucideIcon;
  text: string;
  tone?: 'neutral' | 'destructive' | 'info' | 'warning';
  maxWidth?: string;
  className?: string;
}

/**
 * 🏛️ Radius Primitive: InfoInlineNotice
 * Strictly aligned footer notice that maintains baseline integrity when wrapping.
 */
export const InfoInlineNotice: React.FC<InfoInlineNoticeProps> = ({
  icon: Icon,
  text,
  tone = 'neutral',
  maxWidth,
  className
}) => {
  const toneColors = {
    neutral: 'text-slate-400',
    destructive: 'text-red-500',
    info: 'text-blue-500',
    warning: 'text-amber-600',
  };

  return (
    <div 
      className={cn("flex gap-2 items-start", className)}
      style={{ maxWidth }}
    >
      {Icon && (
        <div className="shrink-0 pt-[3px]">
          <Icon size={14} className={toneColors[tone]} />
        </div>
      )}
      <p className={cn(
        "text-[12px] font-medium leading-[1.4] tracking-tight",
        toneColors[tone]
      )}>
        {text}
      </p>
    </div>
  );
};
