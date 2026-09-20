/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useState, useEffect } from "react";

export const AccentContext = createContext();

export const AccentProvider = ({ children }) => {
  const [accent, setAccent] = useState(() => {
    return localStorage.getItem("faiz-labs-accent") || "cyan";
  });

  useEffect(() => {
    localStorage.setItem("faiz-labs-accent", accent);
    document.body.className = `theme-${accent}`;
  }, [accent]);

  return (
    <AccentContext.Provider value={{ accent, setAccent }}>
      {children}
    </AccentContext.Provider>
  );
};
