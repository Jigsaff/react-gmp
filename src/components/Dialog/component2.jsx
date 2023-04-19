import React, { useEffect } from 'react';
import { PortalWithState } from 'react-portal';
import { ModalWindow } from './ModalWindow';

export const Dialog = ({ title, children, onClose }) => {
  return (
    <PortalWithState closeOnOutsideClick>
      {({ closePortal, portal, openPortal }) => (
        <div role="dialog">
          <button
            className="text-white"
            onClick={openPortal}
          >
            Open Portal
          </button>

          {portal(
            <ModalWindow
              title={title}
              onClose={() => {
                onClose();
                closePortal();
              }}
            >
              {children}
            </ModalWindow>
          )}
        </div>
      )}
    </PortalWithState>
  );
};
