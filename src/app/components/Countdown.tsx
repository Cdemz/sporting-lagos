"use client";
import { useState, useEffect } from "react";

// Define the type for the timeLeft object
type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

type CountdownProps = {
  targetDate: string;
};

const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
  const calculateTimeLeft = (): TimeLeft | {} => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft: TimeLeft | {} = {};

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

  const [timeLeft, setTimeLeft] = useState<TimeLeft | {}>(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const intervals = ["days", "hours", "minutes", "seconds"];
  const timerComponents: JSX.Element[] = [];

  intervals.forEach((interval, index) => {
    if ((timeLeft as TimeLeft)[interval as keyof TimeLeft] !== undefined) {
      timerComponents.push(
        <div key={interval} className="text-center mx-2">
          <div className="text-4xl font-bold">
            {(timeLeft as TimeLeft)[interval as keyof TimeLeft]}
          </div>
          <div className="text-sm uppercase font-medium">{interval}</div>
        </div>
      );

      // Add colon separator after each interval except the last one
      if (index < intervals.length - 1) {
        timerComponents.push(
          <div key={`colon-${interval}`} className="text-4xl font-bold">
            :
          </div>
        );
      }
    }
  });

  return (
    <div className="flex flex-col items-center space-y-4 bg-[var(--color-primary-a)] text-white p-6 rounded-lg shadow-lg px-14 grate">
      <div className="text-lg">Sporting Lagos vs Enyimba FC</div>
      <div className="flex justify-center items-censter space-x-1">
        {timerComponents.length ? timerComponents : <span>Time's up!</span>}
      </div>
      <button className="bg[var(--color-primary-a)] rounded-[2rem] p-4 text-white grate font-black uppercase outline outline-white   text-xs ">
        GET Ticket
      </button>
    </div>
  );
};

export default Countdown;
