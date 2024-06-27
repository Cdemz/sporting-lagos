import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { FaFacebook, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[var(--color-primary)] text-white text-center py-4 grate flex justify-center flex-col items-center gap-3 md:flex-row md:justify-around md:py-6">
      <div className=" flex flex-col gap-3 items-center">
        <Image
          className="h-[vh] w-[10vw] md:h-[20vh]"
          src="/sp_logo.png "
          height={300}
          width={300}
          alt="Sporting Lagos Logo"
        />
        <p className="text-sm  font-extralight">
          © 2024 Sporting Lagos. All rights reserved.
        </p>
      </div>
      <ul className="flex gap-2 text-xl md:gap-6">
        <Link href="/">
          <FaFacebook />
        </Link>
        <Link href="/">
          <BiLogoInstagramAlt />
        </Link>
        <Link href="/">
          <FaXTwitter />
        </Link>
      </ul>

      <ul className="flex gap-4  flex-col font-light md:text-left">
        <Link href="/">PRIVACY POLICY</Link>
        <Link href="/">JOB & CAREER</Link>
        <Link href="/">HELP & SUPPORT</Link>
        <Link href="/">TERM OF USE</Link>
      </ul>
    </footer>
  );
};

export default Footer;
