import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { X,MenuIcon, ChevronDown } from "lucide-react";

const ModalMenu = ({scroll}:{scroll:boolean}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [lModal, setLModal] = useState(false);
    const [sModal, setSModal] = useState(false);
    const dropdownRefLang = useRef(null);
    // const dropdownRefSolu = useRef(null);
    // console.log(lModol);
  
    // useEffect(() => {
    //   function handleClickOutside(event: MouseEvent) {
    //     if (
    //       dropdownRefLang.current &&
    //          // @ts-ignore
    //       !dropdownRefLang.current.contains(event.target)
    //     ) {
    //       setLModal(!lModal);
    //     }
    //   }
    //   function handleClickOutside2(event: MouseEvent) {
    //     if (
    //       dropdownRefLang.current &&
    //          // @ts-ignore
    //       !dropdownRefLang.current.contains(event.target)
    //     ) {
    //       setSModal(!sModal);
    //     }
    //   }
  
    //   if (sModal) {
    //     document.addEventListener("mousedown", handleClickOutside2);
    //   }
    //   if (lModal) {
    //     document.addEventListener("mousedown", handleClickOutside);
    //   }
  
    //   return () => {
    //     document.removeEventListener("mousedown", handleClickOutside);
    //   };
    // }, [lModal,sModal]);
    const handleModalClose = () => {
      setLModal(!lModal);
    };

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`${scroll?'text-gray-700':'text-white'} p-1`}
      >
         {!isOpen?<MenuIcon/>: <X className="w-6 h-6 " />}
      </button>

      {isOpen && (
        <div className="w-full absolute top-20 left-0">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="flex z-50  bg-blue-600 left-0   
         p-6 rounded-lg shadow-lg"
          >
            <div className="flex flex-col gap-8 ">
            <div className="flex flex-col justify-center items-start  gap-3  md:gap-8">
              <div
                // onMouseEnter={() => setSModal(true)}
                // onMouseLeave={() => setSModal(false)}
                className="relative flex flex-col "
                >
                <div
                  onClick={() => setSModal(!sModal)}
                //   ref={dropdownRefSolu}
                  className="flex relative  items-center gap-1 text-white  transition-colors  pb-1 hover:cursor-pointer"
                >
                  Solutions
                  <ChevronDown
                    className={`w-4 h-4 duration-500 transform ${
                      sModal && "rotate-180 "
                    }`}
                  />
                </div>
               <div>
               {sModal && (
                  <ul
                    // onMouseEnter={() => setSolutionModal(true)}
                    // onMouseLeave={() => setSModal(false)}
                    className="ml-5"
                  >
                    {[
                      { name: "AnyPaaS" },
                      { name: "AnyBaaSi" },
                      { name: "AnyPaaS" },
                    ].map((lang) => (
                      <li
                        key={lang.name}
                        className="py-1   text-white transition-colors hover:cursor-pointer  hover:text-[#1f80f0] "
                      >
                        <button className="flex space-x-1 min-w-40 hover:text-[#1f80f0]">
                          <span className="capitalize">{lang.name}</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
               </div>
              </div>
              <a className="text-white  border-[#1f80f0]   transition-colors  hover:border-white   pb-1">
                Services
              </a>
              <a className="text-white  border-[#1f80f0]   transition-colors  hover:border-white  pb-1">
                About Us
              </a>
              <div
                onMouseLeave={() => setLModal(false)}
                className="relative pb-1"
              >
               <div>
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
            {/* <ul className="mt-4 space-y-4">
              <li><a href="/en/solutions" className="text-blue-600 hover:underline">Solutions</a></li>
              <li><a href="/en/services" className="text-blue-600 hover:underline">Services</a></li>
              <li><a href="/en/about-us" className="text-blue-600 hover:underline">About Us</a></li>
            </ul> */}
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default ModalMenu;
