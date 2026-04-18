import React from 'react';
import { AlertTriangle, Trash2, ShieldAlert } from 'lucide-react';
import { PopupRoot } from '../components/PopupRoot';
import { PopupBody } from '../components/PopupLayout';
import { CTAGroup } from '../components/CTAGroup';
import { ActionChip } from '../components/ActionChip';
import { ContextBanner } from '../components/ContextBanner';
import { ChoiceCard, ChoiceCardGroup } from '../components/ChoiceCard';

export const DestructiveConfirmationCanvas: React.FC = () => {
  return (
    <div className="p-12 bg-slate-100 min-h-screen flex items-center justify-center">
      <PopupRoot
        title="Delete Prospecting Rule?"
        subtitle="This action is irreversible and will purge all associated data from the active ruleset."
        widthPreset="xl"
        headerChip={
          <ActionChip 
            variant="icon-text" 
            label="Security Alert" 
            tone="destructive" 
            leadingIcon={<ShieldAlert size={12} />} 
          />
        }
        footerAction={<CTAGroup primaryLabel="Delete Rule" primaryTone="destructive" secondaryLabel="Cancel" />}
        showFooterTray
        footerTrayInset="soft"
      >
        <PopupBody layout="confirmation" gap={32} className="py-6">
          <ContextBanner 
            tone="destructive" 
            title="14 Active rule associations" 
            description="Deleting this rule will detach it from all active campaigns. Prospects will be paused."
            leadingIcon={<AlertTriangle size={20} />}
          />
          
          <div className="flex flex-col gap-4">
             <h4 className="text-[11px] font-black uppercase tracking-widest text-slate-400 px-1">Choose deletion depth</h4>
             <ChoiceCardGroup>
                <ChoiceCard 
                  title="Soft Delete" 
                  description="Keep rule history but remove from active rules." 
                  leadingIcon={<Trash2 size={16} />} 
                  selected 
                />
                <ChoiceCard 
                  title="Permanent Purge" 
                  description="Complete removal of all history and logs." 
                  leadingIcon={<Trash2 size={16} />} 
                  tone="destructive"
                />
             </ChoiceCardGroup>
          </div>
        </PopupBody>
      </PopupRoot>
    </div>
  );
};
