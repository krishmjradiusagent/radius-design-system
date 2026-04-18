import React from 'react';
import { PopupRoot, PopupWidth } from '../components/PopupRoot';
import { PopupBody } from '../components/PopupLayout';
import { CTAGroup } from '../components/CTAGroup';

interface ModalTemplateProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  footerAction?: React.ReactNode;
  width?: PopupWidth;
  onClose?: () => void;
  showClose?: boolean;
}

/**
 * @deprecated Use PopupRoot directly for high-fidelity control.
 * Rebuilt as a compatibility wrapper for Radius heritage migration.
 */
export const ModalTemplate: React.FC<ModalTemplateProps> = ({
  title,
  subtitle,
  children,
  footerAction,
  width = 'md',
  onClose,
  showClose = true,
}) => {
  return (
    <PopupRoot
      title={title}
      subtitle={subtitle}
      widthPreset={width}
      onClose={onClose}
      showClose={showClose}
      footerAction={footerAction}
    >
      <PopupBody>
        {children}
      </PopupBody>
    </PopupRoot>
  );
};
