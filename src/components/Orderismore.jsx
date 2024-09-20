import friends from "../assets/friends-laughing.png";
import logo from "../assets/LOGO 1.png";
import downloadApp from "../assets/download-app.png";

const Orderismore = () => {
  return (
    <div>
      <div className="h-[611px] relative w-full bg-gradient-to-b from-[#EEEEEE] flex items-center justify-end mt-[94px] px-[50px] to-[#E0E1DC] rounded-[12px]">
        <div className="relative flex flex-col items-center justify-end gap-[23px]">
          <div className="flex flex-col items-center justify-end gap-[30px]">
            <div className="flex items-center w-full justify-end ">
              <img className="h-[60px] " src={logo} alt="logo" />
              <span className="text-[62px] font-bold leading-none tracking-[-6%]">
                ing is more
              </span>
            </div>
            <div className="w-[878px] bg-black rounded-[120px] flex items-center justify-end px-[40px]">
              <p className="text-[50px]  text-white">
                <span className="text-[#FC8A06] ">Personalised</span> & Instant
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-[23px]">
            <p className="text-2xl">
              Download the Order.uk app for faster ordering
            </p>
            <img
              className="w-[412px] cursor-pointer"
              src={downloadApp}
              alt=""
            />
          </div>
        </div>
        <img
          className="absolute left-8 bottom-0 w-[832px] h-[651px] z-10 "
          src={friends}
          alt=""
        />
        <img
          className="absolute left-6 bottom-1 w-[832px] h-[651px] opacity-40 "
          src={friends}
          alt=""
        />
      </div>
    </div>
  );
};

export default Orderismore;
