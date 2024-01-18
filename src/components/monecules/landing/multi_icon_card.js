import IconCard from "@/components/atoms/landing/home_page_icon_card";

const MultiIconCard = (props) => {
  return (
    <>
      <div
        className={`w-full grid grid-cols-3 gap-[100px] content-center justify-center ${props.style}`}
      >
        {props.data.map((item, i) => (
          <div
            className={
              props.data.length == i + 1
                ? " max-[1400]:col-span-2 flex justify-center content-center"
                : ""
            }
            key={`Multi Icon Card ${i}`}
          >
            <IconCard
              key={`Icon Card ${i}`}
              img={item.img}
              tag={item.tag}
              text={item.text}
              title={item.title}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default MultiIconCard;
