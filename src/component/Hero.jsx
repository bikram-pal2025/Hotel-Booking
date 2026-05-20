import  { useContext, useState } from "react";
import { assets, cities } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import { StoreContext } from "./storeContext";


const Hero = () => {
  const {login} = useContext(StoreContext)
  const [city, setCity] = useState("")

  const navigate = useNavigate()

  const hendleSearch =(e)=>{
   e.preventDefault();
    if (!cities){
      return;
    } else{
          navigate(`/hotel-room/${city}`)
    }
  }

 
  return (
    <>
     
     
    
      <div className=' relative  flex flex-col items-start justify-center px-6 md:px-16 lg:px-24 xl:px-32 text-white bg-[url("/src/assets/heroImage.png")] bg-no-repeat bg-cover bg-center h-screen  '>
      {!login && (
        <div className=" absolute top-[100px] sm:static">
          {/* hero image top text */}
          <div className=" bg-[#4C86B0]/70 w-fit rounded-full px-2 py-1  ">
            <p className=" text-base">The Ultimate Hotel Experience</p>
          </div>
            
            <div className=" w-[100%] md:w-[80%]   lg:w-[70%] mt-4 ">
              <h1 className=" text-white text-2xl sm:text-5xl lg:text-6xl font-bold font-['Playfair_Display'] leading-[56px] ">Discover Your Perfect Gateway Destination</h1>
            </div>

            <div className=" w-[100%] md:w-[80%]   lg:w-[55%] mt-4 ">
              <p className=" text-sm  md:text-xl lg:text-base">Unparalleled luxury and comfort await at the world's most exclusive hotels and resorts Start your journey today.</p>
            </div> 
             
              <form onSubmit={hendleSearch} className=' mt-4 bg-white w-fit  text-gray-500 rounded-lg px-6 py-4  flex flex-col md:flex-row max-md:items-start gap-4 max-md:mx-auto'>

            <div>
                <div className='flex items-center gap-2'>
                   <img src={assets.calenderIcon} alt="" />
                    <label htmlFor="destinationInput">Destination</label>
                </div>
                <input onChange={(e)=>setCity(e.target.value)} list='destinations' id="destinationInput" type="text" className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none" placeholder="Type here" required />

                <datalist id="destinations">
                  {
                    cities.map((city,index)=>(
                      <option value={city} key={index}/>
                    ))
                  }
                </datalist>
            </div>
            
            <div>
                <div className='flex items-center gap-2'>
                    <img src={assets.calenderIcon} alt="" />
                    
                    <label htmlFor="checkIn">Check in</label>
                </div>
                <input id="checkIn" type="date" className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none" />
            </div>

            <div>
                <div className='flex items-center gap-2'>
                 <img src={assets.calenderIcon} alt="" />
                    <label htmlFor="checkOut">Check out</label>
                </div>
                <input id="checkOut" type="date" className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none" />
            </div>

           

            <button  type="submit" className='flex items-center justify-center gap-1 rounded-md bg-black py-3 px-4 text-white my-auto cursor-pointer max-md:w-full max-md:py-1' >
            <img src={assets.searchIcon} alt="" />
                <span>Search</span>
            </button>
        </form>

        </div>
           )}
      </div>
   
    </>

  );
};

export default Hero;
