import { useEffect } from "react";

function Spotlight() {

  useEffect(() => {

    const spotlight =
      document.querySelector(".spotlight");

    const move = (e) => {

      spotlight.style.left =
        e.clientX + "px";

      spotlight.style.top =
        e.clientY + "px";
    };

    window.addEventListener(
      "mousemove",
      move
    );

    return () =>
      window.removeEventListener(
        "mousemove",
        move
      );

  }, []);

  return <div className="spotlight"></div>;
}

export default Spotlight;