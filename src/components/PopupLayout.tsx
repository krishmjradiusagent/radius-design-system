import React from 'react';
import { cn } from '../utils/cn';

export type BodyLayout = 
  | 'body-only' 
  | 'title-body' 
  | 'label-body' 
  | 'sectioned' 
  | 'list' 
  | 'banner-list' 
  | 'form' 
  | 'confirmation'
  | 'search-list'
  | 'hero-banner'
  | 'canonical-manage';

interface PopupBodyProps {
  layout?: BodyLayout;
  gap?: number; // In px, from 8, 16, 24, 32
  contentMaxWidth?: string;
  align?: 'start' | 'center';
  children: React.ReactNode;
  className?: string;
}

/**
 * 🏛️ Radius Primitive: PopupBody
 * The internal layout engine for popup content area.
 */
export const PopupBody: React.FC<PopupBodyProps> = ({
  layout = 'body-only',
  gap = 24,
  contentMaxWidth = '100%',
  align = 'start',
  children,
  className,
}) => {
  const alignClass = align === 'center' ? 'items-center text-center' : 'items-start';
  
  // Custom gap logic for specific layouts
  const finalGap = layout === 'canonical-manage' ? 24 : gap;

  return (
    <div 
      className={cn(
        "flex-1 flex flex-col w-full min-h-0",
        alignClass,
        className
      )}
      style={{ gap: `${finalGap}px`, maxWidth: contentMaxWidth }}
    >
      {children}
    </div>
  );
};

interface PopupSectionProps {
  title?: string;
  body: React.ReactNode;
  supportingText?: string;
  accessory?: React.ReactNode;
  showDivider?: boolean;
  density?: 'compact' | 'comfortable' | 'canonical';
  className?: string;
}

export const PopupSection: React.FC<PopupSectionProps> = ({
  title,
  body,
  supportingText,
  accessory,
  showDivider = false,
  density = 'comfortable',
  className,
}) => {
  const gapMap = {
    compact: 'gap-2',
    comfortable: 'gap-4',
    canonical: 'gap-3',
  };

  return (
    <div className={cn("w-full flex flex-col", className)}>
      <div className={cn("flex flex-col", gapMap[density])}>
        {(title || accessory) && (
          <div className="flex items-center justify-between gap-4 px-1">
            {title && (
              <h4 className="text-[11px] font-black uppercase tracking-widest text-slate-400">
                {title}
              </h4>
            )}
            {accessory && <div className="shrink-0">{accessory}</div>}
          </div>
        )}
        <div className="w-full">
          {body}
        </div>
        {supportingText && (
          <p className="text-[12px] text-slate-400 font-medium px-1 leading-relaxed">
            {supportingText}
          </p>
        )}
      </div>
      {showDivider && <div className="mt-6 border-b border-slate-50 w-full" />}
    </div>
  );
};

export const PopupSearchRow: React.FC<{ icon: React.ReactNode, placeholder: string, className?: string }> = ({ icon, placeholder, className }) => (
  <div className={cn(
    "w-full flex items-center gap-3 p-4 bg-slate-50 border border-slate-100 rounded-[24px] focus-within:bg-white focus-within:border-[#5A5FF2] focus-within:shadow-sm transition-all",
    className
  )}>
    <div className="text-slate-400 shrink-0">{icon}</div>
    <input 
      placeholder={placeholder} 
      className="bg-transparent border-none outline-none text-[14px] font-medium w-full placeholder:text-slate-400" 
    />
  </div>
);

interface PopupHeroProps {
  image?: React.ReactNode;
  title: string;
  description?: string;
  className?: string;
}

export const PopupHero: React.FC<PopupHeroProps> = ({
  image,
  title,
  description,
  className
}) => (
  <div className={cn("w-full flex flex-col items-center text-center gap-4 py-4", className)}>
    {image && <div className="mb-2">{image}</div>}
    <h3 className="text-[20px] font-black text-slate-900 tracking-tight leading-tight">
      {title}
    </h3>
    {description && (
      <p className="text-[14px] text-slate-500 font-medium leading-relaxed max-w-[320px]">
        {description}
      </p>
    )}
  </div>
);
