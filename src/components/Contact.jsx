import React, { useState } from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { RiContactsBook3Line } from "react-icons/ri";
import { IoIosAlarm } from "react-icons/io";

const Contact = () => {
    const [titles, setTitles] = useState([
      {
        title: 'Delivery information',
        image: <FaLocationDot />,
        content: `<div>
          <p class="py-1"><span class="text-base font-bold">Monday:</span> 2:00 AM-3:00 AM, 8:00 AM-3:00 AM</p>
          <p class="py-1"><span class="text-base font-bold">Tuesday:</span> 8:00 AM-3:00 AM</p>
          <p class="py-1"><span class="text-base font-bold">Wednesday:</span> 8:00 AM-3:00 AM</p>
          <p class="py-1"><span class="text-base font-bold">Thursday:</span> 8:00 AM-3:00 AM</p>
          <p class="py-1"><span class="text-base font-bold">Friday:</span> 8:00 AM-3:00 AM</p>
          <p class="py-1"><span class="text-base font-bold">Saturday:</span> 8:00 AM-3:00 AM</p>
          <p class="py-1"><span class="text-base font-bold">Sunday:</span> 8:00 AM-3:00 AM</p>
          <p class="py-1"><span class="text-base font-bold">Estimated time until delivery:</span> 8:00 AM-3:00 AM</p>
        </div>`
      },
  
      {
        title: "Contact information",
        image: <RiContactsBook3Line />,
        content: `<div>
          <p class="py-1">
          If you have allergies or other dietary<br/> restrictions, 
          please contact the restaurant. The <br/> restaurant will provide 
          food-specific <br/> information upon request.
          </p>
          <p class="py-1"><span class="font-bold">Phone number:</span> <br/> +934443-43</p>
          <p class="py-1"><span class="font-bold">Website:</span> <br/> http://mcdonalds.uk/</p>
        </div>`
      },
  
      {
        title: 'Operational Times',
        image: <IoIosAlarm />,
        content: `<div>
          <p class="py-1"><span class="text-base font-bold">Monday:</span>  8:00 AM-3:00 AM</p>
          <p class="py-1"><span class="text-base font-bold">Tuesday:</span> 8:00 AM-3:00 AM</p>
          <p class="py-1"><span class="text-base font-bold">Wednesday:</span> 8:00 AM-3:00 AM</p>
          <p class="py-1"><span class="text-base font-bold">Thursday:</span> 8:00 AM-3:00 AM</p>
          <p class="py-1"><span class="text-base font-bold">Friday:</span> 8:00 AM-3:00 AM</p>
          <p class="py-1"><span class="text-base font-bold">Saturday:</span> 8:00 AM-3:00 AM</p>
          <p class="py-1"><span class="text-base font-bold">Sunday:</span> 8:00 AM-3:00 AM</p>
        </div>`
      }
    ]);
  
    return (
      <div className="flex flex-col justify-around gap-3 md:flex-row">
        {titles.map((title, index) => (
          <div className='px-6 py-12 transition duration-300 ease-in-out hover:bg-black hover:px-10 hover:text-white' key={index}>
            <div className='flex items-center gap-3'>
              {title.image}
              <p className='text-2xl font-bold'>{title.title}</p>
            </div>
  
            <div className='py-4' dangerouslySetInnerHTML={{ __html: title.content }} />
          </div>
        ))}
      </div>
    );
  };
  
  export default Contact;
  