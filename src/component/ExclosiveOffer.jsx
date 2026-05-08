import React from "react";
import { assets, exclusiveOffers } from "../assets/assets";

const ExclosiveOffer = () => {
  return (
    <>
      <div className="flex w-[90%]  md:w-[70%] lg:w-[90%] mx-auto flex-col justify-center items-start mt-10">
        
        {/* heading */}
        <h1 className="font-['Playfair_Display'] text-2xl md:text-2xl lg:text-4xl ">Exclusive Offers</h1>

        <div className= " mt-4 w-full flex flex-col md:flex-row justify-between items-center">
            <p className="text-[#778191] w-full md:w-full lg:w-[50%] ">Take advantage of our limited-time offers and special packages to enhance your stay and create unforgettable memories.</p>

            <div className=" group cursor-pointer flex gap-2">
                <p className=" font-medium " >View All Offers</p>
                <img className=" group-hover:translate-x-1 duration-500 " src={assets.arrowIcon} alt="" />
            </div>



            
        </div>

        {/* offer Card */}

        <div className="flex flex-wrap justify-center items-center">

       {
        exclusiveOffers.map((item)=>(
            <div className=" w-[350px] h-[100px] bg-red rounded-md " key={item._id}>

      



            </div>
        ))
       }

        </div>

      </div>
    </>
  );
};

export default ExclosiveOffer;
