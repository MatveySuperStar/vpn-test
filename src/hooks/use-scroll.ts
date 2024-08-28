import { useEffect, useState } from "react";

export const useScroll: () => number = () => {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowScroll, setWindowScroll] = useState<number>(0);

  useEffect(() => {
    // only execute all the code below in client side
    // Handler to call on window resize
    function handleResize() {
      const pos = document.documentElement.scrollTop;

      setWindowScroll(pos);
    }

    // Add event listener
    window.addEventListener("scroll", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("scroll", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowScroll;
};
