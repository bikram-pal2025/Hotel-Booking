import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  assets,
  facilityIcons,
  hotelDetails,
  roomCommonData,
} from "../assets/assets";
import { StoreContext } from "../component/storeContext";

const BookHotel = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    setHotelId,
    hotelId,
    bookingData,
    setBookingData,
    coustomerInfo,
    setCoustomerInfo,
    loginProfile,
   
    setMyBooking,
  } = useContext(StoreContext);

  // check in & check out state
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [gaustCount, setGaustCount] = useState("")

  // booking details toggle
  const [toggleCostButton, setToggleCostButton] = useState(false);

  // coustomer detils tougle button

  const [customerDetails, setCustomerDetails] = useState(false);

  // find hotel by id
  const findById = () => {
    const findHotelId = hotelDetails.find((item) => item._id === id);
    setHotelId(findHotelId);
  };

  // booking submit
  const hendleChange = (hotelId, checkIn, checkOut) => {
    if (!hotelId || !checkIn || !checkOut) return;

    const checkInDate = new Date(checkIn);
    const checkOutDate = new Date(checkOut);

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // prevent past dates
    if (checkInDate < today || checkOutDate < today) {
      alert("You cannot select past dates");
      return;
    }

    // check checkout date
    if (checkOutDate < checkInDate) {
      alert("Check-out date must be after check-in date");
      setToggleCostButton(false);
      return;
    }

    const totalDays = (checkOutDate - checkInDate) / (1000 * 60 * 60 * 24);

    const finalDay = totalDays === 0 ? 1 : totalDays;

    const totalCost = finalDay * hotelId.price;

    setBookingData({
      hotel: hotelId,
      checkIn,
      checkOut,
      gaustCount,
      totalDays: finalDay,
      totalCost,
    });

    setToggleCostButton(true);
  };

  // customer form change
  const coustomerHendler = (e) => {
    const { name, value } = e.target;

    setCoustomerInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // customer form submit
  const coustomerSubmitHandler = (e) => {
    e.preventDefault();

   
  if (!loginProfile) {
    alert("Please login first");
    return;
  }

    if (coustomerInfo.mobile.length !== 10) {
    alert("Mobile number must be 10 digits");
    return;
  }

    const finalBooking = {
      ...bookingData,
      customer: coustomerInfo,
        payment: "Pay at Hotel",
      id: Date.now(),
    };

    setMyBooking((prev) => [...prev, finalBooking]);
    alert("Booking Successful");

    navigate("/my-Booking");
  };

  useEffect(() => {
    findById();
  }, [id]);

  return (
    <div className="mt-15 md:mt-25 lg:mt-27 mb-15 w-[90%] lg:w-[85%] mx-auto p-5 flex flex-col gap-3">
      {hotelId && (
        <>
          {/* hotel name */}
          <div className="flex gap-3 flex-col md:flex-row md:items-center relative">
            <div className="flex items-baseline gap-2">
              <h1 className="font-['Playfair_Display'] text-3xl lg:text-4xl">
                {hotelId.name}
              </h1>

              <p className="text-sm">({hotelId.bedType})</p>
            </div>

            <p className="w-fit text-xs font-semibold px-3 py-1 bg-orange-500 text-white rounded-full uppercase">
              {hotelId.off} OFF
            </p>
          </div>

          {/* reviews */}
          <div className="flex gap-2 items-center">
            <div className="flex gap-1 h-[20px]">
              <img src={assets.starIconFilled} alt="" />
              <img src={assets.starIconFilled} alt="" />
              <img src={assets.starIconFilled} alt="" />
              <img src={assets.starIconFilled} alt="" />
              <img src={assets.starIconOutlined} alt="" />
            </div>

            <p className="font-semibold">200+ reviews</p>
          </div>

          {/* address */}
          <div className="flex items-center gap-1">
            <img className="h-[20px]" src={assets.locationIcon} alt="" />

            <p className="text-[#778191]">{hotelId.address}</p>
          </div>

          {/* room images */}
          <div className="flex mt-5 justify-between flex-col md:flex-row gap-4">
            <div className="w-full md:w-[48%]">
              <img
                className="w-full h-full object-cover rounded-2xl"
                src={hotelId.image}
                alt=""
              />
            </div>

            <div className="w-full md:w-[50%] flex flex-wrap gap-[2%]">
              {hotelDetails.map((item) => (
                <div key={item._id} className="basis-[48%]">
                  <img
                    className="w-full rounded-xl object-cover"
                    src={item.image}
                    alt=""
                  />
                </div>
              ))}
            </div>
          </div>

          {/* price */}
          <div className="flex flex-col-reverse md:flex-col gap-3 mt-2 md:mt-4">
            <div className="flex justify-baseline md:justify-between">
              <h1 className="font-['Playfair_Display'] text-3xl lg:text-4xl font-medium hidden md:block">
                Experience Luxury Like Never Before
              </h1>

              <p className="font-semibold text-2xl">${hotelId.price}/night</p>
            </div>

            <div className="flex flex-wrap gap-2 mt-3">
              {Object.entries(facilityIcons)
                .slice(0, 3)
                .map(([name, icon]) => (
                  <div
                    key={name}
                    className="flex items-center gap-1 bg-gray-100 px-3 py-1 rounded-md"
                  >
                    <img src={icon} alt={name} className="w-4 h-4" />

                    <p className="text-[11px] text-gray-700">{name}</p>
                  </div>
                ))}
            </div>
          </div>

          {/* booking form */}
          <div className="mt-5">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                hendleChange(hotelId, checkIn, checkOut);
              }}
              className="bg-white text-gray-500 rounded-lg px-6 py-4 flex flex-col md:flex-row gap-4"
            >
              {/* check in */}
              <div>
                <div className="flex items-center gap-2">
                  <img src={assets.calenderIcon} alt="" />
                  <label htmlFor="checkIn">Check in</label>
                </div>

                <input
                  id="checkIn"
                  type="date"
                  required
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none"
                />
              </div>

              {/* check out */}
              <div>
                <div className="flex items-center gap-2">
                  <img src={assets.calenderIcon} alt="" />
                  <label htmlFor="checkOut">Check out</label>
                </div>

                <input
                  id="checkOut"
                  type="date"
                  required
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none"
                />
              </div>

              {/* guests */}
              <div className="flex md:flex-col gap-2">
                <label htmlFor="guests">Guests</label>

                <input
                onChange={(e)=>setGaustCount(e.target.value)}
                  min={1}
                  max={4}
                  id="guests"
                  type="number"
                  required
                  className="rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none max-w-16"
                  placeholder="0"
                />
              </div>

              {/* button */}
              <button
                type="submit"
                className="flex items-center justify-center gap-1 rounded-md bg-black py-1 px-2 text-white cursor-pointer"
              >
                <img src={assets.searchIcon} alt="" />

                <span>Check details</span>
              </button>
            </form>
          </div>

          {/* booking details */}
          {toggleCostButton && (
            <div className="w-full flex flex-col lg:flex-row mt-10 justify-between gap-5">
              {/* booking card */}
              <div className="w-full md:w-[80%] md:mx-auto lg:mx-0 lg:w-[40%] flex flex-col gap-3 border border-gray-300 py-8 px-7 rounded-lg">
                <div className="flex justify-between items-center">
                  <p className="text-xl font-medium">Booking Details</p>

                  <button
                    onClick={() => {
                      setToggleCostButton(false);
                      setCustomerDetails(false);
                    }}
                    className="text-2xl cursor-pointer"
                  >
                    ×
                  </button>
                </div>

                <hr />

                {/* availability */}
                <div className="flex justify-between items-center">
                  <p className="text-[#778191]">Availability</p>

                  <div className="flex items-center gap-2">
                    <div
                      className={`h-2 w-2 rounded-full ${
                        hotelId.availability ? "bg-green-500" : "bg-red-500"
                      }`}
                    />

                    <p
                      className={`font-medium ${
                        hotelId.availability ? "text-green-500" : "text-red-500"
                      }`}
                    >
                      {hotelId.availability ? "Available" : "Not Available"}
                    </p>
                  </div>
                </div>

                <hr />

                {/* total days */}
                <div className="flex justify-between items-center">
                  <p className="text-[#778191]">Total Days</p>

                  <p className="text-[#778191] font-medium">
                    {bookingData.totalDays}{" "}
                    {bookingData.totalDays > 1 ? "Days" : "Day"}
                  </p>
                </div>

                <hr />

                {/* total cost */}
                <div className="flex justify-between items-center">
                  <p className="text-[#778191]">Total Cost</p>

                  <p className="text-2xl font-semibold text-gray-800">
                    ${bookingData.totalCost}
                  </p>
                </div>

                <hr />

                <button
                  onClick={() => {
                    hotelId.availability === true
                      ? setCustomerDetails(true)
                      : null;
                  }}
                  className="group w-full bg-blue-600 hover:bg-blue-700 transition-all duration-300 text-white py-3 rounded-lg flex justify-center items-center gap-2 font-medium cursor-pointer"
                >
                  Proceed to Checkout
                  <img
                    className="brightness-0 invert transition-transform duration-300 group-hover:translate-x-1"
                    src={assets.arrowIcon}
                    alt=""
                  />
                </button>
              </div>

              {/* customer form */}
              <div
                className={`${customerDetails ? "block" : "hidden"} w-full md:w-[70%] md:mx-auto lg:mx-0 lg:w-[40%]`}
              >
                <form
                  onSubmit={coustomerSubmitHandler}
                  className="flex flex-col gap-5 p-5 rounded-xl border border-gray-300"
                >
                  {/* First Name + Last Name */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <input
                      type="text"
                      placeholder="First Name"
                      name="firstName"
                      value={coustomerInfo.firstName}
                      onChange={coustomerHendler}
                      className="border border-gray-400 rounded-lg px-4 py-2 outline-none"
                    />

                    <input
                      type="text"
                      placeholder="Last Name"
                      name="lastName"
                      value={coustomerInfo.lastName}
                      onChange={coustomerHendler}
                      className="border border-gray-400 rounded-lg px-4 py-2 outline-none"
                    />
                  </div>

                  {/* Email + Contact */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <input
                      type="email"
                      placeholder="Enter Email"
                      name="email"
                      value={coustomerInfo.email}
                      onChange={coustomerHendler}
                      className="border border-gray-400 rounded-lg px-4 py-2 outline-none"
                    />

                    <input
                      type="tel"
                      placeholder="Contact Number"
                      name="mobile"
                      value={coustomerInfo.mobile}
                      onChange={coustomerHendler}
                      className="border border-gray-400 rounded-lg px-4 py-2 outline-none"
                    />
                  </div>

                  {/* City/Village + State + Pin */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <input
                      type="text"
                      placeholder="City / Village"
                      name="city"
                      value={coustomerInfo.city}
                      onChange={coustomerHendler}
                      className="border border-gray-400 rounded-lg px-4 py-2 outline-none"
                    />
                    <input
                      type="text"
                      placeholder="District"
                      name="district"
                      value={coustomerInfo.district}
                      onChange={coustomerHendler}
                      className="border border-gray-400 rounded-lg px-4 py-2 outline-none"
                    />

                    <input
                      type="text"
                      placeholder="State"
                      name="state"
                      value={coustomerInfo.state}
                      onChange={coustomerHendler}
                      className="border border-gray-400 rounded-lg px-4 py-2 outline-none"
                    />

                    <input
                      type="text"
                      placeholder="PIN Code"
                      name="pin"
                      required
                      value={coustomerInfo.pin}
                      onChange={coustomerHendler}
                      className="border border-gray-400 rounded-lg px-4 py-2 outline-none"
                    />
                  </div>

                  {/* Address */}
                  <textarea
                    placeholder="Any Request"
                    name="request"
                  
                    value={coustomerInfo.request}
                    onChange={coustomerHendler}
                    rows="4"
                    className="border border-gray-400 rounded-lg px-4 py-2 outline-none resize-none"
                  />

                  {/* Submit */}
                  <button
                    type="submit"
                    className="bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition"
                  >
                    Book Now
                  </button>
                </form>
              </div>
            </div>
          )}

          {/* facilities */}
          <div className="mt-10 flex flex-col gap-4 w-full md:w-[80%] lg:w-[60%]">
            {roomCommonData.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="flex items-center justify-center">
                  <img src={item.icon} alt="" className="h-6" />
                </div>

                <div>
                  <p className="font-medium text-gray-800">{item.title}</p>

                  <p className="text-sm text-[#778191]">{item.description}</p>
                </div>
              </div>
            ))}

            <hr className="mt-5 md:mt-10 border-[#778191]" />
          </div>

          {/* description */}
          <div className="w-full md:w-[80%] lg:w-[60%] mt-5">
            <p className="text-[#778191]">
              Guests will be allocated on the ground floor according to
              availability. You get a comfortable two bedroom apartment with a
              true city feeling. The price quoted is for two guests.
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default BookHotel;
