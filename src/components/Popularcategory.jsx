import breakfast from "../assets/breakfast.png";
import burg from "../assets/burg.png";
import pizz from "../assets/pizz.png";
import pastaSalad from "../assets/pasta-salad.png";
import salad from "../assets/salad.png";
import soup from "../assets/soup.png";
import { useState } from "react";

const Popularcategory = () => {
  const [popCategories, setPopcategories] = useState([
    {
      categorie: "Burgers & Fast food",
      img: burg,
      resturant: "21 Restaurants",
    },
    {
      categorie: "Salads",
      img: salad,
      resturant: "32 Restaurants",
    },
    {
      categorie: "Pasta & Casuals",
      img: pastaSalad,
      resturant: "4 Restaurants",
    },
    {
      categorie: "Pizza",
      img: pizz,
      resturant: "32 Restaurants",
    },
    {
      categorie: "Breakfast",
      img: breakfast,
      resturant: "4 Restaurants",
    },
    {
      categorie: "Soups",
      img: soup,
      resturant: "32 Restaurants",
    },
  ]);

  return (
    <div>
      <div className="mt-[54px]">
        <h1 className="font-bold text-[32px]">
          Order.uk Popular Categories 🤩
        </h1>
        <div className="flex  items-center justify-between">
          {popCategories.map((category) => (
            <div
              className="border-[1px] cursor-pointer mt-[54px] rounded-[12px] shadow-sm"
              key={category.categorie}
            >
              <div
                className="bg-no-repeat bg-cover bg-center w-[238px] h-[203px]"
                style={{
                  backgroundImage: `url(${category.img})`,
                }}
              ></div>
              <div className="px-[22px] py-[10px]">
                <h1 className="font-lg font-bold">{category.categorie}</h1>
                <p className="text-[13px] text-[#FC8A06]">
                  {category.resturant}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Popularcategory;
