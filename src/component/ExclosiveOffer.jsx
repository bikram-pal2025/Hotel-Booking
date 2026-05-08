import React from "react";
import { assets, exclusiveOffers } from "../assets/assets";

const ExclosiveOffer = () => {
  return (
    <div className="w-[90%] mx-auto mt-10 mb-24">

      {/* Heading */}
      <h1 className="font-['Playfair_Display'] text-3xl lg:text-4xl">
        Exclusive Offers
      </h1>

      {/* Description + Button */}
      <div className="mt-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">

        <p className="text-[#778191] md:w-[70%] lg:w-[50%]">
          Take advantage of our limited-time offers and special packages
          to enhance your stay and create unforgettable memories.
        </p>

        <div className="group cursor-pointer flex items-center gap-2">
          <p className="font-medium">View All Offers</p>

          <img
            className="group-hover:translate-x-1 duration-300"
            src={assets.arrowIcon}
            alt=""
          />
        </div>
      </div>

      {/* Offer Cards */}
      <div className="  mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        {exclusiveOffers.map((item) => (
          <div
            key={item._id}
            className="relative group  h-[250px] rounded-xl bg-cover bg-center bg-no-repeat p-5 flex flex-col justify-start"
            style={{ backgroundImage: `url(${item.image})` }}
          >
            {/* Discount */}
            <p className="w-fit px-3 py-1 bg-white rounded-full text-xs font-medium">
              {item.priceOff}% OFF
            </p>

            {/* Title */}
            <h3 className="mt-4 text-white text-2xl font-['Playfair_Display']">
              {item.title}
            </h3>
         
            {/* description */}
            <p className="text-white font-medium" >{item.description} </p>

            {/* expiryDate */}

            <p className="text-[#C6D3D5] mt-3 text-xs font-medium">Expires {item.expiryDate} </p>

            <div className=" absolute bottom-[20px] text-white cursor-pointer flex items-center gap-2">
          <p className="font-medium">View All Offers</p>

          <img
            className="group-hover:translate-x-1 duration-300 brightness-0 invert  "
            src={assets.arrowIcon}
            alt=""
          />
        </div>
          </div>

          
        ))}
      </div>
    </div>
  );
};

export default ExclosiveOffer;