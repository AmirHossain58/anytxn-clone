import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import ModalMenu from "../shared/modal-menu";

const NavbarHome = () => {
  const [lModal, setLModal] = useState(false);
  const [sModal, setSModal] = useState(false);
  const dropdownRefLang = useRef(null);
  const dropdownRefSolu = useRef(null);
  // console.log(lModol);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRefLang.current &&
           // @ts-ignore
        !dropdownRefLang.current.contains(event.target)
      ) {
        setLModal(!lModal);
      }
    }
    function handleClickOutside2(event: MouseEvent) {
      if (
        dropdownRefLang.current &&
           // @ts-ignore
        !dropdownRefLang.current.contains(event.target)
      ) {
        setSModal(!sModal);
      }
    }

    if (sModal) {
      document.addEventListener("mousedown", handleClickOutside2);
    }
    if (lModal) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [lModal]);
  const handleModalClose = () => {
    setLModal(!lModal);
  };

  return (
    <nav className="z-50 relative top-0">
      {/* Navigation Bar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="  w-full  backdrop-blur-sm duration-300 "
      >
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 200 32"
              height="32"
              width="200"
            >
              <g clip-path="url(#clip0_3940_240)">
                <path
                  fill="white"
                  d="M80.4531 4.06999H90.6886V29.89H95.5378V4.06999H106.208V0.421875H80.4531V4.06999Z"
                ></path>
                <path
                  fill="white"
                  d="M185.343 0.421875V13.2371H170.881V0.421875H166.031V29.89H170.881V16.8864H185.343V29.89H190.145V0.421875H185.343Z"
                ></path>
                <path
                  fill="white"
                  d="M108.619 12.9244V17.3862C108.619 24.2916 114.356 29.89 121.432 29.89H132.37V26.0304H121.539C117.361 26.0304 113.973 22.7245 113.973 18.6471V17.1145H132.37V13.1986H113.973V11.6661C113.973 7.58869 117.361 4.2827 121.539 4.2827H132.37V0.421875H121.432C114.356 0.421875 108.619 6.02027 108.619 12.9257V12.9244Z"
                ></path>
                <path
                  fill="white"
                  d="M137 12.9244V17.3862C137 24.2916 142.736 29.89 149.813 29.89H160.751V26.0304H149.92C145.742 26.0304 142.354 22.7245 142.354 18.6471V11.6648C142.354 7.5874 145.742 4.28142 149.92 4.28142H160.751V0.421875H149.813C142.736 0.421875 137 6.02027 137 12.9257V12.9244Z"
                ></path>
                <path
                  fill="white"
                  d="M33.2767 0.971489L55.1999 20.4319C55.3365 20.5524 55.4139 20.7241 55.4139 20.9035V29.4914C55.4139 30.0449 54.7416 30.3345 54.3214 29.9629L32.3996 10.5012C32.263 10.3807 32.1855 10.209 32.1855 10.0296V1.44304C32.1855 0.88948 32.8578 0.599886 33.278 0.971489H33.2767Z"
                ></path>
                <path
                  fill="white"
                  d="M32.1855 16.3965V30.2932C32.1855 30.6443 32.4771 30.93 32.8381 30.93H48.0909L32.1855 16.3965Z"
                ></path>
                <path
                  fill="white"
                  d="M28.2582 9.68413V0.629834C28.2582 0.282577 27.9706 0.00195312 27.6148 0.00195312H16.1227C15.8811 0.00195312 15.6592 0.133936 15.5502 0.344084L0.099202 29.925C-0.118769 30.3427 0.192431 30.8373 0.671705 30.8373H9.78842C10.0326 30.8373 10.2559 30.7028 10.3635 30.49L13.7749 23.8076C13.8839 23.5949 14.1071 23.4603 14.3501 23.4603H27.6135C27.9693 23.4603 28.2569 23.1797 28.2569 22.8325V17.0239C28.2569 16.678 27.9693 16.3973 27.6148 16.396L18.6044 16.3755C18.1278 16.3755 17.8179 15.8848 18.0306 15.4683L20.4848 10.6605C20.5937 10.4478 20.817 10.3133 21.0599 10.3133H27.6135C27.9693 10.3133 28.2569 10.0327 28.2569 9.68541L28.2582 9.68413Z"
                ></path>
                <path
                  fill="white"
                  d="M55.4141 14.5355V0.637522C55.4141 0.286422 55.1226 0.00195312 54.7628 0.00195312H39.5088L55.4141 14.5355Z"
                ></path>
                <path
                  fill="white"
                  d="M67.1846 0.294855L59.2864 14.4773C59.2483 14.5465 59.2273 14.6234 59.2273 14.7015V30.4139C59.2273 30.674 59.4426 30.8842 59.7092 30.8842H69.3104C69.577 30.8842 69.7923 30.674 69.7923 30.4139V14.7015C69.7923 14.6234 69.812 14.5465 69.8514 14.4773L77.5027 0.743341C77.6774 0.430682 77.445 0.0488281 77.0799 0.0488281H67.6087C67.4327 0.0488281 67.2699 0.143651 67.1859 0.294855H67.1846Z"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_3940_240">
                  <rect
                    transform="translate(0.0283203 0.00195312)"
                    fill="white"
                    height="30.9276"
                    width="190.117"
                  ></rect>
                </clipPath>
              </defs>
            </svg>

            {/* ANTECH */}
          </h1>

          {/* <div className="hidden md:flex items-center gap-8">
            <div className="flex gap-6">
              <a className="text-white transition-colors">
                Solutions
              </a>
              <a className="text-white transition-colors">
                Services
              </a>
              <a className="text-white transition-colors">
                About Us
              </a>
              <div className="flex items-center gap-1 text-blue-400">
                <span>EN</span>
                <ChevronDown className="w-4 h-4" />
              </div>
            </div>
          </div> */}
          <div className="hidden md:flex items-center gap-8 ">
            <div className="flex items-center gap-3  md:gap-8">
              <div
                onMouseEnter={() => setSModal(true)}
                // onMouseLeave={() => setSModal(false)}
                className="relative"
              >
                <div
                  ref={dropdownRefSolu}
                  className="flex items-center gap-1 text-white  transition-colors pb-1 hover:cursor-pointer"
                >
                  Solutions
                  <ChevronDown
                    className={`w-4 h-4 duration-500 transform ${
                      sModal && "rotate-180 "
                    }`}
                  />
                </div>
                {sModal && (
                  <ul
                    // onMouseEnter={() => setSolutionModal(true)}
                    onMouseLeave={() => setSModal(false)}
                    className="absolute z-50  overflow-visible bottom-0 translate-y-full bg-white rounded  w-max py-3 divide-y-2 divide-slate-300 space-y-1.5 shadow-lg"
                  >
                    {[
                      { name: "AnyPaaS" },
                      { name: "AnyBaaSi" },
                      { name: "AnyPaaS" },
                    ].map((lang) => (
                      <li
                        key={lang.name}
                        className="py-1 px-3   text-[#0B305B] transition-colors hover:cursor-pointer  hover:text-[#1f80f0] "
                      >
                        <button className="flex space-x-1 min-w-40 hover:text-[#1f80f0]">
                          <span className="capitalize">{lang.name}</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <a className="text-white  border-[#1f80f0]   transition-colors hover:border-b-2 hover:border-white  border-b-2 pb-1">
                Services
              </a>
              <a className="text-white  border-[#1f80f0]   transition-colors hover:border-b-2 hover:border-white  border-b-2 pb-1">
                About Us
              </a>
              <div
                onMouseLeave={() => setLModal(false)}
                className="relative pb-1"
              >
                <div
                  ref={dropdownRefLang}
                  className="flex items-center gap-1 text-white border-2 rounded-full p-2 hover:cursor-pointer"
                  onClick={handleModalClose}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 12 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-current"
                  >
                    <path
                      d="M8.25 4.25H4.10156C4.45312 2.16406 5.25 0.6875 6.1875 0.6875C7.10156 0.6875 7.92188 2.16406 8.25 4.25ZM3.9375 6.5C3.9375 5.98438 3.96094 5.49219 4.00781 5H8.34375C8.39062 5.49219 8.41406 5.98438 8.41406 6.5C8.41406 7.03906 8.39062 7.53125 8.34375 8H4.00781C3.96094 7.53125 3.9375 7.03906 3.9375 6.5ZM11.5312 4.25H9C8.78906 2.9375 8.41406 1.74219 7.82812 0.945312C9.51562 1.4375 10.875 2.67969 11.5312 4.25ZM4.52344 0.945312C3.9375 1.74219 3.5625 2.9375 3.35156 4.25H0.820312C1.47656 2.67969 2.83594 1.4375 4.52344 0.945312ZM11.7891 5C11.9062 5.49219 11.9766 5.98438 11.9766 6.5C11.9766 7.03906 11.9062 7.53125 11.7891 8H9.09375C9.14062 7.50781 9.1875 7.01562 9.1875 6.5C9.1875 6.00781 9.14062 5.49219 9.09375 5H11.7891ZM3.1875 6.5C3.1875 7.01562 3.21094 7.50781 3.25781 8H0.5625C0.445312 7.53125 0.375 7.03906 0.375 6.5C0.375 5.98438 0.445312 5.49219 0.5625 5H3.25781C3.21094 5.49219 3.1875 6.00781 3.1875 6.5ZM4.10156 8.75H8.25C7.92188 10.8594 7.10156 12.3125 6.1875 12.3125C5.25 12.3125 4.45312 10.8594 4.10156 8.75ZM7.82812 12.0781C8.41406 11.2812 8.8125 10.0859 9 8.75H11.5312C10.875 10.3438 9.51562 11.5859 7.82812 12.0781ZM0.820312 8.75H3.35156C3.5625 10.0859 3.9375 11.2812 4.52344 12.0781C2.83594 11.5859 1.47656 10.3438 0.820312 8.75Z"
                      fill="currentColor"
                    />
                  </svg>
                  <span>EN</span>
                  <ChevronDown
                    className={`w-4 duration-500 transform h-4 ${
                      lModal && "rotate-180 "
                    }`}
                  />
                </div>
                {lModal && (
                  <div
                    className=" absolute z-50 overflow-visible bottom-1 translate-y-full bg-white rounded text-black w-max p-3 divide-y-2 divide-slate-300 space-y-1.5 shadow-2xl"
                    // onMouseEnter={() => setLModal(true)}
                    // onMouseLeave={() => setLModal(false)}
                  >
                    <ul className="">
                      {[
                        { code: "en", name: "English" },
                        { code: "th", name: "Thai" },
                        { code: "id", name: "Bahasa Indonesia" },
                        { code: "tw", name: "Traditional Chinese" },
                      ].map((lang) => (
                        <li
                          key={lang.code}
                          className="py-1 text-[#0B305B] hover:text-[#1f80f0]  transition-colors"
                        >
                          <button className="flex space-x-1 w-full hover:cursor-pointer hover:text-[#1f80f0]">
                            <span className="uppercase">{lang.code}</span>
                            <span className="capitalize">({lang.name})</span>
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
          <button className="ml-4 px-6  text-white hover:bg-white hover:text-[#539df4]  border border-white bg-transparent  hover:text-blue-main hidden max-lg:w-full max-lg:justify-center max-lg:mt-16 pl-6 pr-10 py-[13px] text-res-link lg:text-link lg:flex items-center group/highlight transition-all drop-shadow-button-primary hover:shadow-button-primary rounded-xs font-semibold hover:scale-103">
            {`Contact Us >`}
          </button>
          {/* menu modal for small device */}
          <ModalMenu scroll={false}/>
        </div>
      </motion.nav>
    </nav>
  );
};

export default NavbarHome;
