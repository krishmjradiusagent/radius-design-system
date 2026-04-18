import React from 'react';
import { LucideIcon, CheckCircle2 } from 'lucide-react';
import { cn } from '../utils/cn';

type SelectionStyle = 'border' | 'glow' | 'fill';
type ChoiceTone = 'neutral' | 'destructive' | 'indigo';

interface ChoiceCardProps {
  title: string;
  description: string;
  leadingIcon?: LucideIcon;
  selected?: boolean;
  disabled?: boolean;
  tone?: ChoiceTone;
  selectionStyle?: SelectionStyle;
  onClick?: () => void;
  className?: string;
}

/**
 * 🏛️ Radius Primitive: ChoiceCard
 * High-fidelity selection card with strict column alignment.
 */
export const ChoiceCard: React.FC<ChoiceCardProps> = ({
  title,
  description,
  leadingIcon: Icon,
  selected = false,
  disabled = false,
  tone = 'indigo',
  selectionStyle = 'border',
  onClick,
  className
}) => {
  const baseStyles = "relative flex gap-4 p-5 rounded-[20px] border transition-all cursor-pointer select-none group";
  
  const stateStyles = selected 
    ? {
        border: "border-indigo-600 bg-indigo-50/10",
        glow: "border-indigo-600 shadow-[0_0_15px_rgba(90,95,242,0.15)] bg-white",
        fill: "border-indigo-600 bg-indigo-50/30"
      }[selectionStyle]
    : "border-slate-100 bg-white hover:border-slate-200 hover:shadow-sm";

  const disabledStyles = disabled ? "opacity-50 cursor-not-allowed grayscale pointer-events-none" : "";

  return (
    <div 
      onClick={!disabled ? onClick : undefined}
      className={cn(baseStyles, stateStyles, disabledStyles, className)}
    >
      {Icon && (
        <div className="flex-shrink-0 pt-0.5">
          <Icon 
            size={18} 
            className={cn(
              "transition-colors",
              selected ? "text-indigo-600" : "text-slate-400 group-hover:text-slate-500"
            )} 
          />
        </div>
      )}

      <div className="flex-1 flex flex-col gap-0.5 min-w-0">
        <h4 className={cn(
          "text-[14px] font-bold transition-colors",
          selected ? "text-indigo-700" : "text-slate-900"
        )}>
          {title}
        </h4>
        <p className="text-[12px] text-slate-500 leading-normal font-medium">
          {description}
        </p>
      </div>

      {selected && (
        <div className="flex-shrink-0 self-center">
          <CheckCircle2 size={16} className="text-indigo-600" />
        </div>
      )}
    </div>
  );
};

export const ChoiceCardGroup: React.FC<{ children: React.ReactNode, className?: string }> = ({ children, className }) => (
  <div className={cn("grid gap-3", className)}>
    {children}
  </div>
);
