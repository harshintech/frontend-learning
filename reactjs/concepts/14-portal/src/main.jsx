import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import CopyInput from "./components/CopyInput.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    {/* <CopyInput /> */}
  </StrictMode>
);
