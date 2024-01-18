const FAQItem = (props) => {
  return (
    <>
      <div className="flex flex-col justify-start w-[367px] min-w-[367px] py-[7px] mb-[19px]">
        <div
          className={`font-medium text-[15px] leading-[18.75px] -tracking-[3%] text-homePageDarkGray mb-[15px]`}
        >
          {props.question}
        </div>
        <div className=" font-normal text-[12px] leading-[25px] -tracking-[1%] text-iconCardTextGray">
          {props.answer}
        </div>
      </div>
    </>
  );
};

export default FAQItem;
