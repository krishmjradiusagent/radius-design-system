import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { cn } from '../utils/cn';

export type SelectionStyle = 'border' | 'glow' | 'fill';
export type ChoiceTone = 'neutral' | 'destructive' | 'indigo';
export type ChoiceDensity = 'compact' | 'comfortable';

interface ChoiceCardProps {
  title: string;
  description: string;
  descriptionClamp?: number | 'none';
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  selected?: boolean;
  disabled?: boolean;
  tone?: ChoiceTone;
  selectionStyle?: SelectionStyle;
  density?: ChoiceDensity;
  onClick?: () => void;
  className?: string;
}

/**
 * 🏛️ Radius Primitive: ChoiceCard
 * High-fidelity selection card with strict column alignment and auto-layout logic.
 */
export const ChoiceCard: React.FC<ChoiceCardProps> = ({
  title,
  description,
  descriptionClamp = 'none',
  leadingIcon,
  trailingIcon,
  selected = false,
  disabled = false,
  tone = 'indigo',
  selectionStyle = 'border',
  density = 'comfortable',
  onClick,
  className
}) => {
  const paddingClass = density === 'comfortable' ? 'p-5' : 'p-3.5';
  const radiusClass = density === 'comfortable' ? 'rounded-[20px]' : 'rounded-[16px]';
  const gapClass = density === 'comfortable' ? 'gap-4' : 'gap-3';

  const toneMap = {
    indigo: {
      border: "border-[#5A5FF2] bg-[#5A5FF2]/5",
      glow: "border-[#5A5FF2] shadow-[0_0_15px_rgba(90,95,242,0.15)] bg-white",
      fill: "border-[#5A5FF2] bg-[#5A5FF2]/10"
    },
    destructive: {
      border: "border-red-600 bg-red-50/50",
      glow: "border-red-600 shadow-[0_0_15px_rgba(220,38,38,0.1)] bg-white",
      fill: "border-red-600 bg-red-50"
    },
    neutral: {
      border: "border-slate-400 bg-slate-50",
      glow: "border-slate-400 shadow-sm bg-white",
      fill: "border-slate-400 bg-slate-100"
    }
  };

  const stateStyles = selected 
    ? toneMap[tone][selectionStyle]
    : "border-slate-100 bg-white hover:border-slate-200 hover:shadow-sm";

  const disabledStyles = disabled ? "opacity-40 cursor-not-allowed grayscale pointer-events-none" : "";

  return (
    <div 
      onClick={!disabled ? onClick : undefined}
      className={cn(
        "relative flex items-start transition-all cursor-pointer select-none group border",
        paddingClass,
        radiusClass,
        gapClass,
        stateStyles, 
        disabledStyles, 
        className
      )}
    >
      {leadingIcon && (
        <div className={cn(
          "flex-shrink-0 pt-0.5 transition-colors",
          selected ? (tone === 'destructive' ? 'text-red-600' : 'text-[#5A5FF2]') : 'text-slate-400 group-hover:text-slate-500'
        )}>
          {leadingIcon}
        </div>
      )}

      <div className="flex-1 flex flex-col gap-0.5 min-w-0">
        <h4 className={cn(
          "text-[14px] font-bold transition-colors tracking-tight",
          selected ? (tone === 'destructive' ? 'text-red-700' : 'text-[#4A4FD2]') : 'text-slate-900'
        )}>
          {title}
        </h4>
        <p className={cn(
          "text-[12px] text-slate-500 leading-normal font-medium transition-colors",
          selected && "text-slate-600",
          descriptionClamp !== 'none' && `line-clamp-${descriptionClamp}`
        )}>
          {description}
        </p>
      </div>

      <div className="flex-shrink-0 self-center">
        {trailingIcon ? trailingIcon : (
           selected && <CheckCircle2 size={16} className={cn(tone === 'destructive' ? 'text-red-600' : 'text-[#5A5FF2]')} />
        )}
      </div>
    </div>
  );
};

export const ChoiceCardGroup: React.FC<{ children: React.ReactNode, className?: string, gap?: number }> = ({ 
  children, 
  className,
  gap = 3
}) => (
  <div className={cn("grid", className)} style={{ gap: `${gap * 4}px` }}>
    {children}
  </div>
);
