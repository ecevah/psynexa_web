import Image from "next/image";
import { Lexend } from "next/font/google";
const lexand = Lexend({ subsets: ["latin"] });

const IconCard = (props) => {
  return (
    <>
      <div className="flex flex-col justify-start w-[370px] min-w-[370px]">
        <Image
          src={props.img}
          width={37}
          height={37}
          alt={`Icon ${props.tag}`}
        />
        <div
          className={`font-normal text-[13px] leading-[15.73px] -tracking-[1%] mt-[25px] mb-[13px] ${
            props.tag == "Analiz"
              ? "text-iconCardTagPurple"
              : "text-homePageLightGray"
          }`}
        >
          {props.tag}
        </div>
        <div
          className={`${lexand.className} font-normal text-[17px] leading-[30px] -tracking-[2%] mb-[14px] text-homePageDarkGray`}
        >
          {props.title}
        </div>
        <div className=" font-normal text-[13px] -tracking-[1%] text-iconCardTextGray">
          {props.text}
        </div>
      </div>
    </>
  );
};

export default IconCard;
