import Landordercard from "./Landordercard";
import spag from "../assets/spag.png";
import choppizza from "../assets/chop-pizza.png";

const Landinghome = () => {
  return (
    <div>
      <div className="relative flex items-center justify-between mt-[76px]">
        <div className="w-[509px] flex flex-col gap-[20px]">
          <span className="text-base">
            Order Restaurant food, takeaway and groceries.
          </span>
          <div className="flex flex-col gap-[15px] w-[624px] ">
            <h1 className="text-[54px] leading-none font-semibold ">
              Feast Your Senses,
            </h1>
            <span className="text-[#FC8A06] leading-none text-[54px] font-semibold">
              Fast and Fresh
            </span>
          </div>
          <div className="flex flex-col gap-[12px]">
            <p className="text-[13px]">
              Enter a postcode to see what we deliver
            </p>
            <div className="relative">
              <input
                className="py-[15px] w-[373px] px-[28px] rounded-[120px] text-base border-[1px] border-black border-opacity-40 focus:outline-none focus:ring-1 focus:ring-[#FC8A06]"
                type="text"
                placeholder="e.g. EC4R 3TE"
              />
              <button className="absolute inset-y-0 w-[188px] left-[190px]  px-[28px] py-[15px] bg-[#FC8A06] text-white font-bold text-base rounded-[120px] hover:bg-[#fc8906e7]">
                Search
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className=" relative h-[565px] w-[626px] rounded-tl-[282.5px] bg-[#FC8A06] rounded-br-[12px]">
            <div className=" absolute z-10 top-[70px] right-[140px]">
              <Landordercard
                status={"We’ve Received your order!"}
                text={"Awaiting Restaurant acceptance"}
              />
            </div>
            <div className=" absolute z-10 top-[220px] right-[25px]">
              <Landordercard
                status={"Order Accepted!"}
                text={"Your order will be delivered shortly"}
              />
            </div>
            <div className=" absolute z-10 top-[400px] right-[90px]">
              <Landordercard
                status={"Your rider's nearby"}
                text={"They're almost there - get ready!"}
              />
            </div>
            <img
              src={spag}
              alt="spag"
              className="absolute bottom-0 left-[-50px] w-[377px] h-[455px]"
            />
          </div>
        </div>
        <img
          src={choppizza}
          alt="chop pizza"
          className="absolute bottom-0 left-[280px] w-[805px] h-[537px]"
        />
      </div>
    </div>
  );
};

export default Landinghome;
