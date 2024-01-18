const ContentItem = (props) => {
  return (
    <>
      <div className={`flex flex-col ${props.style}`}>
        <div
          id="sfpro"
          className={`font-bold text-[12px] leading-[14.32px] tracking-[1%] text-black ${props.titleStyle}`}
        >
          {props.title}
        </div>
        <div
          id="sfpro"
          className={`font-normal text-[13px] leading-[15.51px] tracking-[1%] text-gray mt-[5px] ${props.textStyle}`}
        >
          {props.text}
        </div>
      </div>
    </>
  );
};

export default ContentItem;
