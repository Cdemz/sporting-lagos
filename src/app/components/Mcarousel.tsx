"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import "../css/Continue.css";
interface Slide {
  id: number;
  image: string;
  type: string;
  date: string;
  mainText: string;
  link: string;
}

const slides: Slide[] = [
  {
    id: 1,
    image:
      "https://images.ctfassets.net/xkju6g0vth1p/7fGmKJvGsT08qf3ZqknuFM/86639627f6b5acd9f07cb8b6bd7744d2/gv.png",
    type: "Type 1",
    date: "January 1, 2024",
    mainText: "Main Text 1",
    link: "/read-more-1",
  },
  {
    id: 2,
    image:
      "https://images.ctfassets.net/xkju6g0vth1p/5O2AxGKB0TMIptOvt6z3zt/ad65d80634a205f6808e8fc6e8e0d15c/ABIA_WARRIORs_vs_Sporting_Lagos.png",
    type: "Type 2",
    date: "February 2, 2024",
    mainText: "Main Text 2",
    link: "/read-more-2",
  },
  // Add more slides here
];

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full h-screen">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.image}
            alt={`Slide ${slide.id}`}
            layout="fill"
            objectFit="cover"
            className="brightness-75"
          />
          <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-90 p-4 m-4 rounded-lg shadow-lg w-4/5 md:w-2/3 lg:w-1/2">
            <p className="text-sm font-semibold text-gray-600">{slide.type}</p>
            <p className="text-sm text-gray-500">{slide.date}</p>
            <h2 className="text-xl font-bold text-gray-900">
              {slide.mainText}
            </h2>
            <Link href="/" className="text-blue-500 underline button type1">
              <p>Continue Reading</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </Link>
          </div>
        </div>
      ))}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              index === currentIndex ? "bg-white" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
