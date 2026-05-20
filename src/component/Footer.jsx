import { useContext } from "react";
import { assets } from "../assets/assets";
import { StoreContext } from "./storeContext";

const Footer = () => {
  const { email, setEmail } = useContext(StoreContext);

  return (
    <footer className="bg-[#F6F9FC] text-gray-500/80 mt-auto">
      
      {/* Main Footer */}
      <div className="pt-10 px-6 md:px-16 lg:px-24 xl:px-32">

        <div className="flex flex-wrap justify-between gap-12 pb-10">

          {/* Logo Section */}
          <div className="max-w-80">
            <img
              src={assets.logo}
              alt="logo"
              className="brightness-0 mb-4 h-8 md:h-9"
            />

            <p className="text-sm leading-6">
              Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's
              standard dummy text.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-4">

              <img
                src={assets.instagramIcon}
                alt="instagram"
                className="cursor-pointer"
              />

              <img
                src={assets.facebookIcon}
                alt="facebook"
                className="cursor-pointer"
              />

              <img
                src={assets.twitterIcon}
                alt="twitter"
                className="cursor-pointer"
              />

              <img
                src={assets.linkendinIcon}
                alt="linkedin"
                className="cursor-pointer"
              />
            </div>
          </div>

          {/* Company */}
          <div>
            <h2 className="text-base text-gray-800 font-['Playfair_Display']">
              COMPANY
            </h2>

            <ul className="mt-4 flex flex-col gap-2 text-sm">

              <li>
                <a href="#" className="hover:text-black duration-200">
                  About
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-black duration-200">
                  Careers
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-black duration-200">
                  Press
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-black duration-200">
                  Blog
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-black duration-200">
                  Partners
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h2 className="text-base text-gray-800 font-['Playfair_Display']">
              SUPPORT
            </h2>

            <ul className="mt-4 flex flex-col gap-2 text-sm">

              <li>
                <a href="#" className="hover:text-black duration-200">
                  Help Center
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-black duration-200">
                  Safety Information
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-black duration-200">
                  Cancellation Options
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-black duration-200">
                  Contact Us
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-black duration-200">
                  Accessibility
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="max-w-80">
            <h2 className="text-base text-gray-800 font-['Playfair_Display']">
              STAY UPDATED
            </h2>

            <p className="mt-4 text-sm leading-6">
              Subscribe to our newsletter for inspiration and special offers.
            </p>

            <div className="flex items-center mt-4">

              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full h-10 border border-gray-300 rounded-l px-3 outline-none bg-white"
              />

              <button className="h-10 w-10 flex items-center justify-center bg-black rounded-r">

                <img
                  src={assets.arrowIcon}
                  alt="arrow"
                  className="invert"
                />
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gray-300" />

        {/* Bottom Footer */}
        <div className="py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-sm">

          <p>
            © {new Date().getFullYear()}{" "}
            <a
              href="https://prebuiltui.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black"
            >
              PrebuiltUI
            </a>
            . All rights reserved.
          </p>

          <ul className="flex items-center gap-4">

            <li>
              <a href="#" className="hover:text-black duration-200">
                Privacy
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-black duration-200">
                Terms
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-black duration-200">
                Sitemap
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;