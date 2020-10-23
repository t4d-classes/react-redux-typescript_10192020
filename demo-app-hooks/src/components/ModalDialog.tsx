import React, { ReactNode } from 'react';
import { createPortal } from 'react-dom';

import './ModalDialog.css';

export type ModalDialogProps = {
  children: ReactNode;
};

export function ModalDialog(props: ModalDialogProps) {
  return createPortal(
    <div>
      <p>{props.children}</p>
    </div>,
    document.querySelector('#modal')!,
  );
}
