"use client";
import CustomButton from "@/components/atoms/dashboard/custom_button";
import Header from "@/components/templates/dashboard/header";
import { A4 } from "@/constant/constant";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Response = ({ params }) => {
  const router = useRouter();
  return (
    <>
      <div className="flex flex-col pb-[160px] bg-dashboardBg bg-cover bg-top">
        <Header />
        <div className="flex flex-col items-center">
          <div className="flex flex-col">
            <div
              id="sfpro"
              className="text-[45px] font-medium leading-[74px] tracking-[1%] text-[#18171A] text-center"
            >
              Yapay Zeka - Görüşme Analizi Sonucu
            </div>
            <div
              id="sfpro"
              className="text-[12px] font-normal leading-[17px] tracking-[1%] text-gray text-center w-[800px] mt-[25px] mb-[35px]"
            >
              Yapay Zeka tarafından gerçekleştirilen görüşme analizi sonuçları,
              katılımcıların duygusal ifadelerini ve konuşma dilini inceleyerek
              önemli içgörüler sunar. Bu veriler, psikolojik sağlık
              değerlendirmelerini daha etkili ve kişiselleştirilmiş hale getirme
              amacıyla kullanılır.
            </div>
            <div
              id="sfpro"
              className="text-[12px] font-normal leading-[17px] tracking-[1%] text-gray text-center"
            >
              Gizem_Akbulut_Görüşme_Analizi.pdf
            </div>
            <CustomButton
              type="document"
              text="Raporu İndir"
              style="w-fit mx-auto mt-[8px] mb-[45px]"
            />
          </div>
          <Image src={A4} alt="a4" width={1082} height={2917} />
        </div>
      </div>
    </>
  );
};

export default Response;
