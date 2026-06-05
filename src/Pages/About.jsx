import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const About = () => {
const  navigate = useNavigate();
  return (
    <div>
      {/* ABOUT SECTION */}

<section className="max-w-[1350px] mx-auto px-6 py-28">

  <div className="grid lg:grid-cols-2 gap-16 items-center">

    {/* Left Image */}

    <div className="relative">

      <img
        src={assets.aboutImage}
        alt=""
        className="rounded-[40px] h-[650px] w-full object-cover"
      />

      <div className="absolute bottom-6 right-6 bg-white rounded-[30px] px-8 py-6 shadow-lg">

        <h2 className="text-4xl font-bold">
          10+
        </h2>

        <p className="text-gray-500">
          Years of Hospitality
        </p>

      </div>

    </div>

    {/* Right Content */}

    <div>

      <p className="uppercase tracking-[5px] text-gray-500">
        About Us
      </p>

      <h2 className="text-5xl font-bold mt-5 leading-tight">
        Experience Comfort
        <br />
        Beyond Expectations
      </h2>

      <p className="mt-8 text-gray-500 leading-8">

        Our hotel is designed to create memorable stays through
        elegant rooms, premium hospitality, and carefully crafted
        experiences. Every detail is built to make your journey
        relaxing and unforgettable.

      </p>

      {/* Features */}

      <div className="grid grid-cols-2 gap-8 mt-10">

        <div>
          <h3 className="text-3xl font-bold">
            50+
          </h3>

          <p className="text-gray-500">
            Luxury Rooms
          </p>
        </div>

        <div>
          <h3 className="text-3xl font-bold">
            24/7
          </h3>

          <p className="text-gray-500">
            Customer Support
          </p>
        </div>

        <div>
          <h3 className="text-3xl font-bold">
            100%
          </h3>

          <p className="text-gray-500">
            Guest Satisfaction
          </p>
        </div>

        <div>
          <h3 className="text-3xl font-bold">
            ★ 4.9
          </h3>

          <p className="text-gray-500">
            Average Rating
          </p>
        </div>

      </div>

      <button onClick={()=>navigate('/hotel-room')} className="mt-12 px-8 py-4 rounded-full bg-black text-white hover:scale-105 duration-300">

        Discover More

      </button>

    </div>

  </div>

</section>
    </div>
  )
}

export default About
