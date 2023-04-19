import React from 'react';
import FocusTrap from 'focus-trap-react';

export const ModalWindow = ({ title, children, onClose }) => {
  return (
    <FocusTrap>
      <div className="fixed top-0 left-0 right-0 bottom-0 bg-neutral-800 bg-opacity-90 backdrop-blur-md z-50">
        <div
          className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
          <div className="bg-light-black p-12">
            <h2 className="font-light uppercase text-4xl text-white text-center">{title}</h2>
            <div>{children}</div>
            <button
              className="absolute top-3 right-3 text-lg text-white cursor-pointer"
              onClick={onClose}>X
            </button>
          </div>
        </div>
      </div>
    </FocusTrap>
  );
}