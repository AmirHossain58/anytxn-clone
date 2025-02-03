import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
// @ts-ignore
import 'swiper/css';
// @ts-ignore
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
export default function OurPhilosophy() {
  return (
    <section className="max-w-[1138px] mx-auto ">
      <div className="text-center">
        <h6 className="lg:text-xl mt-5 text-base uppercase text-[#57a0f4] font-semibold">
          OUR PHILOSOPHY
        </h6>

        <h2 className="whitespace-pre-line text-2xl lg:text-6xl text-[#0B305B]  font-bold">
          Human-centred innovation
        </h2>
      </div>
      <img className="py-8 hidden md:block " src="/philosophy.avif" alt="" />
      <img className="py-8 px-8 md:hidden" src="/philosophy-sm.avif" alt="" />


     <div className='md:hidden pl-10'>
     <Swiper
      slidesPerView={1.3}
      spaceBetween={30}
      pagination={{ clickable: true }}
      breakpoints={{
        1024: { slidesPerView: 3 },
        768: { slidesPerView: 2 },
      }}
      modules={[Pagination]}
      className="mySwiper"
    >
      {data.map((item) => (
        <SwiperSlide key={item.title}>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
            className="p-8 rounded-[20px] bg-[#F8FCFF]"
          >
            <div className='h-10 w-10'>
            <img className='' src={item.icon} alt="" />
            </div>
            <h3 className="my-6 text-2xl font-semibold text-[#0B305B]">
              {item.title}
            </h3>
            <p className="text-[#164377]">{item.details}</p>
          </motion.div>
        </SwiperSlide>
      ))}
    </Swiper>
     </div>

      <div className="hidden  md:grid md:grid-cols-3 gap-[30px]">
        {data.map((item) => (
          <motion.div
          initial={{ opacity: 0, y: 100 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 2 }} 
           key={item.title} className="p-8 rounded-[20px]  bg-[#F8FCFF]">
            <img src={item.icon} alt="" />
            <h3 className="my-6 text-2xl font-semibold text-[#0B305B]">
              {item.title}
            </h3>
            <p className="text-[#164377]">{item.details}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

const data = [
  {
    icon: "/a.svg",
    title: "Full-suite solutions",
    details:
      "Experience the ease of integration across various banking and payment functions with our comprehensive suite of solutions.",
  },
  {
    icon: "/b.avif",
    title: "Simplify the complex",
    details:
      "Simplify complex processes and optimise your financial operations by leveraging the power of AI, Blockchain, Cloud Computing, and Big Data.",
  },
  {
    icon: "/c.svg",
    title: "Cutting-edge tech",
    details:
      "We seamlessly combine cutting-edge technologies, resulting in an unparalleled fintech experience for financial institutions.",
  },
];
