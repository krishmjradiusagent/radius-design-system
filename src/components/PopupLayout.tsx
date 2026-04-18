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
  | 'confirmation';

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
  
  return (
    <div 
      className={cn(
        "flex-1 flex flex-col w-full",
        alignClass,
        className
      )}
      style={{ gap: `${gap}px`, maxWidth: contentMaxWidth }}
    >
      {children}
    </div>
  );
};

interface PopupSectionProps {
  title?: string;
  body: React.ReactNode;
  supportingText?: string;
  showDivider?: boolean;
  density?: 'compact' | 'comfortable';
  className?: string;
}

export const PopupSection: React.FC<PopupSectionProps> = ({
  title,
  body,
  supportingText,
  showDivider = false,
  density = 'comfortable',
  className,
}) => {
  const gap = density === 'compact' ? 'gap-2' : 'gap-4';

  return (
    <div className={cn("w-full flex flex-col", className)}>
      <div className={cn("flex flex-col", gap)}>
        {title && (
          <h4 className="text-[11px] font-black uppercase tracking-widest text-slate-400 px-1">
            {title}
          </h4>
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
