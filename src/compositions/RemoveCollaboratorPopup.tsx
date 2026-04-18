import React from 'react';
import { ShieldAlert, AlertTriangle, UserMinus } from 'lucide-react';
import { PopupRoot } from '../components/PopupRoot';
import { PopupBody } from '../components/PopupLayout';
import { CTAGroup } from '../components/CTAGroup';
import { ActionChip } from '../components/ActionChip';
import { ContextBanner } from '../components/ContextBanner';
import { InfoInlineNotice } from '../components/InfoInlineNotice';
import { destructiveConfirmationRecipe } from '../PopupRecipes';

interface RemoveCollaboratorPopupProps {
  collaboratorName: string;
  clientName: string;
  onConfirm?: () => void;
  onCancel?: () => void;
}

/**
 * 🏛️ Radius Canonical Composition: Remove Collaborator
 * Specific instance of the Destructive Confirmation pattern.
 */
export const RemoveCollaboratorPopup: React.FC<RemoveCollaboratorPopupProps> = ({
  collaboratorName = "Sarah Chen",
  clientName = "Global SaaS",
  onConfirm,
  onCancel
}) => {
  return (
    <PopupRoot
      {...destructiveConfirmationRecipe}
      title={`Remove ${collaboratorName}?`}
      subtitle={`Revoking access will remove this member from the '${clientName}' collaborator network.`}
      headerChip={
        <ActionChip 
          variant="icon-text" 
          label="Revoke Access" 
          tone="destructive" 
          leadingIcon={<ShieldAlert size={12} />} 
        />
      }
      footerAction={
        <CTAGroup 
          primaryLabel="Remove Collaborator" 
          primaryTone="destructive" 
          secondaryLabel="Keep Access" 
          onPrimaryClick={onConfirm}
          onSecondaryClick={onCancel}
        />
      }
      footerNote="This action can be reversed by re-inviting the member."
    >
      <PopupBody layout="confirmation" gap={24} className="py-2">
        <ContextBanner 
          tone="warning" 
          title="Active campaigns affected" 
          description={`${collaboratorName} is currently managing 4 active leads for this client. They will be unassigned.`}
          leadingIcon={<AlertTriangle size={20} />}
          density="comfortable"
        />
        
        <InfoInlineNotice 
          text={`${collaboratorName} will lose access to all transaction history and shared documents for ${clientName}.`}
          tone="neutral"
          maxWidth="100%"
          singleLineWhenPossible={false}
          icon={<UserMinus size={14} />}
        />
      </PopupBody>
    </PopupRoot>
  );
};
