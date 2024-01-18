import { DETAIL, DOWNLOAD, DOWNLOAD_WHITE } from "@/constant/constant";
import Image from "next/image";

const CustomButton = (props) => {
  return (
    <>
      <button
        className={`${
          props.type == "download"
            ? "bg-blueOpacity hover:bg-[#3A36E733]"
            : "bg-blue hover:bg-[#2E2BC1]"
        } ${
          props.style
        } flex flex-row justify-center items-center px-[25px] py-[12.5px] rounded-[5px] `}
        onClick={props.function}
      >
        <Image
          src={
            props.type == "download"
              ? DOWNLOAD
              : props.type == "detail"
              ? DETAIL
              : DOWNLOAD_WHITE
          }
          alt={props.type}
          width={15}
          height={15}
          className={`mr-[9px] ${props.type == "no-icon" ? "hidden" : "block"}`}
        />
        <div
          id="sfpro"
          className={`${
            props.type == "download" ? "text-blue" : "text-white"
          } text-[12px] leading-[14.32px] tracking-[1%]`}
        >
          {props.text}
        </div>
      </button>
    </>
  );
};

export default CustomButton;
