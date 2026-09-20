import { useEffect, useState } from "react";

function Cursor() {
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Detect touch capability
    const checkTouch = () => {
      return (
        window.matchMedia("(pointer: coarse)").matches ||
        window.matchMedia("(hover: none)").matches ||
        (navigator.maxTouchPoints && navigator.maxTouchPoints > 0)
      );
    };

    const isTouch = checkTouch();
    setIsTouchDevice(isTouch);

    if (isTouch) return;

    const cursor = document.querySelector(".custom-cursor");
    if (!cursor) return;

    const moveCursor = (e) => {
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  if (isTouchDevice) return null;

  return <div className="custom-cursor"></div>;
}

export default Cursor;