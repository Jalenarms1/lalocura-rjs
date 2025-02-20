import React, { useEffect } from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { Link } from 'react-router-dom';

const MenuLinkCard = ({img, label, description, price}) => {

  return (
    <Link to={`/menu/${label.toLowerCase()}`}>
        <div className="flex gap-2 items-center  p-2 rounded-sm ">
            <img src={img} alt="hero-img" className=" object-cover h-36 w-44 rounded-md" />

            <div className="flex flex-col justify-between flex-1">
                <div className="flex flex-col items-center text-center gap-2">
                    <p className='text-base font-semibold'>{label}</p>
                    <p className='text-zinc-300 text-sm'>{description}</p>
                    <p className='text-zinc-300 text-sm'>{price}</p>
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
