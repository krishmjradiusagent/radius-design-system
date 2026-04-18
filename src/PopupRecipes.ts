import { PopupRootProps } from './components/PopupRoot';

/**
 * 🏛️ Radius Canonical Recipes
 * Strict configuration objects for flagship high-parity popups.
 * These override generic defaults to ensure 1:1 visual parity.
 */

export const manageCollaboratorsRecipe: Partial<PopupRootProps> = {
  widthPreset: 'lg',
  headerAlign: 'start',
  showClose: false, // Manage Collaborators uses the "Close" button in the footer or internal trigger
  headerSurface: 'transparent',
  bodySurface: 'transparent',
  footerSurface: 'subtle', // Full-width gray bar
  showFooterTray: true,
  footerTrayInset: 'none', // Critical: no inset for canonical manage
  showHeaderDivider: false,
  showBodyDivider: false,
  showFooterDivider: true, // Line above footer
  regionPaddingPreset: 'default', // Standard 32px
};

export const destructiveConfirmationRecipe: Partial<PopupRootProps> = {
  widthPreset: 'xl',
  headerAlign: 'start',
  showClose: true,
  closeButtonStyle: 'ghost',
  headerSurface: 'transparent',
  bodySurface: 'transparent',
  footerSurface: 'transparent',
  showFooterTray: true,
  footerTrayInset: 'soft', // Distinct card-like footer
  showHeaderDivider: false,
  showBodyDivider: false,
  showFooterDivider: false,
};

export const searchListRecipe: Partial<PopupRootProps> = {
  widthPreset: 'lg',
  headerAlign: 'start',
  showClose: true,
  headerSurface: 'elevated',
  showHeaderDivider: true,
  showFooterTray: true,
  footerTrayInset: 'soft',
};
