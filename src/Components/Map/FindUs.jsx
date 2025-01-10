import React from 'react'
import MyMap from './MyMap'
import { LuMapPin } from 'react-icons/lu'
import { CURR_LOCATION } from '../../data'

const FindUs = () => {
  return (
    <div className="flex flex-col w-full px-3">
        <p className='text-3xl mt-2 border-b border-zinc-700'>Find Us</p>
        <div className="w-full pt-3 rounded-md flex flex-col">

            <MyMap />
            <div className="flex flex-col p-2">
                <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CURR_LOCATION.address)}`} target='_blank' rel="noopener noreferrer" className="flex gap-2">
                    <LuMapPin className='text-red-600 text-3xl' />
                    <div className="flex flex-col">
                        <p className='text-sm font-semibold'>{CURR_LOCATION.label}</p>
                        <p className='text-xs'>{CURR_LOCATION.address}</p>
                    </div>
                </a>

            </div>
        </div>

    </div>
  )
}

export default FindUs
