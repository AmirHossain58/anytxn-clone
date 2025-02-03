import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import ModalMenu from "./modal-menu";

const Navbar = ({ showNavbar }:{ showNavbar: boolean}) => {
  const [lModal, setLModal] = useState(false);
  const [sModal, setSModal] = useState(false);
  const dropdownRefLang = useRef(null);
  const dropdownRefSolu = useRef(null);
  // console.log(lModol);

  useEffect(() => {
    function handleClickOutside(event : MouseEvent) {
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
        !dropdownRefLang.current.contains(event.target as Node)
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
    <header
    // className="bg-transparent text-white max-lg:bg-blue-500 max-lg:py-8 top-0 lg:absolute w-full lg:pt-4 lg:pb-6 text-sm lg:text-base z-50"
    >
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`z-90 backdrop-blur-sm border-b border-gray-800 fixed top-0 left-0 w-full bg-white shadow-md transition-transform duration-300 ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div>
            <img
              src="https://cdn.sanity.io/images/6jywt20u/production/70e2228631883a893695c64b637b99dc8661871c-171x28.svg?w=171&auto=format"
              alt=""
            />
          </div>

          <div className="hidden md:flex items-center gap-8 ">
            <div className="flex items-center gap-3  md:gap-8">
              <div
                onMouseLeave={() => setSModal(false)}
                onMouseEnter={() => setSModal(true)}
                className="relative"
              >
                <div
                  ref={dropdownRefSolu}
                  className="flex items-center gap-1 text-[#1f80f0]  transition-colors pb-1"
                >
                  Solutions
                  <ChevronDown
                    className={`w-4 h-4 duration-500 transform ${
                      sModal && "rotate-180 "
                    }`}
                  />
                </div>
                {sModal && (
                  <ul className="absolute overflow-visible bottom-0 translate-y-full bg-white rounded text-black w-max py-3 divide-y-2 divide-slate-300 space-y-1.5 shadow-lg">
                    {[
                      { name: "AnyPaaS" },
                      { name: "AnyBaaSi" },
                      { name: "AnyPaaS" },
                    ].map((lang) => (
                      <li
                        key={lang.name}
                        className="py-1 px-3 min-w-60  text-[#0B305B] hover:text-[#1f80f0] transition-colors duration-200"
                      >
                        <button className="flex space-x-1">
                          <span className="capitalize">{lang.name}</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <a className="text-[#1f80f0]  border-white   transition-colors hover:border-b-2 hover:border-[#1f80f0]  border-b-2 pb-1">
                Services
              </a>
              <a className="text-[#1f80f0]  border-white   transition-colors hover:border-b-2 hover:border-[#1f80f0]  border-b-2 pb-1">
                About Us
              </a>
              <div
                onMouseLeave={() => setLModal(false)}
                className="relative pb-1"
              >
                <div
                  ref={dropdownRefLang}
                  className="flex items-center gap-1 text-[#1f80f0] border-2 rounded-full p-2"
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
                  <ul className="absolute overflow-visible bottom-0 translate-y-full bg-white rounded text-black w-max p-3 divide-y-2 divide-slate-300 space-y-1.5 shadow-2xl">
                    {[
                      { code: "en", name: "English" },
                      { code: "th", name: "Thai" },
                      { code: "id", name: "Bahasa Indonesia" },
                      { code: "tw", name: "Traditional Chinese" },
                    ].map((lang) => (
                      <li
                        key={lang.code}
                        className="py-1 text-[#0B305B] hover:text-[#1f80f0] transition-colors duration-200"
                      >
                        <button className="flex space-x-1">
                          <span className="uppercase">{lang.code}</span>
                          <span className="capitalize">({lang.name})</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
          <a
            href="/en/contact-us"
            className="hover:bg-[#FF8144]  bg-[#FE8B53] text-white  hidden max-lg:w-full max-lg:justify-center max-lg:mt-16 pl-6 pr-10 py-[13px] text-res-link lg:text-link lg:flex items-center group/highlight transition-all drop-shadow-button-primary font-black hover:shadow-button-primary rounded-xs"
          >
            Contact Us
            <svg
              className="fill-white translate-x-3.5 transition-transform group-hover/highlight:translate-x-5"
              width="7"
              height="11"
              viewBox="0 0 7 11"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6.67969 5.89844L2.13281 10.4688C1.89844 10.6797 1.54688 10.6797 1.33594 10.4688L0.796875 9.92969C0.585938 9.71875 0.585938 9.36719 0.796875 9.13281L4.40625 5.5L0.796875 1.89062C0.585938 1.65625 0.585938 1.30469 0.796875 1.09375L1.33594 0.554688C1.54688 0.34375 1.89844 0.34375 2.13281 0.554688L6.67969 5.125C6.89062 5.33594 6.89062 5.6875 6.67969 5.89844Z"></path>
            </svg>
          </a>
          <ModalMenu scroll={true}  />
        </div>
      </motion.nav>
    </header>
  );
};

export default Navbar;
