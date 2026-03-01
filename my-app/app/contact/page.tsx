import Header from "@/components/molecules/Header/Header";
import Footer from "@/components/molecules/Footer/Footer";
import React from "react";

export const metadata = {
  title: "Contact – Legal Stay Georgia",
  description:
    "Get in touch with Legal Stay Georgia. Book a free consultation or reach us by phone or email.",
};

export default function ContactPage() {
  return (
    <>
      <Header />

      <main className="w-screen min-h-screen bg-black text-white flex flex-col items-center justify-center pt-18">
        {/* Hero */}
        <div className="w-full flex flex-col items-center justify-center py-28 px-8 text-center">
          <p className="font-bold text-xs tracking-[2px] opacity-40 mb-5 uppercase">
            We&apos;re here to help
          </p>
          <h1 className="text-[40px] md:text-[56px] font-bold tracking-[4px] leading-tight mb-6">
            GET IN TOUCH
          </h1>
          <p className="text-[15px] opacity-60 max-w-md leading-6.25">
            Book a free 30-minute consultation with our legal team, or reach us
            directly — we typically respond within one business day.
          </p>
        </div>

        {/* Contact details */}
        <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-white/10 mb-0">
          <div className="flex flex-col items-center text-center py-14 px-8 border-b md:border-b-0 md:border-r border-white/10">
            <p className="font-bold text-[11px] tracking-[2px] opacity-40 mb-4 uppercase">
              Address
            </p>
            <p className="text-[15px] opacity-90 leading-7">
              Abashidze Street 34<br />
              Tbilisi, Georgia
            </p>
          </div>

          <div className="flex flex-col items-center text-center py-14 px-8 border-b md:border-b-0 md:border-r border-white/10">
            <p className="font-bold text-[11px] tracking-[2px] opacity-40 mb-4 uppercase">
              Phone
            </p>
            <a
              href="tel:+995551741616"
              className="text-[15px] opacity-90 hover:opacity-100 transition-opacity duration-300"
            >
              +995 551 741 616
            </a>
          </div>

          <div className="flex flex-col items-center text-center py-14 px-8 border-b border-white/10 md:border-b-0">
            <p className="font-bold text-[11px] tracking-[2px] opacity-40 mb-4 uppercase">
              Email
            </p>
            <a
              href="mailto:contact@legalstaygeorgia.com"
              className="text-[15px] opacity-90 hover:opacity-100 transition-opacity duration-300"
            >
              contact@legalstaygeorgia.com
            </a>
          </div>
        </div>

        {/* CTA */}
        <div className="w-full flex flex-col items-center py-24 px-8 text-center border-t border-white/10">
          <p className="font-bold text-xs tracking-[2px] opacity-40 mb-6 uppercase">
            Easiest way to start
          </p>
          <h2 className="text-[28px] md:text-[36px] font-bold tracking-[3px] mb-10">
            BOOK A FREE CONSULTATION
          </h2>
          <a
            href="https://calendly.com/contact-legalstaygeorgia/30min"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="font-bold text-xs tracking-[2px] px-12 py-4 bg-white text-black hover:bg-[#DFDFDF] cursor-pointer transition-colors duration-300">
              SCHEDULE 30 MIN CALL
            </button>
          </a>
          <p className="mt-6 text-[13px] opacity-40 max-w-sm">
            Pick a time that works for you. We&apos;ll discuss your needs and explain
            exactly how we can help.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}

