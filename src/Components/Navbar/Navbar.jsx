import React, { useState } from 'react'
import { RiMenu2Fill } from 'react-icons/ri'
import logo from '../../assets/logo.jpeg'
import SidebarView from './SidebarView'
import { FaReceipt } from "react-icons/fa";
import { SignOutButton, useUser } from '@clerk/clerk-react';


const Navbar = ({isAdminView = false}) => {
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const {isSignedIn, user} = useUser()

  return (
    <div className="w-full sticky top-0 z-10">
        {/* Navbar */}
        <div className=" w-full flex items-center py-4 px-4 bg-black text-white  shadow-sm shadow-red-950 z-10">
            <div className="w-full justify-between flex items-center">
            <div className="flex items-center gap-2">
                <img src={logo} alt="logo" className="w-10 h-10" />
                <p className="font-serif text-lg font-semibold">Lalocaura Tacos Del Valle</p>
            </div>
            {(isSignedIn && isAdminView) ? <SignOutButton redirectUrl='/admin' /> : null}
            {/* <div className="relative">
                <FaReceipt className='text-2xl text-yellow-200' />
                <div className="w-2 h-2 rounded-full bg-red-600 top-0 left-[5] absolute"></div>
            </div> */}
            {/* <RiMenu2Fill
                className="text-zinc-200 text-xl cursor-pointer"
                onClick={() => setSidebarOpen(!sidebarOpen)}
            /> */}
            </div>
        </div>


        {/* Sidebar */}
        <SidebarView onClick={() => setSidebarOpen(!sidebarOpen)} sidebarOpen={sidebarOpen} />
    </div>
    // <div className={`fixed bottom-0 w-full flex p-4`}>
    //     <RiMenu2Fill />
    // </div>
  )
}

export default Navbar
