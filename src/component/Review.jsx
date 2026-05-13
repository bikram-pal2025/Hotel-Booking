import React from 'react'
import { assets, testimonials } from '../assets/assets'

const Review = () => {
  return (
  <>
    <div className='mt-10 bg-[#F8FAFC]  pb-20  ' >

      <div className='w-[90%] mx-auto flex flex-col justify-center items-center text-center  '>
             {/* texts */}
     
     <div className='mt-20'>
        <h1 className=" text-4xl md:text-[40px] font-['Playfair_Display'] font-light " >What Our Guests Say</h1>
        <p className=' max-w-174 text-[#778191] mt-2'>Discover why discerning travelers consistently choose QuickStay for their exclusive and luxurious accommodations around the world.</p>
     </div>
      </div>

      {/* review Cards */}

       <div className=' flex flex-wrap items-center gap-10 mt-20 w-[90%]  mx-auto '>

      {
        testimonials.map((data)=>(
             <div className='h-[220px] w-[380px] rounded-2xl bg-white  shadow p-5 ' key={data.id}>
              
               {/* image and name */}

               <div className=' flex gap-3 justify-baseline items-center'> 
                <img className='h-[50px] rounded-[50%] ' src={data.image} alt="" />
                 <p className="font-['Playfair_Display'] text-xl"> {data.name} </p>
               </div>

               {/* review stars */}

               <div className='flex gap-2 mt-5 h-[20px] ' >
                <img src={assets.starIconFilled} alt="" />
                <img src={assets.starIconFilled} alt="" />
                <img src={assets.starIconFilled} alt="" />
                <img src={assets.starIconFilled} alt="" />
                <img src={assets.starIconOutlined} alt="" />
               </div>

               {/* review */}

               <p className='mt-5 text-sm font-semibold text-[#778191] '>
                "{data.review}"
               </p>
             

             </div>
        ))
      }



      </div>

    </div>
  </>
  )
}

export default Review
