"use client";
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

  return (
    <main className="bg-black pt-14">
      <Carousel />
    </main>
  );
}
