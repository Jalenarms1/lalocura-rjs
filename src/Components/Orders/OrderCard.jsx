import React, { useState } from 'react'
import { FaReceipt } from 'react-icons/fa'
import { IoIosArrowForward } from 'react-icons/io'
import { timestampToArizonaTime } from '../../data'

const OrderCard = ({order}) => {
  const [showAllItems, setShowAllItems] = useState(false)

  return (
    <div className="w-full p-3 bg-red-950 flex gap-12 justify-between items-center border-b border-zinc-800">
        <div className="flex flex-col gap-2">
            <div className="flex  gap-5">
                <FaReceipt className='text-4xl text-green-500' />
                <div className="flex flex-col">
                    <p className='text-zinc-400 text-xs'>CUSTOMER NAME</p>
                    <p className='text-white'>{order.customerName}</p>

                </div>
                <div className="flex flex-col">
                    <p className='text-zinc-400 text-xs'>TOTAL</p>
                    <p className='text-white'>${parseFloat(order.subTotal + order.tax).toFixed(2)}</p>

                </div>
                <div className="flex flex-col">
                    <p className='text-zinc-400 text-xs'>PLACED AT</p>
                    <p className='text-white'>{timestampToArizonaTime(order.createdAt)}</p>

                </div>
                
            </div>
            <div className="flex flex-col">
                <p className='text-sm'>Order items</p>
                {order.orderItems.slice(0, !showAllItems ? 1 : order.orderItems.length).map(oi => (
                    <div key={oi.id} className="flex border-b border-dashed border-zinc-500 flex-col">
                        <div className="flex justify-between w-full items-center">
                            <div className="flex items-center gap-2">
                                <p className='text-sm'>{oi.itemType.slice(0, -1)}(s)</p>
                                <p>{oi.quantity}x</p>
                            </div>
                            <p className='text-xs'>{oi.subTotal}</p>
                        </div>
                        <div className='flex gap-2'>
                            <p className='text-sm text-zinc-300'>{[oi.meat, ...oi.toppings].join(", ")}</p>
                            
                        </div>
                    </div>
                ))}
            </div>
            {order.orderItems.length > 1 && <div onClick={() => setShowAllItems(!showAllItems)} className="w-full flex flex-col items-center cursor-pointer">
              <p className="text-sm text-zinc-400">{showAllItems ? "See less" : "See more"}</p>
              <IoIosArrowForward className={`text-zinc-400 ${showAllItems ? "rotate-[270deg]" : "rotate-90"} `} />

            </div>}
            {order.orderStatus == "pending" && <div className='mt-2'>
                    <button className='text-sm font-semibold bg-yellow-300 text-black p-2 rounded-md shadow-sm shadow-zinc-200 active:bg-yellow-400'>CONFIRM ORDER</button>
            </div>}
            {/* {order.orderItems.map((oi) => (
                <div className="flex border-b border-dashed border-zinc-500 flex-col">
                    <div className="flex justify-between w-full items-center">
                        <div className="flex items-center gap-2">
                            <p className='text-lg'>{oi.itemType.slice(0, -1)}(s)</p>
                            <p>{oi.quantity}x</p>
                        </div>
                        <p className='text-sm'>{oi.subTotal}</p>
                    </div>
                    <div className='flex gap-2'>
                        <p className='text-sm text-zinc-300'>{[oi.meat, ...oi.toppings].join(", ")}</p>
                        
                    </div>
                </div>
            ))} */}
            {/* {order.drinks.map((drink) => (
                <>
                    {drink.quantity > 0 && <div className="flex border-b border-dashed border-zinc-500 flex-col">
                        <div className="flex justify-between w-full items-center">
                            <div className="flex items-center gap-2">
                                <p className='text-lg'>{drink.drink}</p>
                                <p>{drink.quantity}x</p>
                            </div>
                            <p className='text-sm'>{drink.subTotal}</p>
                        </div>
                    </div>}
                
                </>
            ))} */}
        </div>
        <IoIosArrowForward className='text-zinc-400' />

    </div>
  )
}

export default OrderCard
