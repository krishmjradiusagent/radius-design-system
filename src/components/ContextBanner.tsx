import React from 'react';
import { cn } from '../utils/cn';

export type BannerTone = 'destructive' | 'warning' | 'neutral' | 'info' | 'success';
export type BannerDensity = 'comfortable' | 'compact';

interface ContextBannerProps {
  eyebrow?: string;
  title: string;
  description: string;
  descriptionClamp?: number | 'none';
  leadingIcon?: React.ReactNode;
  tone?: BannerTone;
  density?: BannerDensity;
  showTrailingMeta?: boolean;
  maxWidth?: string;
  className?: string;
}

/**
 * 🏛️ Radius Primitive: ContextBanner
 * A locked-layout block for warnings and contextual info.
 * Optimized for optical alignment and strict typography.
 */
export const ContextBanner: React.FC<ContextBannerProps> = ({
  eyebrow,
  title,
  description,
  descriptionClamp = 'none',
  leadingIcon,
  tone = 'neutral',
  density = 'comfortable',
  showTrailingMeta = false,
  maxWidth = '100%',
  className
}) => {
  const toneStyles = {
    destructive: 'bg-red-50/50 border-red-100 text-red-900',
    warning: 'bg-amber-50/50 border-amber-100 text-amber-900',
    info: 'bg-blue-50/50 border-blue-100 text-blue-900',
    success: 'bg-emerald-50/50 border-emerald-100 text-emerald-900',
    neutral: 'bg-slate-50/50 border-slate-100 text-slate-900',
  };

  const iconColors = {
    destructive: 'text-red-600',
    warning: 'text-amber-600',
    info: 'text-[#5A5FF2]',
    success: 'text-emerald-600',
    neutral: 'text-slate-400',
  };

  const paddingClasses = density === 'comfortable' ? 'p-6' : 'p-4';
  const gapClasses = density === 'comfortable' ? 'gap-4' : 'gap-3';

  return (
    <div 
      className={cn(
        "flex rounded-2xl border transition-all",
        toneStyles[tone],
        paddingClasses,
        gapClasses,
        className
      )}
      style={{ maxWidth }}
    >
      {leadingIcon && (
        <div className={cn("flex-shrink-0 pt-0.5", iconColors[tone])}>
          {leadingIcon}
        </div>
      )}
      
      <div className="flex-1 flex flex-col gap-1 min-w-0">
        {eyebrow && (
          <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-0.5">
            {eyebrow}
          </span>
        )}
        <h3 className="text-[15px] font-bold leading-tight tracking-tight">
          {title}
        </h3>
        <p className={cn(
          "text-[13px] text-slate-500 leading-relaxed font-medium",
          descriptionClamp !== 'none' && `line-clamp-${descriptionClamp}`
        )}>
          {description}
        </p>
      </div>

      {showTrailingMeta && (
        <div className="flex-shrink-0 self-center pl-2">
          <div className="size-1.5 bg-[#5A5FF2] rounded-full shadow-[0_0_8px_rgba(90,95,242,0.4)]" />
        </div>
      )}
    </div>
  );
};
