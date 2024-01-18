import ContentItem from "@/components/atoms/dashboard/content_item";

const MultiContentItem = (props) => {
  return (
    <>
      <div className="flex flex-row">
        {props.data.map((item, i) => (
          <ContentItem
            key={`ContentItem ${i}`}
            title={item.title}
            text={item.text}
            style="mx-[25px]"
          />
        ))}
      </div>
    </>
  );
};

export default MultiContentItem;
