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
    type: "club news",
    date: "1 month ago",
    mainText: "SPORTING LAGOS WELCOMES ABDULLAHI BIFFO AS HEAD COACH",
    link: "/read-more-1",
  },
  // {
  //   id: 1,
  //   image:
  //     "https://images.ctfassets.net/xkju6g0vth1p/7fGmKJvGsT08qf3ZqknuFM/86639627f6b5acd9f07cb8b6bd7744d2/gv.png",
  //   type: "club news",
  //   date: "1 month ago",
  //   mainText: "SPORTING LAGOS WELCOMES ABDULLAHI BIFFO AS HEAD COACH",
  //   link: "/read-more-1",
  // },
  {
    id: 2,
    image:
      "https://images.ctfassets.net/xkju6g0vth1p/5O2AxGKB0TMIptOvt6z3zt/ad65d80634a205f6808e8fc6e8e0d15c/ABIA_WARRIORs_vs_Sporting_Lagos.png",
    type: "Video",
    date: "February 2, 2024",
    mainText: "Odinaka okoro joins senior tram",
    link: "/read-more-2",
  },
  // Add more slides here
];

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 90000);
    //FIXME CHANGE IT BACK TOO 10000

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
          <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-90 p-4  my-4 rounded-lg shadow-lg w-[90%] md:w-2/3 lg:w-1/2 flex flex-col gap-2">
            <div className="flex gap-3">
              <p className="text-sm font-semibold text-[var(--color-primary)]">
                {slide.type}
              </p>
              <p className="text-sm text-gray-500">{slide.date}</p>
            </div>

            <h2 className="text-xl  text-[var(--color-primary)] font-black">
              {slide.mainText}
            </h2>
            <Link
              href="/"
              className="buttofns  text-[var(--color-primary)]  font-semibold"
            >
              <p>CONTINUE READING</p>
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
