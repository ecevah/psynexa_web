import CustomButton from "@/components/atoms/dashboard/custom_button";
import HumenAndItem from "@/components/monecules/dashboard/humen_and_item";
import MultiContentItem from "@/components/monecules/dashboard/multi_content_item";
import MultiComment from "@/components/monecules/landing/multi_comment_card";
import { URL } from "@/constant/constant";
import { useRouter } from "next/navigation";

const PastItemCard = (props) => {
  const router = useRouter();

  const goToResponse = () => {
    router.push(`/response/${props.reservation}`);
  };

  function formatTimeRange(timeString) {
    const [hour, minute] = timeString.split(".");
    const startHour = parseInt(hour, 10);
    const endHour = startHour + 1;

    // Toplam dakika değeri
    const totalMinutes = startHour * 60 + parseInt(minute, 10);

    // 60'ı geçmiyorsa, normal saat formatını kullan
    if (totalMinutes < 60) {
      return `${startHour < 10 ? "0" : ""}${startHour}:${minute} - ${
        endHour < 10 ? "0" : ""
      }${endHour}:${minute}`;
    }

    // 60'ı geçerse, bir sonraki saatin başlangıcını göster
    const nextHour = Math.floor(totalMinutes / 60) + 1;
    const nextHourMinute = totalMinutes % 60;

    return `${startHour < 10 ? "0" : ""}${startHour}:${minute} - ${
      nextHour < 10 ? "0" : ""
    }${nextHour}:${nextHourMinute < 10 ? "0" : ""}${nextHourMinute}`;
  }
  const formattedDate = new Date(props.day).toLocaleDateString("tr-TR");
  const data = [
    {
      title: "Tarih",
      text: formattedDate,
    },
    {
      title: "Saat",
      text: formatTimeRange(props.time),
    },
  ];

  return (
    <>
      <div className="flex flex-row px-[50px] py-[29.5px] justify-between items-center border-solid border-[1.5px] border-grayLight rounded-[8px] shadow-sm mb-[20px]">
        <HumenAndItem color="gray" type={props.type} />
        <div className="h-[50px] w-[1px] bg-grayLight"></div>
        <MultiContentItem data={data} />
        <div className="h-[50px] w-[1px] bg-grayLight"></div>
        <div className="flex flex-row">
          <CustomButton
            type="detail"
            text="Raporu Görüntüle"
            function={goToResponse}
            style="mr-[15px]"
          />
          <a
            href={`${URL}uploads/pdf/${props.reservation}.pdf`}
            download={`${props.name}_Görüşme_Analizi.pdf`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <CustomButton
              type="download"
              text="Raporu İndir"
              function={props.download}
            />
          </a>
        </div>
      </div>
    </>
  );
};

export default PastItemCard;
