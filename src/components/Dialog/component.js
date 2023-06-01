import { Portal } from 'react-portal';
import FocusTrap from 'focus-trap-react';

export const Dialog = ({ title, children, onClose }) => {
  return (
      <Portal>
        <FocusTrap>
          <div
              className="fixed top-0 left-0 right-0 bottom-0 bg-light-black bg-opacity-90 backdrop-blur-md z-50"
              onClick={onClose}
              data-testid="dialog-overlay"
              tabIndex="-1"
          >
            <div
                className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 border-2 rounded p-2"
                onClick={(e) => e.stopPropagation()}
                role="dialog"
                aria-modal="true"
                aria-labelledby="dialog-title"
            >
              <header className="flex justify-between items-center p-5 border-b">
                <h2 id="dialog-title" className="text-white text-lg font-semibold">
                  {title}
                </h2>
                <button
                    className="bg-transparent border-none text-white text-xl font-semibold cursor-pointer"
                    onClick={onClose}
                    autoFocus
                    tabIndex="0"
                >
                  ×
                </button>
              </header>
              <div className="p-5">
                {children}
                <button
                    style={{ position: 'absolute', left: '-9999px' }}
                    tabIndex="-1"
                    aria-hidden="true"
                >
                  Hidden button
                </button>
              </div>
            </div>
          </div>
        </FocusTrap>
      </Portal>
  );
};