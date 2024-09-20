import React from 'react';
import MainLayout from '../layouts/MainLayout';
import Button from '../components/Button';
import { AiOutlineFileDone } from "react-icons/ai"; // Import FaUserCircle
import { IoMdBicycle } from "react-icons/io";
import burger from '../assets/burger.svg';
import { TbClockHour9Filled } from "react-icons/tb";
import { CiSearch } from "react-icons/ci";
import List from '../components/List';
import Menu from '../components/Menu';
import Contact from '../components/Contact';

const Restaurant = () => {
  return (
    <div>
      <MainLayout className='font-poppins'>
        <div className='relative my-[30px] rounded-xl bg-cover bg-center' style={{ backgroundImage: `url(${burger})` }}>
        <div className='flex items-center justify-around bg-[#F4F4F4E5]' >
          <div>
            <p className='text-xl font-normal text-[#03081F]'>I'm lovin' it!</p>
            <h2 className='text-left text-[50px] font-semibold leading-[66px] text-[#03081F]'>McDonald's East London</h2>
            <div className="flex gap-3 py-4">
                <Button
                  icon={<AiOutlineFileDone fill='white'/>} // Ensure icon is imported correctly
                  className='bg-black text-sm text-white'
                  content="Minimum Order: 12 G8P"
                />
                <Button
                  icon={<IoMdBicycle fill='white'/>} // Ensure icon is imported correctly
                  className='bg-black text-sm text-white'
                  content="Delivery in 20-25 Minutes"
                />
            </div>
          </div>
          <img src={burger} alt="" className='my-[50px]'/>
          
          
        </div>
        <div className="absolute bottom-[-20px] flex w-1/5 items-center justify-center rounded-r-xl bg-[#FC8A06] px-4 py-3">
          <TbClockHour9Filled fill='white'/>
          <p className='tex-lg px-2 text-white'>Open until 3:00 AM</p>
          </div>
        </div>
        
        <section className='sectTwo'>
            <div className="flex items-center justify-between py-[20px]">
            <h2>All Offers from McDonald’s East London</h2>
            <Button 
            icon={<CiSearch />}
            className="border border-[#03081F] bg-transparent py-1 text-sm text-[#03081F] opacity-65"  
            content='Search from menu...'/>
            </div>
            <div className="mx-[-100px]">
                <List/>
            </div>
           <Menu/>
        </section>

        <section className="sectThree bg-[#FBFBFB] py-[30px]">
            <Contact/>
        </section>
        
      </MainLayout>
     
    </div>
  );
};

export default Restaurant;


