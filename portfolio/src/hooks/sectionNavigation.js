export function focusSection(id) {
  const section = document.getElementById(id);
  const heading = section?.querySelector("h1, h2");
  if (!heading) return;
  heading.setAttribute("tabindex", "-1");
  heading.focus({ preventScroll: true });
  heading.addEventListener("blur", () => heading.removeAttribute("tabindex"), { once: true });
}
export function navigateToSection(id) {
  window.location.hash = id;
  focusSection(id);
}
