import React, { useState } from "react";
import Modal from "./modal";
import "./modal.css";

export default function ModalTest() {
  const [showModalPopup, setShowModalPopup] = useState(false);

  function ModalHeader() {
    return <h3>I am Header </h3>;
  }

  function handleToggleModalPopup() {
    setShowModalPopup(!showModalPopup);
  }
  function onClose() {
    setShowModalPopup(false);
  }
  return (
    <div className="modal-final-container fixstyle">
        <h1>Project No.11</h1>
      <button className="modal-button" onClick={handleToggleModalPopup}>Open Model Popup</button>
      {showModalPopup && (
        <Modal
          id={"custome-id"}
          onClose={onClose}
          modalheader={<ModalHeader />}
          modalbody={<div>I am Harsh Gohil "Also Know Me as @harshintech"</div>}
          modalfooter={<div>Instagram: @harshintech , Github:@harshintech</div>}
        />
      )}
    </div>
  );
}
