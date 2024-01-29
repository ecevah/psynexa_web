import ContentItem from "@/components/atoms/dashboard/content_item";
import CustomButton from "@/components/atoms/dashboard/custom_button";
import HumenIcon from "@/components/atoms/dashboard/humen_icon";
import MeetButton from "@/components/atoms/dashboard/meet_button";
import Fixed_Icon from "@/components/atoms/login_register/fixed_icon";
import HumenAndItem from "@/components/monecules/dashboard/humen_and_item";
import MultiContentItem from "@/components/monecules/dashboard/multi_content_item";
import { NEXA_GIF } from "@/constant/constant";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";

const TestItemCard = (props) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLoading = () => {
    // Loading durumunu true olarak ayarla
    setLoading(true);

    // 2 saniye sonra setLoading(false) çağrısını yap
    setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 saniye = 2000 milisaniye
  };

  const goToResponse = () => {
    router.push(`/test-response/${props.id}`);
  };
  const formattedDate = (date) => {
    const inputDate = new Date(date);

    const options = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "numeric",
      minute: "numeric",
      timeZone: "Europe/Istanbul",
    };
    const formattedDate = inputDate.toLocaleString("tr-TR", options);
    return formattedDate;
  };

  return (
    <>
      <div className="flex flex-row px-[50px] py-[29.5px] justify-between items-center border-solid border-[1.5px] border-grayLight rounded-[8px] shadow-sm mb-[20px]">
        <div className="flex flex-row items-center w-[176px]">
          <HumenIcon color="gray" />
          <ContentItem
            title={props.title}
            text={formattedDate(props.type)}
            textStyle="!mt-[0px]"
            style="ml-[14px]"
          />
        </div>
        <div className="h-[50px] w-[1px] bg-grayLight"></div>
        <ContentItem title="Test Adı" text={props.text} style="mx-[25px]" />
        <div className="h-[50px] w-[1px] bg-grayLight"></div>
        <div className="flex flex-row">
          <CustomButton
            type="detail"
            text="Testin Sonucunu Görüntüle"
            function={goToResponse}
            style="mr-[15px]"
          />
          <CustomButton
            type="download"
            text="Test Sonucu İndir"
            function={handleLoading}
          />
        </div>
      </div>
      {/*<div
        className={`${
          loading ? "fixed" : "hidden"
        } flex justify-center items-center w-[100vw] h-[100vh] bg-white top-0 left-0`}
      >
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
      </div>*/}
    </>
  );
};

export default TestItemCard;
