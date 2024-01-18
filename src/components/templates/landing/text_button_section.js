"use client";
import BlackButton from "@/components/atoms/landing/black_button_homepage";
import TextCard from "@/components/monecules/landing/text_card";
import {
  TEXT_BUTTON_TEXT_ARRAY,
  TEXT_BUTTON_TEXT_BUTTON,
} from "@/constant/constant";

const TextButtonSection = (props) => {
  return (
    <>
      <section className="flex flex-col items-center bg-pageCardBg bg-center bg-cover py-[141px]">
        <TextCard
          data={TEXT_BUTTON_TEXT_ARRAY}
          textStyle="w-[500px] !text-homePageDarkGray"
          style="flex flex-col items-center mb-[30px] mt-[15px]"
        />
        <BlackButton text={TEXT_BUTTON_TEXT_BUTTON} style="w-[230px]" />
      </section>
    </>
  );
};
export default TextButtonSection;
