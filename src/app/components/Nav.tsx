"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { FaFacebook, FaXTwitter } from "react-icons/fa6";
import { FiSearch, FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSearchClick = () => {
    setIsMenuOpen(true);
    setTimeout(() => {
      if (searchInputRef.current) {
        searchInputRef.current.focus();
      }
    }, 300); // Allow some time for the menu to open
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full  transition-all duration-300 h-14
      ${
        isMenuOpen
          ? "bg-[var(--color-primary)] "
          : isScrolled
          ? "bg-[var(--color-primary)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 ">
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white focus:outline-none"
            >
              {isMenuOpen ? <MdClose size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
          <div className="flex items-center justify-center">
            <Link href="/">
              <Image
                src="/sp_logo.png"
                alt="logo"
                width={300}
                height={300}
                className="h-9 w-6"
              />
            </Link>
          </div>
          <div className=" capitalize hidden lg:flex  ">
            <ul className="text-white grate capitalize text-md font-extrabold flex mr-20">
              <li className="px-2  capitalize">NEWS</li>
              <li className="px-2 ">MATCHES</li>
              <li className="px-2 ">PLAYERS</li>
              <li className="px-2 ">CLUB INFO</li>
              <li className="px-2 ">MEMBERSHIP</li>
              <li className="px-2 ">SPORTING TV</li>
              <Link href="/academy">
                <li className="px-2 ">ACADEMY </li>
              </Link>
            </ul>
          </div>
          <div className="flex items-center">
            <button
              onClick={handleSearchClick}
              className="text-white focus:outline-none"
            >
              <FiSearch size={24} />
            </button>
          </div>
        </div>
      </div>
      <div
        className={` fixed justify-between top-[3.4rem] z-50 left-0 w-full h-[100vh] bg-[var(--color-primary)] text-white transform transition-transform duration-300
        ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="px-4 pt-6 pb-8 capitalize h-full">
          <ul className="space-y-2 grate capitalize text-2xl font-extrabold">
            <li className="px-2 py-1 capitalize">NEWS</li>
            <li className="px-2 py-1">MATCHES</li>
            <li className="px-2 py-1">PLAYERS</li>
            <li className="px-2 py-1">CLUB INFORMATION</li>
            <li className="px-2 py-1">MEMBERSHIP</li>
            <li className="px-2 py-1">SPORTING TV</li>
            <Link href="/academy" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <li className="px-2 py-1">ACADEMY</li>{" "}
            </Link>
          </ul>

          <div className="mt-32 relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FiSearch className="text-gray-400" size={24} />
            </div>
            <input
              ref={searchInputRef}
              type="text"
              placeholder="Search Sporting"
              className="w-full pl-10 pr-4 py-2 rounded focus:outline-blue-500 focus:ring-2 focus:ring-white grate text-white bg-[#374366] text-xl"
            />
          </div>
          <div className="grate mt-10">
            <p className="text-md">FOLLOW SPORTING</p>
            <ul className="flex gap-3">
              <Link
                href="https://www.instagram.com/sportinglagos?igsh=MTNmanI4MGlkZmprag=="
                target="blank"
              >
                <BiLogoInstagramAlt size={27} />
              </Link>
              <Link href="https://x.com/SportingLagos?s=09" target="blank">
                <FaXTwitter size={25} />
              </Link>
              <Link
                href="https://www.facebook.com/SportingLagosFC"
                target="blank"
              >
                <FaFacebook size={25} />
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
