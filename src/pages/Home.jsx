import React from "react";
import Navbar from "../components/Navbar";
import MainLayout from "../layouts/MainLayout";
import Landinghome from "../components/Landinghome";
import Discountdeals from "../components/Discountdeals";
import Popularcategory from "../components/Popularcategory";
import PopularResturant from "../components/PopularResturant";
import Orderismore from "../components/Orderismore";
import Partnercard from "../components/Partnercard";
import Numdata from "../components/Numdata";

const Home = () => {
  return (
    <MainLayout>
      <div>
        <Landinghome />
        <Discountdeals />
        <Popularcategory />
        <PopularResturant />
        <Orderismore />
        <Partnercard />
        <Numdata />
      </div>
    </MainLayout>
  );
};

export default Home;
