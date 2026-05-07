import React from "react";
import { assets, hotelDetails } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const TopHotel = () => {
     const navigate = useNavigate();
  return (
   
    <>
      <div className="mt-20 mb-24 w-[90%] md:w-[90%] mx-auto flex flex-col items-center justify-center gap-4">

        {/* Heading */}
        <h1 className="font-thin text-4xl md:text-5xl lg:text-4xl font-['Playfair_Display']">
          Featured Destination
        </h1>

        {/* Description */}
        <p className="text-sm sm:text-md text-center text-[#778191] max-w-2xl">
          Discover our handpicked selection of exceptional properties around the
          world, offering unparalleled luxury and unforgettable experiences.
        </p>

        {/* Cards */}
        <div className="mt-10 flex flex-wrap justify-center items-center gap-6">

          {hotelDetails.map((data) => (
            <div
              key={data._id}
              className="w-[250px] bg-white shadow-xl rounded-2xl overflow-hidden"
            >

              {/* Image Container */}
              <div className="w-full h-[180px] overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src={data.image}
                  alt={data.name}
                />
              </div>

              {/* Content */}
              <div className="px-3 py-4">

                {/* Title + Rating */}
                <div className="flex justify-between items-center">

                  <h1 className="font-medium text-lg text-[#1E2939] font-['Playfair_Display']">
                    {data.name}
                  </h1>

                  <p className="flex items-center font-medium gap-1 text-sm">
                    <img
                      className="h-4"
                      src={assets.starIconFilled}
                      alt=""
                    />
                    4.9
                  </p>

                </div>

                {/* Location */}
                <div className="mt-2">
                  <p className="flex items-start gap-2 text-gray-500 text-sm">

                    <img
                      className="h-4 mt-1"
                      src={assets.locationIcon}
                      alt=""
                    />

                    <span>
                      {data.country}{" , "} {data.address}
                    </span>

                  </p>
                </div>

                {/* Price + Button */}
                <div className="mt-5 flex justify-between items-center">

                  <h1 className="text-xl font-semibold">
                    ${data.price}

                    <span className="font-normal text-gray-500 text-sm">
                      {" "}
                      /night
                    </span>
                  </h1>

                  <button onClick={()=>navigate(`/book-hotel/${data._id}`)} className="border border-gray-400 px-4 py-2 rounded-lg hover:bg-black hover:text-white transition-all duration-300">
                    Book Now
                  </button>

                </div>

              </div>

            </div>
          ))}

        </div>
      </div>
    </>
  );
};

export default TopHotel;