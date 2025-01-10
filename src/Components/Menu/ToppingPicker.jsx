import React from 'react'
import { TOPPING_LIST } from '../../data'

const ToppingPicker = ({selectedToppings, onSelect}) => {

    return (
      <div className="flex flex-col">
          <p className='text-xl bg-red-950 p-2 rounded-sm font-semibold'>Toppings</p>
  
          <div className="flex flex-col gap-2 mt-2">
              {TOPPING_LIST.map((t, i) => (
                  <div key={`${t}_${i}`} onClick={() => onSelect(t)} className='flex items-center border border-zinc-500 p-2 gap-2 rounded-sm'>
                      <div className=" w-8 h-8 rounded-full bg-white relative flex justify-center items-center">
                         {selectedToppings.includes(t) && <div className='w-4 h-4 bg-red-950 rounded-sm'></div>}
                      </div>
  
                      <p className='text-base '>{t}</p>
                  </div>
              ))}
  
          </div>
      </div>
    )
  }

export default ToppingPicker
