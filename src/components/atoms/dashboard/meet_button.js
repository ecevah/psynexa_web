"use client";

import { VIDEO_CALL, VIDEO_CALL_WHITE } from "@/constant/constant";
import Image from "next/image";

const MeetButton = (props) => {
  return (
    <>
      <button
        className={`${
          props.active
            ? "bg-blue hover:bg-[#2E2BC1]"
            : "bg-grayLight hover:bg-gray010"
        } flex flex-row justify-center items-center px-[25px] py-[12.5px] rounded-[5px]`}
        onClick={props.function}
      >
        <Image
          src={props.active ? VIDEO_CALL_WHITE : VIDEO_CALL}
          alt="meet"
          width={15}
          height={15}
        />
        <div
          id="sfpro"
          className={`${
            props.active ? "text-white" : "text-gray"
          } ml-[9px] font-medium text-[12px] leading-[14.32px] tracking-[1%]`}
        >
          Görüşmeye Katıl
        </div>
      </button>
    </>
  );
};

export default MeetButton;
