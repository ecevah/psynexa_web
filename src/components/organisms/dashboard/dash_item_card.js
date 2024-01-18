import MeetButton from "@/components/atoms/dashboard/meet_button";
import HumenAndItem from "@/components/monecules/dashboard/humen_and_item";
import MultiContentItem from "@/components/monecules/dashboard/multi_content_item";
import MultiComment from "@/components/monecules/landing/multi_comment_card";

const DashItemCard = (props) => {
  const temp = props.data;
  return (
    <>
      <div className="flex flex-row px-[50px] py-[29.5px] justify-between items-center border-solid border-[1.5px] border-grayLight rounded-[8px] shadow-sm mb-[20px]">
        <HumenAndItem color={props.color} type={props.type} />
        <div className="h-[50px] w-[1px] bg-grayLight"></div>
        <MultiContentItem data={temp} />
        <div className="h-[50px] w-[1px] bg-grayLight"></div>
        <MeetButton active={props.active} />
      </div>
    </>
  );
};

export default DashItemCard;
