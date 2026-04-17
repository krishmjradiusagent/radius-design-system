import * as React from "react"

/**
 * 🏛️ Radius Design System: Typography Hierarchy
 * 
 * Standardized components to enforce the Radius "Heritage" weights 
 * and tracking rules across all projects.
 */

export const Typo = {
  H1: ({ children, className = "" }: any) => (
    <h1 className={`text-2xl font-black tracking-tight text-[#171717] ${className}`}>{children}</h1>
  ),
  H2: ({ children, className = "" }: any) => (
    <h2 className={`text-[17px] font-bold text-[#171717] ${className}`}>{children}</h2>
  ),
  Label: ({ children, className = "" }: any) => (
    <span className={`text-[10px] font-black uppercase tracking-widest text-[#737373] ${className}`}>{children}</span>
  ),
  Caption: ({ children, className = "" }: any) => (
    <p className={`text-[11px] font-medium text-slate-500 ${className}`}>{children}</p>
  ),
  Body: ({ children, className = "" }: any) => (
    <p className={`text-sm font-medium text-slate-900 ${className}`}>{children}</p>
  ),
};
