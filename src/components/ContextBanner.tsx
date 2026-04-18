import React from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '../utils/cn';

type BannerTone = 'destructive' | 'warning' | 'neutral' | 'info';
type BannerDensity = 'comfortable' | 'compact';

interface ContextBannerProps {
  eyebrow?: string;
  title: string;
  description: string;
  leadingIcon?: LucideIcon;
  tone?: BannerTone;
  density?: BannerDensity;
  showTrailingMeta?: boolean;
  className?: string;
}

/**
 * 🏛️ Radius Primitive: ContextBanner
 * A locked-layout block for warnings and contextual info.
 * Ensures title and description align to a single column.
 */
export const ContextBanner: React.FC<ContextBannerProps> = ({
  eyebrow,
  title,
  description,
  leadingIcon: Icon,
  tone = 'neutral',
  density = 'comfortable',
  showTrailingMeta = false,
  className
}) => {
  const toneStyles = {
    destructive: 'bg-red-50/50 border-red-100 text-red-900',
    warning: 'bg-amber-50/50 border-amber-100 text-amber-900',
    info: 'bg-blue-50/50 border-blue-100 text-blue-900',
    neutral: 'bg-slate-50/50 border-slate-100 text-slate-900',
  };

  const iconColors = {
    destructive: 'text-red-600',
    warning: 'text-amber-600',
    info: 'text-blue-600',
    neutral: 'text-slate-400',
  };

  const paddingClasses = density === 'comfortable' ? 'p-6' : 'p-4';

  return (
    <div className={cn(
      "flex gap-4 rounded-2xl border transition-all",
      toneStyles[tone],
      paddingClasses,
      className
    )}>
      {Icon && (
        <div className="flex-shrink-0 pt-0.5">
          <Icon size={20} className={iconColors[tone]} />
        </div>
      )}
      
      <div className="flex-1 flex flex-col gap-1 min-w-0">
        {eyebrow && (
          <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-0.5">
            {eyebrow}
          </span>
        )}
        <h3 className="text-[15px] font-bold leading-tight">
          {title}
        </h3>
        <p className="text-[13px] text-slate-500 leading-relaxed font-medium">
          {description}
        </p>
      </div>

      {showTrailingMeta && (
        <div className="flex-shrink-0 self-center">
          <div className="size-2 bg-indigo-500 rounded-full shadow-[0_0_8px_rgba(90,95,242,0.5)]" />
        </div>
      )}
    </div>
  );
};
