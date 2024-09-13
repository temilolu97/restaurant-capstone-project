import React, { useState } from 'react'
import logo from '../assets/LOGO 1.png'
import { BiUserCircle } from 'react-icons/bi'
import { FaUserCircle } from 'react-icons/fa'
const Navbar = () => {
    const [navItems, setNavItems] = useState([
        {
            item: "Home",
            path: ""
        },
        {
            item: "Browse Menu",
            path: ""
        },
        {
            item: "Special Offers",
            path: ""
        },
        {
            item: "Restaurants",
            path: ""
        },
        {
            item: "Track Order",
            path: ""
        }

    ])

    const [activeItem, setActiveItem] = useState("Home")
    const handleClick = (activeItem)=>{
        setActiveItem(activeItem)
    }
    return (
        <div>
            <div className='flex justify-between items-center'>
                <img src={logo} className='h-[53px]' />
                <div className='flex gap-2'>
                    {navItems.map(navItem => (
                        <div onClick={()=>handleClick(navItem.item)} className={`flex items-center py-1 rounded-full px-[34px] py-[9px] font-semibold hover:bg-[#fc8a06] hover:text-white ${activeItem == navItem.item ? 'border bg-[#fc8a06] text-white': ''}`}>{navItem.item}</div>
                    ))}
                </div>
                <div>
                    <button className='flex items-center gap-2 bg-black px-[26.38px] py-[17px] text-white rounded-full'>
                        <FaUserCircle fill='orange'/>
                        <p className='text-sm'>Login/Signup</p>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Navbar
