import React, { useEffect, useState } from 'react'
import OrderCard from './OrderCard';
import { urls } from '../../data';


const Orders = () => {
    const [orders, setOrders] = useState([])

    useEffect(() => {
        getOrders()
    }, [])

    const getOrders = async () => {
        const resp = await fetch(urls.getOrders, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${import.meta.env.VITE_FB_API_KEY}`
            },
        })

        const data = await resp.json()

        console.log(data);
        
        setOrders(data.orders)
    }

  return (
    <div className="flex flex-col  w-full relative">
        <p className='text-3xl border-b border-zinc-700 pl-2'>Orders</p>

        <div className="flex flex-col">
            {orders.map(o => (
                <OrderCard key={o.id} order={o} />
            ))}
        </div>
        {/* <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className='w-[90%] mx-auto bg-white'>
                <p>Confirm Order</p>
            </div>
        </div> */}
    </div>
  )
}

export default Orders
