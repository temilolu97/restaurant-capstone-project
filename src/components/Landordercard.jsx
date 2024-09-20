import Logo from "../assets/LOGO 1.png";
import noti from "../assets/notification 1.png";

const Landordercard = ({ status, text }) => {
  return (
    <div>
      <div className=" w-[350px] h-[90px]  bg-white flex flex-col justify-center  drop-shadow-sm rounded-[16px] gap-[11px] p-[14px]">
        <div className="flex items-center justify-between ">
          <img className="h-[15px] w-[58px]" src={Logo} alt="" />
          <span className="text-sm text-black text-opacity-40">now</span>
        </div>
        <div className="flex flex-col gap-[2px]">
          <h1 className="text-xs font-semibold">{status}</h1>
          <p className="text-xs">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default Landordercard;
