import HomePageButton from "@/components/atoms/HomePageButton/HomePageButton";
import React from "react";

function HeroStory() {
  return (
    <div
      className="relative w-screen overflow-hidden z-0 mt-18 flex items-end"
      style={{
        minHeight: "720px",
        backgroundColor: "#0A0A0A",
        backgroundImage:
          "radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)",
        backgroundSize: "28px 28px",
      }}
    >
      {/* Gradient accent bar at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[linear-gradient(to_right,#FFC593,#BC7198,#5A77FF)]" />

      {/* Content */}
      <div className="relative z-10 px-16 py-16 max-w-2xl max-[800px]:px-10 max-[470px]:px-8">
        <p className="font-bold text-[12px] leading-none tracking-[2px] text-white opacity-50 mb-6 uppercase">
          Comprehensive Legal Services
        </p>

        <h1 className="font-bold text-[40px] leading-12 tracking-[4.17px] text-white mb-6 max-[470px]:text-[32px] max-[470px]:leading-10">
          ALL SERVICES IN GEORGIA
        </h1>

        <p className="font-normal text-[15px] leading-6.25 text-white opacity-60 mb-10 max-w-lg">
          From residence permits and company formation to banking support,
          tax residency, real estate and more — end-to-end legal assistance
          for every aspect of life and business in Georgia.
        </p>

        <a
          href="https://calendly.com/contact-legalstaygeorgia/30min"
          target="_blank"
          rel="noopener noreferrer"
        >
          <HomePageButton text="BOOK CONSULTATION" textColor="white" gap={4.5} />
        </a>
      </div>

      {/* Watermark */}
      <span className="absolute bottom-8 right-10 font-bold tracking-[8px] uppercase text-white select-none pointer-events-none text-[11px] opacity-10 max-[600px]:hidden">
        LEGAL STAY GEORGIA
      </span>
    </div>
  );
}

export default HeroStory;
