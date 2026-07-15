import { useEffect } from "react";

function Cursor() {
  useEffect(() => {
    // Mobile par cursor disable
    if (window.innerWidth <= 768) return;

    const cursor = document.querySelector(".custom-cursor");

    const moveCursor = (e) => {
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  // Mobile par kuch render mat karo
  if (window.innerWidth <= 768) return null;

  return <div className="custom-cursor"></div>;
}

export default Cursor;