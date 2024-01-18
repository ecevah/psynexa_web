import Image from "next/image";
import { GRAY_LOGO, VERSION } from "@/constant/constant";

const Fixed_Icon = (props) => {
  return (
    <>
      <div className="fixed bottom-[60px] left-[calc(50%-35px)] flex flex-col justify-start items-center">
        <Image src={GRAY_LOGO} width={70} height={31} alt="gray-logo" />
        <div className="text-[10px] leading-[12.1px] font-medium text-[#B9B9B9]">
          {VERSION}
        </div>
      </div>
    </>
  );
};

export default Fixed_Icon;
