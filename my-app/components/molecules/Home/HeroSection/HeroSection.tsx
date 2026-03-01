import HomePageButton from "@/components/atoms/HomePageButton/HomePageButton";
import Link from "next/link";

function HeroSection() {
  return (
    <div className="w-screen h-auto flex flex-col items-center justify-center mt-18">

      {/* Panel 1 – dark text left / brand gradient right */}
      <div
        className="h-162.5 w-full flex
                        max-[700px]:h-auto max-[700px]:flex-col"
      >
        <div
          className="bg-black text-white w-[42%] h-162.5 flex justify-center items-center relative
                          max-[1200px]:w-[64%]
                          max-[700px]:w-full max-[700px]:h-auto max-[700px]:order-2"
        >
          {/* Mobile-only gradient top bar */}
          <div className="hidden max-[700px]:block absolute top-0 left-0 right-0 h-[3px] bg-[linear-gradient(to_right,#FFC593,#BC7198,#5A77FF)]" />
          {/* decorative line – desktop only */}
          <div
            className="absolute w-1.5 h-76 inset-0 top-43.25 max-[700px]:hidden"
          >
            <img src="/images/line.svg" alt="" className="object-contain" />
          </div>

          <div className="w-96.75 h-76 max-[700px]:w-79.5 max-[700px]:h-auto max-[700px]:py-12 max-[700px]:px-8">
            <h1 className="text-[40px] font-bold tracking-[4.17px] leading-12 max-[700px]:text-[32px] max-[700px]:leading-10 max-[700px]:tracking-[3.33px]">
              YOUR TRUSTED LEGAL PARTNER IN GEORGIA.
            </h1>
            <p className="mt-4 text-[15px] font-normal leading-6.25 opacity-60">
              Legal Stay Georgia provides end-to-end legal services for
              individuals and businesses. Residence permits, company formation,
              banking support, tax optimization — we handle every step.
            </p>
            <div className="mt-10">
              <a
                href="https://calendly.com/contact-legalstaygeorgia/30min"
                target="_blank"
                rel="noopener noreferrer"
              >
                <HomePageButton text="BOOK CONSULTATION" textColor="white" gap={4.5} />
              </a>
            </div>
          </div>
        </div>

        {/* Minimal dark panel */}
        <div
          className="w-[58%] h-162.5 relative overflow-hidden flex items-end justify-start
                          max-[1200px]:w-[36%]
                          max-[700px]:hidden"
          style={{
            backgroundColor: "#0A0A0A",
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        >
          {/* Gradient accent bar at bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[linear-gradient(to_right,#FFC593,#BC7198,#5A77FF)]" />
          {/* Watermark */}
          <span className="absolute bottom-8 left-8 font-bold tracking-[8px] uppercase text-white select-none pointer-events-none text-[11px] opacity-15">
            LEGAL STAY GEORGIA
          </span>
        </div>
      </div>

      {/* Panel 2 – dark accent left / white text right */}
      <div
        className="h-150 w-screen flex
                        max-[700px]:h-auto max-[700px]:flex-col"
      >
        {/* Minimal dark panel */}
        <div
          className="w-[58%] h-150 relative overflow-hidden flex items-end justify-start max-[1200px]:w-[36%]
                          max-[700px]:hidden"
          style={{
            backgroundColor: "#111111",
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        >
          <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[linear-gradient(to_right,#FFC593,#BC7198,#5A77FF)]" />
          <span className="absolute bottom-8 left-8 font-bold tracking-[8px] uppercase text-white select-none pointer-events-none text-[11px] opacity-15">
            LEGAL STAY GEORGIA
          </span>
        </div>

        <div
          className="bg-white text-black w-[42%] h-150 flex justify-center items-center relative max-[1200px]:w-[64%]
                          max-[700px]:w-full max-[700px]:h-auto"
        >
          <div className="hidden max-[700px]:block absolute top-0 left-0 right-0 h-[3px] bg-[linear-gradient(to_right,#FFC593,#BC7198,#5A77FF)]" />
          <div className="w-96.75 max-[700px]:w-79.5 max-[700px]:py-12 max-[700px]:px-8">
            <h1 className="text-[40px] font-bold tracking-[4.17px] leading-12 max-[700px]:text-[32px] max-[700px]:leading-10 max-[700px]:tracking-[3.33px]">
              BUSINESS FORMATION &amp; TAX OPTIMIZATION
            </h1>
            <p className="mt-4 text-[15px] font-normal leading-6.25 opacity-60">
              Establish your LLC, IT Virtual Zone company, or register as an
              Individual Entrepreneur with Georgia's 1% small business tax rate.
              Full documentation, legal compliance, and ongoing accounting —
              all handled for you.
            </p>
            <div className="mt-10">
              <Link href="/stories">
                <HomePageButton text="EXPLORE SERVICES" textColor="black" gap={4.5} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Panel 3 – white text left / dark accent right */}
      <div
        className="h-150 w-full flex max-[700px]:h-auto max-[700px]:flex-col"
      >
        <div
          className="bg-white text-black w-[42%] h-150 flex justify-center items-center relative max-[1200px]:w-[64%]
                          max-[700px]:w-full max-[700px]:h-auto max-[700px]:order-2"
        >
          <div className="hidden max-[700px]:block absolute top-0 left-0 right-0 h-[3px] bg-[linear-gradient(to_right,#FFC593,#BC7198,#5A77FF)]" />
          <div className="w-96.75 max-[700px]:w-79.5 max-[700px]:py-12 max-[700px]:px-8">
            <h1 className="text-[40px] font-bold tracking-[4.17px] leading-12 max-[700px]:text-[32px] max-[700px]:leading-10 max-[700px]:tracking-[3.33px]">
              RESIDENCE PERMITS &amp; BANKING SUPPORT
            </h1>
            <p className="mt-4 text-[15px] font-normal leading-6.25 opacity-60">
              We guide you through Georgia's residence permit process and help
              set up personal or corporate bank accounts with full KYC/AML
              compliance. Tax residency, real estate, study support — we cover
              every aspect of life in Georgia.
            </p>
            <div className="mt-10">
              <a
                href="https://calendly.com/contact-legalstaygeorgia/30min"
                target="_blank"
                rel="noopener noreferrer"
              >
                <HomePageButton text="GET STARTED" textColor="black" gap={4.5} />
              </a>
            </div>
          </div>
        </div>

        {/* Minimal dark panel */}
        <div
          className="w-[58%] h-150 relative overflow-hidden flex items-end justify-start max-[1200px]:w-[36%]
                          max-[700px]:hidden"
          style={{
            backgroundColor: "#0A0A0A",
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        >
          <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[linear-gradient(to_right,#FFC593,#BC7198,#5A77FF)]" />
          <span className="absolute bottom-8 left-8 font-bold tracking-[8px] uppercase text-white select-none pointer-events-none text-[11px] opacity-15">
            LEGAL STAY GEORGIA
          </span>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
