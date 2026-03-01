"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import MobileMenu from "./MobileMenu";
import NavButtons from "@/components/atoms/NavButtons/NavButtons";

function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY.current || currentScrollY < 10) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY.current && currentScrollY > 10) {
        setIsVisible(false);
      }

      lastScrollY.current = currentScrollY;

      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }

      scrollTimeout.current = setTimeout(() => {
        setIsVisible(true);
      }, 300);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, []);

  return (
    <>
      <div
        className={`hidden md:block fixed top-0 left-0 w-full z-50 bg-white shadow-md transition-transform duration-300 ease-in-out ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="w-full h-18 flex justify-around items-center">
          <Link href="/">
            <div className="cursor-pointer p-1 transition-opacity duration-300 hover:opacity-70">
              <img src="/icons/logo.svg" alt="Legal Stay Georgia" className="h-25 w-auto" />
            </div>
          </Link>

          <div className="flex gap-9.25">
            <Link href="/stories">
              <NavButtons text="Services" textColor="black" />
            </Link>
            <a href="/contact">
              <NavButtons text="CONTACT" textColor="black" />
            </a>
          </div>

          <a
            href="https://calendly.com/contact-legalstaygeorgia/30min"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="font-bold text-xs tracking-[2px] px-6 py-3 bg-[#000000] text-white hover:text-black hover:bg-[#DFDFDF] cursor-pointer transition-colors duration-300 ease-in-out">
              BOOK CONSULTATION
            </button>
          </a>
        </div>
      </div>

      <MobileMenu />
    </>
  );
}

export default Header;
