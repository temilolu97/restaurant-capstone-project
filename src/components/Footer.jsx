import logo from "../assets/LOGO 2.png";
import appdownload from "../assets/download-app.png";
import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import tiktok from "../assets/tiktok.svg";
import snapchat from "../assets/snapchat.svg";

const Footer = () => {
  const footer2 = [
    "Privacy Policy",
    "Terms",
    "Privacy",
    "Do not sell or share my personal information",
  ];

  const legAndImp = [
    {
      header: "Legal Pages",
      links: [
        "Terms and condition",
        "Privacy",
        "Cookies",
        "Modern slavery statement",
      ],
    },
    {
      header: "Important Links",
      links: [
        "Get help",
        "Add your resturant",
        "Sign up to deliver",
        "Create a business account",
      ],
    },
  ];
  return (
    <div>
      <div className="pt-[81px] pb-[70px] mt-[45px] bg-[#D9D9D9] ">
        <div className="px-[100px] py-4 font-poppins">
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-[30px]">
              <img className="w-[268px] h-[66px]" src={logo} alt="" />
              <img className="w-[361px]" src={appdownload} alt="" />
              <p className="text-[15px] w-[311px]">
                Company # 490039-445, Registered with House of companies.
              </p>
            </div>
            <div className="flex flex-col gap-[15px]">
              <h1 className="font-bold text-lg">
                Get Exclusive Deals in your Inbox
              </h1>
              <div className="relative">
                <input
                  className="py-[12px] w-[381px] px-[28px] rounded-[120px] bg-[#D9D9D9] text-base border-[1px] border-black border-opacity-40 focus:outline-none focus:ring-1 focus:ring-[#FC8A06]"
                  type="text"
                  placeholder="youremail@gmail.com"
                />
                <button className="absolute inset-y-0 w-[188px] left-[250px]  px-[28px] py-[12px] bg-[#FC8A06] text-white font-bold text-base rounded-[120px] hover:bg-[#fc8906e7]">
                  Subscribe
                </button>
              </div>
              <span>we wont spam, read our email policy</span>
              <div className="flex item-center gap-[10px] ">
                <div
                  className="w-[45px] h-[45px] cursor-pointer"
                  style={{
                    backgroundImage: `url(${facebook})`,
                  }}
                ></div>
                <div
                  className="w-[45px] h-[45px] cursor-pointer"
                  style={{
                    backgroundImage: `url(${instagram})`,
                  }}
                ></div>
                <div
                  className="w-[45px] h-[45px] cursor-pointer"
                  style={{
                    backgroundImage: `url(${tiktok})`,
                  }}
                ></div>
                <div
                  className="w-[45px] h-[45px] cursor-pointer"
                  style={{
                    backgroundImage: `url(${snapchat})`,
                  }}
                ></div>
              </div>
            </div>
            <div className="flex items-center gap-[50px] ">
              {legAndImp.map((leg) => (
                <div className="flex flex-col gap-[15px]" key={leg.header}>
                  <h1 className="text-lg font-bold">{leg.header}</h1>
                  <div className="flex flex-col gap-[15px]">
                    {leg.links.map((link) => (
                      <li
                        className="text-[15px] cursor-pointer underline list-none"
                        key={link}
                      >
                        {link}
                      </li>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="py-[10px] bg-[#03081F]">
        <div className="px-[100px] py-4 font-poppins">
          <div className="flex items-center justify-between">
            <span className="text-white text-[15px]">
              Order.uk Copyright 2024, All Rights Reserved.
            </span>
            <div className="flex items-center gap-[40px]">
              {footer2.map((foot) => (
                <div key={foot}>
                  <li className=" text-white list-none cursor-pointer">
                    {foot}
                  </li>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
