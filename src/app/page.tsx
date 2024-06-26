"use client";
import Countdown from "./components/Countdown";
import InstagramLatestPost from "./components/Instagramlatest";
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
    <main className="bg-black ">
      <Carousel />
      <Countdown targetDate="2024-12-31T00:00:00" />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">My Website</h1>
        <InstagramLatestPost />
      </div>
    </main>
  );
}
