import React from "react";
import useLocaleStorage from "./useLocaleStorage";
import "./theme.css";

export default function LightDarkMode() {
  const [theme, setTheme] = useLocaleStorage("theme", "dark");
  function handleToggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  console.log(theme);

  return (
    <div className="light-dark-mode fixstyle" data-theme={theme}>
      <div className="container">
        <p>Harsh In Tech !</p>

        <button onClick={handleToggleTheme}>Change Theme</button>
        <p>Project No.8</p>
      </div>
    </div>
  );
}
