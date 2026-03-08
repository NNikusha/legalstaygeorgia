"use client";

import { useState, useEffect, useRef } from "react";

const allServices = [
  {
    number: "01",
    tag: "Immigration",
    title: "Residence Permit",
    description:
      "Comprehensive support for obtaining a Georgian residence permit — work permit, investment-based, temporary or permanent residency. We handle documents, translations, notarizations, submission and follow-up.",
    icon: "/images/Shape1.svg",
  },
  {
    number: "02",
    tag: "Business Formation",
    title: "Open a Company",
    description:
      "Start your business in Georgia with one of the world's lowest tax burdens. We assist with LLC, JSC and individual entrepreneur registration, legal compliance and ongoing bookkeeping.",
    icon: "/images/Shape2.svg",
  },
  {
    number: "03",
    tag: "Tax Benefits",
    title: "IT Virtual Zone",
    description:
      "Register as an IT Virtual Zone company and enjoy zero VAT and corporate income tax on international services. We handle full registration, tax advisory and ongoing legal compliance.",
    icon: "/images/Shape3.svg",
  },
  {
    number: "04",
    tag: "Banking",
    title: "Bank Account Support",
    description:
      "We assist with corporate and personal bank account setups, multicurrency options (EUR, USD, GBP, GEL), and have special expertise in AML/KYC procedures to ensure smooth account approvals.",
    icon: "/images/Shape4.svg",
  },
  {
    number: "05",
    tag: "IT Business",
    title: "IT Company in Georgia",
    description:
      "Georgia is a growing hub for tech companies. We assist with company formation, IT Virtual Zone registration, tax and legal advisory, and ongoing employment law support.",
    icon: "/images/Shape5.svg",
  },
  {
    number: "06",
    tag: "Self-Employment",
    title: "Individual Entrepreneur",
    description:
      "Register as an Individual Entrepreneur and qualify for Small Business Status with a 1% tax rate on revenue. Ideal for freelancers and small business owners seeking minimal bureaucracy.",
    icon: "/images/Shape6.svg",
  },
  {
    number: "07",
    tag: "Education",
    title: "Study in Georgia",
    description:
      "Georgia offers high-quality, affordable education with English-taught programs. We help with university selection, applications, visa and residency, legal address and accommodation support.",
    icon: "/images/Shape1.svg",
  },
  {
    number: "08",
    tag: "Privacy",
    title: "Nominee Services",
    description:
      "Maintain full confidentiality with our nominee director and shareholder services. You retain 100% control of your business while your identity stays out of all public records.",
    icon: "/images/Shape2.svg",
  },
  {
    number: "09",
    tag: "Virtual Office",
    title: "Virtual Office Tbilisi",
    description:
      "Prestigious Tbilisi business address, mail handling, phone services and meeting rooms — without the overhead of a physical office. Ideal for startups, remote workers and international businesses.",
    icon: "/images/Shape3.svg",
  },
  {
    number: "10",
    tag: "Compliance",
    title: "KYC Assistance",
    description:
      "Expert guidance through bank KYC and AML procedures. We prepare documents, handle bank queries and provide proactive compliance advice to ensure swift, hassle-free account approvals.",
    icon: "/images/Shape4.svg",
  },
  {
    number: "11",
    tag: "Finance",
    title: "Accounting Services",
    description:
      "Full-range accounting: monthly and annual reporting, payroll management, profit distribution, corporate tax returns, IT Virtual Zone statements and annual audit preparation — all tailored to your needs.",
    icon: "/images/Shape5.svg",
  },
  {
    number: "12",
    tag: "Employment",
    title: "Labour Law",
    description:
      "Drafting employment contracts, foreign worker registration, workplace policies, dispute resolution, HR compliance audits and termination advice — full labour law support for your business.",
    icon: "/images/Shape6.svg",
  },
  {
    number: "13",
    tag: "Property",
    title: "Rent Property",
    description:
      "Extensive leaser assistance: property search and screening, legal due diligence, lease agreement review and negotiation, documentation compliance and post-lease support.",
    icon: "/images/Shape1.svg",
  },
  {
    number: "14",
    tag: "Property",
    title: "Buy Real Estate",
    description:
      "Comprehensive buyer assistance: property search, due diligence, viewings, legal review of purchase contracts, negotiation support, full documentation and post-purchase assistance.",
    icon: "/images/Shape2.svg",
  },
  {
    number: "15",
    tag: "Tax Planning",
    title: "Tax Residency",
    description:
      "Become a Georgian tax resident and benefit from no taxes on foreign-sourced income. We handle the application, tax optimization strategies and ensure ongoing compliance with Georgian tax laws.",
    icon: "/images/Shape3.svg",
  },
  {
    number: "16",
    tag: "Life Events",
    title: "Weddings in Georgia",
    description:
      "Georgia is a popular destination for international weddings with a simple, accessible legal process. We guide foreign couples through all documentation and legal requirements for a seamless ceremony.",
    icon: "/images/Shape4.svg",
  },
];

function ArrowRight() {
  return (
    <svg
      width="42"
      height="13"
      viewBox="0 0 42 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 6.35355H41.864" stroke="currentColor" />
      <path d="M35.4282 0.353546L41.4282 6.35355L35.4282 12.3535" stroke="currentColor" />
    </svg>
  );
}

export default function ServicesSection() {
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const cardRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    cardRefs.current.forEach((ref, index) => {
      if (!ref) return;
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleCards((prev) => new Set(prev).add(index));
            }
          });
        },
        { threshold: 0.08, rootMargin: "0px 0px -20px 0px" }
      );
      observer.observe(ref);
      observers.push(observer);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <>
      {/* Section intro */}
      <div className="w-full py-16 px-8 flex flex-col items-center text-center bg-white">
        <p className="font-bold text-xs tracking-[2px] text-black opacity-40 mb-4 uppercase">
          Everything you need
        </p>
        <h2 className="text-[28px] md:text-[36px] font-bold tracking-[4px] leading-tight text-black max-w-2xl">
          16 SERVICES. ONE TRUSTED PARTNER.
        </h2>
        <p className="mt-4 text-[15px] opacity-60 max-w-xl leading-6.25">
          Legal Stay Georgia covers every aspect of life and business in Georgia.
          Get in touch today for a free consultation.
        </p>
                </div>

      {/* 4-column grid — all 16 services */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 w-screen">
        {allServices.map((service, index) => {
          const isDark = index % 2 === 0;
          return (
            <a
              key={service.title}
              href="https://calendly.com/contact-legalstaygeorgia/30min"
              target="_blank"
              rel="noopener noreferrer"
              ref={(el) => {
                if (el) cardRefs.current[index] = el;
              }}
              className={`
                group relative cursor-pointer flex flex-col min-h-80 p-8 overflow-hidden
                transition-all duration-700 ease-out
                ${isDark
                  ? "bg-black text-white hover:bg-[#111]"
                  : "bg-white text-black border border-gray-100 hover:bg-[#f5f5f5]"
                }
                ${
                  visibleCards.has(index)
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }
              `}
              style={{ transitionDelay: `${(index % 4) * 80}ms` }}
            >
              {/* Gradient top bar */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-[linear-gradient(to_right,#FFC593,#BC7198,#5A77FF)]" />

              {/* Background number watermark */}
              <span
                className={`absolute top-4 right-6 text-[72px] font-bold leading-none select-none pointer-events-none
                  ${isDark ? "text-white opacity-[0.05]" : "text-black opacity-[0.04]"}`}
              >
                {service.number}
              </span>

              {/* Icon */}
              <div className={`w-10 h-10 mb-6 ${isDark ? "brightness-0 invert" : ""}`}>
                <img src={service.icon} alt="" className="w-full h-full object-contain" />
              </div>

              {/* Tag */}
              <p className={`font-bold text-[11px] tracking-[2px] mb-3 uppercase ${isDark ? "opacity-50" : "opacity-40"}`}>
                {service.tag}
              </p>

              {/* Title */}
              <h3 className="text-[20px] font-bold mb-4 leading-tight tracking-[0.5px]">
                {service.title}
              </h3>

              {/* Description */}
              <p className={`text-[14px] leading-6.25 flex-grow ${isDark ? "opacity-60" : "opacity-60"}`}>
                {service.description}
              </p>

              {/* Divider */}
              <div className={`mt-6 h-px ${isDark ? "bg-white opacity-20" : "bg-black opacity-15"}`} />

              {/* CTA */}
              <div className="mt-5 flex items-center justify-between">
                <span className="font-bold text-xs tracking-[2px] uppercase">
                  GET IN TOUCH
                </span>
                <ArrowRight />
            </div>

              {/* Bottom gradient bar on hover */}
            <div
              className="
                absolute bottom-0 left-0 right-0 h-1.5
                  bg-[linear-gradient(to_right,#FFC593,#BC7198,#5A77FF)]
                  scale-y-0 origin-bottom transition-transform duration-300 ease-out
                  group-hover:scale-y-100
                "
              />
            </a>
          );
        })}
      </div>

      {/* Bottom CTA banner */}
      <div className="w-full bg-black py-20 px-8 flex flex-col items-center text-center">
        <h3 className="text-[28px] md:text-[32px] font-bold tracking-[3px] text-white mb-4">
          HAVE QUESTIONS?
        </h3>
        <p className="text-[15px] text-white opacity-60 max-w-lg leading-6.25 mb-10">
          Our team is ready to help. Book a free 30-minute consultation and
          let&apos;s discuss how Legal Stay Georgia can assist you.
        </p>
        <a
          href="https://calendly.com/contact-legalstaygeorgia/30min"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="font-bold text-xs tracking-[2px] px-10 py-4 bg-white text-black hover:bg-[#DFDFDF] cursor-pointer transition-colors duration-300">
            BOOK FREE CONSULTATION
          </button>
        </a>
        <div className="mt-10 flex flex-col md:flex-row gap-4 md:gap-14 text-white opacity-50 text-[13px]">
          <span>Abashidze Street 34, Tbilisi, Georgia</span>
          <a href="tel:+995551741616" className="hover:opacity-100 transition-opacity">
            +995 551 741 616
          </a>
          <a href="mailto:contact@legalstaygeorgia.com" className="hover:opacity-100 transition-opacity">
            contact@legalstaygeorgia.com
          </a>
          </div>
      </div>
    </>
  );
}
