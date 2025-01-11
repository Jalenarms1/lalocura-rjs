import React, { useEffect, useState } from 'react'
import { DRINK_LIST } from '../../data'
import { GrSubtractCircle } from 'react-icons/gr'
import { IoIosAddCircleOutline } from 'react-icons/io'

const DrinksPicker = ({drinks, setDrinks}) => {

    // useEffect(() => {
    //     if (Object.keys(drinks) == 0) {
    //         setDrinks(Object.keys(DRINK_LIST).reduce((acc, drink) => {
    //             acc[drink] = 0
    
    //             return acc
    //         }, {}))

    //     }
    // }, [])

    const onAddDrink = (drink) => {
        setDrinks({...drinks, [drink]: drinks[drink] + 1})
    }

    const onSubDrink = (drink) => {
        setDrinks({...drinks, [drink]: drinks[drink] - 1})

    }



  return (
    <div className="flex flex-col gap-5 mb-5 p-3">
        <div className="flex flex-col">
            <div className="flex justify-between items-center">
                <p className='text-3xl font-semibold'>Drinks</p>
                {/* <p className='text-sm'>$2.99 ea</p> */}
            </div>
            <p className='text-zinc-300'>Choose from a variety of ice-cold beverages</p>
        </div>

        <div className="flex flex-col gap-2">
            {Object.keys(DRINK_LIST).map((drink) => (
                <div className="flex justify-between items-center p-2 rounded-md border border-zinc-600">
                    <div className="flex items-center  gap-2 ">
                        <p className='text-lg'>{drink}</p>
                        <p className='text-zinc-500'>{DRINK_LIST[drink]}</p>

                    </div>
                    <div className="flex gap-2 items-center">
                        <GrSubtractCircle onClick={() => drinks[drink] > 0 ? onSubDrink(drink) : null} className={`text-2xl`}/>
                            <p className='p-2 w-12 rounded-md bg-white text-black justify-center flex'>{drinks[drink]}</p>
                        <IoIosAddCircleOutline onClick={() => onAddDrink(drink)} className='text-3xl' />
                    </div>
                </div>
            ))}

        </div>
    </div>
  )
}

export default DrinksPicker
