import React, { useEffect } from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { Link } from 'react-router-dom';

const MenuLinkCard = ({img, label, description}) => {

  return (
    <Link to={`/menu/${label.toLowerCase()}`}>
        <div className="flex gap-5">
            <img src={img} alt="hero-img" className="w-1/3 object-cover h-28 rounded-md" />

            <div className="flex flex-col justify-between flex-1">
                <div className="flex flex-col">
                    <p className='text-lg font-semibold'>{label}</p>
                    <p className='text-zinc-300 text-sm'>{description}</p>

                </div>

                <div className="w-full flex justify-end">
                    <IoIosArrowForward className='text-zinc-400' />

                </div>
            </div>

        </div>
    
    </Link>
  )
}

export default MenuLinkCard
