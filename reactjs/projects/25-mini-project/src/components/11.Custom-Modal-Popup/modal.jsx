import React from "react";

export default function Modal({
  id,
  modalheader,
  modalbody,
  modalfooter,
  onClose,
}) {
  return (
    <div id={id || "Modal"} className="modal">
      <div className="modal-content">
        <div className="modalheader">
          <h2>{modalheader ? modalheader : "Header"}</h2>
          <span onClick={onClose} className="close-modal-icon">
            &times;
          </span>
        </div>
        <div className="modalbody">
          {modalbody ? (
            modalbody
          ) : (
            <div>
              <p>This is our Modal Body</p>
            </div>
          )}
        </div>
        <div className="modalfooter">
          {modalfooter ? modalfooter : <h2>Footer</h2>}
        </div>
      </div>
    </div>
  );
}
