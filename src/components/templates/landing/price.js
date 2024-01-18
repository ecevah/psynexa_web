import Image from "next/image";
import { Lexend } from "next/font/google";
const lexand = Lexend({ subsets: ["latin"] });
import HomePageBlackButton from "@/components/atoms/landing/black_button_homepage";
import TextCard from "@/components/monecules/landing/text_card";
import { CLICK, PRICE_ARRAY, PRICE_TEXT_CARD_ARRAY } from "@/constant/constant";

const Price = (props) => {
  return (
    <>
      <div className="flex flex-col items-center py-[121px]">
        <TextCard
          data={PRICE_TEXT_CARD_ARRAY}
          textStyle="mt-[10px]"
          style="flex flex-col items-center"
        />
        <div className="flex flex-row mt-[88px]">
          {PRICE_ARRAY.map((item, i) => (
            <div
              key={`Price Card ${i}`}
              className={`flex flex-col w-[370px] h-[572px] mx-[17.5px] px-[30px] py-[33px] ${
                item.type == 1
                  ? "rounded-[10px] border-solid border-[1px] border-iconCardPhotoBackground bg-pageCardBg bg-cover bg-top"
                  : ""
              }`}
            >
              <div
                className={`${lexand.className} font-normal text-[40px] leading-[50px] -tracking-[1%] text-homePageDarkGray`}
              >
                {`$${item.price}`}
              </div>
              <div
                className={`${lexand.className} font-medium text-[15px] leading-[18.75px] -tracking-[3%] text-homePageDarkGray pt-[22px] pb-[15px]`}
              >
                {item.package}
              </div>
              <div className="font-normal text-[12px] leading-[20px] tracking-[2%] text-homePageDarkGray">
                {item.text}
              </div>
              <HomePageBlackButton
                text="Paketi Seç"
                style={
                  item.type == 1
                    ? "mt-[46px] mb-[27px]"
                    : "!bg-white border-solid border-[1px] border-[#11192833] !text-homePageDarkGray mt-[46px] mb-[27px] hover:!bg-iconCardPhotoBackground"
                }
              />
              <div className="flex flex-col">
                {item.property.map((item, i) => (
                  <div
                    className="flex flex-row justify-start items-center"
                    key={`Property ${i}`}
                  >
                    <Image
                      width={24}
                      height={24}
                      alt="click"
                      src={CLICK}
                      className="mr-[14px]"
                    />
                    <div className="font-normal text-[12px] leading-[30px] tracking-[1%] text-homePageDarkGray">
                      {item.text}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Price;
