import React, { useState } from 'react'
import menuOne from '../assets/menu1.svg';
import menuTwo from '../assets/menu2.svg';
import menuThree from '../assets/menu3.svg';
import menuFour from '../assets/menu4.svg'
import menuFive from '../assets/menu5.svg'
import menuSix from '../assets/menu 6.png'
import menuSeven from '../assets/menu7.svg'
import menuEight from '../assets/menu8.svg'
import menuNine from '../assets/menu9.svg'
import { FaCirclePlus } from "react-icons/fa6";

const Menu = () => {
    const [ categories, setCategories] = useState([
        'Burgers', 'Fries', 'Cold Drinks'
    ])

    const [menus, setMenus] = useState([
        {
            name: 'Royal Cheese Burger with extra Fries',
            content: '1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium',
            price: 23.10,
            category: 'Fries',
            image: menuOne
        },

        {
            name: 'The classics for 3',
            content: '1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium',
            price: 23.10,
            category: 'Fries',
            image: menuOne
        },

        {
            name: 'The classics for 3',
            content: '1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium',
            price: 23.10,
            category: 'Fries',
            image: menuOne
        },
        
        {
            name: 'The classics for 3',
            content: '1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium',
            price: 23.10,
            category: 'Fries',
            image: menuEight
        },
        
        {
            name: 'Royal Cheese Burger with extra Fries',
            content: '1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium',
            price: 23.10,
            category: 'Fries',
            image: menuEight
        },

        {
            name: 'The classics for 3',
            content: '1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium',
            price: 23.10,
            category: 'Fries',
            image: menuEight
        },

        {
            name: 'The classics for 3',
            content: '1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium',
            price: 23.10,
            category: 'Burgers',
            image: menuTwo
        },
        
        {
            name: 'The classics for 3',
            content: '1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium',
            price: 23.10,
            category: 'Burgers',
            image: menuTwo
        },

        {
            name: 'The classics for 3',
            content: '1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium',
            price: 23.10,
            category: 'Burgers',
            image: menuTwo
        },
        
        {
            name: 'The classics for 3',
            content: '1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium',
            price: 23.10,
            category: 'Burgers',
            image: menuTwo
        },

        {
            name: 'The classics for 3',
            content: '1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium',
            price: 23.10,
            category: 'Burgers',
            image: menuTwo
        },
        
        {
            name: 'The classics for 3',
            content: '1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium',
            price: 23.10,
            category: 'Burgers',
            image: menuSeven
        },

        {
            name: 'The classics for 3',
            content: '1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium',
            price: 23.10,
            category: 'Cold Drinks',
            image: menuNine
        },
        
        {
            name: 'The classics for 3',
            content: '1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium',
            price: 23.10,
            category: 'Cold Drinks',
            image: menuFive
        },

        {
            name: 'The classics for 3',
            content: '1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium',
            price: 23.10,
            category: 'Cold Drinks',
            image: menuThree
        },
        
        {
            name: 'The classics for 3',
            content: '1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium',
            price: 23.10,
            category: 'Cold Drinks',
            image: menuFour
        },

        {
            name: 'The classics for 3',
            content: '1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium',
            price: 23.10,
            category: 'Cold Drinks',
            image: menuSix
        },
        
        {
            name: 'The classics for 3',
            content: '1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium',
            price: 23.10,
            category: 'Cold Drinks',
            image: menuThree
        }
    ])
  return (
    <div className=''>
      {categories.map((category, index) =>(
        <div key={index} className='py-[30px]'>
           <p className='py-4 text-3xl font-bold text-[#FC8A06] active:text-black'>{category}</p>
           <div className="grid grid-cols-3 gap-8">
            {menus.filter(menu => menu.category == category).map((item, idx) => (
                <div key={idx} className="flex items-center justify-center rounded-lg border px-5 py-[30px] shadow">
                    <div>
                        <p className='text-xl font-bold'>{item.name}</p>
                        <p className=''>{item.content}</p>
                        <p className='text-lg font-bold'>GBP {item.price}</p>
                    </div>
                    <div className='relative'>
                    <img src={item.image} alt={`Image of ${item.name}`} className="items-center" />
                    <div className='absolute bottom-0 right-0 w-fit rounded-tl-3xl bg-white px-4 py-3'>
                        <FaCirclePlus />
                    </div>
                    </div>
                </div>
            ))}
            </div> 
        </div>
      ))}
    </div>
  )
}

export default Menu
