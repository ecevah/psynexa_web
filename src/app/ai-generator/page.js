import Fixed_Icon from "@/components/atoms/login_register/fixed_icon";
import { NEXA_GIF } from "@/constant/constant";
import Image from "next/image";

const AiGenerator = (props) => {
  return (
    <>
      <div className="relative flex justify-center items-center w-full h-[100vh]">
        <div className="flex flex-col items-center">
          <Image src={NEXA_GIF} alt="gif" width={75} height={75} />
          <div
            id="sfpro"
            className="w-[330px] text-[14px] leading-[20px] tracking-[1%] font-normal text-center text-gray mt-[25px]"
          >
            Yapay zeka, görüşme raporunuzu özenle hazırlıyor. Lütfen
            bekleyiniz...
          </div>
        </div>
        <Fixed_Icon />
      </div>
    </>
  );
};

export default AiGenerator;
