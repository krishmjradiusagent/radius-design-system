import React from 'react';
import { cn } from '../utils/cn';

export type ActionChipVariant =
  | 'icon-only'
  | 'text-only'
  | 'icon-text'
  | 'text-icon'
  | 'icon-text-icon';

export type ActionChipTone =
  | 'neutral'
  | 'info'
  | 'warning'
  | 'success'
  | 'destructive';

export type ActionChipAppearance =
  | 'outline'
  | 'subtle'
  | 'filled';

export type ActionChipSize = 'sm' | 'md';

export interface ActionChipProps {
  variant: ActionChipVariant;
  tone?: ActionChipTone;
  appearance?: ActionChipAppearance;
  size?: ActionChipSize;
  label?: string;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  className?: string;
}

/**
 * 🏛️ Radius Primitive: ActionChip
 * 
 * A high-fidelity, prop-driven chip component that enforces Radius "Heritage" styling.
 * Optimized for optical alignment, strict token usage, and premium visual density.
 */
export const ActionChip: React.FC<ActionChipProps> = ({
  variant,
  tone = 'neutral',
  appearance = 'subtle',
  size = 'md',
  label,
  leadingIcon,
  trailingIcon,
  className,
}) => {
  // 🎨 Tone & Appearance Matrix
  const toneStyles: Record<ActionChipTone, Record<ActionChipAppearance, string>> = {
    neutral: {
      subtle: 'bg-slate-50 text-slate-600 border-slate-100',
      outline: 'bg-transparent text-slate-600 border-slate-200',
      filled: 'bg-slate-900 text-white border-slate-900',
    },
    info: {
      subtle: 'bg-blue-50 text-blue-600 border-blue-100',
      outline: 'bg-transparent text-blue-600 border-blue-200',
      filled: 'bg-blue-600 text-white border-blue-600',
    },
    warning: {
      subtle: 'bg-amber-50 text-amber-700 border-amber-100',
      outline: 'bg-transparent text-amber-700 border-amber-200',
      filled: 'bg-amber-500 text-white border-amber-500',
    },
    success: {
      subtle: 'bg-emerald-50 text-emerald-700 border-emerald-100',
      outline: 'bg-transparent text-emerald-700 border-emerald-200',
      filled: 'bg-emerald-600 text-white border-emerald-600',
    },
    destructive: {
      subtle: 'bg-red-50 text-red-600 border-red-100',
      outline: 'bg-transparent text-red-600 border-red-200',
      filled: 'bg-red-600 text-white border-red-600',
    },
  };

  // 📐 Size Tokens
  const sizeStyles = {
    sm: 'h-6 px-2 text-[10px] gap-1',
    md: 'h-8 px-3 text-[11px] gap-1.5',
  };

  // 🧩 Layout Logic
  const showLeading = (variant.includes('icon-') || variant === 'icon-only') && leadingIcon;
  const showTrailing = (variant.endsWith('-icon') || variant === 'icon-only') && trailingIcon;
  const showText = variant !== 'icon-only' && label;

  return (
    <div
      className={cn(
        'inline-flex items-center justify-center rounded-full border transition-all select-none',
        'font-black uppercase tracking-widest', // Radius Header DNA
        toneStyles[tone][appearance],
        sizeStyles[size],
        className
      )}
    >
      {showLeading && (
        <span className="flex items-center justify-center shrink-0">
          {leadingIcon}
        </span>
      )}

      {showText && (
        <span className="leading-none mt-[1px] whitespace-nowrap">
          {label}
        </span>
      )}

      {showTrailing && (
        <span className="flex items-center justify-center shrink-0">
          {trailingIcon}
        </span>
      )}
    </div>
  );
};
