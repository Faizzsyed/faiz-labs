import { useTheme } from "../context/theme";
export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  return <button type="button" className="theme-toggle technical-label" onClick={toggleTheme}
    aria-label={`${theme.toUpperCase()} — Switch to ${theme === "light" ? "dark" : "light"} theme`} aria-pressed={theme === "dark"}>
    <span aria-hidden="true">{theme === "light" ? "◐" : "◑"}</span>{theme.toUpperCase()}
  </button>;
}
