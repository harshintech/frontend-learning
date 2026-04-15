import { useState } from "react";
import "./styles.css";

const PasswordGenerator = () => {
  const [length, setLength] = useState(12);
  const [password, setPassword] = useState("");

  const generatePassword = () => {
    const chars =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
    let pass = "";
    for (let i = 0; i < length; i++) {
      pass += chars[Math.floor(Math.random() * chars.length)];
    }
    if (length > 1500) {
      setPassword("Please Enter Below 1500");
    } else {
      setPassword(pass);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(password)
      .then(() => {
        alert("Password copied to clipboard!");
      })
      .catch((err) => {
        alert("Failed to copy: " + err);
      });
  };

  return (
    <div className="ps-box fixstyle" style={{ padding: 20, fontFamily: "sans-serif" }}>
      <h2 className="ps-name">Random Password Generator</h2>
      <input
        className="ps-input"
        type="number"
        min="4"
        max="32"
        value={length}
        onChange={(e) => setLength(Number(e.target.value))}
      />
      <button onClick={generatePassword}>Generate</button>
      <div>
        <strong>
          {password === "" ? "Your Password Show Here" : password}
        </strong>
        <button
          onClick={copyToClipboard}
          style={{ marginTop: "10px", marginLeft: "10px" }}
        >
          Copy
        </button>
      </div>
    </div>
  );
};

export default PasswordGenerator;
