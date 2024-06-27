"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import Countdown from "./countdown";
import AOS from "aos";
import "aos/dist/aos.css";
// import { motion } from "framer-motion";

const welcome = () => {
  const leftVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  const rightVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  useEffect(() => {
    AOS.init({
      duration: 1200, // Set the duration of the animation
      once: false, // Whether animation should happen only once - while scrolling down
    });
  }, []);

  const targetDate = "2023-12-31T00:00:00";
  return (
    <div className="relative w-full h-[70vh] lg:h-[85vh] bg-black">
      <Image
        src="/academy.png"
        alt="academy boys"
        height={300}
        width={300}
        className="h-full w-full absolute object-cover opacity-80  "
      />

      <div className="absolute  text-white grate px-4 lg:px-10  pt-28 lg:pt-20  flex flex-col justify- gap-3 ">
        {/* <motion.div
          className="bg-red-500 w-1/2 h-64"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          transition={{ duration: 1 }}
          variants={leftVariants}
        > */}
        <div className=" " data-aos="fade-right">
          <h2 className=" uppercase text-[var(--color-primary)] font-extrabold">
            Welcome to{" "}
          </h2>
          <h1 className="uppercase text-xl font-extrabold mb-3 lg:text-2xl ">
            Sporting Lagos Academy
          </h1>
          <p>Learn from the best coaches in the world</p>
          <div className="flex flex-col gap-3">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex atque
              nesciunt.
            </p>
            <p className="mt">
              Iure est, culpa itaque blanditiis ea fugiat accusamus! Eius fuga
              eum vitae nobis, dolores ad natus reprehenderit officia!
            </p>{" "}
          </div>
          <button className="bg-blue-600 py-4 px-6 rounded-3xl  mt-5 mb-2">
            Read More
          </button>
        </div>
        {/* </motion.div> */}
        {/* <motion.div
          className="bg-red-500 w-1/2 h-64"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          transition={{ duration: 1 }}
          variants={rightVariants}
        > */}
        <div
          data-aos="fade-left"
          className="text-center py-3 px-6 bg-[var(--color-primary)] grate lg:w-[40%] "
        >
          <h1 className="text-2xl font-bold  uppercase text-blue-600">
            Next Match
          </h1>
          <h3 className="text-xl font-semibold uppercase mt-1">
            Sporting vs Ojodu FC
          </h3>
          <Countdown targetDate={targetDate} />
        </div>
        {/* </motion.div> */}
      </div>
    </div>
  );
};

export default welcome;
