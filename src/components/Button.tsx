import * as React from "react"
import { cn } from "../utils/cn"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'destructive' | 'outline'
  size?: 'sm' | 'md' | 'lg'
}

/**
 * 🏛️ Radius Primitive: Button
 * Enforces 16px rounding and Radius brand tones.
 */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center rounded-[16px] font-bold transition-all active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none"
    
    const variants = {
      primary: "bg-[#5A5FF2] text-white shadow-[0_4px_12px_rgba(90,95,242,0.2)] hover:bg-[#4A4FD2]",
      secondary: "bg-slate-100 text-slate-900 hover:bg-slate-200",
      destructive: "bg-red-600 text-white shadow-[0_4px_12px_rgba(220,38,38,0.2)] hover:bg-red-700",
      ghost: "text-slate-500 hover:bg-slate-50",
      outline: "border border-slate-200 text-slate-900 hover:bg-slate-50",
    }

    const sizes = {
      sm: "h-9 px-4 text-xs",
      md: "h-11 px-6 text-sm",
      lg: "h-13 px-8 text-base",
    }

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"
