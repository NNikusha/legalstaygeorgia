"use client";
import { useState } from "react";
import NavButtons from "@/components/atoms/NavButtons/NavButtons";
import Link from "next/link";

function MobileMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <>
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={toggleMenu}
        />
      )}

      <div className="md:hidden fixed top-0 left-0 w-full z-50 bg-white shadow-md">
        <div className="w-full h-18 flex justify-between items-center px-6">
          <Link href="/">
            <img src="/icons/logo.svg" alt="Legal Stay Georgia" className="h-14 w-auto cursor-pointer hover:opacity-70 transition-opacity duration-300" />
          </Link>

          <button
            onClick={toggleMenu}
            className="w-6 h-6 flex flex-col justify-center items-center gap-1.5 cursor-pointer"
          >
            <span
              className={`w-5 h-0.5 bg-black transition-all duration-300 ease-in-out ${
                isMenuOpen ? "rotate-45 translate-y-1" : ""
              }`}
            />
            <span
              className={`w-5 h-0.5 bg-black transition-all duration-300 ease-in-out ${
                isMenuOpen ? "-rotate-45 -translate-y-1" : ""
              }`}
            />
          </button>
        </div>

        <div
          className={`absolute top-18 left-0 w-full bg-white transition-all duration-300 ease-in-out
            ${isMenuOpen ? "h-56 overflow-visible" : "h-0 overflow-hidden"}
          `}
        >
          <div
            className={`flex flex-col items-center py-7.75 transition-opacity duration-200
            ${isMenuOpen ? "opacity-100" : "opacity-0"}
          `}
          >
            <div className="flex flex-col items-center gap-4.25 mb-4.25">
              <Link href="/" onClick={toggleMenu}>
                <NavButtons text="HOME" textColor="black" />
              </Link>
              <Link href="/stories" onClick={toggleMenu}>
                <NavButtons text="SERVICES" textColor="black" />
              </Link>
              <a href="/contact" onClick={toggleMenu}>
                <NavButtons text="CONTACT" textColor="black" />
              </a>
            </div>

            <div className="w-77.5 h-px bg-black opacity-25 mb-5" />

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
      </div>
    </>
  );
}

export default MobileMenu;
