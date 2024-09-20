import React, { useState } from 'react'

const List = () => {
    const [listItems, setListItems] = useState([
        {
            item: "Offers",
            path: ""
        },
        {
            item: "Burgers",
            path: ""
        },
        {
            item: "Fries",
            path: ""
        },
        {
            item: "Snacks",
            path: ""
        },
        {
            item: "Salads",
            path: ""
        },
        {
            item: "Cold drinks",
            path: ""
        },
        {
            item: "Happy Meal®",
            path: ""
        },
        {
            item: "Desserts",
            path: ""
        },
        {
            item: "Hot drinks",
            path: ""
        },
        {
            item: "Sauces",
            path: ""
        },
        {
            item: "Orbit®",
            path: ""
        }
    ]) 

    const [activeItem, setActiveItem] = useState("Home")
    const handleClick = (activeItem)=>{
        setActiveItem(activeItem)
    }
  return (
    <div>
      <div className='flex justify-between gap-1 bg-[#F3F3F3] px-[85px]'>
                    {listItems.map((listItem, index) => (
                        <div key={index} onClick={()=>handleClick(listItem.item)} className={`flex items-center rounded-full px-[14px] py-[18px] font-semibold hover:bg-[#000] hover:text-white ${activeItem == listItem.item ? 'border bg-[#fc8a06] text-white': ''}`}>{listItem.item}</div>
                    ))}
                </div>
    </div>
  )
}

export default List
