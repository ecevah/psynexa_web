"use client";
import { MINI_LOGO } from "@/constant/constant";
import Image from "next/image";

const MiniLogo = (props) => {
  return (
    <>
      <div className="flex flex-row justify-center items-center">
        <Image src={MINI_LOGO} width={35} height={35} alt="Mini Logo" />
        <div
          id="sfpro"
          className=" font-medium text-[16px] leading-[19.09px] tracking-[3%] ml-[17px] cursor-default"
        >
          {props.text}
        </div>
      </div>
    </>
  );
};

export default MiniLogo;
