import React from 'react';
import { 
  ShieldAlert, 
  Info, 
  Trash2, 
  AlertTriangle, 
  CheckCircle2, 
  Plus, 
  ChevronRight,
  UserCheck
} from 'lucide-react';
import { ActionChip } from '../components/ActionChip';

/**
 * 🏛️ Radius Blueprint: ActionChip Showcase
 * Demonstrates the full matrix of variants, tones, and intent states.
 */
export const ActionChipShowcase: React.FC = () => {
  return (
    <div className="p-16 space-y-12 bg-white min-h-screen">
      
      {/* 1. Core Content Variants */}
      <section className="space-y-4">
        <h3 className="text-sm font-black uppercase tracking-widest text-slate-400">Layout Variants</h3>
        <div className="flex flex-wrap gap-4 items-center">
          <ActionChip variant="icon-only" leadingIcon={<Plus size={14} />} tone="neutral" />
          <ActionChip variant="text-only" label="Status: Active" tone="neutral" />
          <ActionChip variant="icon-text" label="Add Team Member" leadingIcon={<Plus size={14} />} tone="info" />
          <ActionChip variant="text-icon" label="View Profile" trailingIcon={<ChevronRight size={14} />} tone="neutral" />
          <ActionChip variant="icon-text-icon" label="Live View" leadingIcon={<Info size={14} />} trailingIcon={<CheckCircle2 size={12} />} tone="success" appearance="subtle" />
        </div>
      </section>

      {/* 2. Tone & Appearance Matrix */}
      <section className="space-y-4">
        <h3 className="text-sm font-black uppercase tracking-widest text-slate-400">Tone & Appearance</h3>
        <div className="grid grid-cols-5 gap-6">
          {/* Subtle Row */}
          <div className="flex flex-col gap-3">
             <ActionChip variant="text-only" label="Neutral" tone="neutral" appearance="subtle" />
             <ActionChip variant="text-only" label="Info" tone="info" appearance="subtle" />
             <ActionChip variant="text-only" label="Success" tone="success" appearance="subtle" />
             <ActionChip variant="text-only" label="Warning" tone="warning" appearance="subtle" />
             <ActionChip variant="text-only" label="Destructive" tone="destructive" appearance="subtle" />
          </div>
          {/* Outline Row */}
          <div className="flex flex-col gap-3">
             <ActionChip variant="text-only" label="Neutral" tone="neutral" appearance="outline" />
             <ActionChip variant="text-only" label="Info" tone="info" appearance="outline" />
             <ActionChip variant="text-only" label="Success" tone="success" appearance="outline" />
             <ActionChip variant="text-only" label="Warning" tone="warning" appearance="outline" />
             <ActionChip variant="text-only" label="Destructive" tone="destructive" appearance="outline" />
          </div>
          {/* Filled Row */}
          <div className="flex flex-col gap-3">
             <ActionChip variant="text-only" label="Neutral" tone="neutral" appearance="filled" />
             <ActionChip variant="text-only" label="Info" tone="info" appearance="filled" />
             <ActionChip variant="text-only" label="Success" tone="success" appearance="filled" />
             <ActionChip variant="text-only" label="Warning" tone="warning" appearance="filled" />
             <ActionChip variant="text-only" label="Destructive" tone="destructive" appearance="filled" />
          </div>
        </div>
      </section>

      {/* 3. Destructive Intents (Critical Requirement) */}
      <section className="space-y-4 p-8 bg-slate-50 border border-slate-100 rounded-[24px]">
        <h3 className="text-sm font-black uppercase tracking-widest text-slate-400">Destructive Intents (Loud vs Quiet)</h3>
        <div className="flex flex-wrap gap-8 items-center">
          <div className="space-y-2">
            <span className="text-[10px] font-bold text-slate-400 uppercase">Loud (Standard)</span>
            <div className="flex gap-2">
              <ActionChip variant="icon-text" label="Delete Rule" leadingIcon={<Trash2 size={12} />} tone="destructive" intent="loud" />
              <ActionChip variant="icon-only" leadingIcon={<Trash2 size={12} />} tone="destructive" intent="loud" />
            </div>
          </div>
          <div className="space-y-2">
            <span className="text-[10px] font-bold text-slate-400 uppercase">Quiet (Slate-Gray)</span>
            <div className="flex gap-2">
              <ActionChip variant="icon-text" label="Revoke Access" leadingIcon={<ShieldAlert size={12} />} tone="destructive" intent="quiet" />
              <ActionChip variant="icon-only" leadingIcon={<ShieldAlert size={12} />} tone="destructive" intent="quiet" />
            </div>
          </div>
        </div>
      </section>

      {/* 4. Sizes */}
      <section className="space-y-4">
        <h3 className="text-sm font-black uppercase tracking-widest text-slate-400">Sizes</h3>
        <div className="flex items-center gap-4">
          <ActionChip variant="icon-text" label="Medium Badge" leadingIcon={<UserCheck size={14} />} size="md" tone="info" />
          <ActionChip variant="icon-text" label="Small Badge" leadingIcon={<UserCheck size={12} />} size="sm" tone="info" />
        </div>
      </section>

    </div>
  );
};
