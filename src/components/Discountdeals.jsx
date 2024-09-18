import { useState } from "react";
import butterBrug from "../assets/butter-brot.png";
import grandAi from "../assets/grand-ai.png";

const Discountdeals = () => {
  const [foods, setFoods] = useState([
    "Vegan",
    "Sushi",
    "Pizza & Fastfood",
    "Others",
  ]);

  const [deals, setDeals] = useState([
    {
      discount: "-40%",
      resturant: "Chef Burgers London",
      img: butterBrug,
    },
    {
      discount: "-20%",
      resturant: "Grand Ai Cafe London",
      img: grandAi,
    },
    {
      discount: "-17%",
      resturant: "Butterbrot Caf’e London",
      img: butterBrug,
    },
  ]);

  const [activeItem, setActiveItem] = useState("Pizza & Fastfood");
  const handleClick = (activeItem) => {
    setActiveItem(activeItem);
  };
  return (
    <div className="flex flex-col gap-[54px] mt-[54px]">
      <div className="flex items-center justify-between">
        <h1 className="text-[32px] font-bold">
          Up to -40% 🎊 Order.uk exclusive deals
        </h1>
        <div className="flex items-center gap-[20px] ">
          {foods.map((food) => (
            <div
              onClick={() => handleClick(food)}
              className={`text-base cursor-pointer py-[19px] px-[40px]  ${
                activeItem == food
                  ? "border rounded-[120px] border-[#FC8A06] font-semibold text-[#FC8A06] "
                  : ""
              }   `}
              key={food}
            >
              {food}
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-[20px]">
        {deals.map((deal) => (
          <div
            className=" cursor-pointer relative bg-center px-[46px] bg-no-repeat bg-cover rounded-[12px] align-text-bottom   w-[495px] h-[325px]"
            style={{
              backgroundImage: `url(${deal.img})`,
            }}
            key={deal.resturant}
          >
            <div
              className="absolute z-0 rounded-[12px] inset-0 bg-black"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
            ></div>
            <div className="absolute right-5 flex items-center justify-center  rounded-b-[12px] w-[88px] h-[66px] bg-[#03081F]">
              <span className="text-white ">{deal.discount}</span>
            </div>
            <div className="relative mt-[225px] z-40">
              <p className="text-lg font-medium text-[#FC8A06]">Resturant</p>
              <h1 className="text-2xl text-white font-bold ">
                {deal.resturant}
              </h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Discountdeals;
