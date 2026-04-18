import React from 'react';
import { motion } from 'framer-motion';
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
  intent?: 'loud' | 'quiet'; // Specific for destructive tone
  label?: string;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}

/**
 * 🏛️ Radius Heritage Primitive: ActionChip
 * 
 * Production-grade chip system with:
 * - Tactile motion feedback (Framer Motion)
 * - Dual-intent destructive states
 * - Strict optical alignment for icons and labels
 * - 4px/8px spacing rhythm adherence
 */
export const ActionChip: React.FC<ActionChipProps> = ({
  variant,
  tone = 'neutral',
  appearance = 'subtle',
  size = 'md',
  intent = 'loud',
  label,
  leadingIcon,
  trailingIcon,
  className,
  onClick,
  disabled = false,
}) => {
  
  // 📐 Specific Radius Motion Curve
  const heritageTransition = {
    duration: 0.2,
    ease: [0.32, 0.72, 0, 1]
  };

  // 🎨 Tone & Appearance Map (Tokens ONLY)
  const toneMap: Record<ActionChipTone, Record<ActionChipAppearance, string>> = {
    neutral: {
      subtle: 'bg-slate-50 text-slate-600 border-slate-100 uppercase',
      outline: 'bg-transparent text-slate-600 border-slate-200 uppercase',
      filled: 'bg-slate-900 text-white border-slate-900 uppercase',
    },
    info: {
      subtle: 'bg-[#5A5FF2]/10 text-[#5A5FF2] border-[#5A5FF2]/20 uppercase',
      outline: 'bg-transparent text-[#5A5FF2] border-[#5A5FF2]/30 uppercase',
      filled: 'bg-[#5A5FF2] text-white border-[#5A5FF2] uppercase',
    },
    warning: {
      subtle: 'bg-amber-50 text-amber-700 border-amber-100 uppercase',
      outline: 'bg-transparent text-amber-700 border-amber-200 uppercase',
      filled: 'bg-amber-500 text-white border-amber-500 uppercase',
    },
    success: {
      subtle: 'bg-emerald-50 text-emerald-700 border-emerald-100 uppercase',
      outline: 'bg-transparent text-emerald-700 border-emerald-200 uppercase',
      filled: 'bg-emerald-600 text-white border-emerald-600 uppercase',
    },
    destructive: {
      subtle: intent === 'loud' 
        ? 'bg-red-50 text-red-600 border-red-100 uppercase' 
        : 'bg-slate-50 text-slate-500 border-slate-200 uppercase',
      outline: intent === 'loud' 
        ? 'bg-transparent text-red-600 border-red-200 uppercase' 
        : 'bg-transparent text-slate-500 border-slate-200 uppercase',
      filled: intent === 'loud' 
        ? 'bg-red-600 text-white border-red-600 uppercase' 
        : 'bg-slate-500 text-white border-slate-500 uppercase',
    },
  };

  // 📐 Content Layout & Padding Logic
  const sizeStyles = {
    sm: {
      base: 'h-6 text-[10px] tracking-widest',
      iconOnly: 'w-6 px-0',
      textOnly: 'px-2.5',
      withIcons: 'px-2 gap-1',
    },
    md: {
      base: 'h-8 text-[11px] tracking-widest',
      iconOnly: 'w-8 px-0',
      textOnly: 'px-3.5',
      withIcons: 'px-3 gap-1.5',
    }
  };

  const layoutClass = variant === 'icon-only' 
    ? sizeStyles[size].iconOnly 
    : variant === 'text-only' 
      ? sizeStyles[size].textOnly 
      : sizeStyles[size].withIcons;

  const showLeading = (variant.includes('icon-') || variant === 'icon-only') && leadingIcon;
  const showTrailing = (variant.endsWith('-icon') || variant === 'icon-only') && trailingIcon;
  const showText = variant !== 'icon-only' && label;

  return (
    <motion.div
      whileHover={!disabled ? { scale: 1.015, y: -0.5 } : {}}
      whileTap={!disabled ? { scale: 0.98 } : {}}
      transition={heritageTransition}
      onClick={!disabled ? onClick : undefined}
      className={cn(
        'inline-flex items-center justify-center rounded-full border transition-colors cursor-default select-none',
        'font-black leading-none antialiased', 
        toneMap[tone][appearance],
        sizeStyles[size].base,
        layoutClass,
        disabled && 'opacity-40 grayscale cursor-not-allowed',
        className
      )}
      aria-label={variant === 'icon-only' ? (label || 'Action badge') : undefined}
    >
      {showLeading && (
        <span className="flex items-center justify-center shrink-0 w-[12px] h-[12px]">
          {leadingIcon}
        </span>
      )}

      {showText && (
        <span className="mt-[0.5px] whitespace-nowrap">
          {label}
        </span>
      )}

      {showTrailing && (
        <span className="flex items-center justify-center shrink-0 w-[12px] h-[12px]">
          {trailingIcon}
        </span>
      )}
    </motion.div>
  );
};
