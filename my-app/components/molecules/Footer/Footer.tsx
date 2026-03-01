import React from "react";
import Link from "next/link";
import NavButtons from "@/components/atoms/NavButtons/NavButtons";
import {
  FacebookIcon,
  YoutubeIcon,
  TwitterIcon,
  PinterestIcon,
  InstagramIcon,
} from "@/components/atoms/SocialIcons/SocialIcons";

function Footer() {
  return (
    <div id="main-footer" className="w-screen bg-black">
      <div className="w-full flex flex-col md:flex-row items-center justify-between px-12 md:px-20 py-10 gap-8">

        {/* Logo */}
        <Link href="/">
          <img src="/icons/logo.svg" alt="Legal Stay Georgia" className="h-16 w-auto invert cursor-pointer hover:opacity-70 transition-opacity duration-300" />
        </Link>

        {/* Nav */}
        <div className="flex gap-8">
          <Link href="/"><NavButtons text="HOME" textColor="white" /></Link>
          <Link href="/stories"><NavButtons text="SERVICES" textColor="white" /></Link>
          <a href="/contact"><NavButtons text="CONTACT" textColor="white" /></a>
        </div>

        {/* Social icons */}
        <div className="flex items-center gap-[13px]">
          <FacebookIcon />
          <YoutubeIcon />
          <TwitterIcon />
          <PinterestIcon />
          <InstagramIcon />
        </div>

      </div>

      {/* Bottom bar */}
      <div className="w-full border-t border-white/10 px-12 md:px-20 py-5 flex justify-center">
        <p className="text-[12px] text-white opacity-40">
          © {new Date().getFullYear()} Legal Stay Georgia. All Rights Reserved
        </p>
      </div>
    </div>
  );
}

export default Footer;
