import React, { useState } from 'react';
import { 
  AlertTriangle, 
  Trash2, 
  Info, 
  UserPlus, 
  Users, 
  ShieldAlert,
  ArrowRight
} from 'lucide-react';
import { ModalTemplate } from '../templates/ModalTemplate';
import { ActionChip } from '../components/ActionChip';
import { ContextBanner } from '../components/ContextBanner';
import { ChoiceCard, ChoiceCardGroup } from '../components/ChoiceCard';
import { InfoInlineNotice } from '../components/InfoInlineNotice';
import { Button } from '../components/Button'; // Assuming we have a standard Button in components

/**
 * 🏛️ Radius Composition: DestructiveConfirmationCanvas
 * Showcase: Delete Prospecting Rule workflow
 */
export const DestructiveConfirmationCanvas: React.FC = () => {
  const [scope, setScope] = useState<'me' | 'everyone'>('me');

  const footerAction = (
    <div className="flex items-center gap-4">
      <Button variant="ghost" className="font-bold text-slate-500">
        Cancel
      </Button>
      <Button 
        variant="destructive" 
        className="px-6 font-black bg-red-600 hover:bg-red-700 text-white rounded-[16px] h-11"
      >
        {scope === 'everyone' ? 'Delete Rule for Everyone' : 'Delete Rule'}
      </Button>
    </div>
  );

  return (
    <div className="p-12 bg-slate-900 min-h-screen flex items-center justify-center">
      <ModalTemplate
        title="Delete Rule"
        widthPreset="wide"
        headerAction={
          <ActionChip 
            variant="icon-text" 
            tone="destructive" 
            label="Destructive" 
            leadingIcon={<ShieldAlert size={14} />}
            appearance="subtle"
            size="md"
          />
        }
        subtitle="You are about to delete the 'High Intensity' outreach rule."
        footerAction={footerAction}
      >
        {/* A. Contextual Warning Banner */}
        <ContextBanner
          tone="destructive"
          leadingIcon={AlertTriangle}
          title="This action is irreversible"
          description="All active prospects currently assigned to this rule will be paused immediately. Metadata associated with these assignments will be purged."
          density="comfortable"
        />

        {/* B. Choice Cards for Scope */}
        <div className="space-y-4">
          <h4 className="text-[11px] font-black uppercase tracking-widest text-slate-400 px-1">
            Deletion Scope
          </h4>
          <ChoiceCardGroup>
            <ChoiceCard
              title="Delete for me only"
              description="Keep the rule active for the rest of the Team Lead accounts."
              leadingIcon={Trash2}
              selected={scope === 'me'}
              onClick={() => setScope('me')}
              selectionStyle="border"
            />
            <ChoiceCard
              title="Delete for everyone"
              description="Permanent removal across all accounts and linked transactions."
              leadingIcon={Users}
              selected={scope === 'everyone'}
              onClick={() => setScope('everyone')}
              tone="destructive"
              selectionStyle="glow"
            />
          </ChoiceCardGroup>
        </div>

        {/* C. Footer Info Row (Aligned with CTA row inside Template) */}
        <div className="pt-2">
           <InfoInlineNotice
             icon={Info}
             text={scope === 'everyone' 
               ? "Warning: This will alert 14 other team members." 
               : "This will only affect your individual workspace view."
             }
             tone={scope === 'everyone' ? 'destructive' : 'neutral'}
             maxWidth="400px"
           />
        </div>
      </ModalTemplate>
    </div>
  );
};
