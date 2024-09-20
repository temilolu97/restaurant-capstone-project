import React, { useState } from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { RiContactsBook3Line } from "react-icons/ri";

const Contact = () => {
    const [titles, setTitles] = useState([
        "Delivery information", "Contact information", "Operational Times"
    ])

    const [contacts, setContacts] = useState([
        {
            day:'Monday',
            time: '2:00 AM-3:00 AM, 8:00 AM-3:00 AM',
            title: 'Delivery information',
            image: <FaLocationDot/>
        },

        {
             day:'Tuesday',
            time: '8:00 AM-3:00 AM',
            title: 'Delivery information',
            image: <FaLocationDot/>
        },

        {
            day:'Wednesday',
           time: '8:00 AM-3:00 AM',
           title: 'Delivery information',
           image: <FaLocationDot/>
       }, 

       {
            day:'Thursday',
            time: '8:00 AM-3:00 AM',
            title: 'Delivery information',
            image: <FaLocationDot/>
       },

        {
            day:'Friday',
            time: '8:00 AM-3:00 AM',
            title: 'Delivery information',
            image: <FaLocationDot/>
       },
       
       {
            day:'Saturday',
            time: '8:00 AM-3:00 AM',
            title: 'Delivery information',
            image: <FaLocationDot/>
      },
      
      {
            day:'Sunday',
            time: '8:00 AM-3:00 AM',
            title: 'Delivery information',
            image: <FaLocationDot/>
      },

      {
        day:'Monday',
        time: '8:00 AM-3:00 AM',
        title: 'Operational Times',
        image: <RiContactsBook3Line/>
    },

    {
         day:'Tuesday',
        time: '8:00 AM-3:00 AM',
        title: 'Operational Times'
    },

    {
        day:'Wednesday',
       time: '8:00 AM-3:00 AM',
       title: 'Operational Times'
   }, 

   {
        day:'Thursday',
        time: '8:00 AM-3:00 AM',
        title: 'Operational Times'
   },

    {
        day:'Friday',
        time: '8:00 AM-3:00 AM',
        title: 'Operational Times'
   },
   
   {
        day:'Saturday',
        time: '8:00 AM-3:00 AM',
        title: 'Operational Times',
        
  },
  
  {
        day:'Sunday',
        time: '8:00 AM-3:00 AM',
        title: 'Operational Times'
}
       
    ])
  return (
    <div className="">
        {/* {titles.map(title => (
            <div>
            <h3>{title}</h3>
            </div>
        ))}
        {contacts.filter(contact => (
            <p><span>{contact.day}</span>{contact.time}</p>
        ))} */}
    </div>
  )
}

export default Contact
