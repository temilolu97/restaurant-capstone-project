import { useState } from "react";
import kfc from "../assets/kfc.png";
import burgking from "../assets/burgking.png";
import shau from "../assets/shau.png";
import papajhn from "../assets/papajhn.png";
import macdol from "../assets/macdol.png";
import texas from "../assets/texas.png";

const PopularResturant = () => {
  const [popRests, setPoprests] = useState([
    {
      img: macdol,
      name: "McDonald’s London",
    },
    {
      img: papajhn,
      name: "Papa Johns",
    },
    {
      img: kfc,
      name: "KFC West London",
    },
    {
      img: texas,
      name: "Texas Chicken",
    },
    {
      img: burgking,
      name: "Burger King",
    },
    {
      img: shau,
      name: "Shaurma 1",
    },
  ]);
  return (
    <div>
      <div className="mt-[54px]">
        <h1 className="font-bold text-[32px]">Popular Restaurants</h1>
        <div className="flex items-center justify-between">
          {popRests.map((poprest) => (
            <div
              className="border-[1px] cursor-pointer mt-[54px] rounded-[12px] shadow-sm"
              key={poprest.name}
            >
              <div
                className="bg-no-repeat bg-cover bg-center w-[238px] h-[203px]"
                style={{
                  backgroundImage: `url(${poprest.img})`,
                }}
              ></div>
              <div className=" bg-[#FC8A06]  px-[22px] py-[10px] rounded-b-[12px]  flex items-center justify-center ">
                <p className="text-lg text-white font-semibold">
                  {poprest.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularResturant;
