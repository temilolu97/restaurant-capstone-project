const Numdata = () => {
  const datas = [
    {
      num: "546+",
      data: "registered Riders",
    },
    {
      num: "789,900+",
      data: "Orders Delivered",
    },
    {
      num: "690+",
      data: "Resturants Partnered",
    },
    {
      num: "17,457+",
      data: "Food items",
    },
  ];
  return (
    <div>
      <div className="flex items-center justify-between rounded-[12px] mt-[54px]  bg-[#FC8A06] px-[80px] text-white pt-[44px] pb-[24px]">
        {datas.map((data) => (
          <div className="border-r-[1px] pr-[30px]" key={data.num}>
            <h1 className="text-[64px] font-light">{data.num}</h1>
            <p className="text-2xl font-medium">{data.data}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Numdata;
