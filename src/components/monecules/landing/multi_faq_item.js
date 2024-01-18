import FAQItem from "@/components/atoms/landing/faq_item";

const MultiFAQItem = (props) => {
  return (
    <>
      <div className="flex flex-col mx-[14px]">
        {props.data.map((item, i) => (
          <FAQItem
            key={`FAQ ${i}`}
            question={item.question}
            answer={item.answer}
          />
        ))}
      </div>
    </>
  );
};

export default MultiFAQItem;
