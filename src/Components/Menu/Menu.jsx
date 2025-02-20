import React, { useEffect } from 'react'
import MenuLinkCard from './MenuLinkCard';
import heroImg from '../../assets/hero-torta.jpeg'
import { MENU_SECTIONS } from '../../data';
import { Link } from 'react-router-dom';
import { PiBeerBottle } from "react-icons/pi";
import { IoIosArrowForward } from 'react-icons/io';


const Menu = () => {

  return (
    <div className="flex flex-col gap-2 p-3">
        <p className='text-3xl '>Menu</p>
        <p className='text-zinc-300 mb-5'>Build your meal</p>

        <div className="grid grid-cols-1  gap-2">
            {MENU_SECTIONS.map(({img, label, description, price}, i) => {
                if (label == "Drinks") {
                    return <Link  key={label} to={`/menu/drinks`}>
                        <div className="flex gap-5 p-2 items-center rounded-sm border border-zinc-900">
                            <div className=' h-16 w-16 rounded-md bg-zinc-400 text-zinc-600 flex justify-center items-center'>
                                <PiBeerBottle className='text-6xl' />
                            </div>

                            <div className="flex flex-col justify-between flex-1">
                                <div className="flex flex-col gap-2">
                                    <p className='text-base font-semibold'>Drinks</p>
                                    {/* <p className='text-zinc-300 text-sm'>Choose from a variety of ice-cold beverages</p> */}

                                </div>

                            </div>
                            <div className="w-full flex justify-end">
                                <IoIosArrowForward className='text-zinc-400' />

                            </div>

                        </div>
                    
                    </Link>

                } else {
                    return <MenuLinkCard key={i} img={img} label={label} description={description} price={price ?? ""} />

                }

            })}
        </div>
                
    </div>
  )
}

export default Menu
