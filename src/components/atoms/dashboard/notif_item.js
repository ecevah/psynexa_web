import Image from "next/image";
import { HUMEN } from "@/constant/constant";

const NotifItem = (props) => {
  return (
    <>
      <div className="flex flex-row ">
        <div className="flex flex-col mr-[14.82px]">
          <div className="w-[6.43px] h-[6.43px] border-solid border-[0.93px] border-[#08875D] bg-[#EDFDF8] rounded-full"></div>
          <div className="flex justify-center items-center bg-gray010 w-[30px] h-[30px] rounded-full ml-[6px]">
            <Image src={HUMEN} alt="logo" width={14.63} height={14.63} />
          </div>
        </div>
        <div className="flex flex-col">
          <p
            id="sfpro"
            className="text-[#18171A] font-normal leading-[18.57px] text-[13px] "
          >
            <b className="font-bold">{props.bold1}</b>
            {props.text1} <b className="font-bold">{props.bold2}</b>{" "}
            {props.text2}
          </p>
          {props.buttonText != null ? (
            <button
              id="sfpro"
              className="w-fit text-[13px] font-medium leading-[18.57px] text-gray px-[15px] py-[5px] border-solid border-[0.93px] border-[#E5E5E5] rounded-[3.71px] mt-[14.43px] mb-[7px] hover:bg-[#ECECEC]"
            >
              {props.buttonText}
            </button>
          ) : null}
          {props.text != null ? (
            <div className="flex flex-row mt-[25px]">
              <div className="w-[10px] rounded-full h-full bg-[#DDDEE1] mr-[7px]"></div>
              <p
                id="sfpro"
                className="text-[#18171A] font-normal leading-[18.57px] text-[13px] "
              >
                {props.text}
              </p>
            </div>
          ) : null}

          <p
            id="sfpro"
            className="text-[#A5ACB8] font-normal leading-[18.57px] text-[12px] "
          >{`${props.date},${props.time}`}</p>
        </div>
      </div>
    </>
  );
};

export default NotifItem;
