import React from 'react';
import { X, Plus, Minus, ChevronLeft, ChevronRight, Info, LucideIcon } from 'lucide-react';
import { cn } from '../utils/cn';
import { ActionChip } from './ActionChip';
import { InfoInlineNotice } from './InfoInlineNotice';

export type PopupWidth = 'sm' | 'md' | 'lg' | 'xl';
export type PopupHeaderAlign = 'start' | 'center';
export type CloseIconVariant = 'x' | 'plus' | 'minus' | 'chevron' | 'custom';

interface PopupRootProps {
  // 📐 Layout & Dimensions
  widthPreset?: PopupWidth;
  headerAlign?: PopupHeaderAlign;
  maxWidthOverride?: string;
  
  // 🏷️ Header Control
  title: string;
  subtitle?: string;
  subtitleMaxWidth?: string;
  subtitleClamp?: 1 | 2 | 3 | 'none';
  showClose?: boolean;
  closeIcon?: CloseIconVariant;
  customCloseIcon?: React.ReactNode;
  onClose?: () => void;
  
  // 🧩 Header Accessories
  headerChip?: React.ReactNode; // Slot for ActionChip
  headerAccessory?: React.ReactNode; // e.g. "Manage" button
  
  // 📦 Body Slot
  children: React.ReactNode;
  
  // ⚓ Footer Slot
  footerAction?: React.ReactNode; // Slot for CTAGroup
  footerAccessory?: React.ReactNode; // Slot for secondary info/links
  footerNote?: string;
  footerNoteMaxWidth?: string;
  footerNoteClamp?: 1 | 2 | 3 | 'none';
  
  // 🎭 Visual Styles
  backdrop?: 'light' | 'dim' | 'strong';
  className?: string;
}

const WIDTH_MAP: Record<PopupWidth, string> = {
  sm: 'max-w-[400px]',
  md: 'max-w-[480px]',
  lg: 'max-w-[560px]',
  xl: 'max-w-[640px]',
};

const CLOSE_ICONS: Record<CloseIconVariant, LucideIcon | null> = {
  x: X,
  plus: Plus,
  minus: Minus,
  chevron: ChevronRight,
  custom: null,
};

/**
 * 🏛️ Radius Core: PopupRoot
 * 
 * The master orchestrator for the Radius Popup System.
 * Bevaves like a Figma component instance with fixed structural DNA.
 */
export const PopupRoot: React.FC<PopupRootProps> = ({
  widthPreset = 'lg',
  headerAlign = 'start',
  title,
  subtitle,
  subtitleMaxWidth = '400px',
  subtitleClamp = 'none',
  showClose = true,
  closeIcon = 'x',
  customCloseIcon,
  onClose,
  headerChip,
  headerAccessory,
  children,
  footerAction,
  footerAccessory,
  footerNote,
  footerNoteMaxWidth = '320px',
  footerNoteClamp = 1,
  className,
}) => {
  const CloseIconComponent = CLOSE_ICONS[closeIcon];

  return (
    <div className={cn(
      "w-full bg-white rounded-[32px] shadow-[0px_20px_50px_rgba(0,0,0,0.2)] overflow-hidden border border-slate-50",
      WIDTH_MAP[widthPreset],
      className
    )}>
      <div className="p-8 flex flex-col">
        
        {/* 1. Header Row */}
        <header className={cn(
          "flex flex-col gap-2 mb-8",
          headerAlign === 'center' ? 'items-center text-center' : 'items-start'
        )}>
          <div className="flex justify-between items-start w-full">
            <div className={cn(
              "flex flex-col gap-2",
              headerAlign === 'center' && "items-center"
            )}>
              {headerChip && <div className="mb-0.5">{headerChip}</div>}
              <div className="flex items-center gap-3">
                <h2 className="text-2xl font-black text-slate-900 tracking-tight leading-none">
                  {title}
                </h2>
                {headerAccessory && <div>{headerAccessory}</div>}
              </div>
            </div>

            {showClose && (
              <button 
                onClick={onClose}
                className="p-2 -mr-2 text-slate-400 hover:text-slate-600 transition-colors hover:bg-slate-50 rounded-full"
              >
                {closeIcon === 'custom' ? customCloseIcon : CloseIconComponent && <CloseIconComponent size={20} />}
              </button>
            )}
          </div>

          {subtitle && (
            <p 
              className={cn(
                "text-[14px] text-slate-500 font-medium leading-relaxed",
                subtitleClamp !== 'none' && `line-clamp-${subtitleClamp}`
              )}
              style={{ maxWidth: subtitleMaxWidth }}
            >
              {subtitle}
            </p>
          )}
        </header>

        {/* 2. Body Slot (Auto-Layout Container) */}
        <main className="flex-1 flex flex-col">
          {children}
        </main>

        {/* 3. Footer Row */}
        {(footerAction || footerAccessory || footerNote) && (
          <footer className="mt-10 pt-6 border-t border-slate-50 flex items-center justify-between gap-6">
            <div className="flex flex-col gap-2">
              {footerNote && (
                <InfoInlineNotice
                  text={footerNote}
                  maxWidth={footerNoteMaxWidth}
                  clamp={footerNoteClamp === 'none' ? undefined : footerNoteClamp}
                  icon={Info}
                />
              )}
              {footerAccessory}
            </div>
            
            {footerAction && (
              <div className="shrink-0">
                {footerAction}
              </div>
            )}
          </footer>
        )}
      </div>
    </div>
  );
};
