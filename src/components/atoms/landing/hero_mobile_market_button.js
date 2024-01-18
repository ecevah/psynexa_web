"use client";
import Image from "next/image";

import {
  LOGO_PATH,
  HERO_PATH,
  GOOGLEPLAY_PATH,
  APPLE_PATH,
  ARRAY_HEADER_PURPLE_BUTTON,
  ARRAY_HEADER_ITEM_BUTTON,
} from "@/constant/constant";

const HeroMobileMarketButton = (props) => {
  return (
    <>
      {props.type == "google" ? (
        <Image
          width={155}
          height={46}
          src={GOOGLEPLAY_PATH}
          alt="Google Play"
          className={`${props.style} cursor-pointer`}
          onClick={props.function}
        />
      ) : (
        <Image
          width={138}
          height={46}
          src={APPLE_PATH}
          alt="Apple"
          className={`${props.style} cursor-pointer`}
          onClick={props.function}
        />
      )}
    </>
  );
};

export default HeroMobileMarketButton;
