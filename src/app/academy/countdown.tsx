"use client";
import React, { useState, useEffect } from "react";

interface CountdownProps {
  targetDate: string;
}

const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div className="flex justify-center space-x-4 mt-3">
      {Object.entries(timeLeft).map(([unit, value], index) => (
        <div key={index} className="flex flex-col items-center mx-1">
          <span className="text-3xl font-extrabold">
            {value < 10 ? `0${value}` : value}
          </span>
          <span className="text-xs capitalize mt-1 text-gray-400">{unit}</span>
        </div>
      ))}
    </div>
  );
};

export default Countdown;
