import React, { useState } from 'react';
import { 
  AlertTriangle, 
  Trash2, 
  Info, 
  Users, 
  ShieldAlert, 
  Plus, 
  CheckCircle2, 
  Mail,
  Search,
  Settings,
  ArrowRight
} from 'lucide-react';
import { PopupRoot } from '../components/PopupRoot';
import { PopupBody, PopupSection } from '../components/PopupLayout';
import { CTAGroup } from '../components/CTAGroup';
import { ActionChip } from '../components/ActionChip';
import { ContextBanner } from '../components/ContextBanner';
import { ChoiceCard, ChoiceCardGroup } from '../components/ChoiceCard';

/**
 * 🏛️ Radius Blueprint: Popup System Showcase
 * demonstrates the "Figma Component" approach where props drive everything.
 */
export const PopupSystemShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState('destructive');

  return (
    <div className="p-16 bg-slate-100 min-h-screen space-y-20">
      
      {/* Tab Navigation for Demo */}
      <div className="flex gap-4 justify-center fixed top-8 left-0 right-0 z-50">
        {['basic', 'destructive', 'choice', 'banner-list', 'form'].map(tab => (
          <button 
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest transition-all ${
              activeTab === tab ? 'bg-[#5A5FF2] text-white shadow-lg' : 'bg-white text-slate-500 hover:bg-slate-50'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="flex justify-center pt-12">
        
        {/* 1. Destructive Confirmation (Wide) */}
        {activeTab === 'destructive' && (
          <PopupRoot
            title="Delete prospecting rule?"
            widthPreset="xl"
            headerChip={<ActionChip variant="icon-text" tone="destructive" label="System Action" leadingIcon={<ShieldAlert size={12} />} />}
            subtitle="This will permanently remove the 'High Intensity' rule across your entire team's workspace."
            subtitleClamp={2}
            footerNote="This action cannot be undone by admin."
            footerAction={<CTAGroup primaryLabel="Delete Rule" primaryTone="destructive" secondaryLabel="Keep Rule" />}
          >
            <PopupBody layout="confirmation" gap={32}>
              <ContextBanner 
                tone="destructive" 
                title="14 active prospects affected" 
                description="These prospects will be paused immediately and moved to the 'General' queue."
                leadingIcon={<AlertTriangle size={20} />}
                density="comfortable"
              />
              <PopupSection 
                title="Target Scope"
                body={
                  <ChoiceCardGroup>
                    <ChoiceCard 
                      title="Only for me" 
                      description="Rule remains active for the rest of the team." 
                      leadingIcon={<Trash2 size={16} />} 
                      selected 
                    />
                    <ChoiceCard 
                      title="For the entire team" 
                      description="Total purge from system. Requires authorization." 
                      leadingIcon={<Users size={16} />} 
                      tone="destructive"
                    />
                  </ChoiceCardGroup>
                }
              />
            </PopupBody>
          </PopupRoot>
        )}

        {/* 2. Basic Info Popup (Small) */}
        {activeTab === 'basic' && (
          <PopupRoot
            title="Account Verified"
            widthPreset="sm"
            headerAlign="center"
            showClose={false}
            footerAction={<CTAGroup primaryLabel="Continue" layout="stacked" showSecondary={false} />}
          >
            <PopupBody align="center" gap={16}>
              <div className="size-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mb-2">
                <CheckCircle2 size={32} />
              </div>
              <p className="text-sm text-slate-500 font-medium leading-relaxed">
                Your collaboration credentials have been synchronized with the Radius mainnet. You can now assign rules to external agents.
              </p>
            </PopupBody>
          </PopupRoot>
        )}

        {/* 3. Choice Popup (Medium) */}
        {activeTab === 'choice' && (
          <PopupRoot
            title="Change permissions"
            widthPreset="md"
            subtitle="Select the access level for this collaborator."
            footerNote="Changes take effect immediately."
            footerAction={<CTAGroup primaryLabel="Update Access" />}
          >
            <PopupBody layout="list">
              <ChoiceCardGroup>
                <ChoiceCard 
                  title="Full Access" 
                  description="Can invite, revoke, and delete rules." 
                  leadingIcon={<ShieldAlert size={16} />} 
                  selected 
                  selectionStyle="fill"
                />
                <ChoiceCard 
                  title="Standard" 
                  description="Can manage assignments and view rules." 
                  leadingIcon={<Settings size={16} />} 
                />
                <ChoiceCard 
                  title="View Only" 
                  description="Read-only access to transaction context." 
                  leadingIcon={<Info size={16} />} 
                />
              </ChoiceCardGroup>
            </PopupBody>
          </PopupRoot>
        )}

        {/* 4. Banner + List Popup (Large) */}
        {activeTab === 'banner-list' && (
          <PopupRoot
            title="Import Collaborators"
            widthPreset="lg"
            headerAccessory={<ActionChip variant="icon-text" label="CSV Import" leadingIcon={<Plus size={10} />} size="sm" appearance="outline" />}
            footerAction={<CTAGroup primaryLabel="Import 4 Members" />}
          >
            <PopupBody layout="banner-list" gap={24}>
              <ContextBanner 
                tone="info" 
                title="Detecting duplicates" 
                description="We found existing accounts for 2 of the emails provided in your file."
                leadingIcon={<Search size={20} />}
                density="compact"
              />
              <PopupSection 
                title="Found Members"
                body={
                  <div className="space-y-2">
                    {[1, 2, 3, 4].map(i => (
                      <div key={i} className="flex items-center justify-between p-4 bg-slate-50 border border-slate-100 rounded-[16px]">
                        <div className="flex items-center gap-3">
                           <div className="size-8 bg-slate-200 rounded-full" />
                           <div className="flex flex-col">
                              <span className="text-[14px] font-bold text-slate-900 leading-none">Collaborator {i}</span>
                              <span className="text-[12px] text-slate-500 font-medium">user{i}@radius.com</span>
                           </div>
                        </div>
                        <ActionChip variant="text-only" label="Candidate" size="sm" />
                      </div>
                    ))}
                  </div>
                }
              />
            </PopupBody>
          </PopupRoot>
        )}

        {/* 5. Form Entry Popup (Medium) */}
        {activeTab === 'form' && (
          <PopupRoot
            title="Invite via Email"
            widthPreset="md"
            subtitle="Invitations expire in 24 hours for security."
            footerAction={<CTAGroup primaryLabel="Send Invite" />}
          >
            <PopupBody layout="form" gap={20}>
              <div className="space-y-4 w-full">
                <div className="group flex flex-col gap-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 pl-1">Email Address</label>
                  <div className="flex items-center gap-3 p-4 bg-slate-50 border border-slate-100 rounded-[20px] focus-within:border-[#5A5FF2] focus-within:bg-white transition-all">
                    <Mail size={18} className="text-slate-400" />
                    <input className="bg-transparent border-none outline-none text-sm font-medium w-full" placeholder="Enter address..." />
                  </div>
                </div>
                <div className="group flex flex-col gap-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 pl-1">Note (Optional)</label>
                  <textarea className="p-4 bg-slate-50 border border-slate-100 rounded-[20px] focus-within:border-[#5A5FF2] focus-within:bg-white transition-all text-sm font-medium min-h-[100px] resize-none" placeholder="Add a personal touch..." />
                </div>
              </div>
            </PopupBody>
          </PopupRoot>
        )}

      </div>

    </div>
  );
};
