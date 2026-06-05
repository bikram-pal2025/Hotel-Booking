import React, { useContext } from "react";
import { StoreContext } from "../component/storeContext";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const MyBooking = () => {
  const { myBooking, setMyBooking,loginProfile } = useContext(StoreContext);

  const navigate= useNavigate();

  if(!loginProfile){
     navigate('/')
  }

  const deleteBooking = (id) => {
    setMyBooking(myBooking.filter((item) => item.id !== id));
  };

  return (
    <div className="mt-25 w-[90%] lg:w-[85%] mx-auto">
      {/* heading */}
      <h1 className="text-4xl font-['Playfair_Display']">My Bookings</h1>

      <p className="text-[#778191] mt-3 w-full md:w-[55%]">
        Easily manage your past, current and upcoming hotel reservations in one
        place. Plan your trips seamlessly.
      </p>

      {/* title */}
      <div className="hidden md:grid grid-cols-[2fr_1fr_1fr] mt-10 pb-4 border-b text-gray-700 font-medium">
        <p>Hotels</p>
        <p>Date & Timings</p>
       
        <p>Payment</p>
      </div>

      {/* bookings */}

      <div className="mt-5 flex flex-col gap-8">
        {myBooking.length === 0 ? (
          <p>No Booking Found</p>
        ) : (
          myBooking.map((item) => (
            <div
              key={item.id}
              className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-5 border-b pb-8"
            >
              {/* left */}
              <div className="flex gap-5">
                <div className="h-[170px] w-[220px] overflow-hidden rounded-lg">
                  <img
                    className="w-full h-full object-cover"
                    src={item.hotel.image}
                    alt=""
                  />
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="text-2xl font-['Playfair_Display']">
                      {item.hotel.name}
                    </h2>

                    <p className="text-sm">({item.hotel.bedType})</p>
                  </div>

                  <div className="flex gap-1 items-center mt-2">
                    <img src={assets.locationIcon} alt="" className="h-4" />

                    <p className="text-[#778191]">{item.hotel.address}</p>
                  </div>

                  <p className="mt-2 text-[#778191]">Guests: 2</p>

                  <p className="mt-2 text-xl">Total: ₹{item.totalCost}</p>
                </div>
              </div>

              {/* dates */}
              <div className="flex flex-col justify-center gap-5">
                <div>
                  <p className="font-medium">Check-In:</p>

                  <p className="text-[#778191]">{item.checkIn}</p>
                </div>

                <div>
                  <p className="font-medium">Check-Out:</p>

                  <p className="text-[#778191]">{item.checkOut}</p>
                </div>

                <div>
                    <p className="font-medium">Total-Day-Count:</p>

                  <p className="text-[#778191]">{item.totalDays}</p>
                </div>
              </div>

             
             

              {/* payment */}
              <div className="flex flex-col justify-center gap-5">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-yellow-500" />

                  <p className="text-yellow-600 font-medium">Pay at Hotel</p>
                </div>

                <button
                  onClick={() => deleteBooking(item.id)}
                  className="border border-red-500 text-red-500 px-5 py-2 rounded-full hover:bg-red-500 hover:text-white transition cursor-pointer"
                >
                  Cancel Booking
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default MyBooking;
