import MultiFAQItem from "@/components/monecules/landing/multi_faq_item";
import { FAQ_ARRAY } from "@/constant/constant";

const FAQ = (props) => {
  return (
    <>
      <div className="flex flex-row justify-start items-start">
        {FAQ_ARRAY.map((item, i) => (
          <MultiFAQItem data={item.column} key={`FAQ Column ${i}`} />
        ))}
      </div>
    </>
  );
};

export default FAQ;
