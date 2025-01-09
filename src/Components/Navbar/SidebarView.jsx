import React from 'react'
import { MdRestaurantMenu } from "react-icons/md";


const SidebarView = ({onClick, sidebarOpen}) => {
  return (
    <div
        className={`fixed top-0 right-0 bg-red-950 min-h-screen md:w-96 w-80 transition-transform duration-300 ${
        sidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ zIndex: 50 }}
    >
        <div className="p-4 flex flex-col">
            <MdRestaurantMenu onClick={onClick} className='text-3xl cursor-pointer active:text-zinc-200' />
            <h2 className="text-lg font-bold">Sidebar Content</h2>
            <p>Additional sidebar information.</p>
        </div>
    </div>
  )
}

export default SidebarView
