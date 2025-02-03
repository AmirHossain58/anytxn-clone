import { motion } from 'framer-motion';
const FutureOfFinance = () => {
  return (
    <>
      <section className="max-w-[1138px] mx-auto mt-[62px] px-8">
        <section className="grid md:grid-cols-2 grid-cols-1 md:gap-[15px] relative">
          {/* Left Content */}
          <div className="md:space-y-sm space-y-xs flex flex-col justify-center ">
            <h6 className="lg:text-2xl  uppercase text-[#57a0f4] font-Montserrat font-semibold">
              POWERING THE FUTURE OF FINANCE
            </h6>
            <h2 className="whitespace-pre-line font-Montserrat text-res-head-2 tracking-wide text-blue-900 text-3xl  lg:text-6xl font-bold mt-6 mb-12">
              Uncovering new ways to delight customers
            </h2>
            <div className="hidden md:block mt-8">
              <div className=" text-base text-gray-700">
                <p className="font-semibold">
                  AnyTech is revolutionizing financial technology by introducing
                  innovative and real-time transaction account processing
                  capabilities, specifically designed for retail financial
                  services.
                </p>
              </div>
              <div className="text-base text-gray-700 mt-4">
                <p>
                  Our modern approach surpasses traditional banking and card
                  processing systems, empowering you with the most advanced
                  technology for lasting success.
                </p>
              </div>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="relative h-fit lg:text-clip block overflow-visible">
            <figure className="w-[76%] mx-auto shadow-[0px_23px_30px_0px_#16437763]">
              <img
                src="/banner-finance.avif"
                alt="POWERING THE FUTURE OF FINANCE"
                className="object-cover w-full h-full"
                loading="lazy"
              />
            </figure>

            {/* Floating Icons */}
            <div>
              <figure className="absolute top-[10%] right-[12%] translate-x-1/2 w-[min(115px,_30%)] rounded-full drop-shadow-2xl">
                <motion.img
                  src="/anybass1.svg"
                  alt="anybass1"
                  className="object-contain w-full h-full"
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 10, 
                    repeat: Infinity, 
                    ease: "easeInOut", 
                  }}
                />
              </figure>

              <figure className="absolute top-[40%] left-[20%] w-[min(87px,_20%)] rounded-full drop-shadow-2xl">
                <motion.img
                  src="/anybass2.svg"
                  alt="anypass"
                  className="object-contain w-full h-full"
                  loading="lazy"
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 10, 
                    repeat: Infinity, 
                    ease: "easeInOut", 
                  }}
                />
              </figure>

              <figure className="absolute top-[20%] left-[12%] -translate-x-1/2 w-[min(73px,_18%)] rounded-full drop-shadow-2xl">
                <motion.img
                  src="/anycaas.svg"
                  alt="anycaas"
                  className="object-contain w-full h-full"
                  loading="lazy"
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 10, 
                    repeat: Infinity, 
                    ease: "easeInOut", 
                  }}
                />
              </figure>
            </div>

            {/* Background Frame */}
            <figure 
            // style={{
            //     animation: "bounce 5s infinite ease-in-out"
            //   }}
            className="customBounce absolute inset-0 w-full h-full -z-10 ">
              <motion.img
                className="object-cover w-full h-full"
                src="/background1111.svg"
                alt="background frame"
                loading="lazy"
                animate={{
                  y: [0, -50, 0],
                }}
                transition={{
                  duration: 10, 
                  repeat: Infinity, 
                  ease: "easeInOut", 
                }}
              />
            </figure>
          </div>
        </section>
      </section>
      <div className="md:hidden px-8 mt-14 space-y-6">
            <div className=" text-base text-blue-950">
              <p className="font-semibold">
                AnyTech is revolutionizing financial technology by introducing
                innovative and real-time transaction account processing
                capabilities, specifically designed for retail financial
                services.
              </p>
            </div>
            <div className="text-base text-gray-700 mt-2">
              <p>
                Our modern approach surpasses traditional banking and card
                processing systems, empowering you with the most advanced
                technology for lasting success.
              </p>
            </div>
          </div>
      <svg
        className="undefined max-h-[240px] md:my-sm my-lg w-full min-h-[60px]"
        preserveAspectRatio="xMidYMid slice"
        viewBox="0 0 1920 280"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.7"
          d="M-240 0L1680 0L-240 280L-240 0Z"
          fill="url(#paint0_linear_6055_471)"
        ></path>
        <defs>
          <linearGradient
            id="paint0_linear_6055_471"
            x1="458.5"
            y1="1561.14"
            x2="392.705"
            y2="52.1879"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#1F80F0"></stop>
            <stop offset="1" stop-color="#1F80F0" stop-opacity="0"></stop>
          </linearGradient>
        </defs>
      </svg>
    </>
  );
};

export default FutureOfFinance;
