import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./index.css";

const PageLoadAnimation = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    // Use GSAP to animate the container on page load
    gsap.from(container, {
      opacity: 1,
      y: 100,
      duration: 1,
      ease: "power3.out",
    });
  }, []);

  return (
    <div ref={containerRef} className="animation-cont" style={{ opacity: 0 }}>
      Your page content goes here
      <h1>Welcome to My Website</h1>
      <p>Amazing content...</p>
    </div>
  );
};

export default PageLoadAnimation;
