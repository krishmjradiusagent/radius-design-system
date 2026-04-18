import React from 'react';
import { AlertTriangle, Trash2, ShieldAlert } from 'lucide-react';
import { PopupRoot } from '../components/PopupRoot';
import { PopupBody } from '../components/PopupLayout';
import { CTAGroup } from '../components/CTAGroup';
import { ActionChip } from '../components/ActionChip';
import { ContextBanner } from '../components/ContextBanner';
import { ChoiceCard, ChoiceCardGroup } from '../components/ChoiceCard';
import { destructiveConfirmationRecipe } from '../PopupRecipes';

/**
 * 🏛️ Radius Canonical Composition: Destructive Confirmation
 * Locked to security-critical visual standards.
 */
export const DestructiveConfirmationCanvas: React.FC = () => {
  return (
    <div className="p-12 bg-slate-100 min-h-screen flex items-center justify-center">
      <PopupRoot
        {...destructiveConfirmationRecipe}
        title="Delete Rule?"
        subtitle="This action will permanently purge the 'High Intensity' rule from the rule-matching engine."
        headerChip={
          <ActionChip 
            variant="icon-text" 
            label="System Security" 
            tone="destructive" 
            leadingIcon={<ShieldAlert size={12} />} 
          />
        }
        footerAction={<CTAGroup primaryLabel="Permanently Delete" primaryTone="destructive" secondaryLabel="Keep Rule" />}
        footerNote="This cannot be undone by account administrators."
      >
        <PopupBody layout="confirmation" gap={32} className="py-2">
          <ContextBanner 
            tone="destructive" 
            title="14 Active rule associations" 
            description="Rule is currently used by your 'London Real Estate' and 'Global SaaS' campaigns."
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
