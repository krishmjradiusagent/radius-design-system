import React, { useState } from 'react';
import { 
  X, 
  ChevronRight, 
  Plus, 
  Info, 
  ShieldAlert, 
  Search, 
  Settings, 
  Users, 
  CheckCircle2, 
  AlertTriangle,
  Mail,
  MoreVertical,
  ArrowRight
} from 'lucide-react';
import { PopupRoot } from '../components/PopupRoot';
import { PopupBody, PopupSection, PopupHero } from '../components/PopupLayout';
import { CTAGroup } from '../components/CTAGroup';
import { ActionChip } from '../components/ActionChip';
import { ContextBanner } from '../components/ContextBanner';
import { ChoiceCard, ChoiceCardGroup } from '../components/ChoiceCard';
import { CollaboratorCard } from '../components/CollaboratorCard';

/**
 * 🏛️ Radius Blueprint: Popup System Showcase (V2 Matrix)
 * 
 * Demonstrates full parity, surface control, and footer tray logic.
 * The absolute source of truth for Popup regressions.
 */
export const PopupSystemShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState('surfaces');

  return (
    <div className="p-16 bg-slate-100 min-h-screen space-y-24">
      
      {/* Tab Navigation */}
      <div className="flex gap-4 justify-center fixed top-8 left-0 right-0 z-50">
        {['surfaces', 'layouts', 'widths', 'close-styles', 'canonic-manage'].map(tab => (
          <button 
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.15em] transition-all ${
              activeTab === tab ? 'bg-[#5A5FF2] text-white shadow-lg' : 'bg-white/80 backdrop-blur-md text-slate-500 hover:bg-white border border-slate-100 shadow-sm'
            }`}
          >
            {tab.replace('-', ' ')}
          </button>
        ))}
      </div>

      <div className="flex flex-col items-center gap-24 pt-12">
        
        {/* SECTION: SURFACE & REGION CONTROL */}
        {activeTab === 'surfaces' && (
          <>
             <div className="flex flex-col items-center gap-6">
                <h2 className="text-sm font-black uppercase tracking-[0.2em] text-slate-400">Section Dividers & Elevated Header</h2>
                <PopupRoot
                  title="Region Partitions"
                  subtitle="Testing header surface elevation with body and footer dividers."
                  headerSurface="elevated"
                  showHeaderDivider
                  showBodyDivider
                  showFooterDivider
                  footerNote="Divider lines help partition complex density."
                  footerAction={<CTAGroup primaryLabel="Apply Changes" />}
                >
                  <PopupBody layout="form">
                    <div className="py-2 space-y-4 w-full">
                       <p className="text-sm text-slate-500 font-medium leading-relaxed">The body starts below the header divider. The footer follows the body divider.</p>
                       <div className="h-32 bg-slate-50 rounded-[20px] border border-dashed border-slate-200 flex items-center justify-center text-slate-300 text-xs font-bold uppercase tracking-widest">Body Area</div>
                    </div>
                  </PopupBody>
                </PopupRoot>
             </div>

             <div className="flex flex-col items-center gap-6">
                <h2 className="text-sm font-black uppercase tracking-[0.2em] text-slate-400">Footer Tray (Full Width)</h2>
                <PopupRoot
                  title="Full Width Footer Tray"
                  subtitle="A common pattern for persistent actions or metadata."
                  showFooterTray
                  footerSurface="subtle"
                  footerNote="The tray spans the full shell width."
                  footerAction={<CTAGroup primaryLabel="Continue" />}
                >
                  <PopupBody>
                    <p className="text-sm text-slate-500 font-medium">Standard body padding remains 32px, but the tray can have a distinct background.</p>
                  </PopupBody>
                </PopupRoot>
             </div>

             <div className="flex flex-col items-center gap-6">
                <h2 className="text-sm font-black uppercase tracking-[0.2em] text-slate-400">Footer Tray (Soft Inset)</h2>
                <PopupRoot
                  title="Soft Inset Tray"
                  subtitle="Used for high-fidelity floating action bars."
                  showFooterTray
                  footerTrayInset="soft"
                  footerNote="Inset creates a card-like feeling for footer actions."
                  footerAction={<CTAGroup primaryLabel="Save Plan" />}
                >
                  <PopupBody>
                    <div className="h-20 bg-slate-50 rounded-[20px] border border-dashed border-slate-200" />
                  </PopupBody>
                </PopupRoot>
             </div>
          </>
        )}

        {/* SECTION: BODY LAYOUTS */}
        {activeTab === 'layouts' && (
          <>
             <div className="flex flex-col items-center gap-6">
                <h2 className="text-sm font-black uppercase tracking-[0.2em] text-slate-400">Hero Banner Layout</h2>
                <PopupRoot
                  title=""
                  showClose
                  closeButtonStyle="subtle-circle"
                  widthPreset="md"
                  footerAction={<CTAGroup primaryLabel="Get Started" layout="stacked" showSecondary={false} />}
                >
                  <PopupBody layout="hero-banner">
                    <PopupHero 
                      image={
                        <div className="size-24 bg-indigo-50 rounded-[32px] flex items-center justify-center text-[#5A5FF2] shadow-sm">
                          <CheckCircle2 size={40} />
                        </div>
                      }
                      title="Onboarding Complete"
                      description="You've successfully connected your team's Radius account. Start assigning rules now."
                    />
                  </PopupBody>
                </PopupRoot>
             </div>

             <div className="flex flex-col items-center gap-6">
                <h2 className="text-sm font-black uppercase tracking-[0.2em] text-slate-400">Search List Layout</h2>
                <PopupRoot
                  title="Search & List"
                  subtitle="Used for selection and management."
                  widthPreset="lg"
                  footerAction={<CTAGroup primaryLabel="Select Members" />}
                >
                  <PopupBody layout="search-list" gap={20}>
                    <div className="w-full relative">
                      <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-[24px] text-sm font-medium" placeholder="Search..." />
                    </div>
                    <div className="space-y-2 w-full">
                       {[1, 2, 3].map(i => (
                         <div key={i} className="flex items-center gap-4 p-4 border border-slate-100 rounded-[20px] hover:bg-slate-50 transition-colors">
                            <div className="size-10 bg-slate-200 rounded-full" />
                            <div className="flex flex-col flex-1">
                               <span className="text-sm font-bold">Candidate {i}</span>
                               <span className="text-xs text-slate-400">candidate{i}@radius.ai</span>
                            </div>
                            <Plus size={16} className="text-[#5A5FF2]" />
                         </div>
                       ))}
                    </div>
                  </PopupBody>
                </PopupRoot>
             </div>
          </>
        )}

        {/* SECTION: CANONIC MANAGE (HIGH PARITY) */}
        {activeTab === 'canonic-manage' && (
          <div className="flex flex-col items-center gap-6">
             <h2 className="text-sm font-black uppercase tracking-[0.2em] text-slate-400">Manage Collaborators (Canonical Parity)</h2>
             <PopupRoot
               title="Manage Collaborators"
               subtitle="Access provided to 4 members"
               widthPreset="lg"
               headerChip={<ActionChip variant="icon-text" label="Rule Active" tone="info" leadingIcon={<ShieldAlert size={12} />} />}
               headerSurface="elevated"
               showHeaderDivider
               showFooterTray
               footerTrayInset="soft"
               footerNote="Changes applied instantly."
               footerAction={<CTAGroup primaryLabel="Invite" secondaryLabel="Cancel" />}
             >
               <PopupBody layout="search-list" gap={24} className="pt-6">
                  <div className="w-full flex items-center gap-3 p-4 bg-slate-50 border border-slate-100 rounded-[24px]">
                    <Search size={18} className="text-slate-400" />
                    <input className="bg-transparent border-none outline-none text-sm font-medium w-full" placeholder="Search Agents..." />
                  </div>
                  <PopupSection 
                    title="Collaborators"
                    body={
                      <div className="flex flex-col gap-2">
                        <CollaboratorCard name="Marcus Finn" email="marcus@radius.com" role="Admin" status="Active" showActions />
                        <CollaboratorCard name="Sarah Chen" email="sarah@radius.com" role="Agent" status="Active" showActions />
                      </div>
                    }
                  />
               </PopupBody>
             </PopupRoot>
          </div>
        )}

        {/* SECTION: WIDTHS MATRIX */}
        {activeTab === 'widths' && (
           <div className="flex flex-wrap justify-center gap-12 w-full max-w-[1200px]">
              {['sm', 'md', 'lg', 'xl', 'editorial'].map(w => (
                <div key={w} className="flex flex-col items-center gap-4 shrink-0">
                   <h3 className="text-[10px] font-black uppercase tracking-widest text-[#5A5FF2]">{w}</h3>
                   <div style={{ width: w === 'editorial' ? '300px' : '200px' }} className="h-40 bg-white border border-slate-200 rounded-[32px] shadow-sm flex items-center justify-center font-bold text-slate-200">
                      {w.toUpperCase()}
                   </div>
                </div>
              ))}
           </div>
        )}

        {/* SECTION: CLOSE STYLE MATRIX */}
        {activeTab === 'close-styles' && (
           <div className="flex gap-12">
              <div className="flex flex-col items-center gap-4">
                 <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-400">Ghost (Default)</h3>
                 <PopupRoot title="Ghost Close" showClose closeButtonStyle="ghost" widthPreset="sm" children={<div className="h-20" />} />
              </div>
              <div className="flex flex-col items-center gap-4">
                 <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-400">Subtle Circle</h3>
                 <PopupRoot title="Circle Close" showClose closeButtonStyle="subtle-circle" widthPreset="sm" children={<div className="h-20" />} />
              </div>
              <div className="flex flex-col items-center gap-4">
                 <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-400">Chevron Variant</h3>
                 <PopupRoot title="Chevron" showClose closeIcon="chevron" widthPreset="sm" children={<div className="h-20" />} />
              </div>
           </div>
        )}

      </div>
    </div>
  );
};
