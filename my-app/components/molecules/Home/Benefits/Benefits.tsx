import React from "react";

function Benefits() {
  return (
    <div
      className="w-screen bg-[#F5F5F5] flex flex-col items-center justify-center py-20 px-8"
    >
      {/* Section header */}
      <div className="text-center mb-16">
        <p className="font-bold text-xs tracking-[2px] text-black opacity-50 mb-4 uppercase">
          Why clients choose us
        </p>
        <h2 className="text-[32px] md:text-[40px] font-bold tracking-[4px] leading-tight text-black">
          WHY CHOOSE LEGAL STAY GEORGIA
        </h2>
      </div>

      <div
        className="h-auto w-[83%] flex justify-between gap-12
                    max-[1200px]:w-full max-[1200px]:flex-col max-[1200px]:items-center
                    max-[540px]:px-2"
      >
        {/* Benefit 1 */}
        <div
          className="w-87.5 flex flex-col items-center text-center
                            max-[1200px]:w-114.25
                            max-[540px]:w-full"
        >
          <div className="w-18 h-18 flex items-center justify-center mb-6">
            <img src="/images/Shape1.svg" alt="" />
          </div>
          <div className="w-full">
            <p className="font-bold text-[18px] leading-6.25 tracking-normal mb-4.5">
              Expert Legal Team
            </p>
            <p className="opacity-60 text-[15px] leading-6.25">
              Over two decades of experience in Georgian law. Our team provides
              comprehensive legal support for individuals and businesses,
              ensuring full compliance and the best possible outcome.
            </p>
          </div>
        </div>

        {/* Benefit 2 */}
        <div
          className="w-87.5 flex flex-col items-center text-center
                            max-[1200px]:w-114.25
                            max-[540px]:w-full"
        >
          <div className="w-18 h-18 flex items-center justify-center mb-6">
            <img src="/images/Shape2.svg" alt="" />
          </div>
          <div className="w-full">
            <p className="font-bold text-[18px] leading-6.25 tracking-normal mb-4.5">
              Local Market Expertise
            </p>
            <p className="opacity-60 text-[15px] leading-6.25">
              Deep understanding of Georgia's legal system, banking regulations,
              and business environment. We navigate the complexities so you
              don't have to, saving you time and avoiding costly mistakes.
            </p>
          </div>
        </div>

        {/* Benefit 3 */}
        <div
          className="w-87.5 flex flex-col items-center text-center
                            max-[1200px]:w-114.25
                            max-[540px]:w-full"
        >
          <div className="w-18 h-18 flex items-center justify-center mb-6">
            <img src="/images/Shape3.svg" alt="" />
          </div>
          <div className="w-full">
            <p className="font-bold text-[18px] leading-6.25 tracking-normal mb-4.5">
              End-to-End Support
            </p>
            <p className="opacity-60 text-[15px] leading-6.25">
              From initial consultation through document preparation, submission
              and ongoing compliance — we handle every step. You get a single
              trusted partner for all your legal needs in Georgia.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Benefits;
