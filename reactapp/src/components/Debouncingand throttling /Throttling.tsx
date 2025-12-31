import React, { useEffect, useState } from "react";

function ThrottleDemo() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let lastRun = 0;

    const handleScroll = () => {
      const now = Date.now();
      if (now - lastRun > 500) { // run at most once per 500ms
        console.log("Scroll position:", window.scrollY);
        setScrollY(window.scrollY);
        lastRun = now;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div style={{ height: "200vh", padding: "20px" }}>
      <h2>Throttle Demo</h2>
      <p>Scroll down to see throttled scroll events in console</p>
      <p>ScrollY: {scrollY}</p>
    </div>
  );
}

export default ThrottleDemo;
