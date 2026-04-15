import React, { useState } from "react";
import QRCode from "react-qr-code";
import "./styles.css";

export default function QRCodeGenerator() {
  const [input, setInput] = useState("");
  const [qrCode, setQrCode] = useState("");

  function handleGenerateQrCode() {
    setQrCode(input);
    setInput("");
  }
  return (
    <div className="qr-container fixstyle">
      <h1>Project No.7</h1>
      <h4>QR Code Generator</h4>
      <div>
        <input
          type="text"
          onChange={(e) => setInput(e.target.value)}
          name="qr-code"
          value={input}
          placeholder="Enter Your Value Here"
        />
        <button
          disabled={input && input.trim() !== "" ? false : true}
          onClick={handleGenerateQrCode}
        >
          Generate
        </button>
      </div>
      <div>
        <QRCode id="qr-code-value" value={qrCode} size={400}></QRCode>
      </div>
    </div>
  );
}
