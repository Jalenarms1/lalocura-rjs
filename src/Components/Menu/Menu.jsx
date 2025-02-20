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
                    return <Link to={`/menu/drinks`}>
                        <div className="flex gap-5 p-2 bg-zinc-950 rounded-sm shadow-sm shadow-zinc-900">
                            <div className=' h-36 w-36 rounded-md bg-zinc-400 text-zinc-600 flex justify-center items-center'>
                                <PiBeerBottle className='text-6xl' />
                            </div>

                            <div className="flex flex-col justify-between flex-1">
                                <div className="flex flex-col items-center text-center gap-2">
                                    <p className='text-lg font-semibold'>Drinks</p>
                                    <p className='text-zinc-300 text-sm'>Choose from a variety of ice-cold beverages</p>

                                </div>

                                <div className="w-full flex justify-end">
                                    {/* <IoIosArrowForward className='text-zinc-400' /> */}

                                </div>
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
