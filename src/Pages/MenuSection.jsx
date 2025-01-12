import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { DRINK_LIST, MEAT_LIST, MENU_SECTIONS } from '../data'
import { IoIosArrowBack } from "react-icons/io";
import logo from "../assets/logo.jpeg"
import { IoIosAddCircleOutline } from "react-icons/io";
import MeatPicker from '../Components/Menu/MeatPicker';
import ToppingPicker from '../Components/Menu/ToppingPicker';
import { GrSubtractCircle } from "react-icons/gr";
import DrinksPicker from '../Components/Menu/DrinksPicker';


const MenuSection = ({order, setOrder}) => {
    const {sectionType} = useParams()
    const [menuSection, setMenuSection] = useState(null)
    const [selectedMeat, setSelectedMeat] = useState(MEAT_LIST[0])
    const [selectedToppings, setSelectedToppings] = useState([])
    const [specialInstructions, setSpecialInstructions] = useState("")
    const [quantity, setQuantity] = useState(1)
    const navigate = useNavigate()
    const [drinks, setDrinks] = useState(Object.keys(DRINK_LIST).reduce((acc, drink) => {
        acc[drink] = 0

        return acc
    }, {}))

    useEffect(() => {
        window.scrollTo(0,0)
        document.body.classList.add("no-scrollbar")

    }, [])
    
    useEffect(() => {
        if (menuSection?.label == "Drinks" && order.drinks.length > 0) {
            console.log(order.drinks);
            const drinkList = order.drinks.map(d => d.drink)
            setDrinks(Object.keys(DRINK_LIST).reduce((acc, drink) => {

                acc[drink] = drinkList.includes(drink) ? order.drinks.find(d => d.drink == drink).quantity : 0
                return acc
            }, {}))
        }
    }, [menuSection, order])

    useEffect(() => {
        const section = MENU_SECTIONS.find(s => s.label.toLowerCase() == sectionType)

        if (sectionType != "drinks") {
            setSelectedToppings(section.defaultToppings)
        }
        setMenuSection(section)
    }, [sectionType])

    const onMeatSelect = (meat) => {
        setSelectedMeat(meat)
    }

    const onToppingSelect = (topping) => {
        if (selectedToppings.includes(topping)) {
            setSelectedToppings(selectedToppings.filter(t => t != topping))
        } else {
            setSelectedToppings([...selectedToppings, topping])
        }
    }

    const onAddToOrder = () => {
        if (menuSection?.label != "Drinks") {
            console.log((quantity * menuSection?.price));
            
            const subTotal = parseFloat((quantity * menuSection?.price).toFixed(2))
            const orderItemObj = {
                id: crypto.randomUUID(),
                quantity,
                subTotal: subTotal,
                itemType: menuSection?.label,
                meat: selectedMeat,
                toppings: selectedToppings,
                specialInstructions
            }

            const newSubTotal = subTotal + order.subTotal
            const newTax = parseFloat((newSubTotal * 1.08 - newSubTotal).toFixed(2))

            setOrder({...order, orderItems: [...order.orderItems, orderItemObj], subTotal: newSubTotal, tax: newTax})
            navigate("/")

        } else {
            const drinkList = Object.keys(drinks).reduce((acc, drink) => {
                if (drinks[drink] > 0) {
                    const drinkObj = {
                        drink: drink,
                        quantity: drinks[drink],
                        subTotal: parseFloat((drinks[drink] * DRINK_LIST[drink]).toFixed(2))
                    }
    
    
                    acc.push(drinkObj)

                }

                return acc
            }, [])

            const newDrinkSubTotal = drinkList.reduce((acc, d) => {
                acc += d.subTotal
                return acc
            }, 0)
            // const newTax = parseFloat((newSubTotal * 1.08 - newSubTotal).toFixed(2))

            const newSubTotal = newDrinkSubTotal + order.subTotal
            const newTax = parseFloat((newSubTotal * 1.08 - newSubTotal).toFixed(2))

            setOrder({...order, drinks: drinkList, subTotal: newSubTotal, tax: newTax})
            navigate("/")
        }
    }



  return (
    <div className='min-h-screen relative bg-black w-full font-serif flex flex-col pb-20 gap-3'>
        <div className="flex sticky top-0 z-10 justify-between w-full items-center py-3 px-3 bg-black text-white border-b border-zinc-700 shadow-sm shadow-zinc-800">
            
            <Link to={"/"} className="flex items-center">
                <IoIosArrowBack className='text-3xl' />
                <img src={logo} alt="logo" className="w-10 h-10" />

            </Link>

            <div><p className='text-lg font-semibold'>{menuSection?.label}</p></div>

            <div>
                <IoIosAddCircleOutline className='text-3xl' />
            </div>
        </div>

        {sectionType == "drinks" ? (
            <DrinksPicker drinks={drinks} setDrinks={setDrinks} />
        ) : <div className="flex flex-col p-5 gap-5">
                <img src={menuSection?.img} alt="section image" className='w-full object-cover h-60 rounded-md' />
                
                <div className="flex flex-col">
                    <div className="flex justify-between items-center">
                        <p className='text-3xl font-semibold'>Build your {menuSection?.label?.slice(0, menuSection?.label.length - 1)}</p>
                        <p className='text-sm'>${menuSection?.price} ea</p>
                    </div>
                    <p className='text-zinc-300'>{menuSection?.description}</p>
                </div>

                <MeatPicker selectedMeat={selectedMeat} onSelect={onMeatSelect} />
                <ToppingPicker selectedToppings={selectedToppings} onSelect={onToppingSelect} />

                <div className="flex flex-col gap-2">
                    <p className='text-2xl font-semibold'>Special Instructions</p>
                    <textarea onChange={(e) => setSpecialInstructions(e.target.value)} value={specialInstructions} rows={5} className='p-2 text-black'></textarea>
                </div>

                <div className="flex flex-col gap-2">
                    <p className='text-2xl font-semibold'>Quantity</p>
                    <div className="flex gap-2 items-center">
                        <p className='p-2 w-20 rounded-md bg-white text-black'>{quantity}</p>
                        <GrSubtractCircle onClick={() => quantity > 1 ? setQuantity(quantity - 1) : null} className={`text-2xl ${quantity == 1 ? 'text-zinc-500' : ''}` }/>
                        <IoIosAddCircleOutline onClick={() => setQuantity(quantity + 1)} className='text-3xl' />
                    </div>
                    {/* <input
                        type="number"
                        className="text-black w-fit p-2"
                        value={quantity}
                        // onChange={(e) => parseInt(e.target.value) ? setQuantity(Number(e.target.value)) : setQuantity("")}
                    /> */}
                </div>

                <div className="flex flex-col">
                    <p className='font-bold text-lg'>Meat</p>
                    <p>{selectedMeat}</p>
                </div>

                <div className="flex flex-col">
                    <p className='font-bold text-lg'>Toppings</p>
                    {selectedToppings.length == 0 && <p>None.</p>}
                    <p>{selectedToppings.join(", ")}</p>
                </div>

                <div className="flex flex-col">
                    <p className='font-bold text-lg'>Subtotal</p>
                    <p>$ {(quantity * menuSection?.price).toFixed(2)}</p>
                </div>

            </div>}
        
        <button onClick={onAddToOrder} className='bg-orange-400 text-white font-bold p-2 rounded-full active:bg-orange-500 m-3'>{menuSection?.label == "Drinks" ? "DONE" :  "ADD TO ORDER"}</button>
    </div>
  )
}

export default MenuSection
