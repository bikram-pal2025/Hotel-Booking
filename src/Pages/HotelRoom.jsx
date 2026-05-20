import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { assets, facilityIcons, hotelDetails } from '../assets/assets';

const HotelRoom = () => {

  const  {city} = useParams();
  const navigate= useNavigate();

  const [findCity, setfFndCity] = useState([])
  

  const findByCity =()=>{
   
  if (city) {

  const hotel = hotelDetails.filter(
    (item) =>
      item.city?.toLowerCase() ===
      city?.toLowerCase()
  );

  setfFndCity(hotel);

} else {

  setfFndCity(hotelDetails);

}

  }

  useEffect(() => {
 findByCity()
  }, [city])
  
  return (
    <>
        <div className=' mx-auto my-auto min-h-[70vh]s '>

      <div className=' flex flex-col-reverse lg:flex-row items-start justify-between pt-28 md:pt-35 px-4 md:px-16 lg:px-24 xl:px-32  gap-[2%]  '>
          
          {/* right part */}

        <div className=" w-[90%] lg:w-[60%] ">

        {/* top texts */}

        <div>
          <h1 className="font-['Playfair_Display'] text-3xl md:text-2xl ">
            Hotel Rooms
          </h1>

          <p className='text-[#778191] text-sm'>Take advantage of our limited-time offers and special packages to enhance your stay and create unforgettable memories.</p>
        </div>

          {/* hotel detail */}
       
       <div>

      
  {
    findCity.length > 0 ? (

      findCity.map((item) => (

        <div className='flex flex-col md:flex-row items-start py-10 gap-6 border-b border-gray-300 last:pb-30 last:border-0' key={item._id}>

          <div className='w-[350px] h-[230px] overflow-hidden rounded-xl '>

            <img
              src={item.image}
              alt=""
              className='w-full h-full object-cover'
            />

          </div>

          <div className='flex flex-col gap-3 '>
       
         <p className='text-lg  text-[#778191]' >
          {item.city}
         </p>

         <h1 className="font-['Playfair_Display'] text-xl">
          {item.name}
         </h1>

         <div className='flex gap-2  justify-baseline items-center '>
          <div className='flex h-[15px] gap-1'>
            <img src={assets.starIconFilled} alt="" />
            <img src={assets.starIconFilled} alt="" />
            <img src={assets.starIconFilled} alt="" />
            <img src={assets.starIconFilled} alt="" />
            <img src={assets.starIconOutlined} alt="" />
          </div>
          <p className=' font-medium'>200+ review</p>
         </div>

         <div className='flex text-sm text-[#778191]'>
          <img src={assets.locationIcon} alt="" />
          <p>{item.address}</p>
         </div>


<div className='flex flex-wrap gap-2 mt-3'>
  {
    Object.entries(facilityIcons).slice(0,3).map(([name, icon]) => (
      <div
        key={name}
        className='flex items-center gap-1 bg-gray-100 px-2 py-1 rounded-md'
      >
        <img
          src={icon}
          alt={name}
          className='w-4 h-4'
        />

        <p className='text-[11px] text-gray-700'>
          {name}
        </p>
      </div>
    ))
  }
</div>

<div>
  <p>
   $ {
      item.price
    } / night
  </p>
</div>



          </div>

          <hr/>

        </div>

      ))

    ) : null
  }


</div>
           
         
        </div>


        {/* left part */}

        <div>

        </div>
      </div>

        </div>
    </>
  )
}

export default HotelRoom
