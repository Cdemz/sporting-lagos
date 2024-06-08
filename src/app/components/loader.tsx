// components/Loader.js
"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from '../css/Loader.module.css';
import logo from '../assets/sp_logo.png'; // Ensure the logo is in the public directory

const Loader = () => {
  const [chunks, setChunks] = useState([false, false, false, false]);

  useEffect(() => {
    // Appear chunks one by one
    const timers = chunks.map((_, index) =>
      setTimeout(() => {
        setChunks(prevChunks => {
          const newChunks = [...prevChunks];
          newChunks[index] = true;
          return newChunks;
        });
      }, (index + 1) * 500) // Adjust delay as needed
    );

    // Cleanup timers
    return () => timers.forEach(timer => clearTimeout(timer));
  }, []);

  return (
    <div className={styles.loader}>
      <div className={`${styles.logo} ${chunks.every(Boolean) ? styles.expand : ''}`}>
        {chunks.map((chunk, index) => (
          <div key={index} className={`${styles.chunk} ${chunk ? styles.visible : ''}`}>
            <Image
              src={logo}
              alt="Logo"
              layout="fill"
              objectFit="cover"
              style={{ clipPath: getClipPath(index) }}
            />

           
          </div>
        ))}
      </div>
    </div>
  );
};

const getClipPath = (index) => {
  switch (index) {
    case 0:
      return 'inset(0 50% 50% 0)';
    case 1:
      return 'inset(0 0 50% 50%)';
    case 2:
      return 'inset(50% 50% 0 0)';
    case 3:
      return 'inset(50% 0 0 50%)';
    default:
      return 'none';
  }
};

export default Loader;
