import { useState, useEffect } from "react";

const CTAComponent: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    const el = document.getElementById("common-cta_container");
    if (el) observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="common-cta_container"
      className={`relative h-[60vh] lg:h-[530px] w-full text-white bg-clip-cta overflow-hidden bg-[url('/backgrounds/ctaMobileWaveLines.svg')] bg-no-repeat bg-cover md:z-20 z-0 ${
        isVisible ? "animate-cta-background" : ""
      }`}
    >
      <div className="container flex w-full items-start justify-center h-full relative z-10 flex-col mt-6">
        <h2 className="font-Montserrat text-res-head-2 text-white lg:text-head-2 font-semibold mb-[24px]">
          Legacy no longer
        </h2>
        <p className="text-base lg:text-lg 2xl:text-xl lg:whitespace-pre-line mb-[30px]">
          Talk to us to find out how we can transform your organisation for the
          future
        </p>
        <div className="flex lg:flex-row flex-col lg:space-x-[16px] space-y-4 lg:space-y-0 w-full">
          <a
            className="md:py-[15.5px] py-[14px] px-[42px] rounded-xs shadow-button-primary text-link text-white flex items-center justify-center space-x-[8px] bg-orange-main"
            href="/en/contact-us"
          >
            <span>Contact Us</span>
            <svg
              width="6"
              height="9"
              viewBox="0 0 6 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.25 4.89844L2.0625 8.08594C1.82812 8.32031 1.47656 8.32031 1.26562 8.08594L0.726562 7.57031C0.515625 7.33594 0.515625 6.98438 0.726562 6.77344L3 4.52344L0.726562 2.25C0.515625 2.03906 0.515625 1.6875 0.726562 1.45312L1.26562 0.914062C1.47656 0.703125 1.82812 0.703125 2.0625 0.914062L5.25 4.10156C5.46094 4.33594 5.46094 4.6875 5.25 4.89844Z"
                fill="white"
              ></path>
            </svg>
          </a>
        </div>
      </div>

      <svg
        className="lg:block hidden absolute h-[120%] w-[120%] left-[-10%] top-[-10%]"
        preserveAspectRatio="xMidYMid slice"
        viewBox="0 0 2316 1021"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="cta-background-patterns">
          <g id="dark-patterns">
            <g
              id="Vector"
              style={{ mixBlendMode: "multiply" }}
              // style={{ mixBlendMode: "multiply" as React.CSSProperties }}
            >
              <path
                d="M1968.32 314.946V192.878L1492.64 587.535H1639.77L1968.32 314.946Z"
                fill="url(#paint0_linear_1_547)"
              ></path>
            </g>
          </g>
        </g>
      </svg>
    </section>
  );
};

export default CTAComponent;
