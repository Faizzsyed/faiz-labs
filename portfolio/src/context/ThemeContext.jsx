import { useEffect, useState } from "react";
import { ThemeContext } from "./theme";
const storageKey = "faiz-labs-theme";
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    try { return localStorage.getItem(storageKey) === "dark" ? "dark" : "light"; }
    catch { return "light"; }
  });
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    const themeColor = document.querySelector('meta[name="theme-color"]');
    if (themeColor) themeColor.content = theme === "dark" ? "#0F0D0B" : "#F3EFE8";
    try { localStorage.setItem(storageKey, theme); } catch { /* Theme still works without storage. */ }
  }, [theme]);
  const toggleTheme = () => setTheme(current => current === "light" ? "dark" : "light");
  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
}
