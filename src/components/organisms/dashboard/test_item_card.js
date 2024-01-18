import CustomButton from "@/components/atoms/dashboard/custom_button";
import MeetButton from "@/components/atoms/dashboard/meet_button";
import HumenAndItem from "@/components/monecules/dashboard/humen_and_item";
import MultiContentItem from "@/components/monecules/dashboard/multi_content_item";

const TestItemCard = (props) => {
  const temp = props.data;
  return (
    <>
      <div className="flex flex-row px-[50px] py-[29.5px] justify-between items-center border-solid border-[1.5px] border-grayLight rounded-[8px] shadow-sm mb-[20px]">
        <HumenAndItem color="gray" type={props.type} />
        <div className="h-[50px] w-[1px] bg-grayLight"></div>
        <MultiContentItem data={temp} />
        <div className="h-[50px] w-[1px] bg-grayLight"></div>
        <div className="flex flex-row">
          <CustomButton
            type="detail"
            text="Testin Sonucunu Görüntüle"
            function={props.detail}
            style="mr-[15px]"
          />
          <CustomButton
            type="download"
            text="Test Sonucu İndir"
            function={props.download}
          />
        </div>
      </div>
    </>
  );
};

export default TestItemCard;
