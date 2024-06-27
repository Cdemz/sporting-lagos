"use client";
import React, { useRef } from "react";
import { useKeenSlider } from "keen-slider/react";

interface Player {
  number: number;
  name: string;
  position: string;
  image: string;
}

interface ImageCarouselProps {
  players: Player[];
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ players }) => {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
  });

  return (
    <div className="relative text-center text-black my-4 grate">
      <h2 className="text-4xl font-bold mb-2">Squad</h2>
      {/* <h1 className="text-4xl font-extrabold mb-4">First Team</h1> */}
      <div ref={sliderRef} className="keen-slider overflow-hidden">
        {players.map((player, index) => (
          <div key={player.number} className="keen-slider__slide number-slide">
            <img
              src={player.image}
              alt={player.name}
              className="w-full h-[50vh] object-cover"
            />
            <div className="absolute top-2 left-2 bg-white text-black rounded-full px-2 py-1 font-bold">
              {player.number}
            </div>
            <div className="p-4 text-left">
              <p className="text-lg font-bold">{player.name}</p>
              <p className="text-md">{player.position}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-4">
        {players.map((_, index) => (
          <div
            key={index}
            className={`h-1 ${index === 0 ? "bg-blue-500" : "bg-gray-200"}`}
            style={{
              width: `${100 / players.length}%`,
            }}
          ></div>
        ))}
      </div>
      <button className="mt-4 bg-blue-500 text-white px-4 py-2 roundded rounded-3xl">
        View All Players
      </button>
    </div>
  );
};

export default ImageCarousel;
