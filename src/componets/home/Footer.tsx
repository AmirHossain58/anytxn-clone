
const Footer = () => {
  return (
    <footer>
      {/* Top Section */}
      <div className="bg-[#002045]">
        <div className="max-w-[1138px] mx-auto flex items-center justify-between py-11 px-4 lg:px-0">
          {/* Logo */}
          <a href="/en">
            <picture className="flex items-center bg-cover">
              <source
                srcSet="https://cdn.sanity.io/images/6jywt20u/production/ed83f5f1e94efb47572d503f53456dcff902b81c-200x32.svg?w=200&fm=webp 200w"
                type="image/webp"
                sizes="127px, (min-width: 1024px) 217px"
              />
              <source
                srcSet="https://cdn.sanity.io/images/6jywt20u/production/ed83f5f1e94efb47572d503f53456dcff902b81c-200x32.svg?w=200 200w"
                sizes="127px, (min-width: 1024px) 217px"
              />
              <img
                src="https://cdn.sanity.io/images/6jywt20u/production/ed83f5f1e94efb47572d503f53456dcff902b81c-200x32.svg"
                width="200"
                height="32"
                loading="lazy"
                className="w-[127px] lg:w-[217px] object-contain"
                alt="AnyTech"
              />
            </picture>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center text-[#00E9EA]">
            <p className="border-r border-blue-900 px-6 py-4 font-semibold">
              Our Solutions
            </p>
            <ul className="flex items-center">
              {["AnyCaaS", "AnyBaaS", "AnyPaaS"].map((item, index) => (
                <li key={index}>
                  <a
                    href={`/en/solutions/${item.toLowerCase()}`}
                    className="px-6 py-4 transition-colors duration-300 hover:text-blue-400"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Icons */}
          <div className="flex gap-6 lg:hidden">
            {[
              {
                href: "https://www.linkedin.com/company/anytxn",
                imgSrc:
                  "https://cdn.sanity.io/images/6jywt20u/production/13baec705b693635850a77c8d13a26ba9e2318c4-14x15.svg",
                alt: "LinkedIn",
              },
              {
                href: "tel:+6590021890",
                imgSrc:
                  "https://cdn.sanity.io/images/6jywt20u/production/4c3113a756fa8bc9ce8c8878e1361d5287f99c6a-17x18.svg",
                alt: "Phone",
              },
              {
                href: "mailto:enquiry@anytxn.com",
                imgSrc:
                  "https://cdn.sanity.io/images/6jywt20u/production/2cc1280badc532d4adb15fbfed7307e1c5c7696a-16x12.svg",
                alt: "Email",
              },
            ].map((icon, index) => (
              <a
                key={index}
                href={icon.href}
                className="flex items-center transition-opacity duration-300 hover:opacity-70"
              >
                <img src={icon.imgSrc} loading="lazy" alt={icon.alt} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-b border-blue-900"></div>

      {/* Bottom Section */}
      <div className="bg-[#00152D]">
        <div className="max-w-[1138px] mx-auto flex flex-col items-center justify-between py-6 text-blue-300 text-sm lg:flex-row">
          <p>
            <strong>©2023 All rights reserved</strong>. Any Technology Pte Ltd.
          </p>
          <div className="flex items-center gap-4 mt-4 lg:mt-0">
            <a
              href="/en/privacy-policy"
              className="transition-colors duration-300 hover:text-blue-400"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
