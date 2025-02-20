import React, { useEffect } from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { Link } from 'react-router-dom';

const MenuLinkCard = ({img, label, description, price}) => {

  return (
    <Link to={`/menu/${label.toLowerCase()}`}>
        <div className="flex gap-5  p-2 bg-zinc-950 rounded-sm shadow-sm shadow-zinc-900">
            <img src={img} alt="hero-img" className=" object-cover h-36 w-36 rounded-md" />

            <div className="flex flex-col justify-between flex-1">
                <div className="flex flex-col items-center text-center gap-2">
                    <p className='text-lg font-semibold'>{label}</p>
                    <p className='text-zinc-300 text-sm'>{description}</p>
                    <p className='text-zinc-300 '>{price}</p>
                </div>

                <div className="w-full flex justify-end">
                    {/* <IoIosArrowForward className='text-zinc-400' /> */}

                </div>
            </div>

        </div>
    
    </Link>
  )
}

export default MenuLinkCard
