import Image from "next/image";
import OrganismHeroCard from "../../organisms/landing/organism_hero_card";
import { HERO_PATH, HERO_ARROW } from "@/constant/constant";

const Hero = (props) => {
  return (
    <>
      <div className="layout">
        <div className={`w-full h-[827px] flex flex-row relative items-center`}>
          <OrganismHeroCard />
          <Image
            src={HERO_PATH}
            alt="hero"
            width={874}
            height={841.66}
            className="absolute -right-[14%]"
          />
          <Image
            width={100}
            height={53.13}
            src={HERO_ARROW}
            alt="arrow"
            className="absolute bottom-[170px] left-[350px]"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
