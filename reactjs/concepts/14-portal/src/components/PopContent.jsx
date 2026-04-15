import { createPortal } from "react-dom";

const PopContent = ({ copied }) => {
  return createPortal(
    <div>
      {copied && (
        <div style={{ position: "absolute", bottom: "3rem" }}>
          Copy To Clipboard
        </div>
      )}
    </div>,
    document.querySelector("#popup-content")
  );
};

export default PopContent;
