import React from 'react';
import { Search, Plus, Mail, Users, ArrowRight, Settings, Info } from 'lucide-react';
import { PopupRoot } from '../components/PopupRoot';
import { PopupBody, PopupSection } from '../components/PopupLayout';
import { CTAGroup } from '../components/CTAGroup';
import { ActionChip } from '../components/ActionChip';
import { CollaboratorCard } from '../components/CollaboratorCard';

export const ManageCollaboratorsCanvas: React.FC = () => {
  return (
    <div className="p-12 bg-slate-100 min-h-screen flex items-center justify-center">
      <PopupRoot
        title="Manage Collaborators"
        subtitle="You have 4 active agents assigned to this client rule."
        widthPreset="lg"
        headerAccessory={
          <ActionChip 
            variant="icon-text" 
            label="Internal Network" 
            leadingIcon={<Users size={12} />} 
            size="sm" 
            appearance="subtle"
          />
        }
        footerAction={<CTAGroup primaryLabel="Invite New" secondaryLabel="Cancel" />}
        footerNote="Changes are applied instantly across the team."
        showFooterTray
        headerSurface="elevated"
        showHeaderDivider
      >
        <PopupBody layout="search-list" gap={24} className="pt-6">
          {/* Search Row */}
          <div className="w-full flex items-center gap-3 p-4 bg-slate-50 border border-slate-100 rounded-[24px] focus-within:bg-white focus-within:border-[#5A5FF2] focus-within:shadow-sm transition-all">
            <Search size={18} className="text-slate-400" />
            <input 
              placeholder="Search by name or email..." 
              className="bg-transparent border-none outline-none text-[14px] font-medium w-full placeholder:text-slate-400" 
            />
          </div>

          <PopupSection 
            title="Active Agents"
            accessory={<span className="text-[10px] font-bold text-[#5A5FF2] cursor-pointer hover:underline">View All</span>}
            body={
              <div className="flex flex-col gap-2">
                <CollaboratorCard 
                  name="Marcus Finn" 
                  email="marcus@radius.com" 
                  role="Agent" 
                  status="Active" 
                  showActions 
                />
                <CollaboratorCard 
                  name="Sarah Chen" 
                  email="sarah@radius.com" 
                  role="Manager" 
                  status="Active" 
                  showActions 
                />
                <CollaboratorCard 
                  name="Alex Rivera" 
                  email="alex@radius.com" 
                  role="Agent" 
                  status="Away" 
                  showActions 
                />
              </div>
            }
          />

          <PopupSection 
            title="Pending Invites"
            body={
              <div className="flex flex-col gap-2 opacity-60">
                <div className="flex items-center justify-between p-4 bg-white border border-slate-100 rounded-[20px]">
                  <div className="flex items-center gap-3">
                    <div className="size-8 bg-slate-100 rounded-full flex items-center justify-center text-slate-400">
                      <Mail size={14} />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[14px] font-bold text-slate-900">elena@company.com</span>
                      <span className="text-[12px] text-slate-400 font-medium">Invited 2h ago</span>
                    </div>
                  </div>
                  <ActionChip variant="text-only" label="Resend" size="sm" />
                </div>
              </div>
            }
          />
        </PopupBody>
      </PopupRoot>
    </div>
  );
};
