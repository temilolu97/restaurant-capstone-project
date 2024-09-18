import partner from "../assets/partnerus.png";
import rideus from "../assets/rideus.png";

const Partnercard = () => {
  const partners = [
    {
      img: partner,
      fees: "Earn more with lower fees",
      signup: "Signup as a business",
      partner: "Partner with us",
    },
    {
      img: rideus,
      fees: "Avail exclusive perks",
      signup: "Signup as a rider",
      partner: "Ride with us",
    },
  ];
  return (
    <div>
      <div className="flex items-center mt-[54px] gap-[20px]">
        {partners.map((partner) => (
          <div
            className="w-[754px] h-[425px] flex flex-col justify-between pb-[40px] bg-cover bg-center  bg-no-repeat px-[70px]  rounded-[12px]"
            style={{
              backgroundImage: `url(${partner.img})`,
            }}
            key={partner.fees}
          >
            <div className="flex items-center justify-center w-[288px] h-[63px] bg-white rounded-b-[12px]">
              <span className="text-lg font-bold">{partner.fees}</span>
            </div>
            <div className="flex flex-col gap-[36px]">
              <div>
                <span className="text-lg text-[#FC8A06] font-medium">
                  {partner.signup}
                </span>
                <h1 className="text-[44px] font-semibold text-white leading-none">
                  {partner.partner}
                </h1>
              </div>
              <div className="w-[205px] flex items-center justify-center cursor-pointer h-[52px] bg-[#FC8A06] rounded-[120px]">
                <span className="text-lg font-medium text-white">
                  Get Started
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partnercard;
