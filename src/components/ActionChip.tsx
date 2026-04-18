import React from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '../utils/cn';

type ChipVariant = 'icon-only' | 'icon-text' | 'text-icon' | 'icon-text-icon' | 'text-only';
type ChipTone = 'destructive' | 'warning' | 'neutral' | 'info';
type ChipSize = 'sm' | 'md';

interface ActionChipProps {
  variant?: ChipVariant;
  tone?: ChipTone;
  label?: string;
  leadingIcon?: LucideIcon;
  trailingIcon?: LucideIcon;
  size?: ChipSize;
  styleType?: 'outlined' | 'filled' | 'subtle';
  className?: string;
}

/**
 * 🏛️ Radius Primitive: ActionChip
 * Enforces strict optical baseline alignment and fixed height tokens.
 */
export const ActionChip: React.FC<ActionChipProps> = ({
  variant = 'text-only',
  tone = 'neutral',
  label,
  leadingIcon: Leading,
  trailingIcon: Trailing,
  size = 'md',
  styleType = 'subtle',
  className
}) => {
  const toneClasses = {
    destructive: styleType === 'subtle' ? 'bg-red-50 text-red-600 border-red-100' : 'bg-red-600 text-white border-red-600',
    warning: styleType === 'subtle' ? 'bg-amber-50 text-amber-700 border-amber-100' : 'bg-amber-500 text-white border-amber-500',
    info: styleType === 'subtle' ? 'bg-blue-50 text-blue-600 border-blue-100' : 'bg-blue-600 text-white border-blue-600',
    neutral: styleType === 'subtle' ? 'bg-slate-50 text-slate-600 border-slate-100' : 'bg-slate-900 text-white border-slate-900',
  };

  const sizeClasses = {
    sm: 'h-6 px-2 text-[10px]',
    md: 'h-8 px-3 text-[11px]',
  };

  const iconSize = size === 'sm' ? 12 : 14;

  return (
    <div className={cn(
      "inline-flex items-center justify-center gap-1.5 rounded-full border font-black uppercase tracking-widest transition-all",
      toneClasses[tone],
      sizeClasses[size],
      className
    )}>
      {Leading && (variant.includes('icon-') || variant === 'icon-only') && (
        <Leading size={iconSize} className="shrink-0" />
      )}
      
      {label && variant !== 'icon-only' && (
        <span className="leading-none mt-[1px]">{label}</span>
      )}

      {Trailing && (variant.endsWith('-icon') || variant === 'icon-only') && (
        <Trailing size={iconSize} className="shrink-0" />
      )}
    </div>
  );
};
