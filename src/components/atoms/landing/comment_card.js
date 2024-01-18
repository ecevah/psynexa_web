import Image from "next/image";
import { Lexend } from "next/font/google";
const lexand = Lexend({ subsets: ["latin"] });
const CommentCard = (props) => {
  return (
    <>
      <div className="w-[372px] px-[20px] pt-[29px] pb-[22px] rounded-[10px] shadow-lg flex flex-col mb-[30px] border-solid border-[1px] border-lineBackgroundColor">
        <p className="font-normal text-[13px] leading-[25px] -tracking-[1%] text-iconCardTextGray">
          {props.text}
        </p>
        <div className="w-[327px] h-[1.5px] bg-lineBackgroundColor mt-[22px] mb-[27px]"></div>
        <div className="flex flex-row justify-between items-center w-full ">
          <div className="flex flex-col ">
            <div
              className={`${lexand.className} text-[15px] font-medium leading-[18.75px] -tracking-[2%] text-homePageDarkGray`}
            >
              {props.name}
            </div>
            <div className=" font-normal text-[12px] leading-[14.52px] -tracking-[1%] text-homePageLightGray">
              {props.title}
            </div>
          </div>
          <Image
            src={props.img}
            width={56}
            height={56}
            alt="Profile Photo"
            className="rounded-full max-w-[56px] max-h-[56px] min-w-[56px] min-h-[56px]"
          />
        </div>
      </div>
    </>
  );
};
export default CommentCard;
