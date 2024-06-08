"use client"
import Loader from "./components/loader";
import { useState, useEffect } from 'react';


export default function Home() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay, ensure it's longer than the animation duration
    const timer = setTimeout(() => {
      setLoading(true);
    }, 4000); // Adjust to match your animation duration

    // Cleanup timer
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }
  return (
    <main className="bg-black">
     
   
      <h1 className='text-red-500 text-2xl grate'>PLAYERS</h1>
   
    </main>
  );
}
