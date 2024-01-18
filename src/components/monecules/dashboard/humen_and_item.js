import ContentItem from "@/components/atoms/dashboard/content_item";
import HumenIcon from "@/components/atoms/dashboard/humen_icon";

const HumenAndItem = (props) => {
  return (
    <>
      <div className="flex flex-row items-center w-[176px]">
        <HumenIcon color={props.color} />
        <ContentItem
          title={
            props.color == "red"
              ? "Yaklaşan Randevu"
              : props.color == "blue"
              ? "Randevu Başladı"
              : "Normal Randevu"
          }
          text={props.type}
          textStyle="!mt-[0px]"
          style="ml-[14px]"
        />
      </div>
    </>
  );
};

export default HumenAndItem;
