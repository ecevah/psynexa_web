import { Lexend } from "next/font/google";
import HeroMultiMobileMarketButton from "@/components/monecules/landing/multi_hero_mobile_market_button";
const lexand = Lexend({ subsets: ["latin"] });
//Constants
import {
  HERO_CARD_TITLE,
  HERO_CARD_TEXT,
  ARRAY_HERO_MARKET_BUTTON,
} from "@/constant/constant";

const OrganismHeroCard = (props) => {
  return (
    <>
      <div className=" flex flex-col">
        <h3
          className={`w-[577px] text-[65px] leading-[81px] -tracking-[2%] font-medium ${lexand.className} text-homePageDarkGray`}
        >
          {HERO_CARD_TITLE}
        </h3>
        <p className="w-[522px] text-[12px] leading-[21px] font-normal py-[35px] text-homePageDarkGray">
          {HERO_CARD_TEXT}
        </p>
        <HeroMultiMobileMarketButton data={ARRAY_HERO_MARKET_BUTTON} />
      </div>
    </>
  );
};
export default OrganismHeroCard;
