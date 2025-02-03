import { useSpring, animated } from 'react-spring';

const images = [
  {
    src: "https://cdn.sanity.io/images/6jywt20u/production/67ef6d224529c5521d5d38b4ac18521f589865d9-603x414.png",
    alt: "BANK OF CHENGDE",
    title: "BANK OF CHENGDE"
  },
  {
    src: "https://cdn.sanity.io/images/6jywt20u/production/9c57a834d791df3ba5062693e0cf60cc879f46da-2560x768.png",
    alt: "BANK OF CHINA",
    title: "BANK OF CHINA"
  },
  {
    src: "https://cdn.sanity.io/images/6jywt20u/production/8f6dbd7e59875cb02e47e9887935c668191af0f1-778x258.png",
    alt: "Bank of Shanghai logo",
    title: "Bank of Shanghai"
  },
  {
    src: "https://cdn.sanity.io/images/6jywt20u/production/c86c67596c1893c78c783bcc323531a7ea723c20-1000x182.png",
    alt: "CGB",
    title: "CGB"
  },
  {
    src: "https://cdn.sanity.io/images/6jywt20u/production/3ce67f3ece1c1b696d9d6e75f665c31ac155b679-960x540.png",
    alt: "CHINA CITIC BANK",
    title: "CHINA CITIC BANK"
  },
  {
    src: "https://cdn.sanity.io/images/6jywt20u/production/b01bae36b9db80dc1f9af2bf3e931bc08267827b-855x292.png",
    alt: "OneBank",
    title: "OneBank"
  },
  {
    src: "https://cdn.sanity.io/images/6jywt20u/production/f21131d4c2a144139ed50dbacc56af65bad6541f-1599x628.png",
    alt: "PING AN BANK",
    title: "PING AN BANK"
  },
  {
    src: "https://cdn.sanity.io/images/6jywt20u/production/d2877eb14e7b59f820bcb49d69363c49e134ee81-1626x250.png",
    alt: "POSTAL SAVINGS BANK OF CHINA",
    title: "POSTAL SAVINGS BANK OF CHINA"
  },
  {
    src: "https://cdn.sanity.io/images/6jywt20u/production/2829e9f6c94501d700b332fab14832b6eb64e6b5-5000x1970.png",
    alt: "sea",
    title: "sea"
  },
  {
    src: "https://cdn.sanity.io/images/6jywt20u/production/9764422d5b731f38edd216852c7c77e650647975-500x330.png",
    alt: "Shandong City Commercial Banks Alliance",
    title: "Shandong City Commercial Banks Alliance"
  },
  {
    src: "https://cdn.sanity.io/images/6jywt20u/production/d96d229024fe964c6cc68d62beb75b126b08d3b5-318x61.svg",
    alt: "VipFubon Consumer Finance",
    title: "VipFubon Consumer Finance"
  },
  {
    src: "https://cdn.sanity.io/images/6jywt20u/production/ab9f4a4a11a33031761167b640dda78d89009f1e-724x137.png",
    alt: "XIAMEN INTERNATIONAL BANK",
    title: "XIAMEN INTERNATIONAL BANK"
  },
  {
    src: "https://cdn.sanity.io/images/6jywt20u/production/8d2528e19c38722cc52dda4d8b6976775c18db29-800x527.png",
    alt: "XW",
    title: "XW"
  },
  {
    src: "https://cdn.sanity.io/images/6jywt20u/production/ba16ca6efbbe78a1e56ff61bd8befc0f0f93e18a-1200x337.png",
    alt: "SPD BANK",
    title: "SPD BANK"
  },
  {
    src: "https://cdn.sanity.io/images/6jywt20u/production/5f4683ef95594b29414088c82c00dddb4c61338b-862x289.png",
    alt: "DCS",
    title: "DCS"
  }
];
const TrustedByTheBest = () => {
  const yearsExperienceProps = useSpring({ from: { number: 0 }, to: { number: 20 }, config: { duration: 1500 } });
  const financialInstitutionsProps = useSpring({ from: { number: 0 }, to: { number: 40 }, config: { duration: 1500 } });
  const customersEachProps = useSpring({ from: { number: 0 }, to: { number: 200 }, config: { duration: 1500 } });


  return (
    <div className="max-w-[1138px] mx-auto" contentEditable="false">
       <h6
    className="pb-lg text-center lg:pb-md lg:text-head-6 text-res-head-6 uppercase text-blue-main font-Montserrat text-[#0d68d2]"
    
  >
    TRUSTED BY THE BEST
  </h6>

     <div className="items-center justify-between max-lg:space-y-6 lg:flex xl:mx-28">
      <div className="flex items-center border-dashed max-lg:justify-between lg:flex-col px-6 my-3 md:px-0 md:my-0  max-lg:border-b border-blue-highlight max-lg:pb-xs">
        <animated.h2 className="max-[280px]:text-[40px] text-[64px] lg:text-[96px] font-Montserrat tracking-[-0.02em] font-semibold leading-none bg-[#0d68d2] text-transparent bg-clip-text">
          &gt;<animated.span>{yearsExperienceProps.number.to(n => n.toFixed(0))}</animated.span>
        </animated.h2>
        <p className="text-right text-[#151D2F] lg:text-center max-lg:text-res-link lg:text-lg lg:mt-[19px]">
          Years of Experience
        </p>
      </div>
      <div className="flex items-center border-dashed max-lg:justify-between lg:flex-col px-6 my-3 md:px-0 md:my-0  max-lg:border-b border-blue-highlight max-lg:pb-xs">
        <animated.h2 className="max-[280px]:text-[40px] text-[64px] lg:text-[96px] font-Montserrat tracking-[-0.02em] font-semibold leading-none bg-[#0d68d2] text-transparent bg-clip-text">
          <animated.span>{financialInstitutionsProps.number.to(n => n.toFixed(0))}</animated.span>+
        </animated.h2>
        <p className="text-right text-[#151D2F] lg:text-center max-lg:text-res-link lg:text-lg lg:mt-[19px]">
          Financial Institutions
        </p>
      </div>
      <div className="flex items-center border-dashed max-lg:justify-between lg:flex-col  px-6 my-3 md:px-0 md:my-0  max-lg:border-b border-blue-highlight max-lg:pb-xs">
        <animated.h2 className="max-[280px]:text-[40px] text-[64px] lg:text-[96px] font-Montserrat tracking-[-0.02em] font-semibold leading-none bg-[#0d68d2] text-transparent bg-clip-text">
          &gt;<animated.span>{customersEachProps.number.to(n => n.toFixed(0))}</animated.span>m
        </animated.h2>
        <p className="text-right text-[#151D2F] lg:text-center max-lg:text-res-link lg:text-lg lg:mt-[19px]">
          Customers Each
        </p>
      </div>
    </div>
      <div className="mt-10  md:mt-32 grid grid-cols-3 gap-x-16 gap-y-[34px] max-md:hidden lg:grid-cols-5" contentEditable="false">
        {/* Repeat the picture component for each image */}
        {images.map((image, index) => (
          <picture key={index} className="flex items-stretch bg-cover" contentEditable="false">
            <source srcSet={`${image.src}?w=320&fm=webp 320w, ${image.src}?w=640&fm=webp 640w`} type="image/webp" sizes="170px" />
            <source srcSet={`${image.src}?w=320 320w, ${image.src}?w=640 640w`} sizes="170px" />
            <img src={image.src} alt={image.alt} title={image.title} className="w-full h-auto object-contain" loading="lazy" />
          </picture>
        ))}
      </div>
    </div>
  );
};

export default TrustedByTheBest;