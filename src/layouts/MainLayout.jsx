import React from 'react'
import Navbar from '../components/Navbar'

const MainLayout = ({children}) => {
  return (
    <div className='px-[100px] py-4'>
      <Navbar/>
      <div>
        {children}
      </div>
    </div>
  )
}

export default MainLayout
