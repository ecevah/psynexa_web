"use client";

import HeroMobileMarketButton from "../../atoms/landing/hero_mobile_market_button";

const HeroMultiMobileMarketButton = (props) => {
  const data = props.data || [];
  return (
    <>
      <div className="flex flex-row">
        {data.map((item, i) => (
          <HeroMobileMarketButton
            key={`Hero Mobile Market Button ${i}`}
            style={`${item.style}  mr-[5px]`}
            type={item.type}
            function={item.function}
          />
        ))}
      </div>
    </>
  );
};

export default HeroMultiMobileMarketButton;
