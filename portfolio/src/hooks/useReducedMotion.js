import { useSyncExternalStore } from "react";

const preference = typeof window === "undefined" ? null : window.matchMedia("(prefers-reduced-motion: reduce)");
const subscribe = listener => {
  preference?.addEventListener("change", listener);
  return () => preference?.removeEventListener("change", listener);
};
const getSnapshot = () => preference?.matches ?? true;
const getServerSnapshot = () => true;

export function useReducedMotion() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
