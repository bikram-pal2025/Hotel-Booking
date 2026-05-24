import React, { useContext, useEffect, useState,  } from "react";
import { useParams } from "react-router-dom";
import { assets, facilityIcons, hotelDetails } from "../assets/assets";
import { StoreContext } from "../component/storeContext";

const BookHotel = () => {
  const { id } = useParams();

 const {setHotelId,hotelId,bookingData,setBookingData} = useContext(StoreContext)

 const [checkIn, setCheckIn] = useState("");
const [checkOut, setCheckOut] = useState("");

  const findById = () => {
    const findHotelId = hotelDetails.find((item) => item._id === id);
    setHotelId(findHotelId);
  };

  const hendleChange=(hotelId,checkIn,checkOut)=>{
    if(!hotelId || !checkIn || !checkOut) return;

    const checkInDate = new Date (checkIn);
    const checkOutDate = new Date (checkOut);

    const totalDays = (checkOutDate - checkInDate) / (1000*60*60*24);
    const totalCost = totalDays * hotelId.price;

    setBookingData({
      hotel:hotelId,
      checkIn,
      checkOut,
      totalDays,
      totalCost
    })

  }

  useEffect(() => {
    findById();
    
  }, [id]);

  return (
    <div className="mt-15 md:mt-25 lg:mt-27  mb-15 w-[90%]  lg:w-[85%] mx-auto p-5 flex flex-col gap-3">
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

          {/* review stars */}

          <div className="flex gap-2 justify-baseline items-center">
            <div className="flex gap-1 h-[20px]">
              <img src={assets.starIconFilled} alt="" />
              <img src={assets.starIconFilled} alt="" />
              <img src={assets.starIconFilled} alt="" />
              <img src={assets.starIconFilled} alt="" />
              <img src={assets.starIconOutlined} alt="" />
            </div>

            <p className=" font-semibold">200+ reviews</p>
          </div>

          {/* address */}

          <div className="flex items-center gap-1">
            <img className=" h-[20px] " src={assets.locationIcon} alt="" />

            <p className="text-[#778191] "> {hotelId.address} </p>
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
         

          <div className=" flex flex-col-reverse md:flex-col gap-3 mt-2 md:mt-4">
            
            <div className=" flex justify-baseline md:justify-between  ">
               <h1 className="font-['Playfair_Display'] text-3xl lg:text-4xl font-medium hidden md:block">
              {" "}
              Experience Luxury Like Never Before{" "}
            </h1>
            <p className="font-semibold text-2xl "> ${hotelId.price}/night </p>
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


          <div className="mt-5">

           <form onSubmit={(e) => e.preventDefault()} className='bg-white text-gray-500 rounded-lg px-6 py-4  flex flex-col md:flex-row max-md:items-start gap-4 max-md:mx-auto'>

           

            <div>
                <div className='flex items-center gap-2'>
                 <img src={assets.calenderIcon} alt="" />
                    <label  htmlFor="checkIn">Check in</label>
                </div>
                <input id="checkIn" type="date" value={checkIn} onChange={(e)=>setCheckIn(e.target.value)} className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none" />
            </div>

            <div>
                <div className='flex items-center gap-2'>
                    <img src={assets.calenderIcon} alt="" />
                    <label htmlFor="checkOut">Check out</label>
                </div>
                <input id="checkOut" type="date" value={checkOut} onChange={(e)=>setCheckOut(e.target.value)}  className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none" />
            </div>

            <div className='flex md:flex-col max-md:gap-2 max-md:items-center'>
                <label htmlFor="guests">Guests</label>
                <input min={1} max={4} id="guests" type="number" className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none  max-w-16" placeholder="0" />
            </div>

            <button type="submit" onClick={()=>hendleChange(hotelId,checkIn,checkOut)} className='flex items-center justify-center gap-1 rounded-md bg-black py-3 px-4 text-white my-auto cursor-pointer max-md:w-full max-md:py-1' >
                <img src={assets.searchIcon} alt="" />
                <span >Search</span>
            </button>
        </form>

        <div>
          {bookingData.totalCost}
          
        </div>

          </div>
        </>
      )}
    </div>
  );
};

export default BookHotel;
