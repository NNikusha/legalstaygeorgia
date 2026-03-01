"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const services = [
  {
    number: "01",
    tag: "Immigration",
    title: "Residence Permit",
    description:
      "Comprehensive support for obtaining a Georgian residence permit — work permit, investment-based, temporary or permanent residency. We handle documents, translations, submissions and follow-up.",
    icon: "/images/Shape1.svg",
  },
  {
    number: "02",
    tag: "Business Formation",
    title: "Open a Company",
    description:
      "Register your LLC, JSC or Individual Entrepreneur with full legal compliance. One of the world's lowest tax burdens — we handle all paperwork and ongoing bookkeeping.",
    icon: "/images/Shape2.svg",
  },
  {
    number: "03",
    tag: "Tax Benefits",
    title: "IT Virtual Zone",
    description:
      "Zero VAT and corporate income tax on international services. We register your tech company in Georgia's IT Virtual Zone and provide tax advisory and compliance support.",
    icon: "/images/Shape3.svg",
  },
  {
    number: "04",
    tag: "Banking",
    title: "Bank Account Support",
    description:
      "Corporate and personal bank account setups, multicurrency options (EUR, USD, GBP, GEL), and expert AML/KYC assistance to ensure smooth account approvals.",
    icon: "/images/Shape4.svg",
  },
  {
    number: "05",
    tag: "Tax Planning",
    title: "Tax Residency",
    description:
      "Become a Georgian tax resident and benefit from no taxes on foreign-sourced income. We prepare your application and provide personalized tax optimization strategies.",
    icon: "/images/Shape5.svg",
  },
  {
    number: "06",
    tag: "Privacy",
    title: "Nominee Services",
    description:
      "Maintain full confidentiality with our nominee director and shareholder services. You retain 100% control while your identity stays out of all public records.",
    icon: "/images/Shape6.svg",
  },
  {
    number: "07",
    tag: "Finance",
    title: "Accounting Services",
    description:
      "Full-range accounting — monthly and annual reporting, payroll, profit distribution, corporate tax returns, IT Virtual Zone statements, and annual audit preparation.",
    icon: "/images/Shape1.svg",
  },
  {
    number: "08",
    tag: "Property",
    title: "Real Estate Assistance",
    description:
      "Buying or renting property in Georgia — we handle due diligence, lease review, negotiation, legal compliance and post-purchase support from start to finish.",
    icon: "/images/Shape2.svg",
  },
];

function ArrowRight({ className = "" }: { className?: string }) {
  return (
    <svg
      width="42"
      height="13"
      viewBox="0 0 42 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M0 6.35355H41.864" stroke="currentColor" />
      <path d="M35.4282 0.353546L41.4282 6.35355L35.4282 12.3535" stroke="currentColor" />
    </svg>
  );
}

function Services() {
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

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
        { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
      );
      observer.observe(ref);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <div>
      {/* Section header */}
      <div className="w-full py-16 px-8 flex flex-col items-center text-center bg-white">
        <p className="font-bold text-xs tracking-[2px] text-black opacity-40 mb-4 uppercase">
          What we do
        </p>
        <h2 className="text-[32px] md:text-[40px] font-bold tracking-[4px] leading-tight text-black">
          OUR SERVICES
        </h2>
      </div>

      {/* 4-column card grid */}
      <div className="grid w-screen grid-cols-4 max-lg:grid-cols-2 max-sm:grid-cols-1">
        {services.map((service, index) => {
          const isDark = index % 2 === 0;
          return (
            <div
              key={service.title}
              ref={(el) => {
                if (el) cardRefs.current[index] = el;
              }}
              className={`
                group relative cursor-pointer flex flex-col min-h-80 p-8 overflow-hidden
                transition-all duration-500 ease-out
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
              <p
                className={`font-bold text-[11px] tracking-[2px] mb-3 uppercase
                  ${isDark ? "opacity-50" : "opacity-40"}`}
              >
                {service.tag}
              </p>

              {/* Title */}
              <h3 className="text-[20px] font-bold mb-4 leading-tight tracking-[0.5px]">
                {service.title}
              </h3>

              {/* Description */}
              <p
                className={`text-[14px] leading-6.25 flex-grow
                  ${isDark ? "opacity-60" : "opacity-60"}`}
              >
                {service.description}
              </p>

              {/* Divider */}
              <div
                className={`mt-6 h-px
                  ${isDark ? "bg-white opacity-20" : "bg-black opacity-15"}`}
              />

              {/* CTA */}
              <div className="mt-5 flex items-center justify-between">
                <span className="font-bold text-xs tracking-[2px] uppercase">
                  LEARN MORE
                </span>
                <ArrowRight />
              </div>

              {/* Bottom gradient lift bar on hover */}
              <div
                className="
                  absolute bottom-0 left-0 right-0 h-1.5
                  bg-[linear-gradient(to_right,#FFC593,#BC7198,#5A77FF)]
                  scale-y-0 origin-bottom transition-transform duration-300 ease-out
                  group-hover:scale-y-100
                "
              />
            </div>
          );
        })}
      </div>

      {/* View all CTA */}
      <div className="w-full flex justify-center py-14 bg-white">
        <Link href="/stories">
          <button className="font-bold text-xs tracking-[2px] flex items-center gap-5 text-black cursor-pointer border border-black px-10 py-4 hover:bg-black hover:text-white transition-colors duration-300 group">
            VIEW ALL 16 SERVICES
            <ArrowRight />
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Services;
