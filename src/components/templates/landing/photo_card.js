import React, { useState } from "react";
import Image from "next/image";
import {
  PHOTO_CARD_BUTTON_CARD_ARRAY,
  PHOTO_CARD_TEXT_ARRAY,
} from "@/constant/constant";
import { Lexend } from "next/font/google";
const lexand = Lexend({ subsets: ["latin"] });

import TextCard from "../../monecules/landing/text_card";

const PhotoCard = (props) => {
  const [current, setCurrent] = useState(0);
  const [index, setIndex] = useState(0);

  return (
    <>
      <section className="flex flex-col justify-center w-full  pt-[122px] pb-[116px] bg-pageCardBg bg-cover bg-center">
        <TextCard data={PHOTO_CARD_TEXT_ARRAY} textStyle="mt-[5px]" />
        <div className="w-[88%] flex flex-row mt-[86px] ml-auto justify-end">
          <div className="flex flex-col min-w-[493px] items-start justify-center">
            {PHOTO_CARD_BUTTON_CARD_ARRAY.map((card, i) => (
              <div
                key={`Photo Card ${i}`}
                onClick={() => setCurrent(i)}
                className={`px-[22px] rounded-l-[10px] w-[493px] h-[132px] flex flex-col justify-center ${
                  i == current
                    ? "bg-white border-y-[1px] border-solid border-[#0000001C] border-l-[1px] no-border-right"
                    : "bg-transparent"
                } hover:bg-white hover:border-y-[1px] hover:border-solid hover:border-[#0000001C] hover:border-l-[1px] hover:no-border-right`}
              >
                <h3
                  className={`${lexand.className} font-medium text-[17px] leading-[21.25px] -tracking-[2%] text-homePageDarkGray mb-[13px]`}
                >
                  {card.title}
                </h3>
                <p className="font-normal text-homePageDarkGray text-[13px] leading-[20px] -tracking-[1%]">
                  {card.text}
                </p>
              </div>
            ))}
          </div>

          <div
            className={`w-[100%] h-[740px] rounded-[10px] flex justify-center items-center overflow-hidden`}
          >
            <Image
              src={PHOTO_CARD_BUTTON_CARD_ARRAY[current].img}
              width={1200}
              height={1200}
              alt={`Photo Card Index ${index}`}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default PhotoCard;
