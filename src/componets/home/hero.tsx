import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function HeroSection() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-blue-900">
      {/* Navigation Bar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className=" w-full  backdrop-blur-sm border-b border-gray-800"
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

          <div className="hidden md:flex items-center gap-8">
            <div className="flex gap-6">
              <a className="text-gray-300 hover:text-white transition-colors">
                Solutions
              </a>
              <a className="text-gray-300 hover:text-white transition-colors">
                Services
              </a>
              <a className="text-gray-300 hover:text-white transition-colors">
                About Us
              </a>
              <div className="flex items-center gap-1 text-blue-400">
                <span>EN</span>
                <ChevronDown className="w-4 h-4" />
              </div>
            </div>
          </div>
            <button className="ml-4 px-6  text-white hover:bg-white hover:text-[#539df4]  border border-white bg-transparent  hover:text-blue-main hidden max-lg:w-full max-lg:justify-center max-lg:mt-16 pl-6 pr-10 py-[13px] text-res-link lg:text-link lg:flex items-center group/highlight transition-all drop-shadow-button-primary hover:shadow-button-primary rounded-xs font-semibold hover:scale-103">
              {`Contact Us >`}
            </button>
        </div>
      </motion.nav>

      {/* Hero Content */}
      <div className="container mx-auto px-4 pt-32 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-3xl text-center mx-auto"
        >
          <div className="flex justify-between">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Embrace the
            <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              {" "}
              future of finance
            </span>
          </h1>
          <img src="/banner123.avif" alt="" />
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-300 mb-8"
          >
            Reimagine financial services with AnyTech's open platform,
            distributed banking solution that powers transformation
          </motion.p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-all"
          >
            Reach Out to Us
          </motion.button>
        </motion.div>

        {/* Footer Text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-24 text-center"
        >
          <p className="text-gray-400 uppercase tracking-widest text-sm">
            POWERING THE FUTURE OF FINANCE
          </p>
          <p className="text-gray-300 mt-2">Innovation now</p>
        </motion.div>
      </div>
    </div>
  );
}
