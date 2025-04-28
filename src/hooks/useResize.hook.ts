import { useEffect, useState } from "react";

export default function useResize() {
  const [currentWidth, setCurrentWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", addListenerResize, false);

    return () => {
      window.removeEventListener("resize", addListenerResize, false);
    };
  }, []);

  function addListenerResize(event) {
    setCurrentWidth(event.target.innerWidth);
  }

  return {
    currentWidth,
  };
}
