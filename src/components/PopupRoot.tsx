import React from 'react';
import { X, Plus, Minus, ChevronLeft, ChevronRight, Info, LucideIcon } from 'lucide-react';
import { cn } from '../utils/cn';
import { ActionChip } from './ActionChip';
import { InfoInlineNotice } from './InfoInlineNotice';

export type PopupWidth = 'sm' | 'md' | 'lg' | 'xl' | 'editorial';
export type PopupHeaderAlign = 'start' | 'center';
export type CloseIconVariant = 'x' | 'plus' | 'minus' | 'chevron' | 'custom';
export type CloseButtonStyle = 'ghost' | 'subtle-circle' | 'none';
export type RegionSurface = 'transparent' | 'subtle' | 'elevated';
export type RegionPadding = 'compact' | 'default' | 'spacious' | 'none';

export interface PopupRootProps {
  // 📐 Layout & Dimensions
  widthPreset?: PopupWidth;
  headerAlign?: PopupHeaderAlign;
  maxWidthOverride?: string;
  
  // 🏷️ Header Control
  title?: string;
  subtitle?: string;
  subtitleMaxWidth?: string;
  subtitleClamp?: 1 | 2 | 3 | 'none';
  subtitleTone?: 'neutral' | 'dark' | 'indigo';
  subtitleAlign?: 'start' | 'center';
  
  // 🔘 Close Button System
  showClose?: boolean;
  closeIcon?: CloseIconVariant;
  closeButtonStyle?: CloseButtonStyle;
  customCloseIcon?: React.ReactNode;
  onClose?: () => void;
  
  // 🧩 Header Accessories
  headerChip?: React.ReactNode; // Slot for ActionChip
  headerAccessory?: React.ReactNode; // Inline with title (e.g. badge)
  headerAction?: React.ReactNode; // Right-aligned link/button
  
  // 📦 Body Slot
  children: React.ReactNode;
  
  // ⚓ Footer Row
  footerAction?: React.ReactNode; // Slot for CTAGroup
  footerAccessory?: React.ReactNode; // Slot for secondary info/links
  footerNote?: string;
  footerNoteMaxWidth?: string;
  footerNoteClamp?: 1 | 2 | 3 | 'none';
  footerNoteTone?: 'neutral' | 'destructive' | 'info' | 'warning' | 'success';
  footerNoteSingleLineWhenPossible?: boolean;
  
  // 🎨 Surface & Region Control
  headerSurface?: RegionSurface;
  bodySurface?: RegionSurface;
  footerSurface?: RegionSurface;
  showFooterTray?: boolean;
  showHeaderDivider?: boolean;
  showBodyDivider?: boolean;
  showFooterDivider?: boolean;
  footerTrayInset?: 'none' | 'soft' | 'card-aligned';
  regionPaddingPreset?: RegionPadding;
  
  // 🎭 Misc
  backdrop?: 'light' | 'dim' | 'strong';
  className?: string;
}

const WIDTH_MAP: Record<PopupWidth, string> = {
  sm: 'max-w-[400px]',
  md: 'max-w-[480px]',
  lg: 'max-w-[560px]',
  xl: 'max-w-[640px]',
  editorial: 'max-w-[800px]',
};

const CLOSE_ICONS: Record<CloseIconVariant, LucideIcon | null> = {
  x: X,
  plus: Plus,
  minus: Minus,
  chevron: ChevronRight,
  custom: null,
};

const SURFACE_MAP: Record<RegionSurface, string> = {
  transparent: 'bg-transparent',
  subtle: 'bg-slate-50/50',
  elevated: 'bg-white shadow-sm ring-1 ring-black/5',
};

const PADDING_MAP: Record<RegionPadding, string> = {
  compact: 'px-6 py-6',
  default: 'px-8 py-8',
  spacious: 'px-10 py-10',
  none: 'p-0',
};

/**
 * 🏛️ Radius Core: PopupRoot
 * 
 * The single source of truth for the Radius Popup System.
 * Refined for canonical composition exact parity.
 */
export const PopupRoot: React.FC<PopupRootProps> = ({
  widthPreset = 'lg',
  headerAlign = 'start',
  maxWidthOverride,
  
  title,
  subtitle,
  subtitleMaxWidth = '480px',
  subtitleClamp = 'none',
  subtitleTone = 'neutral',
  subtitleAlign,
  
  showClose = true,
  closeIcon = 'x',
  closeButtonStyle = 'ghost',
  customCloseIcon,
  onClose,
  
  headerChip,
  headerAccessory,
  headerAction,
  
  children,
  
  footerAction,
  footerAccessory,
  footerNote,
  footerNoteMaxWidth = '360px',
  footerNoteClamp = 1,
  footerNoteTone = 'neutral',
  footerNoteSingleLineWhenPossible = true,
  
  headerSurface = 'transparent',
  bodySurface = 'transparent',
  footerSurface = 'transparent',
  showFooterTray = false,
  showHeaderDivider = false,
  showBodyDivider = false,
  showFooterDivider = true,
  footerTrayInset = 'none',
  regionPaddingPreset = 'default',
  
  className,
}) => {
  const CloseIconComponent = CLOSE_ICONS[closeIcon];
  const paddingClass = PADDING_MAP[regionPaddingPreset];
  const finalSubtitleAlign = subtitleAlign || headerAlign;

  return (
    <div 
      className={cn(
        "w-full bg-white rounded-[32px] shadow-[0px_20px_50px_rgba(0,0,0,0.18)] overflow-hidden border border-slate-50 flex flex-col transition-all",
        WIDTH_MAP[widthPreset],
        className
      )}
      style={maxWidthOverride ? { maxWidth: maxWidthOverride } : undefined}
    >
      {/* 1. Header Region */}
      {(title || subtitle || headerChip) && (
        <header className={cn(
          "relative flex flex-col transition-all",
          SURFACE_MAP[headerSurface],
          paddingClass,
          showHeaderDivider && "border-b border-slate-50"
        )}>
          <div className="flex justify-between items-start w-full gap-4">
            <div className={cn(
              "flex flex-col gap-2.5 flex-1",
              headerAlign === 'center' && "items-center text-center w-full"
            )}>
              {headerChip && <div className="mb-0.5">{headerChip}</div>}
              <div className={cn("flex items-center gap-3 w-full", headerAlign === 'center' && "justify-center")}>
                <div className="flex items-center gap-3">
                   <h2 className="text-[24px] font-black text-slate-900 tracking-tight leading-none">
                     {title}
                   </h2>
                   {headerAccessory && <div className="shrink-0">{headerAccessory}</div>}
                </div>
                {headerAction && <div className="ml-auto">{headerAction}</div>}
              </div>
            </div>

            {showClose && closeButtonStyle !== 'none' && (
              <button 
                onClick={onClose}
                className={cn(
                  "shrink-0 transition-all flex items-center justify-center",
                  closeButtonStyle === 'ghost' && "p-2 -mr-2 text-slate-400 hover:text-slate-600 hover:bg-slate-50 rounded-full",
                  closeButtonStyle === 'subtle-circle' && "size-10 rounded-full bg-slate-50 text-slate-500 hover:bg-slate-100 border border-slate-100"
                )}
              >
                {closeIcon === 'custom' ? customCloseIcon : CloseIconComponent && <CloseIconComponent size={20} />}
              </button>
            )}
          </div>

          {subtitle && (
            <p 
              className={cn(
                "text-[14px] font-medium leading-[1.6] mt-3 tracking-normal",
                subtitleTone === 'neutral' && "text-slate-500",
                subtitleTone === 'dark' && "text-slate-700",
                subtitleTone === 'indigo' && "text-[#5A5FF2]",
                subtitleClamp !== 'none' && `line-clamp-${subtitleClamp}`,
                finalSubtitleAlign === 'center' && "mx-auto text-center"
              )}
              style={{ maxWidth: subtitleMaxWidth }}
            >
              {subtitle}
            </p>
          )}
        </header>
      )}

      {/* 2. Body Region */}
      <main className={cn(
        "flex-1 flex flex-col transition-all",
        SURFACE_MAP[bodySurface],
        paddingClass,
        (title || subtitle || headerChip) && "pt-0", 
        showBodyDivider && "border-t border-slate-50"
      )}>
        {children}
      </main>

      {/* 3. Footer / Footer Tray Region */}
      {(footerAction || footerAccessory || footerNote) && (
        <footer className={cn(
          "transition-all",
          showFooterTray ? "bg-slate-50/80" : "mt-4",
          SURFACE_MAP[footerSurface],
          paddingClass,
          showFooterDivider && !showFooterTray && "border-t border-slate-50",
          footerTrayInset === 'soft' && "p-4 mx-4 mb-4 rounded-[24px] border border-slate-100 shadow-sm",
          footerTrayInset === 'card-aligned' && "p-6 mx-8 mb-8 rounded-[24px] border border-slate-100 shadow-sm"
        )}>
          {/* If there's a tray, we might need a top divider specifically for it */}
          {showFooterTray && (
             <div className="absolute top-0 left-0 right-0 border-t border-slate-100 opacity-50" />
          )}

          <div className="flex items-center justify-between gap-8 relative z-10">
            <div className="flex flex-col gap-2 min-w-0">
              {footerNote && (
                <InfoInlineNotice
                  text={footerNote}
                  maxWidth={footerNoteMaxWidth}
                  clamp={footerNoteClamp === 'none' ? undefined : footerNoteClamp as number}
                  singleLineWhenPossible={footerNoteSingleLineWhenPossible}
                  tone={footerNoteTone}
                  icon={<Info size={14} />}
                />
              )}
              {footerAccessory}
            </div>
            
            {footerAction && (
              <div className="shrink-0">
                {footerAction}
              </div>
            )}
          </div>
        </footer>
      )}
    </div>
  );
};
