import { MotionConfig } from "framer-motion";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import { ThemeProvider } from "./context/ThemeContext";
import { useReducedMotion } from "./hooks/useReducedMotion";

export default function App() {
  const reduced = useReducedMotion();
  const isHome = window.location.pathname === "/" || window.location.pathname === "/index.html";
  return <ThemeProvider><MotionConfig reducedMotion={reduced ? "always" : "never"}>{isHome ? <Home /> : <NotFound />}</MotionConfig></ThemeProvider>;
}
