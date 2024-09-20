import React from 'react'
import Navbar from '../components/Navbar'
import List from '../components/List'
import Footer from "../components/Footer";

const MainLayout = ({ children }) => {
  return (
    <div>

      <div className="px-[100px] py-4 font-poppins">
        <Navbar />
        <div>{children}</div>
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
