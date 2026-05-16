import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { StoreContext } from "./storeContext";

const Inspired = () => {
    const {email,setEmail} = useContext(StoreContext)
  return (
    <>
      <div className=" mt-15 mb-15 flex justify-center items-center ">
     <div className="bg-[#101828] w-[90%] lg:w-[65%] rounded-xl px-6 py-10 flex flex-col items-center text-center gap-6">

  <h1 className="text-4xl md:text-[40px] font-['Playfair_Display'] text-white">
    Stay Inspired
  </h1>

  <p className="text-[#778191] text-sm lg:max-w-[70%]">
    Join our newsletter and be the first to discover new destinations,
    exclusive offers, and travel inspiration.
  </p>

  {/* input + subscribe */}

  <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">

    <input
      className="outline-none border border-white/12 text-gray-300 bg-white/10 px-5 py-3 rounded-sm min-w-[260px]"
      type="email"
      value={email}
      onChange={(e)=>setEmail(e.target.value)}
      placeholder="Enter your email"
    />

    {/* subscribe button */}

    <button className="flex items-center justify-center gap-2 bg-black text-white px-5 py-3 rounded-sm cursor-pointer group w-[120px] mx-auto ">

      Subscribe

      <img
        className="brightness-0 invert group-hover:translate-x-1 duration-300 h-[10px]"
        src={assets.arrowIcon}
        alt=""
      />

    </button>

  </div>

  <p className="text-[#778191] text-[10px]">
    By subscribing, you agree to our Privacy Policy and consent to receive updates.
  </p>

</div>
      </div>
    </>
  );
};

export default Inspired;
