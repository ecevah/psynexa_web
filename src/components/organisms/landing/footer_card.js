import {
  ARRAY_HEADER_ITEM_BUTTON,
  GITHUB,
  INSTAGRAM,
  LOGO_PATH,
} from "@/constant/constant";
import Image from "next/image";
import HeaderMultiItemButton from "@/components/monecules/landing/multi_header_item_button";

const FooterCard = (props) => {
  return (
    <>
      <div className="flex flex-col items-center mt-[150px]">
        <Image
          width={150}
          height={30}
          alt="photo"
          src={LOGO_PATH}
          className="mb-[35px]"
        />
        <HeaderMultiItemButton
          data={ARRAY_HEADER_ITEM_BUTTON}
          margin="mx-[5px]"
        />
        <div className="w-full h-[1px] bg-iconCardPhotoBackground mt-[88px] mb-[40px]"></div>
        <div className="flex flex-row w-full justify-between items-center px-[22px]">
          <div className="font-normal text-[12px] leading-[14.52px] text-homePageGray">
            Copyright © 2023 Psynexa. Tüm hakları saklıdır.
          </div>
          <div className="flex flex-row">
            <Image
              src={INSTAGRAM}
              alt="instagram"
              width={20}
              height={20}
              className="mr-[27px]"
            />
            <Image src={GITHUB} alt="github" width={20} height={20} />
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterCard;
