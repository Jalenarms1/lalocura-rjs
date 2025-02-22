import React, { useEffect, useState } from 'react'
import { IoIosArrowForward } from 'react-icons/io'
import { LuShoppingBag } from 'react-icons/lu'
import { MdRestaurantMenu } from 'react-icons/md'
import { MENU_SECTIONS, ORDER_INIT, urls } from '../../data'
import { FaCheckCircle } from "react-icons/fa";
import { VscLoading } from "react-icons/vsc";
import { Link } from 'react-router-dom'



const CheckoutBar = ({order, setOrder, openCheckout, setOpenCheckout}) => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [paymentStatus, setPaymentStatus] = useState("")
  const [paymentError, setPaymentError] = useState("")
  const [isProcessing, setIsProcessing] = useState(false)
  const [customerInfoError, setCustomerInfoError] = useState({name: "", email: "", phone: "", card: ""})
  const [localOrder, setLocalOrder] = useState(ORDER_INIT)



  const isValidCustomer = () => {
    const errors = { name: "", email: "", phone: "", card: ""}
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    let isValid = true

    if (name.trim() === "") {
        errors.name = "Please enter a valid name"
        isValid = false
    }

    if (email.trim() === "" || !emailRegex.test(email)) {
        errors.email = "Please enter a valid email"
        isValid = false
    }

    // if (phone.length !== 10 || isNaN(phone)) {
    //     errors.phone = "Please enter a valid phone number"
    //     isValid = false
    // }

    const card = elements.getElement("card")

    if (!card || !card._complete) {
        errors.card = "Please enter a valid card"
        isValid = false
    }

    setCustomerInfoError(errors)

    return isValid
  };

  const onPayNow = async () => {
    setPaymentError("")
    setPaymentStatus("")
    setIsProcessing(true)
    console.log("creating payment intent");

    if (!isValidCustomer()) { 
        setIsProcessing(false)
        return 
    }

    if (!stripe || !elements) { return }
    
    const resp = await fetch(urls.createPaymentIntent, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${import.meta.env.VITE_FB_API_KEY}`
        },
        body: JSON.stringify({
            amount: Math.round(parseFloat((order.subTotal + order.tax).toFixed(2)) * 100)
        })
    })
    console.log(resp);
    
    const {clientSecret} = await resp.json()

    console.log(clientSecret);

    const paymentResp = await stripe.confirmCardPayment(
        clientSecret,
        {payment_method: {
            card: elements.getElement("card"),
            billing_details: {
                name,
                email,
                phone
            }
        }}
    )

    console.log(paymentResp);
    if (paymentResp.error) {
        setPaymentError(paymentResp.error.message)
        
    } else {
        setPaymentStatus(paymentResp.paymentIntent.status)
       
        if (paymentResp.paymentIntent.status == "succeeded") {
            const orderObj = {
                ...order,
                id: crypto.randomUUID(),
                intentId: paymentResp.paymentIntent.id,
                createdAt: Date.now(),
                customerName: name,
                customerEmail: email,
                orderStatus: "pending"
            }

            setOrder(ORDER_INIT)

            fetch(urls.createOrder, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${import.meta.env.VITE_FB_API_KEY}`
                },
                body: JSON.stringify(orderObj)
        
            })
        }
    }

    setIsProcessing(false)

    
  }

  const removeOrderItem = (id, isDrink) => {
    if (!isDrink) {
        const newItems = order.orderItems.filter(i => i.id != id)
    
        const newSubTotal = parseFloat((newItems.reduce((acc, obj) => {
    
            acc += obj.subTotal
    
            return acc
        }, 0) + order.drinks.reduce((acc, obj) => { acc += obj.subTotal }, 0)).toFixed(2))
    
        const newTax = parseFloat((newSubTotal * 1.08 - newSubTotal).toFixed(2)) 
    
        const newOrder = {
            ...order,
            subTotal: newSubTotal,
            tax: newTax,
            orderItems: newItems
    
        }
    
        setOrder(newOrder)
        setLocalOrder(newOrder)

        if (newOrder.subTotal == 0) {
            setOpenCheckout(false)
        }


    } else {
        const newItems = order.drinks.filter(i => i.drink != id)
    
        const newSubTotal = parseFloat((newItems.reduce((acc, obj) => {
    
            acc += obj.subTotal
    
            return acc
        }, 0) + order.orderItems.reduce((acc, obj) => { 
            
            acc += obj.subTotal 

            return acc
        
        }, 0)).toFixed(2))
    
        const newTax = parseFloat((newSubTotal * 1.08 - newSubTotal).toFixed(2)) 
    
        const newOrder = {
            ...order,
            subTotal: newSubTotal,
            tax: newTax,
            drinks: newItems,
    
        }
    
        setOrder(newOrder)
        setLocalOrder(newOrder)

        if (newOrder.subTotal == 0) {
            setOpenCheckout(false)
        }
    }
  }

  const placeOrder = async () => {
    const resp = await fetch(import.meta.env.VITE_API_ROOT + "/create-order", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            subTotal: parseInt(order.subTotal * 100),
            tax: parseInt(order.tax * 100),
            orderItems: order.orderItems.map(oi => {
                return {
                    ...oi,
                    subTotal: parseInt(oi.subTotal * 100),
                    itemImg: MENU_SECTIONS.find(s => s.label == oi.itemType).img
                }
            }),
            drinks: order.drinks.map(d => {
                return {
                    ...d,
                    subTotal: parseInt(d.subTotal * 100)
                }
            })
        })
    })    

    const data = await resp.json()

    console.log(data);
    if (data.sessionUrl) {
        window.location.href = data.sessionUrl
    }
    
  }


  useEffect(() => {
    setPaymentError("")
    setPaymentStatus("")
    setIsProcessing(false)

    if (openCheckout) {
        setLocalOrder(order)
    }
  }, [openCheckout])

  return (
    <div className={`fixed bottom-0 w-full duration- ease-in-out overflow-y-auto overflow-x-hidden ${
        openCheckout ? "expand rounded-tl-md rounded-tr-md" : order.orderItems.length > 0 ? "h-[7vh]" : "hidden"
      } bg-red-950 flex justify-between items-center`}>
        {openCheckout && <div className=' w-full fixed bottom-5  z-[2]'>
            <button onClick={placeOrder} className='bg-green-900 active:bg-green-700 w-[95vw] mx-2 p-3 rounded-md font-semibold text-lg'>Place Order</button>

        </div>}
        {!openCheckout ? <div onClick={() => !openCheckout ? setOpenCheckout(true) : null} className='flex justify-between w-full mx-4'>
            <div className="flex items-center gap-2">
            <LuShoppingBag />
            <p className='text-base font-semibold'>Order</p>

            </div>

            <div className="flex items-center gap-2">
            <p>$ {order.subTotal.toFixed(2)}</p>
            <IoIosArrowForward className='text-zinc-400' />
            </div>
        </div> : (
            <div className=" h-full px-4 overflow-y-auto overflow-x-hidden no-scrollbar w-full flex flex-col gap-2 relative pb-10">
                 
                <div className="w-full flex justify-end sticky top-0 bg-red-950 py-2 shadow-sm shadow-zinc-800">
                    {/* <p>hello</p> */}
                    <MdRestaurantMenu onClick={() => setOpenCheckout(false)} className='text-3xl cursor-pointer active:text-zinc-200' />

                </div>

                <div className='flex justify-center'>
                    <p className='text-xl font-semibold'>Checkout</p>
                </div>

                <div className="flex flex-col gap-2">
                    {localOrder.orderItems.map((oi) => (
                        <div className="flex items-start gap-2 border-b border-dashed border-zinc-500">
                            <button onClick={() => removeOrderItem(oi.id)} className='text-zinc-400'>x</button>
                            <Link to={`/menu/${oi.itemType.toLowerCase()}/${oi.id}`} className='flex justify-between w-full'>
                                <div className="flex  w-full flex-col">
                                    <div className="flex items-center gap-2">
                                        <p className='text-lg'>{oi.itemType.slice(0, -1)}(s)</p>
                                        <p>{oi.quantity}x</p>
                                    </div>
                                    <div className='flex gap-2'>
                                        <p className='text-sm text-zinc-300'>{[oi.meat, ...oi.toppings].join(", ")}</p>
                                        
                                    </div>
                                </div>
                                <p className='text-sm'>{oi.subTotal}</p>
                            </Link>
                        </div>
                        
                    ))}
                    {localOrder.drinks.map((drink) => (
                        <>
                            {drink.quantity > 0 && <div className="flex border-b border-dashed border-zinc-500 gap-2">
                                <button onClick={() => removeOrderItem(drink.drink, true)} className='text-zinc-400'>x</button>
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
                                <p>$ {parseFloat(localOrder.subTotal.toFixed(2))}</p>
                            </div>

                            <div className="w-full flex justify-between">
                                <p className='font-semibold'>Tax:</p>
                                <p>$ {localOrder.tax.toFixed(2)}</p>
                            </div>

                            <div className="w-full flex justify-between">
                                <p className='font-semibold'>Total:</p>
                                <p>$ {(localOrder.subTotal + localOrder.tax).toFixed(2)}</p>
                            </div>

                        </div>
                    </div>
                    
                   

                    <div className="w-full flex flex-col items-end mt-3 gap-5">
                        <div className=" flex flex-col w-full items-end mt-2 gap-2">
                            {/* <p className='w-full text-2xl font-semibold'>Contact Information</p>
                            <div className="w-full flex flex-col gap-1">
                                <p className='font-semibold'>Name</p>
                                {paymentStatus != "succeeded" ? <input value={name} onChange={(e) => setName(e.target.value)} type="text" className='p-1 text-black rounded-sm' placeholder='Name' /> : <p>{name}</p>}
                                {customerInfoError.name != "" && <p className='text-red-500'>{customerInfoError.name}</p>}
                            </div>

                            <div className="w-full flex flex-col gap-1">
                                <p className='font-semibold'>Email</p>
                                {paymentStatus != "succeeded" ? <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" className='p-1 rounded-sm text-black' placeholder='Email' /> : <p>{email}</p>}
                                {customerInfoError.email != "" && <p className='text-red-500'>{customerInfoError.email}</p>}

                            </div> */}

                        </div>
                        
                        {/* {paymentStatus == "" ? <div className=" flex flex-col w-full items-end mt-2 gap-3">
                            <>
                                <p className='w-full text-2xl font-semibold'>Payment Information</p>
                                <div className="w-full">
                                    <CardElement className='text-black bg-white p-2 rounded-sm'/>
                                </div>
                                {customerInfoError.card != "" && <p className='text-red-500 w-full'>{customerInfoError.card}</p>}

                            
                            </>

                            {paymentError != "" && <p className='text-red-600 text-sm font-sans w-full'>{paymentError}</p>}
                            <button onClick={onPayNow} className='w-full bg-green-600 p-2 rounded-md active:bg-green-700 font-semibold font-sans flex justify-center'>
                                {!isProcessing ? <p>PAY NOW</p> : <VscLoading className='animate-spin' />}
                            </button>
                        </div> : (
                            <div className="flex flex-col gap-5">
                                <div className='w-full text-white p-1 rounded-md flex justify-center items-center gap-2 font-sans'>
                                    <FaCheckCircle  className='text-green-500'/>
                                    <p className='text-green-500'>{paymentStatus.toUpperCase()}</p>
                                    
                                </div>

                                <div>
                                    <p className='text-sm'>Your order has been succesfully placed. You will recieve an email when your order has been confirmed</p>
                                </div>
                            </div>
                        )} */}
                    </div>

                </div>

            </div>
        )}

    </div>
  )
}

export default CheckoutBar
