import React from 'react';
import { Search, Info } from 'lucide-react';
import { PopupRoot } from '../components/PopupRoot';
import { PopupBody, PopupSection, PopupSearchRow } from '../components/PopupLayout';
import { CTAGroup } from '../components/CTAGroup';
import { ActionChip } from '../components/ActionChip';
import { CollaboratorCard } from '../components/CollaboratorCard';
import { manageCollaboratorsRecipe } from '../PopupRecipes';

/**
 * 🏛️ Radius Canonical Composition: Manage Collaborators
 * This composition is visually locked to Radius reference benchmarks.
 * Do not alter structural regions.
 */
export const ManageCollaboratorsCanvas: React.FC = () => {
  return (
    <div className="p-12 bg-slate-100 min-h-screen flex items-center justify-center font-sans">
      <PopupRoot
        {...manageCollaboratorsRecipe}
        title="Manage"
        subtitle="You have assigned 4 agents to this client rule."
        headerAccessory={
          <div className="px-2.5 py-1 bg-slate-900 text-white text-[10px] font-black rounded-full leading-none">
            4
          </div>
        }
        headerAction={
          <button className="text-[10px] font-black uppercase tracking-widest text-red-500 hover:text-red-600 transition-colors">
            Revoke All
          </button>
        }
        footerAction={<CTAGroup primaryLabel="Close" showSecondary={false} primaryTone="neutral" />}
        footerNote="Changes are applied instantly to the rule set."
        footerNoteTone="neutral"
      >
        <PopupBody layout="canonical-manage" gap={24}>
          <div className="flex flex-col gap-4">
             <PopupSearchRow icon={<Search size={18} />} placeholder="Search names or emails..." />
             <div className="border-b border-slate-50 w-full" />
          </div>

          <PopupSection 
            title="Assigned Agents"
            density="canonical"
            body={
              <div className="flex flex-col gap-2.5">
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
                <CollaboratorCard 
                  name="Elena Petrova" 
                  email="elena@radius.com" 
                  role="Agent" 
                  status="Active" 
                  showActions 
                />
              </div>
            }
          />
        </PopupBody>
      </PopupRoot>
    </div>
  );
};
