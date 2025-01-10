import React from 'react'
import { MEAT_LIST } from '../../data'

const MeatPicker = ({selectedMeat, onSelect}) => {

  return (
    <div className="flex flex-col">
        <p className='text-xl bg-red-950 p-2 rounded-sm font-semibold'>Meat</p>

        <div className="flex flex-col gap-2 mt-2">
            {MEAT_LIST.map((m, i) => (
                <div key={m + i} onClick={() => onSelect(m)} className='flex items-center border border-zinc-500 p-2 gap-2 rounded-sm'>
                    <div className=" w-8 h-8 rounded-full bg-white relative flex justify-center items-center">
                       {selectedMeat == m && <div className='w-4 h-4 bg-red-950 rounded-sm'></div>}
                    </div>

                    <p className='text-base '>{m}</p>
                </div>
            ))}

        </div>
    </div>
  )
}

export default MeatPicker
