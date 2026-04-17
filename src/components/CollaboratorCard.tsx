import * as React from "react"
import { X, Check, ArrowRight } from "lucide-react"

/**
 * 🏛️ Radius Design System: CollaboratorCard Organism
 * 
 * A high-fidelity card used for displaying collaborator info,
 * role badges, and access levels.
 */

interface CollaboratorCardProps {
  name: string
  avatar?: string
  role: string
  status?: string
  accessLevel?: string
  onRemove?: () => void
  onContextClick?: () => void
  className?: string
}

export function CollaboratorCard({
  name,
  avatar,
  role,
  status = "FULL ACCESS",
  accessLevel = "All Client Transactions",
  onRemove,
  onContextClick,
  className = ""
}: CollaboratorCardProps) {
  return (
    <div className={`relative p-6 rounded-[24px] border border-slate-100 bg-white shadow-sm transition-all hover:shadow-md group ${className}`}>
      {/* Remove Button */}
      {onRemove && (
        <button
          onClick={onRemove}
          className="absolute top-4 right-4 text-slate-300 hover:text-red-500 hover:bg-red-50 p-2 rounded-full transition-colors"
        >
          <X className="size-5" />
        </button>
      )}

      {/* Header Info */}
      <div className="flex items-center gap-4 mb-5">
        <div className="h-12 w-12 rounded-full border-2 border-white shadow-sm bg-slate-100 flex items-center justify-center overflow-hidden">
           {avatar ? <img src={avatar} alt={name} className="h-full w-full object-cover" /> : <span className="text-slate-500 font-bold uppercase">{name.substring(0, 2)}</span>}
        </div>
        
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <h4 className="text-[17px] font-bold text-[#171717] leading-tight">
              {name}
            </h4>
          </div>
          <div className="flex items-center gap-2">
            <span className="bg-slate-50 text-[#737373] text-[10px] font-black uppercase tracking-wider h-5 px-2 flex items-center rounded-md">
              {role}
            </span>
            <div className="flex items-center gap-1 text-[#22C55E] text-[11px] font-bold">
              <Check className="size-3 stroke-[3px]" />
              {status}
            </div>
          </div>
        </div>
      </div>

      {/* Access Level Box */}
      <div className="bg-[#F8FAFC] rounded-[16px] p-4 flex items-center justify-between group/access">
        <div className="flex flex-col gap-1">
          <span className="text-[10px] font-black text-[#737373] uppercase tracking-widest">
            ACCESS LEVEL
          </span>
          <div className="flex items-center gap-2">
             <div className="p-1.5 bg-[#5A5FF2]/10 rounded-lg shrink-0">
                <div className="size-3.5 bg-[#5A5FF2] rounded-[2px]" />
             </div>
             <span className="text-[14px] font-bold text-[#334155]">
               {accessLevel}
             </span>
          </div>
        </div>
        
        <button 
          onClick={onContextClick}
          className="text-[#5A5FF2] font-bold text-xs flex items-center gap-1.5 p-0 hover:translate-x-1 transition-transform"
        >
          Context
          <ArrowRight className="size-3.5" />
        </button>
      </div>
    </div>
  )
}
