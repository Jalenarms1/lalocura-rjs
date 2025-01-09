import React, { useEffect, useRef } from 'react'
import Navbar from '../Components/Navbar/Navbar'
import { IoIosArrowForward } from "react-icons/io";
import { LuShoppingBag } from "react-icons/lu";
import Menu from '../Components/Menu/Menu'
import heroImg from '../assets/hero-torta.jpeg'
import heroTacosImg from '../assets/hero-tacos.jpeg'
import heroBurro from '../assets/hero-burro.jpeg'
import MyMap from '../Components/Map/MyMap';
import { LuMapPin } from "react-icons/lu";
import { CURR_LOCATION } from '../data';

const Home = () => {

    useEffect(() => {
        window.scrollTo(0,0)
    }, [])

  return (
    <div className="min-h-screen relative bg-black w-full font-serif flex flex-col pb-20 no-scrollbar">
      <Navbar />

      {/* <div className="flex justify-start overflow-x-scroll bg-white no-scrollbar">
        <img src={heroImg} alt="hero-img" className="md:w-1/3 w-full object-cover min-h-[60vh] max-h-[60vh]" />
        <img src={heroTacosImg} alt="hero-img" className="md:w-1/3 w-full object-cover min-h-[60vh] max-h-[60vh]" />
        <img src={heroBurro} alt="hero-img" className="md:w-1/3 w-full object-cover min-h-[60vh] max-h-[60vh]" />

      </div> */}
      <div className="bg-green-400 p-2 flex justify-center">
        <p className='text-green-900 font-semibold'>Order ahead available!</p>
      </div>
      <p className='text-3xl ml-2 mt-2 border-b'>Find Us</p>
      <div className="w-full p-3 rounded-md flex flex-col">

        <MyMap />
        <div className="flex flex-col p-2">
            <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CURR_LOCATION.address)}`} target='_blank' rel="noopener noreferrer" className="flex gap-2">
                <LuMapPin className='text-red-600 text-3xl' />
                <div className="flex flex-col">
                    <p className='text-sm font-semibold'>{CURR_LOCATION.label}</p>
                    <p className='text-xs'>{CURR_LOCATION.address}</p>
                </div>
            </a>

        </div>
      </div>
      <div className='flex flex-col pt-5 items-center gap-8'>

        <Menu />
        <div className="flex flex-col gap-5 w-full">
          <p className='text-3xl border-b ml-2'>Hours</p>
        </div>
      </div>

      <div className='fixed bottom-0 w-full bg-red-950 flex justify-between items-center p-3 px-4 '>
        <div className="flex items-center gap-2">
          <LuShoppingBag />
          <p className='text-base font-semibold'>Order</p>

        </div>

        <div className="flex items-center gap-2">
          <p>$50.00</p>
          <IoIosArrowForward className='text-zinc-400' />
        </div>
      </div>

    </div>
  )
}

export default Home
