"use client"
import { useEffect, useRef } from 'react';
import  '../css/Loader.module.css';

export default function Home() {
  const logoRef = useRef(null);

  useEffect(() => {
    const parts = logoRef.current.querySelectorAll('.part');
    const logoContainer = logoRef.current;

    const animateLogo = () => {
      parts.forEach((part, index) => {
        setTimeout(() => {
          part.classList.add('animate-part');
        }, index * 300);
      });

      setTimeout(() => {
        logoContainer.classList.add('animate-expand');
      }, parts.length * 300);

      setTimeout(() => {
        logoContainer.classList.remove('animate-expand');
      }, parts.length * 300 + 1000);
    };

    animateLogo();
  }, []);

  return (
    <div className="flex items-center justify-center h-screen">
      <div ref={logoRef} className="logo-container relative w-48 h-48">
        <svg
          width="200"
          height="200"
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="part1" className="part">
            {/* Part 1 SVG code */}
          </g>
          <g id="part2" className="part">
            {/* Part 2 SVG code */}
          </g>
          {/* Rest of the SVG code */}
        </svg>
      </div>
    </div>
  );
}