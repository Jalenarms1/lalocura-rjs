import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { MEAT_LIST, MENU_SECTIONS } from '../data'
import { IoIosArrowBack } from "react-icons/io";
import logo from "../assets/logo.jpeg"
import { IoIosAddCircleOutline } from "react-icons/io";
import MeatPicker from '../Components/Menu/MeatPicker';
import ToppingPicker from '../Components/Menu/ToppingPicker';


const MenuSection = () => {
    const {sectionType} = useParams()
    const [menuSection, setMenuSection] = useState(null)
    const [selectedMeat, setSelectedMeat] = useState(MEAT_LIST[0])
    const [selectedToppings, setSelectedToppings] = useState([])
    const [specialInstructions, setSpecialInstructions] = useState("")

    useEffect(() => {
        window.scrollTo(0,0)
        document.body.classList.add("no-scrollbar")
    }, [])

    useEffect(() => {
        setMenuSection(MENU_SECTIONS.find(s => s.label.toLowerCase() == sectionType))
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

        <div className="flex flex-col p-2 gap-5">
            <img src={menuSection?.img} alt="section image" className='w-full object-cover h-60 rounded-md' />
            
            <div className="flex flex-col">
                <p className='text-3xl font-semibold'>Build your {menuSection?.label?.slice(0, menuSection?.label.length - 1)}</p>
                <p className='text-zinc-300'>{menuSection?.description}</p>
            </div>

            <MeatPicker selectedMeat={selectedMeat} onSelect={onMeatSelect} />
            <ToppingPicker selectedToppings={selectedToppings} onSelect={onToppingSelect} />

            <div className="flex flex-col gap-2">
                <p className='text-2xl font-semibold'>Special Instructions</p>
                <textarea onChange={(e) => setSpecialInstructions(e.target.value)} value={specialInstructions} rows={5} className='p-2 text-black'></textarea>
            </div>

            <div className="flex flex-col">
                <p className='font-bold text-lg'>Meat</p>
                <p>{selectedMeat}</p>
            </div>

            <div className="flex flex-col">
                <p className='font-bold text-lg'>Toppings</p>
                <p>{selectedToppings.join(", ")}</p>
            </div>

            <button className='bg-orange-400 text-white font-bold p-2 rounded-full active:bg-orange-500'>ADD TO ORDER</button>
        </div>
    </div>
  )
}

export default MenuSection
