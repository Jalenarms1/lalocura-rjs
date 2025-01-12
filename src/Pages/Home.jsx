import React, { useEffect, useRef } from 'react'
import Navbar from '../Components/Navbar/Navbar'
import { IoIosArrowForward } from "react-icons/io";
import { LuShoppingBag } from "react-icons/lu";
import Menu from '../Components/Menu/Menu'
import heroImg from '../assets/hero-img.jpeg'
import heroTacosImg from '../assets/hero-tacos.jpeg'
import heroBurro from '../assets/hero-burro.jpeg'
import breakfastImg from '../assets/breakfastimg.jpeg'
import MyMap from '../Components/Map/MyMap';
import { LuMapPin } from "react-icons/lu";
import { CURR_LOCATION } from '../data';
import FindUs from '../Components/Map/FindUs';
import CheckoutBar from '../Components/Checkout/CheckoutBar';

const Home = ({order, setOrder}) => {

    useEffect(() => {
        window.scrollTo(0,0)
    }, [])

  return (
    <div className="min-h-screen relative bg-black w-full font-serif flex flex-col pb-20 no-scrollbar gap-5">
      <Navbar />

      {/* <div className="flex justify-start overflow-x-scroll bg-white no-scrollbar">
        <img src={heroImg} alt="hero-img" className="md:w-1/3 w-full object-cover min-h-[60vh] max-h-[60vh]" />
        <img src={heroTacosImg} alt="hero-img" className="md:w-1/3 w-full object-cover min-h-[60vh] max-h-[60vh]" />
        <img src={heroBurro} alt="hero-img" className="md:w-1/3 w-full object-cover min-h-[60vh] max-h-[60vh]" />

      </div> */}
      {/* <div className="bg-green-400 p-2 flex justify-center">
        <p className='text-green-900 font-semibold'>Order ahead available!</p>
      </div> */}
      <div className="w-full relative rounded-md px-5 pb-1">
        <img src={heroImg} alt="hero img" className='object-cover w-full h-48 rounded-md' />
        <div className="absolute inset-0 bg-black bg-opacity-60 flex justify-center items-center">
            <p className='text-2xl font-semibold'>Order ahead now!</p>
        </div>
      </div>


      <div className='flex flex-col items-center gap-8 p-5'>
        <Menu />

        <FindUs />

        <div className="flex flex-col gap-5 w-full">
          <p className='text-3xl border-b ml-2'>Hours</p>
        </div>
      </div>

      <CheckoutBar order={order} setOrder={setOrder} />

    </div>
  )
}

export default Home
