/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect } from "react";
import { useLocalStorageState } from "../hooks/useLocalStorageState";
const DarkModecontext = createContext();

function DarkModeProvider({ children }) {
  const [isDarkMode, setIsDarkmode] = useLocalStorageState(
    window.matchMedia("(prefers-color-scheme: dark)").matches,
    "isDarkMode"
  );
  function toggleDarkMode() {
    setIsDarkmode((isDark) => !isDark);
  }
  useEffect(
    function () {
      if (isDarkMode) {
        document.documentElement.classList.add("dark-mode");
        document.documentElement.classList.remove("light-mode");
      } else {
        document.documentElement.classList.add("light-mode");
        document.documentElement.classList.remove("dark-mode");
      }
    },
    [isDarkMode]
  );
  return (
    <DarkModecontext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModecontext.Provider>
  );
}

function useDarkMode() {
  const context = useContext(DarkModecontext);
  if (context === undefined)
    throw new Error("DarkModeContext was used outside of DarModePrvider");
  return context;
}
// eslint-disable-next-line react-refresh/only-export-components
export { DarkModeProvider, useDarkMode };
