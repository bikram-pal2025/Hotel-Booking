import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { assets, facilityIcons, hotelDetails } from "../assets/assets";

const HotelRoom = () => {

  const { city } = useParams();
  const navigate = useNavigate();

  const [findCity, setfFndCity] = useState([]);

  // filters
  const [bedType, setBedType] = useState("");
  const [price, setPrice] = useState("");
  const [sortBy, setsortBy] = useState("");

  // toggle
  const [toggleButton, setToggleButton] = useState(false);

  const findByCity = () => {

    let hotel = [];

    // city filter
    if (city) {

      hotel = hotelDetails.filter(
        (item) =>
          item.city?.toLowerCase() === city?.toLowerCase()
      );

    } else {

      hotel = [...hotelDetails];

    }

    // bed filter
    if (bedType) {

      hotel = hotel.filter(
        (item) => item.bedType === bedType
      );

    }

    // price filter
    if (price === "0-500") {

      hotel = hotel.filter(
        (item) =>
          item.price >= 0 &&
          item.price <= 500
      );

    }

    if (price === "500-1000") {

      hotel = hotel.filter(
        (item) =>
          item.price >= 500 &&
          item.price <= 1000
      );

    }

    if (price === "1000-2000") {

      hotel = hotel.filter(
        (item) =>
          item.price >= 1000 &&
          item.price <= 2000
      );

    }

    // sort
    if (sortBy === "low-high") {

      hotel.sort(
        (a, b) => a.price - b.price
      );

    }

    if (sortBy === "high-low") {

      hotel.sort(
        (a, b) => b.price - a.price
      );

    }

    setfFndCity(hotel);

  };

  // clear filters
  const clearFilter = () => {

    setBedType("");
    setPrice("");
    setsortBy("");

  };

  useEffect(() => {

    findByCity();

  }, [city, bedType, price, sortBy]);

  return (
    <>
      <div className="min-h-[70vh]">

        {/* top text */}
        <div className="pt-28 md:pt-32 px-4 md:px-16 lg:px-24 xl:px-32">

          <h1 className="font-['Playfair_Display'] text-3xl md:text-4xl">
            Hotel Rooms
          </h1>

          <p className="text-[#778191] text-sm mt-2">
            Take advantage of our limited-time offers and special packages
            to enhance your stay and create unforgettable memories.
          </p>

        </div>

        {/* main section */}
        <div className="flex flex-col-reverse lg:flex-row items-start justify-between mt-10 px-4 md:px-16 lg:px-24 xl:px-32 gap-8">

          {/* hotel cards */}
          <div className="w-full lg:w-[58%]">

            {findCity.length > 0 ? (

              findCity.map((item) => (

                <div
                  className="flex flex-col md:flex-row items-start py-10 gap-6 border-b border-gray-300 last:border-0"
                  key={item._id}
                >

                  {/* image */}
                  <div className="w-full md:w-[350px] h-[230px] overflow-hidden rounded-xl">

                    <img
                      src={item.image}
                      alt=""
                      className="w-full h-full object-cover"
                    />

                  </div>

                  {/* details */}
                  <div className="flex flex-col gap-3 flex-1">

                    <p className="text-lg text-[#778191]">
                      {item.city}
                    </p>

                    <h1 className="font-['Playfair_Display'] text-2xl">
                      {item.name}
                    </h1>

                    {/* review */}
                    <div className="flex gap-2 items-center">

                      <div className="flex h-[15px] gap-1">
                        <img src={assets.starIconFilled} alt="" />
                        <img src={assets.starIconFilled} alt="" />
                        <img src={assets.starIconFilled} alt="" />
                        <img src={assets.starIconFilled} alt="" />
                        <img src={assets.starIconOutlined} alt="" />
                      </div>

                      <p className="font-medium text-sm">
                        200+ reviews
                      </p>

                    </div>

                    {/* address */}
                    <div className="flex text-sm text-[#778191] gap-2 items-center">

                      <img
                        src={assets.locationIcon}
                        alt=""
                        className="w-4"
                      />

                      <p>{item.address}</p>

                    </div>

                    {/* facilities */}
                    <div className="flex flex-wrap gap-2 mt-3">

                      {Object.entries(facilityIcons)
                        .slice(0, 3)
                        .map(([name, icon]) => (

                          <div
                            key={name}
                            className="flex items-center gap-1 bg-gray-100 px-3 py-1 rounded-md"
                          >

                            <img
                              src={icon}
                              alt={name}
                              className="w-4 h-4"
                            />

                            <p className="text-[11px] text-gray-700">
                              {name}
                            </p>

                          </div>

                        ))}

                    </div>

                    {/* price */}
                    <div className="mt-2">

                      <p className="text-xl font-semibold">
                        $ {item.price}

                        <span className="text-sm text-gray-500 font-normal">
                          {" "}
                          / night
                        </span>
                      </p>

                    </div>

                    {/* button */}
                    <div>

                      <button
                        onClick={() =>
                          navigate(`/book-hotel/${item._id}`)
                        }
                        className="bg-black text-white px-5 py-2 rounded-lg cursor-pointer hover:bg-white hover:text-black hover:shadow-xl transition-all duration-300"
                      >
                        Book Now
                      </button>

                    </div>

                  </div>

                </div>

              ))

            ) : (

              <div className="h-[300px] flex items-center justify-center">

                <h1 className="text-2xl text-gray-500">
                  Hotel not found
                </h1>

              </div>

            )}

          </div>

          {/* filters */}
          <div className="w-full lg:w-[20%] border border-gray-300 rounded-sm lg:mt-6">

            {/* top */}
            <div className="flex justify-between items-center border-b border-gray-300 px-4 py-4">

              <p className="text-lg font-semibold uppercase">
                Filters
              </p>

              {/* desktop clear */}
              <button
                className="text-xs text-[#1E3A5F] uppercase cursor-pointer hover:text-blue-500 hover:underline hidden lg:block"
                onClick={clearFilter}
              >
                Clear
              </button>

              {/* mobile toggle */}
              <button
                className="text-xs text-[#1E3A5F] uppercase cursor-pointer hover:text-blue-500 hover:underline lg:hidden block"
                onClick={() =>
                  setToggleButton(!toggleButton)
                }
              >
                {toggleButton ? "Hide" : "Show"}
              </button>

            </div>

            {/* filter content */}
          

              <div className={`p-4 flex flex-col gap-6 ${  toggleButton?'block':'hidden' } lg:block`}>

                {/* bed type */}
                <div>

                  <h2 className="text-lg font-semibold mb-4">
                    Popular filters
                  </h2>

                  <div className="flex flex-col gap-3 text-sm text-gray-700">

                    <label className="flex items-center gap-2">

                      <input
                        type="checkbox"
                        className="w-4 h-4"
                        checked={bedType === "single"}
                        onChange={() =>
                          setBedType(
                            bedType === "single"
                              ? ""
                              : "single"
                          )
                        }
                      />

                      <span>Single Bed</span>

                    </label>

                    <label className="flex items-center gap-2">

                      <input
                        type="checkbox"
                        className="w-4 h-4"
                        checked={bedType === "double"}
                        onChange={() =>
                          setBedType(
                            bedType === "double"
                              ? ""
                              : "double"
                          )
                        }
                      />

                      <span>Double Bed</span>

                    </label>

                    <label className="flex items-center gap-2">

                      <input
                        type="checkbox"
                        className="w-4 h-4"
                        checked={bedType === "luxury"}
                        onChange={() =>
                          setBedType(
                            bedType === "luxury"
                              ? ""
                              : "luxury"
                          )
                        }
                      />

                      <span>Luxury Room</span>

                    </label>

                    <label className="flex items-center gap-2">

                      <input
                        type="checkbox"
                        className="w-4 h-4"
                        checked={bedType === "family"}
                        onChange={() =>
                          setBedType(
                            bedType === "family"
                              ? ""
                              : "family"
                          )
                        }
                      />

                      <span>Family Suite</span>

                    </label>

                  </div>

                </div>

                {/* price */}
                <div>

                  <h2 className="text-lg font-semibold mb-4">
                    Price Range
                  </h2>

                  <div className="flex flex-col gap-3 text-sm text-gray-700">

                    <label className="flex items-center gap-2">

                      <input
                        type="checkbox"
                        className="w-4 h-4"
                        checked={price === "0-500"}
                        onChange={() =>
                          setPrice(
                            price === "0-500"
                              ? ""
                              : "0-500"
                          )
                        }
                      />

                      <span>$ 0 to 500</span>

                    </label>

                    <label className="flex items-center gap-2">

                      <input
                        type="checkbox"
                        className="w-4 h-4"
                        checked={price === "500-1000"}
                        onChange={() =>
                          setPrice(
                            price === "500-1000"
                              ? ""
                              : "500-1000"
                          )
                        }
                      />

                      <span>$ 500 to 1000</span>

                    </label>

                    <label className="flex items-center gap-2">

                      <input
                        type="checkbox"
                        className="w-4 h-4"
                        checked={price === "1000-2000"}
                        onChange={() =>
                          setPrice(
                            price === "1000-2000"
                              ? ""
                              : "1000-2000"
                          )
                        }
                      />

                      <span>$ 1000 to 2000</span>

                    </label>

                  </div>

                </div>

                {/* sort */}
                <div>

                  <h2 className="text-lg font-semibold mb-4">
                    Sort By
                  </h2>

                  <div className="flex flex-col gap-3 text-sm text-gray-700">

                    <label className="flex items-center gap-2">

                      <input
                        type="checkbox"
                        className="w-4 h-4"
                        checked={sortBy === "low-high"}
                        onChange={() =>
                          setsortBy(
                            sortBy === "low-high"
                              ? ""
                              : "low-high"
                          )
                        }
                      />

                      <span>Price Low to High</span>

                    </label>

                    <label className="flex items-center gap-2">

                      <input
                        type="checkbox"
                        className="w-4 h-4"
                        checked={sortBy === "high-low"}
                        onChange={() =>
                          setsortBy(
                            sortBy === "high-low"
                              ? ""
                              : "high-low"
                          )
                        }
                      />

                      <span>Price High to Low</span>

                    </label>

                  </div>

                </div>

              </div>

          

          </div>

        </div>

      </div>
    </>
  );
};

export default HotelRoom;