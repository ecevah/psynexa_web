"use client";
import { SEARCH } from "@/constant/constant";
import Image from "next/image";

const SearchButton = (props) => {
  return (
    <>
      <button
        className="flex flex-row justify-center items-center px-[25px] py-[13.5px] bg-grayLight rounded-[5px] hover:bg-gray010"
        onClick={props.function}
      >
        <Image src={SEARCH} alt="search" width={15} height={15} />
        <div
          id="sfpro"
          className="ml-[9px] text-gray text-[12px] leading-[14.32px] tracking-[1%]"
        >
          Filtrele
        </div>
      </button>
    </>
  );
};

export default SearchButton;
