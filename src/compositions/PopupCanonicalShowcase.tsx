import React from 'react';
import { ManageCollaboratorsCanvas } from './ManageCollaboratorsCanvas';
import { DestructiveConfirmationCanvas } from './DestructiveConfirmationCanvas';

/**
 * 🏛️ Radius Blueprint: Popup Canonical Showcase
 * Displays ONLY the source-of-truth compositions.
 * No generic playground, no flexible demo.
 */
export const PopupCanonicalShowcase: React.FC = () => {
  return (
    <div className="bg-slate-200 min-h-screen py-16 flex flex-col items-center gap-32">
      
      <div className="flex flex-col items-center gap-8 w-full">
        <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Canonical: Manage Collaborators (1:1 Parity)</label>
        <div className="scale-90 origin-top">
          <ManageCollaboratorsCanvas />
        </div>
      </div>

      <div className="flex flex-col items-center gap-8 w-full">
        <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Canonical: Destructive Confirmation (1:1 Parity)</label>
        <div className="scale-90 origin-top">
          <DestructiveConfirmationCanvas />
        </div>
      </div>

    </div>
  );
};
