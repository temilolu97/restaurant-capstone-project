import React from 'react'
import Navbar from '../components/Navbar'
import List from '../components/List'

const MainLayout = ({children}) => {
  return (
    <div>
    <div className='px-[100px] py-4 font-poppins'>
      <Navbar/>
      <div>
        {children}
      </div>
      
    </div>
    
    </div>
  )
}

export default MainLayout
