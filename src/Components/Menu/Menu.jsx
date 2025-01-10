import React, { useEffect } from 'react'
import MenuLinkCard from './MenuLinkCard';
import heroImg from '../../assets/hero-torta.jpeg'
import { MENU_SECTIONS } from '../../data';
import { Link } from 'react-router-dom';
import { PiBeerBottle } from "react-icons/pi";
import { IoIosArrowForward } from 'react-icons/io';


const Menu = () => {

  return (
    <div className="flex flex-col gap-2">
        <p className='text-3xl border-b border-zinc-700 ml-2'>Menu</p>

        <div className="grid grid-cols-1 m-2 gap-5">
            {MENU_SECTIONS.map(({img, label, description}, i) => {
                if (label == "Drinks") {
                    return <Link to={`/menu/drinks`}>
                        <div className="flex gap-5">
                            <div className='w-1/3 h-28 rounded-md bg-zinc-400 text-zinc-600 flex justify-center items-center'>
                                <PiBeerBottle className='text-6xl' />
                            </div>

                            <div className="flex flex-col justify-between flex-1">
                                <div className="flex flex-col">
                                    <p className='text-lg font-semibold'>Drinks</p>
                                    <p className='text-zinc-300 text-sm'>Choose from a variety of ice-cold beverages</p>

                                </div>

                                <div className="w-full flex justify-end">
                                    <IoIosArrowForward className='text-zinc-400' />

                                </div>
                            </div>

                        </div>
                    
                    </Link>

                } else {
                    return <MenuLinkCard key={i} img={img} label={label} description={description} />

                }

            })}
        </div>
                
    </div>
  )
}

export default Menu
