import React from 'react';
import { cn } from '../utils/cn';

export interface InfoInlineNoticeProps {
  icon?: React.ReactNode;
  text: string;
  tone?: 'neutral' | 'destructive' | 'info' | 'warning' | 'success';
  maxWidth?: string;
  clamp?: number;
  singleLineWhenPossible?: boolean;
  className?: string;
}

/**
 * 🏛️ Radius Primitive: InfoInlineNotice
 * Strictly aligned notice for footer metadata.
 * Controls wrapping behavior and optical baseline alignment.
 */
export const InfoInlineNotice: React.FC<InfoInlineNoticeProps> = ({
  icon,
  text,
  tone = 'neutral',
  maxWidth = '320px',
  clamp,
  singleLineWhenPossible = true,
  className
}) => {
  const toneColors = {
    neutral: 'text-slate-400',
    destructive: 'text-red-500',
    info: 'text-[#5A5FF2]',
    warning: 'text-amber-600',
    success: 'text-emerald-600',
  };

  return (
    <div 
      className={cn(
        "flex gap-2.5 items-start transition-all",
        className
      )}
      style={{ maxWidth }}
    >
      {icon && (
        <div className={cn("shrink-0 pt-[2.5px]", toneColors[tone])}>
          {icon}
        </div>
      )}
      <p className={cn(
        "text-[12px] font-medium leading-[1.4] tracking-tight antialiased",
        toneColors[tone],
        singleLineWhenPossible && "whitespace-nowrap overflow-hidden text-ellipsis",
        !singleLineWhenPossible && clamp && `line-clamp-${clamp}`
      )}>
        {text}
      </p>
    </div>
  );
};
