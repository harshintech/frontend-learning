import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import DataFetch from "./DataFetch.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <DataFetch />
  </StrictMode>
);
