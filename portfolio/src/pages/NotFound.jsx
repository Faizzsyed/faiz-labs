import { useEffect } from "react";
import ThemeToggle from "../components/ThemeToggle";
import "../styles/not-found.css";

export default function NotFound() {
  useEffect(() => {
    const title = document.title;
    const robots = document.querySelector('meta[name="robots"]');
    const previousRobots = robots?.content;
    document.title = "Page not found — Faiz Sayyed";
    if (robots) robots.content = "noindex, follow";
    return () => {
      document.title = title;
      if (robots) robots.content = previousRobots;
    };
  }, []);
  return <main className="not-found container">
    <div className="not-found-tools"><span className="technical-label">Faiz Sayyed / 404</span><ThemeToggle /></div>
    <h1>Page not found<span aria-hidden="true">.</span></h1>
    <p>This address doesn’t match a portfolio page.</p>
    <a className="editorial-link technical-label" href="/#index">Return to portfolio <span aria-hidden="true">↗</span></a>
  </main>;
}
