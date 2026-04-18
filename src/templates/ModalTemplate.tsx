import * as React from "react"
import { Info } from "lucide-react"

/**
 * 🏛️ Radius Design System: Universal Modal Template
 * 
 * A high-fidelity, accessible modal shell based on the 
 * Radius "Heritage" system (32px rounding, 8px/16px grid).
 */

interface ModalTemplateProps {
  title: string
  badgeCount?: number
  headerAction?: React.ReactNode 
  subtitle?: React.ReactNode
  footerAction?: React.ReactNode 
  footerNote?: string
  children: React.ReactNode
  widthPreset?: 'default' | 'wide' | 'editorial'
}

const WIDTH_PRESETS = {
  default: "max-w-[560px]",
  wide: "max-w-[640px]",
  editorial: "max-w-[800px]",
};

export function ModalTemplate({
  title,
  badgeCount,
  headerAction,
  subtitle,
  footerAction,
  footerNote,
  children,
  widthPreset = "default"
}: ModalTemplateProps) {
  const maxWidth = WIDTH_PRESETS[widthPreset];
  return (
    <div className={`bg-white rounded-[32px] shadow-[0px_20px_50px_rgba(0,0,0,0.2)] overflow-hidden w-full ${maxWidth}`}>
      <div className="p-8">
        {/* Header Section */}
        <div className="flex justify-between items-start mb-2">
          <div className="flex items-center gap-3">
            <h2 className="text-2xl font-black text-[#171717] tracking-tight">{title}</h2>
            {badgeCount !== undefined && (
              <span className="bg-[#5A5FF2]/10 text-[#5A5FF2] px-2.5 py-0.5 rounded-full text-xs font-black">
                {badgeCount}
              </span>
            )}
          </div>
          {headerAction}
        </div>

        {/* Subtitle Section */}
        {subtitle && (
          <div className="text-sm text-slate-500 font-medium mb-8 leading-relaxed">
            {subtitle}
          </div>
        )}

        {/* Dynamic Body Content */}
        <div className="space-y-6">
          {children}
        </div>

        {/* Unified Footer */}
        {(footerNote || footerAction) && (
          <div className="mt-10 pt-6 border-t border-slate-50 flex items-center justify-between gap-6">
            {footerNote && (
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-full border border-blue-100 bg-blue-50/50 mt-0.5 shrink-0">
                  <Info className="size-4 text-[#5A5FF2]" />
                </div>
                <p className="text-[11px] text-slate-500 leading-relaxed font-medium max-w-[280px]">
                  {footerNote}
                </p>
              </div>
            )}
            {footerAction}
          </div>
        )}
      </div>
    </div>
  )
}
