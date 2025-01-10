import React, { useEffect } from 'react'
import MenuLinkCard from './MenuLinkCard';
import heroImg from '../../assets/hero-torta.jpeg'
import { MENU_SECTIONS } from '../../data';

const Menu = () => {

  return (
    <div className="flex flex-col gap-2">
        <p className='text-3xl border-b border-zinc-700 ml-2'>Menu</p>

        <div className="grid grid-cols-1 m-2 gap-5">
            {MENU_SECTIONS.map(({img, label, description}, i) => {
                return <MenuLinkCard key={i} img={img} label={label} description={description} />

            })}

        </div>

    </div>
  )
}

export default Menu
