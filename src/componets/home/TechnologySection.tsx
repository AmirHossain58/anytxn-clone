import { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
   // @ts-ignore
   import "swiper/css";
   // @ts-ignore
   import "swiper/css/free-mode";
   // @ts-ignore
   import "swiper/css/navigation";
   // @ts-ignore
import "swiper/css/thumbs";
import type { Swiper as SwiperType } from "swiper/types";
// import required modules
import { FreeMode, Navigation, Thumbs,Autoplay } from "swiper/modules";

export default function TechnologySection() {
  const [thumbsSwiper, setThumbsSwiper] =   useState<SwiperType | null>(null);
  // console.log(thumbsSwiper);

  return (
    <>
      <div className="max-w-[1138px] mx-auto mt-5 md:mt-10 lg:mt-16">
        <header className="text-center space-y-4">
          <h6 className="uppercase text-[#1f80f0] font-Montserrat font-bold  ">
            TECHNOLOGY BUILT FOR YOU
          </h6>
          <h2 className="whitespace-pre-line font-Montserrat text-blue-900  font-semibold lg:text-4xl tracking-wider text-2xl my-6">
            The future of finance
          </h2>
        </header>
        <Swiper
          onSwiper={(swiper) => setThumbsSwiper(swiper)}
          loop={true}
          autoplay={{
            delay: 2000, 
            disableOnInteraction: false,
          }}
          modules={[FreeMode, Navigation, Thumbs,Autoplay]}
        
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          className="mySwiper"
        >
          <SwiperSlide>
            <button className=" text-[#1f80f0] font-semibold px-6 py-2 rounded-full hover:bg-blue-50  transition-colors duration-300">
              Customer focused
            </button>
          </SwiperSlide>
          <SwiperSlide>
            <button className="text-[#1f80f0] font-semibold px-6 py-2 rounded-full hover:bg-blue-50 transition-colors duration-300">
              Agile and adaptable
            </button>
          </SwiperSlide>
          <SwiperSlide>
            <button className="text-[#1f80f0] font-semibold px-6 py-2 rounded-full hover:bg-blue-50 transition-colors duration-300">
              Compliance ready
            </button>
          </SwiperSlide>
          <SwiperSlide>
            <button className="text-[#1f80f0] font-semibold px-6 py-2 rounded-full hover:bg-blue-50 transition-colors duration-300">
              Secure and safe
            </button>
          </SwiperSlide>
        </Swiper>

        <Swiper
          style={{
            // @ts-ignore
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          loop={true}
          autoplay={{
            delay: 2000, 
            disableOnInteraction: false,
          }}
          modules={[FreeMode, Navigation, Thumbs,Autoplay]}
          spaceBetween={10}
          navigation={true}
          thumbs={{ swiper: thumbsSwiper }}
          className="mySwiper2"
        >
          <SwiperSlide>
            <div className="swiper-slide p-8  md:p-16">
              <article className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 lg:p-16 bg-white rounded-2xl shadow-lg">
                <section className="space-y-6">
                  <header className="space-y-6">
                    <h6 className="uppercase text-[#1f80f0] font-Montserrat ">
                      Customer focused
                    </h6>
                    <h3 className="text-blue-950 font-Montserrat text-2xl lg:text-4xl">
                      Purpose-built financial services
                    </h3>
                  </header>
                  <figure className="md:hidden h-48">
                    <img
                      src="https://cdn.sanity.io/images/6jywt20u/production/c0be857dbe1878b1866b6bd0ddda7945d0f2779b-3672x2712.jpg"
                      alt="Customer Focused"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </figure>
                  <div className="text-gray-700">
                    <p className="mb-4">
                      <strong>
                        Elevate customer experience and achieve agile financial
                        product innovation with the world’s first,
                        consumer-centric, real-time transaction account
                        processing and credit limit system.
                      </strong>
                    </p>
                    <p>
                      Experience the advantages of integrated retail financial
                      services technology, real-time analysis of transactional
                      behaviour and product marketing opportunities.
                    </p>
                  </div>
                </section>
                <figure className="hidden md:block h-96">
                  <img
                    src="https://cdn.sanity.io/images/6jywt20u/production/c0be857dbe1878b1866b6bd0ddda7945d0f2779b-3672x2712.jpg"
                    alt="Customer Focused"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </figure>
              </article>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {/* Slide 2 */}
            <div className="swiper-slide p-8  md:p-1 ">
              <article className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 lg:p-16 bg-white rounded-2xl shadow-lg">
                <section className="space-y-6">
                  <header className="space-y-4">
                    <h6 className="uppercase text-[#1f80f0] font-Montserrat text-lg lg:text-xl">
                      Agile and adaptable
                    </h6>
                    <h3 className="text-blue-900 font-Montserrat text-2xl lg:text-3xl">
                      Agile and adaptable for growth
                    </h3>
                  </header>
                  <figure className="md:hidden h-48">
                    <img
                      src="https://cdn.sanity.io/images/6jywt20u/production/56e02fe1cf2f41ff52aebe65d2e1466e93a9581b-6400x4800.jpg?w=960&auto=format"
                      alt="Agile and Adaptable"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </figure>
                  <div className="text-gray-700">
                    <p className="mb-4">
                      <strong>
                        Innovate with evolving customer demands through our open
                        platform-based technology architecture. Stay ahead of
                        the ever-changing financial landscape with a strong
                        focus on security, compliance and performance.
                      </strong>
                    </p>
                    <p>
                      Optimise your offerings to unlock new revenue streams and
                      deliver an extraordinary customer experience, with
                      digitally designed core banking, payment processing and
                      lending capabilities.
                    </p>
                  </div>
                </section>
                <figure className="hidden md:block h-96">
                  <img
                    src="https://cdn.sanity.io/images/6jywt20u/production/56e02fe1cf2f41ff52aebe65d2e1466e93a9581b-6400x4800.jpg?w=960&auto=format"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </figure>
              </article>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {/* Slide 3 */}
            <div className="swiper-slide p-8  md:p-1">
              <article className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 lg:p-16 bg-white rounded-2xl shadow-lg">
                <section className="space-y-6">
                  <header className="space-y-4">
                    <h6 className="uppercase text-[#1f80f0] font-Montserrat text-lg lg:text-xl">
                      Compliance ready
                    </h6>
                    <h3 className="text-blue-900 font-Montserrat text-2xl lg:text-3xl">
                      Manage compliance with ease
                    </h3>
                  </header>
                  <figure className="md:hidden h-48">
                    <img
                      src="https://cdn.sanity.io/images/6jywt20u/production/2b48e3b3fe95abd21ff8cb659f26ca05d91e9ef7-1509x1284.png?w=960&auto=format"
                      alt="Agile and Adaptable"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </figure>
                  <div className="text-gray-700">
                    <p className="mb-4">
                      <strong>
                        Navigate through the evolving regulatory landscape with
                        confidence by streamlining compliance management—through
                        real-time risk monitoring solutions powered by AI and
                        machine learning.
                      </strong>
                    </p>
                    <p>
                      Transform your compliance strategy with flexible and
                      diversified policy rules, powered by cutting-edge
                      technology that is designed for seamless integration with
                      core banking and card payment systems.
                    </p>
                  </div>
                </section>
                <figure className="hidden md:block h-96">
                  <img
                    src="https://cdn.sanity.io/images/6jywt20u/production/2b48e3b3fe95abd21ff8cb659f26ca05d91e9ef7-1509x1284.png?w=960&auto=format"
                    alt="Agile and Adaptable"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </figure>
              </article>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {/* Slide 4 */}
            <div className="swiper-slide p-8  md:p-1">
              <article className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 lg:p-16 bg-white rounded-2xl shadow-lg">
                <section className="space-y-6">
                  <header className="space-y-4">
                    <h6 className="uppercase text-[#1f80f0] font-Montserrat text-lg lg:text-xl">
                     
Secure and safe
                    </h6>
                    <h3 className="text-blue-900 font-Montserrat text-2xl lg:text-3xl">
                    Highly secure and safe
                    </h3>
                  </header>
                  <figure className="md:hidden h-48">
                    <img
                      src="https://cdn.sanity.io/images/6jywt20u/production/56e02fe1cf2f41ff52aebe65d2e1466e93a9581b-6400x4800.jpg"
                      alt="Agile and Adaptable"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </figure>
                  <div className="text-gray-700">
                    <p className="mb-4">
                      <strong>
                      Discover unparalleled security trusted by financial institutions across the globe. Our applications are meticulously developed in compliance with international security standards, drawing on 20 years of technical expertise.


                      </strong>
                    </p>
                    <p>
                    Join over 40 esteemed Fls, each serving more than 200 million customers, and benefit from our secure, robust and reliable infrastructure.


                    </p>
                  </div>
                </section>
                <figure className="hidden md:block h-96">
                  <img
                    src="https://cdn.sanity.io/images/6jywt20u/production/912e8d76c36130d4ed0e39af1727dd0fe4fff570-10000x5000.jpg?w=960&auto=format"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </figure>
              </article>
            </div>
          </SwiperSlide>
        </Swiper>
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
}
