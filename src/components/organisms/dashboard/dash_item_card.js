import MeetButton from "@/components/atoms/dashboard/meet_button";
import HumenAndItem from "@/components/monecules/dashboard/humen_and_item";
import MultiContentItem from "@/components/monecules/dashboard/multi_content_item";
import { useRouter } from "next/navigation";

const DashItemCard = (props) => {
  const [hour, minute] = props.time.split(".");
  const currentDate = new Date();
  const itemDate = new Date(props.day + "T" + hour + ":" + minute + ":00");
  const fiveMinutesBefore = new Date(itemDate.getTime() - 5 * 60000);
  const oneHourAfter = new Date(itemDate.getTime() + 10 * 60000);
  const router = useRouter();

  const goToMeet = () => {
    router.push(`/meet/${props.reservation}`);
  };

  let active;
  let color;
  if (currentDate >= fiveMinutesBefore && currentDate <= oneHourAfter) {
    active = true;
    color = "blue";
  } else if (itemDate.toDateString() === currentDate.toDateString()) {
    color = "red";
    active = false;
  } else {
    color = "gray";
    active = false;
  }

  const formattedDate = new Date(props.day).toLocaleDateString("tr-TR");
  const data = [
    {
      title: "Ad Soyad",
      text: `${props.name} ${props.surName}`,
    },
    {
      title: "Tarih",
      text: formattedDate,
    },
    {
      title: "Saat",
      text: props.time,
    },
  ];

  return (
    <>
      <div className="flex flex-row px-[50px] py-[29.5px] justify-between items-center border-solid border-[1.5px] border-grayLight rounded-[8px] shadow-sm mb-[20px]">
        <HumenAndItem color={color} type={props.type} />
        <div className="h-[50px] w-[1px] bg-grayLight"></div>
        <MultiContentItem data={data} />
        <div className="h-[50px] w-[1px] bg-grayLight"></div>
        {active ? (
          <MeetButton active={active} function={goToMeet} />
        ) : (
          <MeetButton active={active} />
        )}
      </div>
    </>
  );
};

export default DashItemCard;
