"use client";
import Image from "next/image";

//Constant
import { LOGO_PATH } from "@/constant/constant";

//Monecules
import HeaderMultiItemButton from "../../monecules/landing/multi_header_item_button";
import HeaderMultiPurpleButton from "../../monecules/landing/multi_purple_button";

const Header = (props) => {
  return (
    <>
      <div className="layout pt-[58px]">
        <div className="flex flex-row justify-between w-full items-center">
          <Image width={150} height={30} alt="photo" src={LOGO_PATH} />
          <HeaderMultiItemButton
            data={props.itemButtonArray}
            margin="mx-[5px]"
          />
          <HeaderMultiPurpleButton
            data={props.purpleButtonArray}
            margin="mx-[5px]"
          />
        </div>
      </div>
    </>
  );
};

export default Header;
