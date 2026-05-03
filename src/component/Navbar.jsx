import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { StoreContext } from "./storeContext";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { setLogin, setLoginProfile, loginProfile } = useContext(StoreContext);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Hotel", path: "/hotel-room" },
    { name: "Experiences", path: "/exprience" },
    { name: "About", path: "/about" },
  ];

  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [openProfile, setOpenProfile] = useState(false);

  const isHome = location.pathname === "/";

  React.useEffect(() => {
    const handleScroll = () => {
      if (isHome) {
        setIsScrolled(window.scrollY > 10);
      } else {
        setIsScrolled(true); // always white on other pages
      }
    };

    handleScroll(); // run on route change

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full flex items-center justify-between px-4 md:px-16 lg:px-24 xl:px-32 transition-all duration-500 z-50 ${
        isHome
          ? isScrolled
            ? "bg-white/80 shadow-md text-gray-700 backdrop-blur-lg py-3 md:py-4"
            : "bg-indigo-500 py-4 md:py-6"
          : "bg-white shadow-md text-gray-700 py-3 md:py-4"
      }`}
    >
      {/* Logo */}
      <Link to="/">
        <img
          src={assets.logo}
          alt="logo"
          className={
            isHome && !isScrolled ? "brightness-0 invert" : "brightness-0"
          }
        />
      </Link>

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center gap-4 lg:gap-8">
        {navLinks.map((link, i) => (
          <Link
            key={i}
            to={link.path}
            className={`group flex flex-col gap-0.5 ${
              isHome && !isScrolled ? "text-white" : "text-gray-700"
            }`}
          >
            {link.name}
            <div
              className={`${
                isHome && !isScrolled ? "bg-white" : "bg-gray-700"
              } h-0.5 w-0 group-hover:w-full transition-all duration-300`}
            />
          </Link>
        ))}
      </div>

      {/* Desktop Right */}
      <div className="hidden md:flex items-center gap-8">
        {/* Search Icon */}
        <svg
          className={`h-6 w-6 transition-all duration-500 ${
            isHome && !isScrolled ? "text-white" : "text-gray-700"
          }`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>

        {/* Login Button */}
        {!loginProfile && (
          <button
            onClick={() => {
              setLogin(true);
              navigate("/");
            }}
            className="px-8 py-2.5 rounded-full ml-4 cursor-pointer bg-black text-white"
          >
            Login
          </button>
        )}

        {/* Profile + Hover Menu */}
        {loginProfile && (
          <div className="relative group">
            {/* Profile Icon */}
            <img
              className={`h-10 cursor-pointer ${
                isHome && !isScrolled ? "brightness-0 invert" : "brightness-0"
              }`}
              src={assets.userIcon}
              alt=""
            />

            {/* Hover Menu */}
            <div
              className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-md
                      opacity-0 invisible group-hover:opacity-100 group-hover:visible
                      transition-all duration-300 z-50"
            >
              <ul className="text-sm text-gray-700">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  My Profile
                </li>
                <Link
                  to="/my-booking"
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  My Bookings
                </Link>
                <li
                  onClick={() => setLoginProfile(false)}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  Logout
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>

      {/* Mobile Menu Button */}
      <div className="flex items-center gap-3 md:hidden">
        <svg
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`h-6 w-6 cursor-pointer ${
            isHome && !isScrolled ? "text-white" : "text-gray-700"
          }`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <line x1="4" y1="6" x2="20" y2="6" />
          <line x1="4" y1="12" x2="20" y2="12" />
          <line x1="4" y1="18" x2="20" y2="18" />
        </svg>

        {/* user icon + hover menu for mobile */}

        {loginProfile && (
          <div className="relative group">
            <img
              onClick={() => setOpenProfile((prev) => !prev)}
              className={`h-10 cursor-pointer ${
                isHome && !isScrolled ? "brightness-0 invert" : "brightness-0"
              }`}
              src={assets.userIcon}
              alt="user"
            />

            {/* hover menu mobile */}

            {openProfile && (
              <div className=" absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-md z-50 transition-all duration-300 ">
                <ul className="text-sm text-gray-700">
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    My Profile
                  </li>
                  <Link
                    to="/my-booking"
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    My Bookings
                  </Link>
                  <li
                    onClick={() => setLoginProfile(false)}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    Logout
                  </li>
                </ul>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-white text-base flex flex-col md:hidden items-center justify-center gap-6 font-medium text-gray-800 transition-all duration-500 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          className="absolute top-4 right-4"
          onClick={() => setIsMenuOpen(false)}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {navLinks.map((link, i) => (
          <Link key={i} to={link.path} onClick={() => setIsMenuOpen(false)}>
            {link.name}
          </Link>
        ))}

        {!loginProfile && (
          <button
            onClick={() => {
              setLogin(true);
              navigate("/");
            }}
            className="px-8 py-2.5 rounded-full ml-4 cursor-pointer bg-black text-white"
          >
            Login
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
