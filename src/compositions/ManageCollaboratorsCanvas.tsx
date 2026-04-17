import React from 'react';
import { ModalTemplate } from '../templates/ModalTemplate';
import { CollaboratorCard } from '../components/CollaboratorCard';
import { Typo } from '../components/Typography';
import { Search, X } from 'lucide-react';

/**
 * 🏛️ CANVAS: Manage Collaborators
 * This is the CANONICAL COMPOSITION for the Manage Collaborators workflow.
 * AI assistants: Use this as the 1:1 reference for assembly.
 */

const MOCK_COLLABORATORS = [
  {
    id: '1',
    name: 'Sarah Johnson',
    role: 'TITLE COORDINATOR',
    accessLevel: 'All Client Transactions',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
    isFullAccess: true,
  },
  {
    id: '2',
    name: 'Robert Martinez',
    role: 'LENDER',
    accessLevel: 'All Client Transactions',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
    isFullAccess: true,
  }
];

export const ManageCollaboratorsCanvas: React.FC = () => {
  return (
    <ModalTemplate
      title="Manage"
      badgeCount={2}
      subtitle="Managing collaborators for"
      subtitleHighlight="123 Elm St, Austin, 2nd street"
      headerActions={
        <button className="px-4 py-1.5 border border-slate-200 rounded-lg text-[11px] font-bold tracking-widest text-[#FF4D4D] hover:bg-red-50 transition-colors uppercase">
          Revoke All
        </button>
      }
      footerNote="Client-level access syncs across all transaction contexts automatically."
      footerAction={
        <button className="px-8 py-2.5 bg-[#171717] text-white rounded-xl text-[13px] font-bold hover:bg-black/90 transition-all shadow-md active:scale-95">
          Done
        </button>
      }
    >
      <div className="space-y-6">
        {/* Search Header */}
        <div className="relative group">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
            <Search className="w-4 h-4 text-slate-400 group-focus-within:text-indigo-500 transition-colors" />
          </div>
          <input 
            type="text"
            placeholder="Search team members to add..."
            className="w-full h-12 pl-11 pr-4 bg-white border border-slate-200 rounded-2xl text-[14px] focus:outline-none focus:ring-2 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all placeholder:text-slate-400"
          />
        </div>

        {/* Collaborator List */}
        <div className="space-y-4">
          {MOCK_COLLABORATORS.map((collab) => (
            <CollaboratorCard
              key={collab.id}
              {...collab}
              onRemove={() => console.log('Remove')}
              onContextClick={() => console.log('Context')}
            />
          ))}
        </div>
      </div>
    </ModalTemplate>
  );
};
