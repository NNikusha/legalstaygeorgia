import React from "react";

function Contact() {
  return (
    <div
      id="contact-section"
      className="w-screen bg-black text-white flex flex-col items-center justify-center py-24 px-8 text-center"
    >
      <p className="font-bold text-xs tracking-[2px] opacity-40 mb-5 uppercase">
        Ready to get started?
      </p>

      <h2 className="text-[32px] md:text-[40px] font-bold tracking-[4px] leading-tight mb-10">
        GET IN TOUCH
      </h2>

      <a
        href="https://calendly.com/contact-legalstaygeorgia/30min"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="font-bold text-xs tracking-[2px] px-10 py-4 bg-white text-black hover:bg-[#DFDFDF] cursor-pointer transition-colors duration-300">
          BOOK FREE CONSULTATION
        </button>
      </a>

      <div className="mt-10 flex flex-col md:flex-row gap-3 md:gap-12 text-[13px] opacity-50">
        <a href="mailto:contact@legalstaygeorgia.com" className="hover:opacity-100 transition-opacity">
          contact@legalstaygeorgia.com
        </a>
        <span className="hidden md:inline opacity-30">|</span>
        <a href="tel:+995551741616" className="hover:opacity-100 transition-opacity">
          +995 551 741 616
        </a>
        <span className="hidden md:inline opacity-30">|</span>
        <span>Abashidze Street 34, Tbilisi</span>
      </div>
    </div>
  );
}

export default Contact;
