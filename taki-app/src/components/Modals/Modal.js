import React from 'react';
import ReactDOM from 'react-dom';

function Modal({ open, children, onClose }) {

    if (!open) return null
    
    return ReactDOM.createPortal(
        <>
            <div className="modal-backdrop"></div>
            <div className="modal-box">
                {children}
            </div>
        </>, document.querySelector("#modal-root")
    )
}

export default Modal;