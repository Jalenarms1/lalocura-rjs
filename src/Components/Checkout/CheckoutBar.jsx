import { useElements, useStripe } from '@stripe/react-stripe-js'
import React, { useState } from 'react'
import { IoIosArrowForward } from 'react-icons/io'
import { LuShoppingBag } from 'react-icons/lu'
import { MdRestaurantMenu } from 'react-icons/md'
import { CardElement } from '@stripe/react-stripe-js'

const CheckoutBar = ({order}) => {
  const [openCheckout, setOpenCheckout] = useState(false)
  const stripe = useStripe()
  const elements = useElements()

  return (
    <div className={`fixed bottom-0 w-full duration- ease-in-out overflow-y-auto ${
        openCheckout ? "expand rounded-tl-md rounded-tr-md" : "h-[7vh]"
      } bg-red-950 flex justify-between items-center p-3 px-4`}>
        {!openCheckout ? <div onClick={() => !openCheckout ? setOpenCheckout(true) : null} className='flex justify-between w-full'>
            <div className="flex items-center gap-2">
            <LuShoppingBag />
            <p className='text-base font-semibold'>Order</p>

            </div>

            <div className="flex items-center gap-2">
            <p>$ {order.subTotal.toFixed(2)}</p>
            <IoIosArrowForward className='text-zinc-400' />
            </div>
        </div> : (
            <div className=" h-full overflow-y-auto no-scrollbar w-full flex flex-col py-2 gap-2">
                <div className="w-full flex justify-end">
                    {/* <p>hello</p> */}
                    <MdRestaurantMenu onClick={() => setOpenCheckout(false)} className='text-3xl cursor-pointer active:text-zinc-200' />

                </div>

                <div className='flex justify-center'>
                    <p className='text-xl font-semibold'>Checkout</p>
                </div>

                <div className="flex flex-col gap-2">
                    {order.orderItems.map((oi) => (
                        <div className="flex border-b border-dashed border-zinc-500 flex-col">
                            <div className="flex justify-between w-full items-center">
                                <div className="flex items-center gap-2">
                                    <p className='text-lg'>{oi.itemType.slice(0, -1)}(s)</p>
                                    <p>{oi.quantity}x</p>
                                </div>
                                <p className='text-sm'>{oi.subTotal}</p>
                            </div>
                            <div className='flex gap-2'>
                                <p className='text-sm text-zinc-300'>{oi.meat}, </p>
                                <p className='text-sm text-zinc-300'> {oi.toppings.join(", ")}</p>
                                
                            </div>
                        </div>
                    ))}
                    {order.drinks.map((drink) => (
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
                    ))}

                    <div className="flex mt-10">
                        <div className="flex flex-col w-1/2 gap-2">
                            <div className="w-full flex justify-between">
                                <p className='font-semibold'>Subtotal:</p>
                                <p>$ {order.subTotal.toFixed(2)}</p>
                            </div>

                            <div className="w-full flex justify-between">
                                <p className='font-semibold'>Tax:</p>
                                <p>$ {order.tax.toFixed(2)}</p>
                            </div>

                            <div className="w-full flex justify-between">
                                <p className='font-semibold'>Total:</p>
                                <p>$ {(order.subTotal + order.tax).toFixed(2)}</p>
                            </div>

                        </div>
                    </div>

                    <div className="w-full flex flex-col items-end mt-3 gap-5">
                        <div className=" flex flex-col w-full items-end mt-2 gap-2">
                            <p className='w-full text-2xl font-semibold'>Contact Information</p>
                            <div className="w-full flex flex-col gap-1">
                                <p>Name</p>
                                <input type="text" className='p-1 text-black' placeholder='Name' />
                            </div>

                            <div className="w-full flex flex-col gap-1">
                                <p>Email</p>
                                <input type="text" className='p-1 text-black' placeholder='Email' />
                            </div>

                            <div className="w-full flex flex-col gap-1">
                                <p>Phone Number</p>
                                <input type="text" className='p-1 text-black' placeholder='Phone Number' />
                            </div>

                        </div>

                        <div className=" flex flex-col w-full items-end mt-2 gap-2">
                            <p className='w-full text-2xl font-semibold'>Payment Information</p>
                            <div className="w-full">
                                <CardElement className='text-black bg-white p-2 rounded-md'/>
                            </div>

                        </div>
                        <button className='w-full bg-green-600 p-1 rounded-md active:bg-green-700 font-semibold font-sans'>PAY NOW</button>
                    </div>

                </div>

            </div>
        )}

    </div>
  )
}

export default CheckoutBar
