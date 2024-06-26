"use client";
import Countdown from "./components/Countdown";
import Loader from "./components/loader";
import Carousel from "./components/Mcarousel";
import { useState, useEffect } from "react";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay, ensure it's longer than the animation duration
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2300); // Adjust to match your animation duration

    // Cleanup timer
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  // Define your target date
  const targetDate = "2024-12-31T00:00:00";

  return (
    <main className="bg-black">
      <Carousel />
      <Countdown />
    </main>
  );
}
